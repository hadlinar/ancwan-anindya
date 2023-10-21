import data from "../../../data";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();
  const contactUs = [
    {
      name: "Marketing TKDN",
      email: "marketing_tkdn@anindya.biz",
      phone: "",
    },
    {
      name: "Gressella",
      email: "gressella@anindya.biz",
      phone: "+62 857-1898-5849",
    },
    {
      name: "Ahmad Syoufi",
      email: "ahmad.syoufi@anindya.biz",
      phone: "+62 812-1111-4619",
    },
    {
      name: "Gilang Aditia Perdana",
      email: "gilang.aditia@anindya.biz",
      phone: "+62 813-9824-9449",
    },
  ];
  return (
    <div className="tkdn-container-definition">
      <div className="tkdn-section-header">
        <div className="border-title-vpti" />
        <h1 className="tkdn-section-title">{t("contact_title")}</h1>
      </div>
      <Row>
        {contactUs.map((item, i) => (
          <Col>
            <h2 className="tkdn-subtitle" style={{ fontSize: "14px" }}>
              {item.name}
            </h2>
            <i
              class="fas fa-envelope"
              style={{ color: "black", marginRight: "10px" }}
            />{" "}
            <a
              href={"mailto:" + item.email}
              style={{ fontWeight: "300", fontSize: "14px" }}
            >
              {item.email}
              <br />
            </a>
            {item.phone !== "" ? (
              <>
                <i
                  class="fas fa-phone-alt"
                  style={{ color: "black", marginRight: "10px" }}
                />
                <a
                  href={"tel:" + item.phone}
                  style={{ fontWeight: "300", fontSize: "14px" }}
                >
                  {" "}
                  {item.phone} <br />
                </a>
              </>
            ) : (
              <></>
            )}
          </Col>
        ))}
        {/* {data.coal_n_mines_contact.map((item) => {
        return (
          
        );
      })} */}
      </Row>
    </div>
  );
}

export default ContactUs;
