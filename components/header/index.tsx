import Link from "next/link";
import Image from "next/image";

import SearchInput from "@/components/SearchInput";

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => (
  <div className="sticky flex w-full h-20 z-999 bg-zinc-900">
    <div className="flex justify-between w-full h-full px-4 max-w-7xl ">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image
            height="64px"
            width="64px"
            src="/rmdb-64.png"
            alt="rmdb logo"
          />
        </div>
      </Link>
      {setQuery ? (
        <div className="relative flex items-center">
          <SearchInput setQuery={setQuery} />
        </div>
      ) : null}
    </div>
  </div>
);

export default Header;
