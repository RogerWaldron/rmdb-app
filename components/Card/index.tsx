import Thumbnail from "@/components/Thumbnail";

type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
};

const Card = ({ imgUrl, title, subtitle }: Props) => (
  <div className="h-80">
    <div className="relative h-full">
      <Thumbnail imgUrl={imgUrl} />
      <div className="absolute bottom-0 w-full px-4 py-2 rounded-b-xl bg-zinc-800">
        <h2 className="text-sm font-bold text-gray-300 truncate">{title}</h2>
        {subtitle ? (
          <p className="text-xs text-center text-gray-400 truncate">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  </div>
);

export default Card;
