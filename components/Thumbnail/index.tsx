import Image from "next/image";

type Props = {
  imgUrl: string;
};

const Thumbnail = ({ imgUrl }: Props) => {
  return (
    <Image
      src={imgUrl}
      alt="movie poster thumbnail"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  );
};

export default Thumbnail;
