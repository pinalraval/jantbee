import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <Categories />
        <Testimonial variant="app-download" />
      </main>
      <Footer />
    </div>
  );
}
