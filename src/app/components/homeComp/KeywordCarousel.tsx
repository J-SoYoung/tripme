import { theme_keyword } from "../../../../_dummy/database";

export default function KeywordCarousel() {
  return (
    <div className="overflow-x-auto hide-scrollbar flex space-x-2 py-4">
      {theme_keyword.map((keyword, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-full px-4 py-2 whitespace-nowrap cursor-pointer"
        >
          {keyword}
        </div>
      ))}
    </div>
  );
}
