import Link from "next/link";
import RiveDashboard from "@/components/RiveDashboard";

export default function Arc01Page() {
  return (
    <main className="w-screen h-screen bg-black text-white">
      <header className="absolute top-4 left-4 z-50">
        <Link href="/" className="bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-md">← Home</Link>
      </header>

      <div className="w-full h-full">
        <RiveDashboard className="w-full h-full" />
      </div>
    </main>
  );
}
