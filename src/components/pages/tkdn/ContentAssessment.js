import React, { useEffect, useState } from "react";
import "./Definition.css";
import "./ContentAssessment.css";
import { useTranslation } from "react-i18next";
import data from "../../../data";

function ContentAssessment() {
  const { t } = useTranslation();
  const [bumperNeeded, setBumperNeeded] = useState(0);

  function checkIfBumperNeeded() {
    const numOfContent = Object.keys(data.content_assessment_list).length;
    const modResult = numOfContent % 3;

    if (modResult === 1) {
      setBumperNeeded(2);
    } else if (modResult === 2) {
      setBumperNeeded(1);
    } else {
      setBumperNeeded(0);
    }
  }

  useEffect(() => {
    checkIfBumperNeeded();
  }, []);

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">
            {t("content_assessment_title")}
          </h1>
        </div>
        <div className="content-assessment-container">
          {Array.from(data.content_assessment_list, (card, i) => {
            return (
              <div className="card-tkdn">
                <div className="card-text-tkdn">
                  <h2 className="tkdn-subtitle-2">
                    {t(`content_assessment_list.${i}`)}
                  </h2>
                </div>
                <img
                  src={require(`../../../images/TKDN/LCA/${card}.png`).default}
                  alt={card}
                  className="card-img-tkdn"
                />
              </div>
            );
          })}
          {Array(bumperNeeded)
            .fill("")
            .map((e, i) => (
              <div className="tkdn-bumper-card" />
            ))}
        </div>
      </div>
    </>
  );
}
export default ContentAssessment;
