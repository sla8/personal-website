import Hello from './landing/Hello';
import LoremIpsum from './landing/LoremIpsum';
import Education from './landing/Education';

export interface LandingSectionInput {
  darkBg: boolean;
}

export default function Landing() {
  var darkBg = false;

  function computeBackground() {
    darkBg = darkBg ? false : true;
    return darkBg;
  }

  return (
    <div>
      <Hello darkBg={computeBackground()} />
      <Education darkBg={computeBackground()} />
      <LoremIpsum darkBg={computeBackground()} />
    </div>
  );
}
