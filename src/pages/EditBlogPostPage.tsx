import React from "react";

import { BlogPost } from "../api";

export const EditBlogPostPage: React.FC<{ post: BlogPost }> = ({ post }) => (
  <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </>
);
