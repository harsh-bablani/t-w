import Hero from "@/components/sections/home/Hero";
import Intro from "@/components/sections/home/Intro";
import FeaturedDestinations from "@/components/sections/home/FeaturedDestinations";
import Experiences from "@/components/sections/home/Experiences";
import PackagesPreview from "@/components/sections/home/PackagesPreview";
import DomesticList from "@/components/sections/home/DomesticList";
import FlightsHotels from "@/components/sections/home/FlightsHotels";
import Visa from "@/components/sections/home/Visa";
import Cruise from "@/components/sections/home/Cruise";
import HoneymoonGroup from "@/components/sections/home/HoneymoonGroup";
import WhyChoose from "@/components/sections/home/WhyChoose";
import Inspiration from "@/components/sections/home/Inspiration";
import FaqPreview from "@/components/sections/home/FaqPreview";
import CtaBand from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedDestinations />
      <Experiences />
      <PackagesPreview />
      <DomesticList />
      <FlightsHotels />
      <Visa />
      <Cruise />
      <HoneymoonGroup />
      <WhyChoose />
      <Inspiration />
      <FaqPreview />
      <CtaBand />
    </>
  );
}
