import React from "react";

import { links } from "../routing";
import { api } from "../api";

export const CreateBlogPostPage: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const save = async () => {
    const id = await api.blog.create({ title, body });
    window.location.hash = links.blog.get(id);
  };
  return (
    <>
      <p>Title</p>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <p>Body</p>
      <textarea onChange={e => setBody(e.target.value)} value={body} cols={60} rows={20} />
      <p>
        <button onClick={save}>Save</button>
        &nbsp;-&nbsp;
        <a href={links.index()}>Back</a>
      </p>
    </>
  );
};
