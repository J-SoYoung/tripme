"use client";

import { useEffect, useState } from "react";
import { main_region, main_title } from "../../../../_dummy/database";

export default function MainTitle() {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    setRegion(main_region[Math.floor(Math.random() * main_region.length)]);
    setTitle(main_title[Math.floor(Math.random() * main_title.length)]);
  }, []);

  return (
    <div className="h-[300px] text-center py-4 border">
      <h2 className="text-2xl font-bold">{title}</h2>
      <h3 className="text-xl mt-2">{region}</h3>
    </div>
  );
}
             