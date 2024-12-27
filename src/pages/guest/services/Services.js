import { Typography } from "antd";
import Container from "../../../components/container/container";
import { useMediaQuery } from "react-responsive";
import { DesktopOutlined, MobileOutlined } from "@ant-design/icons";

const ServicePage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 980px)" });

  const neumorphicStyle = {
    boxShadow: "4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff",
    borderRadius: "12px",
    background: "#f5f7fa",
    height: "200px",
    width: "100%",
    flex: 1,
    margin: "10px",
    display: "flex",
    padding: "20px",
    alignItems: "flex-start",
  };

  return (
    <Container fluid>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          <Typography
            style={{
              fontSize: "36px",
              fontWeight: 500,
              fontFamily: "Rubik",
              color: "#010101",
            }}
          >
            My Services
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: isMobile
              ? "20px 50px 20px 50px"
              : "20px 100px 100px 100px",
          }}
        >
          {/* Web Design Card */}
          <div style={neumorphicStyle}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <DesktopOutlined
                style={{ fontSize: "32px", marginBottom: "10px" }}
              />
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  fontFamily: "Rubik",
                  color: "#010101",
                }}
              >
                Web Design
              </Typography>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  fontFamily: "Rubik",
                  marginTop: "10px",
                  color: "#475653",
                }}
              >
                A passionate Frontend Developer with 5 years of experience in
                creating responsive and interactive websites. I specialize in
                delivering seamless user experiences.
              </Typography>
            </div>
          </div>
          {/* Mobile Design Card */}
          <div style={neumorphicStyle}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <MobileOutlined
                style={{ fontSize: "32px", marginBottom: "10px" }}
              />
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  fontFamily: "Rubik",
                  color: "#010101",
                }}
              >
                Mobile Design
              </Typography>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  fontFamily: "Rubik",
                  marginTop: "10px",
                  color: "#475653",
                }}
              >
                Skilled in crafting intuitive and visually appealing mobile apps
                that offer exceptional usability. Experienced in React Native
                and cross-platform solutions.
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ServicePage;
