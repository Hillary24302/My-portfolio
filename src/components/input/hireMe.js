import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { SvgAdd } from "../svg-icon";
import KInput from "./input";
import KButton from "../kbutton/kbutton";
import { useMediaQuery } from "react-responsive";

const HireMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        style={{
          display: "flex",
          background: "#0fddcc",
          color: "#173b3f",
          fontWeight: 600,
          justifyContent: "center",
          alignItems: "center",
        }}
        type="primary"
        onClick={showModal}
        icon={<SvgAdd />}
      >
        Hire Me
      </Button>
      <Modal
        title="Let's Get Started"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div
          xs={24}
          lg={12}
          style={{
            border: "1px solid rgba(0, 0, 0, 0.25)",
            borderRadius: "12px",
            padding: "20px",
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
        </div>
      </Modal>
    </>
  );
};

export default HireMe;
