import {
  Section,
  createSplitSectionContent,
  createTextSectionContent,
} from 'components/Section';
import { id, title, subtitle, text } from 'res/landing/hello';
import womanReading from 'images/woman_web.svg';
import { LandingSectionInput } from 'content/Landing';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Hello(props: LandingSectionInput) {
  return (
    <Section
      id={id}
      darkBg={props.darkBg}
      content={createHelloContent(props.darkBg)}
    />
  );
}

function createHelloContent(darkBg: boolean) {
  let textContent = (
    <div className="w-full pt-12 sm:pt-0 sm:ml-10 md:pt-0 md:ml-20">
      {createTextSectionContent(darkBg, title, subtitle, text)}
      <br />
      {createSocialSubsection(darkBg)}
    </div>
  );
  let imageContent = (
    <div className="w-full sm:w-7/12 md:w-10/12">
      <img src={womanReading} alt="woman reading" />
    </div>
  );
  return createSplitSectionContent(imageContent, textContent);
}

function createSocialSubsection(darkBg: boolean) {
  return (
    <div
      className={`text-center ${darkBg ? 'text-textwhite' : 'text-textblack'}`}
    >
      <a href="https://www.linkedin.com/in/sla8">
        <LinkedInIcon sx={{ fontSize: { xs: 30, sm: 30 } }} />
      </a>
      &nbsp;&nbsp;
      <a href="https://github.com/sla8">
        <GitHubIcon sx={{ fontSize: { xs: 25, sm: 25 } }} />
      </a>
    </div>
  );
}
