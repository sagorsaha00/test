import MarkoodHeader from "./components/markhoodHeader";
import MarkoodHero from "./components/markoodHero";
import MarkoodHomeSections from "./components/markoodHomeSection";
import MarkoodFooter from "./components/markoodFooter";

export default function Home() {
  return (
    <>
      <MarkoodHeader />
      <MarkoodHero />
      <MarkoodHomeSections />
      <MarkoodFooter />
    </>
  );
}
