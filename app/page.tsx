import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProject from "@/components/RecentProject";
import { navItems } from "@/data";
import Experience from "@/components/ui/Experience";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#0f172a] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 my-0">
      <div className="w-full px-2 sm:px-6 md:px-8">
        <FloatingNav  navItems={navItems}    />

        <Hero  />
 
              <Grid />

        <RecentProject />
                <Experience />
        <Footer />
      </div>
    </main>
  );
}
