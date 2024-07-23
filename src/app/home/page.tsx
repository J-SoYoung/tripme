
import KeywordCarousel from "../components/homeComp/KeywordCarousel";
import MainTitle from "../components/homeComp/MainTitle";
import ThemeRecommendation from "../components/homeComp/ThemeRecommendation";
import MainRecommendation from "../components/homeComp/MainRecommendation";

export default function Home() {
  return (
    <div>
      <h1 className="p-4">TripME</h1>
      {/* 스크롤없애기 */}
      <KeywordCarousel />
      <MainTitle />
      <ThemeRecommendation />
      <MainRecommendation />
    </div>
  );
}
