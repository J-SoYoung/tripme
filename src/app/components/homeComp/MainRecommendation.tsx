"use client";
import { uploadCloudImage } from "@/app/api/uploader";
import Image from "next/image";
import { useState } from "react";

const ImageUpload = () => {};

const recommendedPlaces = [
  {
    id: "placeId487f",
    place_name: "대관령 양떼 목장",
    region: "강원도 평창",
    image: [
      "https://res.cloudinary.com/dnmb6kxvh/image/upload/v1721749572/kzbqiagdeol8ulftcd7d.png",
      "https://res.cloudinary.com/dnmb6kxvh/image/upload/v1721749639/oiddqnwpchz8ebupzasn.png",
    ],
    description:
      "여기 우리나라 맞아? 대관령 양떼목장에 들어서면, 순간 이동을 해 스위스으 ㅣ목장 마을에 온 기분이 든다. 목가적인 서정과 이국적인 감성을 더불어 느낄 수 있다.",
    address: "강원도 평창군 대관령면 대관령마루길 483-32",
    map: null,
    blog_search_url: null,
    reviews: [],
    theme: "scenic",
    options: ["7,000원 ~ 9,000원", "전용 주차장"],
    phone: "033-335-1966",
    homepage: "https://yangtte.co.kr/",
  },
  {
    id: "placeId561W",
    place_name: "속삭이는 자작나무 숲",
    region: "강원도 인제",
    image: [
      "https://i.postimg.cc/8CnTnHWZ/image.png",
      "https://i.postimg.cc/cC0k7qH2/image.png",
    ],
    description:
      "강원도 인제군 원대리 숲속에서 매양 당신을 기다리는 나무가 있다. 피부는 백옥 같고 키는 훤칠하다. 이 멋진 자작나무의 꽃말은 '당신을 기다립니다'이다.",
    address: "강원도 인제군 인제읍 자작나무싶길 760",
    map: null,
    blog_search_url: null,
    reviews: [],
    theme: "healing",
    options: ["입장료 없음", "전용 주차장"],
    phone: "033-463-0044",
    homepage: "",
  },
];

export default function MainRecommendation() {
  const [uploadImages, setUploadImages] = useState<string[]>([]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const cloudImage = await uploadCloudImage(file);
      setUploadImages((prevImages) => prevImages.concat(cloudImage));
    }
  };
  console.log(uploadImages);

  return (
    <div className="py-4">
      <h2 className="text-lg font-bold mb-2">믿고 가는 추천 여행지</h2>
      <input type="file" onChange={handleImageChange} />
      <div className="space-y-4">
        {recommendedPlaces.map((place) => (
          <div key={place.id} className="border rounded-lg p-4">
            <h3 className="text-xl font-bold">{place.place_name}</h3>
            <p className="text-gray-600">{place.region}</p>
            <div className="flex space-x-2 overflow-x-auto mt-2">
              {place.image.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  width={120}
                  height={120}
                  alt={place.place_name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              ))}
            </div>
            <p className="mt-2">{place.description}</p>
            <p className="mt-2 text-gray-500">{place.address}</p>
            <p className="mt-2">{place.phone}</p>
            <a href={place.homepage} className="text-blue-500">
              홈페이지
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
