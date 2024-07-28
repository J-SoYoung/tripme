"use client";

import { useEffect, useState } from "react";
import { main_region, main_title } from "../../constants/keywords"
import { imagePaths } from "@/app/constants/images";
import Image from "next/image";

export default function MainTitle() {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setRegion(main_region[Math.floor(Math.random() * main_region.length)]);
    setTitle(main_title[Math.floor(Math.random() * main_title.length)]);
    setImage(imagePaths[Math.floor(Math.random() * imagePaths.length)]);
  }, []);

  return (
    <div className="h-[290px] text-center py-8 px-4">
      <h2 className="text-xl text-left">{title}</h2>
      <h3 className="text-3xl font-bold text-left mt-2">{region}</h3>
      {image && (
        <Image
          src={image}
          alt="main image"
          width={320}
          height={300}
          className="absolute right-4 bottom-5"
        />
      )}
    </div>
  );
}
