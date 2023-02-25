const wait = (time: number) => new Promise(resolve => setTimeout(resolve, time));

export type BlogPost = {
  id?: number;
  title: string;
  body: string;
};

const posts: BlogPost[] = [{ id: 1, title: "Welcome to my blog", body: "Hello dear readers. Please feel free to look around." }];

export const api = {
  blog: {
    async posts() {
      await wait(300);
      return posts;
    },
    async get(id: number) {
      await wait(300);
      const result = posts.find(e => e.id == id);
      if (result) {
        return result;
      } else {
        throw id + " does not exist";
      }
    },
    async create(post: BlogPost) {
      await wait(300);
      const id = posts.length + 1;
      posts.push({ ...post, id });
      return id;
    },
    async update(post: BlogPost) {
      await wait(300);
      const index = posts.map(e => e.id).indexOf(post.id);
      posts[index] = post;
    }
  }
};
