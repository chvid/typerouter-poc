import { api } from "./api";
import { CreateBlogEntryPage } from "./pages/CreateBlogEntryPage";
import { EditBlogEntryPage } from "./pages/EditBlogEntryPage";
import { GetBlogEntryPage } from "./pages/GetBlogEntryPage";
import { ListBlogEntriesPage } from "./pages/ListBlogEntriesPage";
import { createLinks } from "./typerouter/createLinks";

export const routes = {
  index: async () => {
    const entries = await api.blog.entries();
    return <ListBlogEntriesPage entries={entries} />;
  },
  blog: {
    create: async () => <CreateBlogEntryPage />,
    get: async (id: number) => {
      const entry = await api.blog.get(id);
      return <GetBlogEntryPage entry={entry} />;
    },
    edit: async (id: number) => {
      const entry = await api.blog.get(id);
      return <EditBlogEntryPage entry={entry} />;
    }
  }
};

export const links = createLinks(routes);
