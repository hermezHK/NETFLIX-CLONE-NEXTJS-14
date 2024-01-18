import Image from "next/image";
import { Avatar, Button } from "@/common";

export default function BrowsePage() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">
          who is watching now?
        </h1>
        <div className="flex gap-10 flex-wrap justify-center">
          <Avatar src="/images/item.png" alt="Hermez" name="Hermez" isHover />
        </div>
        <div className="mt-10">
          <Button
            text="Manage Profiles"
            textVariant="lg"
            variant="transparent"
          />
        </div>
      </div>
    </>
  );
}
