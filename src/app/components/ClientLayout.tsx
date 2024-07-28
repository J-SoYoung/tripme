"use client";

import { usePathname } from "next/navigation";
import BottomNavBar from "@components/common/BottomNavBar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="app">
      {children}
      {pathname !== "/" && <BottomNavBar />}
    </div>
  );
}
