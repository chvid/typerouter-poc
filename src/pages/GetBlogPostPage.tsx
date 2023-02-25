import React from "react";

import { links } from "../routing";
import { BlogPost } from "../api";

export const GetBlogPostPage: React.FC<{ post: BlogPost }> = ({ post }) => (
  <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <p>
      <a href={links.index()}>Back</a>.
    </p>
  </>
);
