import Thumbnail from "@/components/Thumbnail";

type Props = {
  imgUrl: string;
  title: string;
  year: string;
};

const Card = ({ imgUrl, title, year }: Props) => (
  <div className="h-80">
    <div className="relative h-full">
      <Thumbnail imgUrl={imgUrl} />
      <div className="absolute bottom-0 w-full px-4 py-2 rounded-b-xl bg-zinc-800">
        <h2 className="text-sm font-bold text-gray-300 truncate">{title}</h2>
        {year ? (
          <p className="text-xs text-center text-gray-400 truncate">{year}</p>
        ) : null}
      </div>
    </div>
  </div>
);

export default Card;
