import Intro from "../Intro";
import Me from "../Me";
import TopLinks from "../TopLinks";

export default function Main() {
  return (
    <div className='w-full md:w-11/12 md:mx-auto h-screen relative box-border'>
      <TopLinks />
      <Me />
      <Intro />
    </div>
  );
}
