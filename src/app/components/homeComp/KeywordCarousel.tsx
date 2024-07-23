import Image from "next/image";
import { theme_keyword } from "../../../../_dummy/database";

export default function KeywordCarousel() {
  return (
    <div className="overflow-x-auto flex space-x-4 py-4">
      {theme_keyword.map((keyword, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-full px-4 py-2 whitespace-nowrap"
        >
          {keyword}
        </div>
      ))}
    </div>
  );
}
