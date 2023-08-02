import {
  Section,
  createSplitSectionContent,
  createTextSectionContent,
} from 'components/Section';
import { id, title, subtitle, text } from 'res/landing/hello';
import womanReading from 'images/woman-web.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Hello() {
  return <Section id={id} content={createHelloContent()} />;
}

function createHelloContent() {
  let textContent = (
    <div className="w-full">
      {createTextSectionContent(title, subtitle, text)}
    </div>
  );
  let imageContent = (
    <div className="w-full w-8/12 md:w-7/12 lg:w-10/12 m-auto">
      <img src={womanReading} alt="woman reading" />
    </div>
  );
  return (
    <div className="text-center">
      {createSplitSectionContent(imageContent, textContent)}
      {createSocialSubsection()}
    </div>
  );
}

function createSocialSubsection() {
  return (
    <div className="text-center bg-green rounded-3xl text-white w-fit pl-10 pr-10 pt-2 pb-2 mt-4 m-auto">
      Find me on &nbsp;
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
