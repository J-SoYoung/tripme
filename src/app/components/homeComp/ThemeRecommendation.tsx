import Image from "next/image";

const themes = [
  {
    title: "나의 편안함 힐링여행",
    src: "/assets/images/theme_relax.svg",
    bg: "#FEEBB9",
  },
  {
    title: "마음 행복한 예술여행",
    src: "/assets/images/theme_art.svg",
    bg: "#FECDC7",
  },
  {
    title: "맛집을 찾아 미식여행",
    src: "/assets/images/theme_food.svg",
    bg: "#E6CCEE",
  },
  {
    title: "찾아가보는 핫플여행",
    src: "/assets/images/theme_map.svg",
    bg: "#C8EDD3",
  },
  {
    title: "일상 새로움 액티비티",
    src: "/assets/images/theme_run.svg",
    bg: "#BDDBFF",
  },
];

export default function ThemeRecommendation() {
  return (
    <div className="py-4">
      <h2 className="text-lg font-bold mb-2">테마로 추천받는 여행지</h2>
      <div className="flex space-x-2 justify-center cursor-pointer">
        {themes.map((theme, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: `${theme.bg}` }}
              className={
                "flex flex-col justify-center items-center w-24 h-36 rounded-lg"
              }
            >
              <div className="flex w-20 h-20 bg-white rounded-lg ">
                <Image
                  src={theme.src}
                  alt={theme.title}
                  width={80}
                  height={80}
                  className="object-cover rounded-lg mx-auto p-1 "
                />
              </div>
              <span className="text-center mt-2 text-sm">
                {theme.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
