import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import BlogSection from "./components/BlogSection";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Navbar Component */}
      <Navbar />

      {/* 2. Hero Component */}
      <Hero />
      {/* 3. About Us Component */}
      <About />

      <Categories />

      <BlogSection />

      <ContactFooter />
      {/* بخش‌های بعدی مثل بخش محصولات، درباره ما و ... در گام بعدی اضافه می‌شوند */}
    </main>
  );
}
