import Intro from "./Intro";
import TopLinks from "./TopLinks";

export default function Main() {
  return (
    <div className="w-full h-full relative box-border">
      <TopLinks />
      <Intro />
    </div>
  );
}
