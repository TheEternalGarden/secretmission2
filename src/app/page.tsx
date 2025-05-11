import Image from "next/image";
import HamburgerMenu from '@/components/HamburgerMenu';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <HamburgerMenu />
      <h1 className="text-4xl font-bold text-black">YEEZY COMING SOON</h1>
    </main>
  );
}
