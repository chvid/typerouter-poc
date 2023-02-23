import { api } from "./api";
import { CreateBlogEntry } from "./pages/CreateBlogEntry";
import { EditBlogEntry } from "./pages/EditBlogEntry";
import { GetBlogEntry } from "./pages/GetBlogEntry";
import { ListBlogEntries } from "./pages/ListBlogEntries";
import { setupRouting } from "./typerouter/setupRouting";

export const [routes, links] = setupRouting({
  index: async () => {
    const entries = await api.blog.entries();
    return <ListBlogEntries entries={entries} />;
  },
  blog: {
    create: async () => <CreateBlogEntry />,
    get: async (id: number) => {
      const entry = await api.blog.get(id);
      return <GetBlogEntry entry={entry} />;
    },
    edit: async (id: number) => {
      const entry = await api.blog.get(id);
      return <EditBlogEntry entry={entry} />;
    }
  }
});
