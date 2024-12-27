import { Typography, Row, Col } from "antd";
import Container from "../../../components/container/container";
import { useMediaQuery } from "react-responsive";
import KInput from "../../../components/input/input";
import KButton from "../../../components/kbutton/kbutton";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 980px)" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFeedback("Please fill in all fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      setFeedback("");

      const response = await fetch("https://formspree.io/f/mwppppyo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFeedback("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        setFeedback("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [feedback]);

  return (
    <Container fluid>
      <Container>
        <Row
          gutter={[48, 24]}
          style={{
            padding: isMobile ? "20px" : "20px 100px 100px 100px",
          }}
        >
          {/* Technical Skills */}
          <Col xs={24} lg={12}>
            <Typography.Title
              level={4}
              style={{ textAlign: "center", color: "#010101" }}
            >
              Contact Me
            </Typography.Title>
            <div style={{ marginBottom: "10px" }}>
              <Typography.Title
                level={5}
                style={{ textAlign: "c", color: "#010101" }}
              >
                Let's Work Together
              </Typography.Title>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  fontFamily: "Rubik",
                  marginTop: "10px",
                  color: "#475653",
                }}
              >
                A dedicated and creative Frontend Developer with 5 years of
                professional experience in building visually appealing,
                responsive, and user-friendly websites. I am passionate about
                transforming ideas into engaging digital experiences through
                clean, efficient, and modern code. With a strong focus on user
                experience, I strive to deliver intuitive and seamless
                interfaces that meet client needs and exceed user expectations.
                Let’s collaborate to bring your vision to life and create
                impactful web solutions together.
              </Typography>
            </div>
            <div
              style={{
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <i
                className="fas fa-envelope"
                style={{ fontSize: "14px", color: "#0fddcc" }}
              ></i>
              <Typography style={{ fontWeight: 600, color: "#475653" }}>
                hillaryejike24302@gmail.com
              </Typography>
            </div>
            <div
              style={{
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <i
                className="fas fa-phone"
                style={{ fontSize: "14px", color: "#0fddcc" }}
              ></i>
              <Typography style={{ fontWeight: 600, color: "#475653" }}>
                +2438128774639
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
          </Col>

          {/* Professional Skills */}
          <Col
            xs={24}
            lg={12}
            style={{
              border: "1px solid rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
            }}
          >
            <div style={{ marginTop: "34px" }}>
              <KInput
                placeholder="Enter Your Name"
                name="name"
                value={formData?.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <KInput
                placeholder="Enter Your Email"
                name="email"
                value={formData?.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <KInput
                placeholder="Enter Your Subject"
                name="subject"
                value={formData?.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <KInput
                type="textarea"
                name="message"
                value={formData?.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
            </div>
            {feedback && (
              <div
                style={{
                  marginTop: "10px",
                  color: feedback.includes("successfully") ? "green" : "red",
                }}
              >
                {feedback}
              </div>
            )}
            <div
              style={{
                marginTop: isMobile ? "20px" : "30px",
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-start",
                marginBottom: isMobile ? "10px" : 0,
              }}
            >
              <KButton onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </KButton>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactPage;
