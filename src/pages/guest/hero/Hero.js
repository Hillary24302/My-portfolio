import { Typography } from "antd";
import Profile from "../../../assets/images/profilex.jpg";
import Background from "../../../assets/images/background.png";
import { useMediaQuery } from "react-responsive";

const HeroPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 980px)" });
  return (
    <div
      style={{
        display: "flex",
        padding: isMobile ? "20px 0px" : "0px 20px",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage: isMobile ? "none" : `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          padding: isMobile ? "80px 50px 20px 50px" : "100px 100px 100px 100px",
        }}
      >
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: 500,
            fontFamily: "Rubik",
            color: "#010101",
          }}
        >
          Hello, It's Me
        </Typography>
        <Typography
          style={{
            fontSize: "32px",
            fontWeight: 500,
            fontFamily: "Rubik",
            color: "#010101",
          }}
        >
          Ejike Hillary
        </Typography>
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: 500,
            fontFamily: "Rubik",
            color: "#010101",
          }}
        >
          And I'm a Frontend Developer
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
            A passionate Frontend Developer with 5 years experience in
            commercial application development. Eager to join your company to
            build innovative and cutting edge business solutions for the
            impressive suite of clients within its global reach.
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid #0fddcc",
              borderRadius: 100,
              padding: "4px",
              height: "20px",
              width: "20px",
            }}
          >
            <a
              href="https://www.facebook.com/hillary.ejike.90"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-facebook"
                style={{
                  fontSize: "18px",
                  color: "#4267B2",
                }}
              ></i>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid #0fddcc",
              borderRadius: 100,
              padding: "4px",
              height: "20px",
              width: "20px",
            }}
          >
            <a
              href="www.linkedin.com/in/ejike-hillary-7532591a1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-linkedin"
                style={{
                  fontSize: "18px",
                  color: "#0077B5",
                }}
              ></i>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid #0fddcc",
              borderRadius: 100,
              padding: "4px",
              height: "20px",
              width: "20px",
            }}
          >
            <a
              href="https://wa.link/f7dbt2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-whatsapp"
                style={{
                  fontSize: "18px",
                  color: "#25D366",
                }}
              ></i>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid #0fddcc",
              borderRadius: 100,
              padding: "4px",
              height: "20px",
              width: "20px",
            }}
          >
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-tiktok"
                style={{
                  fontSize: "18px",
                  color: "#000000",
                }}
              ></i>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile ? "0px" : "60px 100px 30px 0px",
        }}
      >
        <div
          style={{
            width: isMobile ? "300px" : "400px",
            height: isMobile ? "300px" : "400px",
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
    </div>
  );
};
export default HeroPage;
