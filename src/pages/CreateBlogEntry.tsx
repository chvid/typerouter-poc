import React from "react";

import { links } from "../routing";
import { api } from "../api";

export const CreateBlogEntry = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  return (
    <>
      <p>Title</p>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <p>Body</p>
      <textarea onChange={e => setBody(e.target.value)} value={body} cols={60} rows={20} />
      <p>
        <button
          onClick={async e => {
            const id = await api.blog.create({ title, body });
            window.location.hash = links.blog.get(id);
          }}
        >
          Save
        </button>
        &nbsp;-&nbsp;
        <a href={links.index()}>Back</a>
      </p>
    </>
  );
};
