import Image from "next/image";

const themes = [
  { title: "나를 위로하는 힐링여행", src: "/assets/images/theme1.png" },
  { title: "마음이 행복한 예술여행", src: "/assets/images/theme2.png" },
  { title: "맛집을 찾아요 미식 여행", src: "/assets/images/theme3.png" },
  { title: "찾아가는 명소", src: "/assets/images/theme4.png" },
];

export default function ThemeRecommendation() {
  return (
    <div className="py-4">
      <h2 className="text-lg font-bold mb-2">테마로 추천받는 여행지</h2>
      <div className="flex space-x-2 justify-center cursor-pointer">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 h-28 bg-gray-200 border"
          >
            <Image
              src={theme.src}
              alt={theme.title}
              width={70}
              height={70}
              className="object-cover rounded-lg mx-auto mt-2"
            />
            <p className="text-center mt-2">{theme.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
