import Hello from './landing/Hello';
import Education from './landing/Education';
import Work from './landing/Work';

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
      <Work darkBg={computeBackground()} />
    </div>
  );
}
