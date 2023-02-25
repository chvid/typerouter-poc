import { api } from "./api";
import { CreateBlogPostPage } from "./pages/CreateBlogPostPage";
import { EditBlogPostPage } from "./pages/EditBlogPostPage";
import { GetBlogPostPage } from "./pages/GetBlogPostPage";
import { ListBlogPostsPage } from "./pages/ListBlogPostsPage";
import { createLinks } from "./typerouter/createLinks";

export const routes = {
  index: async () => {
    const posts = await api.blog.posts();
    return <ListBlogPostsPage posts={posts} />;
  },
  blog: {
    create: async () => <CreateBlogPostPage />,
    get: async (id: number) => {
      const post = await api.blog.get(id);
      return <GetBlogPostPage post={post} />;
    },
    edit: async (id: number) => {
      const post = await api.blog.get(id);
      return <EditBlogPostPage post={post} />;
    }
  }
};

export const links = createLinks(routes);
