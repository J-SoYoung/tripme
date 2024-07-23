import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Image src="/welcome.png" alt="Welcome" width={300} height={300} />
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
