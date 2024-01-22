import Image from "next/image";
import { Button } from "@/common";

interface Props {
  isHasVideo: boolean;
}

export default function Hero({ isHasVideo }: Props) {
  return (
    <div className="h-[90vh] relative">
      <div className="">
        {isHasVideo ? (
          <video
            autoPlay={true}
            muted={true}
            className="h-[90vh] w-full object-cover brightness-50 absolute"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          ></video>
        ) : (
          <Image
            src="/images/hero.webp"
            alt="Hero"
            fill
            className="object-cover brightness-50"
          />
        )}
      </div>
      <div className="absolute flex flex-col w-full md:w-3/5 xl:w-2/4 justify-center items-start px-5 md:px-20 h-full">
        <Image
          src="/images/title.webp"
          alt="title"
          width={600}
          height={240}
          className="py-5"
        />
        <p>
          The extraordinary journey of conquering, adapting and surviving in the
          Earth over billions of years comes to life in this documentary series
          about nature.
        </p>
        <div className="flex justify-between w-full md:w-3/4 gap-5 mt-3">
          <Button text="Play" lefIcon="/icons/play.svg" textVariant="md" />
          <Button
            text="Info"
            lefIcon="/icons/info.svg"
            variant="transparent"
            textVariant="md"
          />
        </div>
      </div>
      <div className="absolute right-0 border-l-2  bottom-[10%] md:bottom-[20%] bg-black/70 py-2 px-10">
        16+
      </div>
    </div>
  );
}
