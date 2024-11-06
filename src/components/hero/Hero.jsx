import HeroDecoration from "./HeroDecoration";
import HeroHeadline from "./HeroHeadline";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <HeroHeadline />

          <HeroDecoration />
        </div>
      </div>
    </div>
  );
}
