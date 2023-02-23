import React from "react";

import { BlogEntry } from "../api";

export const EditBlogEntry: React.FC<{ entry: BlogEntry }> = ({ entry }) => (
  <>
    <h1>{entry.title}</h1>
    <p>{entry.body}</p>
  </>
);
