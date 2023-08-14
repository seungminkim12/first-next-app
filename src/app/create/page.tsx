"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Create() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log("e.target", typeof e.target);
        const target = e.target as typeof e.target & {
          title: { value: string };
          body: { value: string };
        };
        let title = target.title.value;
        let body = target.body.value;

        console.log("title", typeof title, body);
        const options = {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(`http://localhost:9999/topics`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log("result", result);
            const lastId = result.id;
            router.push(`/read/${lastId}`);
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title"></input>
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
