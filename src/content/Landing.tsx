import Hello from './landing/Hello';
import LoremIpsum from './landing/LoremIpsum';

export interface LandingSectionInput {
  darkBackground: boolean;
}

export default function Landing() {
  var darkBackground = false;

  function computeBackground() {
    darkBackground = darkBackground ? false : true;
    return darkBackground;
  }

  return (
    <div>
      <Hello darkBackground={computeBackground()} />
      <LoremIpsum darkBackground={computeBackground()} />
    </div>
  );
}
