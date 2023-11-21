import Image from "next/image";

interface Props {
  isHasVideo: boolean;
}

export default function Hero({ isHasVideo }: Props) {
  return (
    <div className="h-[90vh] relative">
      {isHasVideo ? (
        <video
          autoPlay={true}
          muted={true}
          className="h-[90vh] w-full object-cover"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        ></video>
      ) : (
        <Image
          src="/images/hero.webp"
          alt="Hero"
          fill
          className="object-cover"
        />
      )}
      </div>
      <div>
              <p>
                  LOREM IPSUM
              </p>
      </div>
      
  );
}
43