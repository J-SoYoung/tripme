import Image from "next/image";
import Link from "next/link";
import Welcome from "@assets/images/welcome.png";

export default function App() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFC300]">
        <Image src={Welcome} alt="Welcome" width={500} height={600} />
        <Link
          href={"/home"}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Home으로 이동
        </Link>
      </div>
    </main>
  );
}
