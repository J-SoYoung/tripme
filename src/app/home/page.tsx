import KeywordCarousel from "@components/homeComp/KeywordCarousel";
import MainTitle from "@components/homeComp/MainTitle";
import ThemeRecommendation from "@components/homeComp/ThemeRecommendation";
import MainRecommendation from "@components/homeComp/MainRecommendation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#FEEBB9] h-[410px]">
        <div className="p-4 relative">
          <div className="flex justify-between py-8">
            <h1 className="text-4xl font-bold">TripME</h1>
            <Image
              src={"/assets/images/user.jpg"}
              width={50}
              height={50}
              alt="user"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <KeywordCarousel />
          <MainTitle />
        </div>
      </div>
      <div className="p-4 mt-16">
        <ThemeRecommendation />
        <MainRecommendation />
      </div>
    </div>
  );
}
