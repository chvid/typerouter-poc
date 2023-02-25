import React from "react";

import { links } from "../routing";
import { BlogEntry } from "../api";

export const ListBlogEntriesPage: React.FC<{ entries: BlogEntry[] }> = ({ entries }) => (
  <>
    <ul>
      {entries.map((e, i) => (
        <li key={i}>
          <a href={links.blog.get(e.id!)}>{e.title}</a>
        </li>
      ))}
    </ul>
    <p>
      <a href={links.blog.create()}>Create New Blog Entry</a>
    </p>
  </>
);
