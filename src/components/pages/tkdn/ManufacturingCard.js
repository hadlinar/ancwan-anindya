import React from "react";
import "./Definition.css";
import "./Provision.css";

function ManufacturingCard({ index, title, desc, tag, url }) {
  let tagColor = {};

  if (tag === "cost based") {
    tagColor = { backgroundColor: "#F2994A" };
  } else if (tag === "product based") {
    tagColor = { backgroundColor: "#F2C94C" };
  } else if (tag === "process based") {
    tagColor = { backgroundColor: "#6FCF97" };
  } else {
    tagColor = { backgroundColor: "#56CCF2" };
  }

  return (
    <>
      <div className="tkdn-provision-card" key={index}>
        <h1>{index}</h1>
        <div className="tkdn-provision-text-container">
          <h3 className="tkdn-subtitle-2">
            <a href={url}>{title}</a>
          </h3>
          <p className="tkdn-text">{desc}</p>
          <div className="tkdn-chip" style={tagColor}>
            {tag}
          </div>
        </div>
      </div>
    </>
  );
}
export default ManufacturingCard;
