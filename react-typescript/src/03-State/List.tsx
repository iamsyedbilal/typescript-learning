import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: "https://reactjs.org",
    text: "react docs",
  },
  {
    id: 2,
    url: "https://reactrouter.com",
    text: "react router",
  },
  {
    id: 3,
    url: "https://reacttraining.com",
    text: "react training",
  },
];

export default function List() {
  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer">
          {link.text}
        </a>
      ))}
      <button
        onClick={() =>
          setLinks((prevLinks) => prevLinks.filter((_, i) => i !== 0))
        }>
        Click me
      </button>
    </div>
  );
}
