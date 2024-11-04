import Navbar from "./Navbar";
import NoticeBar from "./NoticeBar";

export default function Header() {
  return (
    <header className="relative bg-white">
      <NoticeBar />

      <Navbar />
    </header>
  );
}
