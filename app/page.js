import Image from "next/image";
import MainSection from "@/sections/indexSection/mainSection";
import Section1 from "@/sections/indexSection/section1";
import Section2 from "@/sections/indexSection/section2";
import Section3 from "@/sections/indexSection/section3";
import Section4 from "@/sections/indexSection/section4";

export default function Home() {
  return (
    <main>
      <MainSection />
      <Section3></Section3>
      {/* <Section1></Section1>
      <Section2></Section2>

      <Section4></Section4> */}
    </main>
  );
}
