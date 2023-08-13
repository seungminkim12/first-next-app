import React from "react";

type OwnProps = {
  children: React.ReactNode;
};

export default function Layout(props: OwnProps) {
  return (
    <form>
      <h2>Create</h2>
      {props.children}
    </form>
  );
}
