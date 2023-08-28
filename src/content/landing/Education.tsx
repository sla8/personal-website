import { Section, createTextSectionContent } from "components/Section";
import { LandingSectionInput } from "content/Landing";
import { id, title } from "res/landing/education";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  TimelineContentContainer,
  CustomTimelineItem,
} from "components/TimelineItem";

export default function Education(props: LandingSectionInput) {
  const theme = useTheme();
  const screenIsAtLeastMd = useMediaQuery(theme.breakpoints.up("md"));

  let content = (
    <div id={id}>
      {createTextSectionContent(title)}
      <TimelineContentContainer
        screenIsAtLeastMd={screenIsAtLeastMd}
        content={[createMasterTimelineItem(), createBachelorTimelineItem()]}
      />
    </div>
  );
  return <Section id="timeline-section" content={content} />;
}

function createBachelorTimelineItem() {
  return (
    <CustomTimelineItem
      key="bachelor-timeline-item"
      time="2014 - 2020"
      title="ETH Zurich"
      subtitle="Bachelor of Science ETH in Computer Science"
      texts={[
        {
          title: "Bachelor Thesis",
          text: (
            <div>
              Elaboration of a Function Memorization System Together With the
              Implementation of a User Management System for WebTigerJython
            </div>
          ),
        },
        {
          title: "Extracurricular Activities",
          text: (
            <div>
              <p className="text-left">
                VIS - Association of Computer Science Students at ETH Zurich
              </p>
              <ul className="list-disc pl-6 text-left">
                <li>Board member</li>
                <li>Learning Support Committee (LUK) president and member</li>
                <li>External Relations Committee (ERK) member</li>
                <li>VIScon Committee (VS2) member</li>
                <li>Nachwuchskommission (NachKomm) president and member</li>
              </ul>
            </div>
          ),
        },
      ]}
      connectorTop={true}
      connectorBottom={false}
    />
  );
}

function createMasterTimelineItem() {
  return (
    <CustomTimelineItem
      key="master-timeline-item"
      time="2020 - 2023"
      title="ETH Zurich"
      subtitle="Master of Science ETH in Computer Science"
      texts={[
        {
          title: "Master Thesis",
          text: (
            <div className="pb-2">
              Prioritizing Cybersecurity Controls Based on Coverage of Attack
              Techniques and Attack Probabilities
              <br className="pb-2" />
              <span className="text-textgreen">External references: </span>
              <a href="https://www.research-collection.ethz.ch/handle/20.500.11850/627198">
                Master Thesis Publication
              </a>
              {", "}
              <a href="https://zisc.ethz.ch/research/projects/prioritizing-cybersecurity-controls-based-on-coverage-of-attack-techniques/">
                ZISC Research Project
              </a>
              {", "}
              <a href="https://www.zurich.com/commercial-insurance/sustainability-and-insights/commercial-insurance-risk-insights/study-highlights-10-cyber-controls-reducing-70-most-frequent-attacks">
                Zurich Insurance Article
              </a>
            </div>
          ),
        },
        {
          title: "Courses",
          text: (
            <div>
              Security Engineering, Network Security, Future Internet, Big Data,
              Advanced Systems Lab, Algorithms Lab, Ubiquitous Computing,
              Advanced Seminar on Computational Haptics, Wireless Networking and
              Mobile Computing
            </div>
          ),
        },
        {
          title: "Extracurricular Activities",
          text: (
            <div>
              Association of Computer Science Students at ETH Zurich (VIS)
              <br />
              <ul className="list-disc pl-6 text-left">
                <li>External Relations Committee (ERK) member</li>
              </ul>
            </div>
          ),
        },
      ]}
      connectorTop={true}
      connectorBottom={true}
    />
  );
}
