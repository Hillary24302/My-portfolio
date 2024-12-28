import { Typography } from "antd";
import Container from "../../../components/container/container";
import Profile from "../../../assets/images/profilex.jpg";
import { useMediaQuery } from "react-responsive";

const AboutPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 980px)" });

  return (
    <Container fluid>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#e7f2f0",
            borderRadius: "12px",
            paddingBottom: "20px",
          }}
        >
          {!isMobile && (
            <div
              style={{
                padding: isMobile ? "0px" : "60px 0px 30px 100px",
              }}
            >
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #FFD700, #06122A)",
                  padding: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: "90%",
                    height: "90%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src={Profile}
                  alt="profile"
                />
              </div>
            </div>
          )}
          <div
            style={{
              padding: isMobile ? "40px 50px 20px 50px" : "0px 100px 0px 100px",
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
              About Me
            </Typography>
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: 500,
                fontFamily: "Rubik",
                color: "#010101",
              }}
            >
              Frontend Developer!
            </Typography>
            <div>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  fontFamily: "Rubik",
                  marginTop: "5px",
                  color: "#475653",
                }}
              >
                I am a frontend React developer with over 5 years of experience
                in web development and over a year in mobile development. With a
                background in Electrical Engineering from the University of Port
                Harcourt, I bring a technical mindset to my role. Currently
                contributing to a fintech company, I am passionate about
                crafting user-friendly solutions, paying attention to details,
                and collaborating effectively within teams. Open to exploring
                new and bigger opportunities, I am eager to take on challenges
                that push my skills further.
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default AboutPage;
