import Image from "next/image";

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};

const Hero = ({ imgUrl, title, text }: Props) => (
  <div className="relative w-full h-128">
    <div className="relative z-10 flex flex-col-reverse h-full pb-12 m-auto text-center max-w-7xl md:text-left">
      <div className="max-w-2xl px-4 text-white">
        <h2 className="pb-8 text-2xl font-bold md:text-5xl">{title}</h2>
        <p className="text-lg md:text-xl">{text}</p>
      </div>
    </div>
    <Image
      priority
      objectFit="cover"
      objectPosition="center"
      alt="hero image"
      layout="fill"
      src={imgUrl}
      style={{ filter: "brightness(0.5)" }}
    />
  </div>
);

export default Hero;
