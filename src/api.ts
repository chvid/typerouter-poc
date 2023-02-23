const wait = (time: number) => new Promise(resolve => setTimeout(resolve, time));

export type BlogEntry = {
  id?: number;
  title: string;
  body: string;
};

const entries: BlogEntry[] = [{ id: 1, title: "Welcome to my blog", body: "Hello dear readers. Please feel free to look around." }];

export const api = {
  blog: {
    async entries() {
      await wait(300);
      return entries;
    },
    async get(id: number) {
      await wait(300);
      const result = entries.find(e => e.id == id);
      if (result) {
        return result;
      } else {
        throw id + " does not exist";
      }
    },
    async create(entry: BlogEntry) {
      await wait(300);
      const id = entries.length + 1;
      entries.push({ ...entry, id });
      return id;
    },
    async update(entry: BlogEntry) {
      await wait(300);
      const index = entries.map(e => e.id).indexOf(entry.id);
      entries[index] = entry;
    }
  }
};
