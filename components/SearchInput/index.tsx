import React from "react";
import { IconSearch } from "@tabler/icons";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = React.useState("");

  return (
    <>
      <input
        className="h-10 text-white rounded-full text-md focus:outline-none focus:border focus:border-solid bg-zinc-700 pr-14 md:w-96"
        type="text"
        placeholder="Search movie"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="absolute right-4 top-8">
        <IconSearch />
      </div>
    </>
  );
};
