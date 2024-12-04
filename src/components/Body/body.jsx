import React, { useRef, useState } from "react";
import styles from "./body.module.css";
import { ArrowDown } from "react-feather";
import Editor from "../Editor/editor";
import Resume from "../Resume/Resume";
import ReactToPrint from "react-to-print";

export default function Body() {
  const colors = ["#151515", "#A91D3A", "#4C3BCF", "#7077A1", "#1B4242"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    other: "Other",
  };

const resumeRef=useRef();
  const [activeColor,setActiveColor]=useState(colors[0])

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievements]: {
      id: sections.achievements,
      sectionTitle: sections.achievements,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
  return (
    <>
      <div  className={styles.container}>
        <p className={styles.heading}>Resume Builder</p>
        <div className={styles.main}>
          <Editor
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />
          <div className={styles.toolbar}>
          <div className={styles.colors}>
            {colors.map((item) => (
              <span
                key={item}
                style={{ backgroundColor: item }}
                className={`${styles.color} ${activeColor===item?styles.active:''}`}
                onClick={()=>setActiveColor(item)}
              />
            ))}
          </div>
          <ReactToPrint
          trigger={() => {
            return( <button>
              Download <ArrowDown />
            </button>);
          }}
          content={() => resumeRef.current}
        />
         
        </div>
          
          <Resume styles={styles.resume}
          ref={resumeRef}
          sections={sections}                    
          information={resumeInformation}
          activeColor={activeColor}
          />
          
        </div>
        
      </div>
    </>
  );
}
