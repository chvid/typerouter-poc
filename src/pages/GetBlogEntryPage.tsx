import React from "react";

import { links } from "../routing";
import { BlogEntry } from "../api";

export const GetBlogEntryPage: React.FC<{ entry: BlogEntry }> = ({ entry }) => (
  <>
    <h1>{entry.title}</h1>
    <p>{entry.body}</p>
    <p>
      <a href={links.index()}>Back</a>.
    </p>
  </>
);
