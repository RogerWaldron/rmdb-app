import Image from "next/image";

type Props = {
  imgUrl: string;
};

<<<<<<< HEAD
const ThumbNail = ({ imgUrl }: Props) => {
=======
const Thumbnail = ({ imgUrl }: Props) => {
>>>>>>> 901fa99 (feat: :sparkles: Add Thumbnail component for movie posters)
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

<<<<<<< HEAD
export default ThumbNail;
=======
export default Thumbnail;
>>>>>>> 901fa99 (feat: :sparkles: Add Thumbnail component for movie posters)
