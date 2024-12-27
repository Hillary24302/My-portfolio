import { Typography } from "antd";
import Container from "../../../components/container/container";
import { useMediaQuery } from "react-responsive";
import MerchantDashboard from "../../../assets/images/merchantDashboard.jpg";
import Airpay from "../../../assets/images/airpay.jpg";
import AirvendDashboard from "../../../assets/images/airvendAdmin.jpg";

const ProjectsPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 980px)" });

  const neumorphicStyle = {
    boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
    borderRadius: "12px",
    background: "#e7f2f0",
    height: "200px",
    width: "100%",
    flex: 1,
    margin: "10px",
    display: "flex",
    padding: "20px",
    alignItems: "flex-start",
    overflow: "hidden",
  };

  return (
    <Container fluid>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            Latest Projects
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: isMobile ? "20px 20px 10px 20px" : "20px 100px 20px 100px",
          }}
        >
          {/* Web Design Card */}
          <div style={neumorphicStyle}>
            <img
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                borderRadius: "8px",
              }}
              src={MerchantDashboard}
              alt="profile"
            />
          </div>
          <div style={neumorphicStyle}>
            <img
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                borderRadius: "8px",
              }}
              src={Airpay}
              alt="profile"
            />
          </div>
          {/* Mobile Design Card */}
          <div style={neumorphicStyle}>
            <img
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                borderRadius: "8px",
              }}
              src={AirvendDashboard}
              alt="profile"
            />
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ProjectsPage;
