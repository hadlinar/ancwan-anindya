import React from "react";
import "./Definition.css";
import "./Provision.css";
import { useTranslation } from "react-i18next";

function Provision() {
  const { t } = useTranslation();

  const provision_manufacturing_list = [
    {
      title: "Peraturan Menteri Perindustrian Nomor 16 Tahun 2011",
      url: "https://drive.google.com/file/d/1guqtDFQcr_RtQzwh-tQZLbY26RA736-e/view?usp=share_link",
    },
    {
      title: "Peraturan Menteri Perindustrian Nomor 04 Tahun 2017",
      url: "https://drive.google.com/file/d/1goqGmeXvAocBY_1oLTtY2nYfqEMTRiMa/view?usp=share_link",
    },
    {
      title: "Peraturan Menteri Perindustrian Nomor 29 Tahun 2017",
      url: "https://drive.google.com/file/d/1hz7R5sgfcuA1ZknvCyqoViKOBln3w35m/view?usp=share_link",
    },
    {
      title: "Peraturan Menteri Perindustrian Nomor 16 Tahun 2020",
      url: "https://drive.google.com/file/d/1htLnxuMKW6h8gFZ-Sq8xdflnc5Nl5Sa8/view?usp=share_link",
    },
    {
      title: "Peraturan Menteri Perindustrian Nomor 22 Tahun 2020",
      url: "https://drive.google.com/file/d/1hm9-JMniadmGAxjWJ-Vb_wmBcPFFS5rD/view?usp=share_link",
    },
    {
      title: "Peraturan Menteri Perindustrian Nomor 06 Tahun 2022",
      url: "https://drive.google.com/file/d/1i1SVmU7djTi87SoKItMbcKa520V7HqvH/view?usp=share_link",
    },
    {
      title: "Peraturan Menteri Perindustrian Nomor 31 Tahun 2022",
      url: "https://drive.google.com/file/d/1isYYsfLnvYCY7euvwRRWMFjeUy507SWs/view?usp=share_link",
    },
    {
      title: "Peraturan Menteri Perindustrian Nomor 46 Tahun 2022",
      url: "https://drive.google.com/file/d/1isP76FoOnckzdrZqgugnQUA8vBDOqqKi/view?usp=share_link",
    },
  ];

  const provision_project_list = [
    {
      title: "Peraturan Menteri ESDM No 15 Tahun 2013",
      url: "https://drive.google.com/file/d/1ioHpbeuwb7LWVRy8sdTA94nSw-A6usKq/view?usp=share_link",
    },
    {
      title: "SK Dirjen Migas No. 181.K/10/DJM.S/2014",
      url: "https://drive.google.com/file/d/1ioD7Hyz9wMtWbwGY3XYbIgJ_GiZX4VpE/view?usp=share_link",
    },
    {
      title: "Peraturan Presiden No.70 Tahun 2012",
      url: "https://drive.google.com/file/d/1ij_U9C1eGL6qOqfEURultNqCunye0fYZ/view?usp=share_link",
    },
    {
      title: "Pedoman Tata Kerja No. 007",
      url: "https://drive.google.com/file/d/1iiLU456nSEvpvg3qWAKeAP7Xr6FI6LH7/view?usp=share_link",
    },
    {
      title: "Peraturan Menteri Perindustrian No 05 Tahun 2017",
      url: "https://drive.google.com/file/d/1iVEg55IALg8Z-dLqmCdh3jizjjilfVlU/view?usp=share_link",
    },
    {
      title: "Peraturan Menteri Perindustrian No 02 Tahun 2014",
      url: "https://drive.google.com/file/d/1iSF-rytF-N8PsQzG1kp_-XinmdTzuGBJ/view?usp=share_link",
    },
    {
      title: "Peraturan Menteri Perindustrian No 03 Tahun 2014",
      url: "https://drive.google.com/file/d/1iQtWfnIN1nicWmnRHDN0Psygn8jxp48p/view?usp=share_link",
    },
    {
      title: "Peraturan Menteri Perindustrian No 31 Tahun 2017",
      url: "https://drive.google.com/file/d/1iI5qgicNjfXGP5uDbZz4QNVCCQFFFESE/view?usp=share_link",
    },
  ];

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">{t("provision_title")}</h1>
        </div>
        <div className="tkdn-provision-section">
          <h2 className="tkdn-subtitle">
            {t("provision_manufacturing_title")}
          </h2>
          <div className="content-assessment-container">
            {Array.from(provision_manufacturing_list, (project, i) => {
              const getTag = t(`provision_manufacturing_list.${i}.tag`);
              let tagColor = {};

              if (getTag === "cost based") {
                tagColor = { backgroundColor: "#F2994A" };
              } else if (getTag === "product based") {
                tagColor = { backgroundColor: "#F2C94C" };
              } else if (getTag === "process based") {
                tagColor = { backgroundColor: "#6FCF97" };
              } else {
                tagColor = { backgroundColor: "#56CCF2" };
              }

              return (
                <div className="tkdn-provision-card" key={i}>
                  <h1>{i + 1}</h1>
                  <div className="tkdn-provision-container">
                    <h3 className="tkdn-subtitle-2">
                      <a href={project.url}>
                        {t(`provision_manufacturing_list.${i}.title`)}
                      </a>
                    </h3>
                    <p className="tkdn-text">
                      {t(`provision_manufacturing_list.${i}.desc`)}
                    </p>
                    <div className="tkdn-chip" style={tagColor}>
                      {t(`provision_manufacturing_list.${i}.tag`)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="tkdn-provision-section">
          <h2 className="tkdn-subtitle">{t("provision_project_title")}</h2>
          <div className="content-assessment-container">
            {Array.from(provision_project_list, (project, i) => {
              return (
                <a
                  className="tkdn-project-card"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                >
                  <div className="values col tkdn-project-card">
                    {t(`provision_project_list.${i}`)}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Provision;
