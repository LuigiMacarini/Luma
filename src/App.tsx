import { Routes, Route } from "react-router-dom";
import { AnnouncementBar } from "./components/layout/AnnouncementBar";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { LearnPage } from "./pages/LearnPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AnnouncementBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aprender/:slug" element={<LearnPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
