# TypeRouter - Proof of Concept

A TypeScript-based router for React. The idea is to have a page hierarchy of an application defined as a map of route functions,
where a route function is a function that takes some input parameters and returns a promise of a React node.

Using TypeScript's type inference of the given route map together with type templating, the function setupRouting returns a paralllel map of link functions that have same the input parameters as the route functions but returns a string containing a link to the particular route.

For example:

```typescript
const [routes, links] = setupRouting({
  index: async () => () => {
    const entries = await api.blog.entries();
    return await <ListBlogEntries entries={entries}/>
  },
  blog: {
    get: async (id: number) => {
      const entry = await api.blog.entry(id);
      return <GetBlogEntry entry={entry}/>
    },
    edit: async (id: number) => {
      const entry = await api.blog.entry(id);
      return <EditBlogEntry entry={entry}/>
    }
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<TypeRouter routes={routes} />);

const exampleLink = links.blog.get(42); // #/blog/get/42
```

The router is responsible for:

1. Listening to browser URL changes
2. Parsing parameters from the URL
3. Triggering relevant route function
4. Show a loading indicator while waiting for the route function to complete
5. Rendering resulting React page
6. Show an error page if an error occurs in the route function
7. Show a not found page if no route function matches the URL

The router comes with default error page, loading indicator and not found page which can be overridden by setting parameters (...).

This project is a proof of concept that both contains what might possibly be a future library and an example using it.

To run the example run npm install, npm run dev and point your browser to http://localhost:21000/
