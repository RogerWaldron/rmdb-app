import React from "react";
import { IconSearch } from "@tabler/icons";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const TIME = 250;

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = React.useState("");
  const timer = React.useRef<NodeJS.Timeout>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setQuery(value);
    }, TIME);
  };

  return (
    <>
      <input
        className="h-10 pl-4 pr-12 placeholder-gray-500 rounded-full text-zinc-400 text-md focus:outline-none focus:border focus:border-solid bg-zinc-700 md:w-96"
        type="text"
        placeholder="Search movie"
        value={text}
        onChange={handleInput}
      />
      <div className="absolute text-zinc-500 right-4 top-7">
        <IconSearch />
      </div>
    </>
  );
};

export default SearchInput;
