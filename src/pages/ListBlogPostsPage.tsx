import React from "react";

import { links } from "../routing";
import { BlogPost } from "../api";

export const ListBlogPostsPage: React.FC<{ posts: BlogPost[] }> = ({ posts }) => (
  <>
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <a href={links.blog.get(post.id!)}>{post.title}</a>
        </li>
      ))}
    </ul>
    <p>
      <a href={links.blog.create()}>Create New Blog Post</a>
    </p>
  </>
);
