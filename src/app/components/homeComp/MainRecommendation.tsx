"use client";
import { uploadCloudImage } from "@/app/api/uploader";
import Image from "next/image";
import { useState } from "react";


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
    hashtags: ["#힐링", "#풍경", "#강원도"],
  },
  {
    id: "placeId561W",
    place_name: "속삭이는 자작나무 숲",
    region: "강원도 인제",
    image: [
      "https://res.cloudinary.com/dnmb6kxvh/image/upload/v1721923577/acuk38elplh0jg2cbv8c.png",
      "https://res.cloudinary.com/dnmb6kxvh/image/upload/v1721923637/e9dbat9sydxririky8lv.png",
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
    hashtags: ["#힐링", "#풍경", "#강원도"],
  },
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
    hashtags: ["#힐링", "#풍경", "#강원도"],
  },
];

export default function MainRecommendation() {
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const cloudImage = await uploadCloudImage(file);
      console.log(cloudImage);
    }
  };
  return (
    <div className="py-4">
      {/* <input type="file" onChange={handleImageChange} /> */}
      <h2 className="text-lg font-bold mb-2">믿고 가는 추천 여행지</h2>
      <div className="flex justify-between flex-wrap">
        {recommendedPlaces.map((place) => (
          <div key={place.id} className="w-[49%] border rounded-lg p-4 mb-2">
            <Image
              src={place.image[0]}
              width={200}
              height={200}
              alt={place.place_name}
              className="object-cover rounded-lg mb-4"
            />
            <h3 className="text- font-bold">{place.place_name}</h3>
            <div className="mt-2">
              <p className="text-gray-600">{place.region}</p>
              <p>{place.phone}</p>
              {place.homepage && (
                <a href={place.homepage} className="text-blue-500">
                  홈페이지
                </a>
              )}
              <div>
                {place.hashtags.map((hash, idx) => (
                  <span key={idx} className="mr-2">
                    {hash}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
