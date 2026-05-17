// type or interface
// props object or {}

import { type PropsWithChildren } from "react";

// can handle children props with types or by import type React from "react";
// type componentProps = {
//   username: string;
//   id: number;
//   children?: React.ReactNode;
// };

// we can use PropsWithChildren to handle children props
// it is generic type that takes an object type as a parameter and returns a new type that includes the children prop
type componentPropsWithChildren = PropsWithChildren<{
  username: string;
  id: number;
}>;

export default function Component({
  username,
  id,
  children,
}: componentPropsWithChildren) {
  return (
    <div>
      <h1>Props</h1>
      <p>Username: {username}</p>
      <p>ID: {id}</p>
      {children}
    </div>
  );
}
