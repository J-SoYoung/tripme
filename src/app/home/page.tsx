import KeywordCarousel from "../components/homeComp/KeywordCarousel";
import MainTitle from "../components/homeComp/MainTitle";
import ThemeRecommendation from "../components/homeComp/ThemeRecommendation";
import MainRecommendation from "../components/homeComp/MainRecommendation";

export default function Home() {
  return (
    <div className="p-4 h-[100%]">
      <div className="flex justify-between py-8">
        <h1 className="text-4xl font-bold">TripME</h1>
        <div className="border w-12 h-12 rounded-full"></div>
      </div>
      <KeywordCarousel />
      <MainTitle />
      <ThemeRecommendation />
      <MainRecommendation />
    </div>
  );
}
