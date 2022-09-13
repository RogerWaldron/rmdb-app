import Image from "next/image";

type Props = {
  imgUrl: string;
};

const ThumbNail = ({ imgUrl }: Props) => {
  return (
    <div className="relative h-60">
      <Image
        src={imgUrl}
        alt="movie poster thumbnail"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
};

export default ThumbNail;
