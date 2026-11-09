import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JoinBetaModal from "./components/JoinBetaModal";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--text-main)]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <JoinBetaModal />
    </div>
  );
}