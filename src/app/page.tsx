import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Spotlight from "./components/spotlight/Spotlight";

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <Spotlight/>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
