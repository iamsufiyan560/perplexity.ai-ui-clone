import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import DisCoverPage from "./components/DisCoverPage";
import Sidebar from "./components/Sidebar";
import NewsDetails from "./components/NewsDetails";

const App = () => {
  return (
    <>
      <nav className="w-full h-4 bg-[#202222] "></nav>

      <div className="min-h-screen w-full flex bg-[#191A1A]">
        <Sidebar />

        <Routes>
          <Route path="/" element={<DisCoverPage />} />
          <Route path="/news-details" element={<NewsDetails />} />
        </Routes>

        <BottomNav />
      </div>
    </>
  );
};

export default App;
