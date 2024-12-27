import { Typography, Progress, Row, Col } from "antd";
import Container from "../../../components/container/container";
import { useMediaQuery } from "react-responsive";

const SkillPage = () => {
  const isMobile = useMediaQuery({ query: "(max-size: 980px)" });

  return (
    <Container fluid>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
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
            My Skills
          </Typography>
        </div>
        <Row
          gutter={[24, 24]}
          style={{
            padding: isMobile ? "20px 20px" : "20px 100px 100px 100px",
          }}
        >
          <Col xs={24} lg={12}>
            <Typography.Title
              level={4}
              style={{ textAlign: "center", color: "#010101" }}
            >
              Technical Skills
            </Typography.Title>
            <div style={{ marginBottom: "10px" }}>
              <Typography.Text>HTML</Typography.Text>
              <Progress percent={90} strokeColor="#0fddcc" showInfo />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <Typography.Text>CSS</Typography.Text>
              <Progress percent={85} strokeColor="#0fddcc" showInfo />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <Typography.Text>JavaScript</Typography.Text>
              <Progress percent={70} strokeColor="#0fddcc" showInfo />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <Typography.Text>React</Typography.Text>
              <Progress percent={85} strokeColor="#0fddcc" showInfo />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <Typography.Text>Veu</Typography.Text>
              <Progress percent={40} strokeColor="#0fddcc" showInfo />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <Typography.Text> jQuery</Typography.Text>
              <Progress percent={90} strokeColor="#0fddcc" showInfo />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <Typography.Text>Bootstrap</Typography.Text>
              <Progress percent={80} strokeColor="#0fddcc" showInfo />
            </div>
            <div>
              <Typography.Text>React Native</Typography.Text>
              <Progress percent={60} strokeColor="#0fddcc" showInfo />
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <Typography.Title
              level={4}
              style={{ textAlign: "center", color: "#010101" }}
            >
              Professional Skills
            </Typography.Title>
            <Row gutter={[16, 16]} justify="center">
              <Col span={12} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Progress
                    type="circle"
                    percent={65}
                    strokeColor="#0fddcc"
                    size={80}
                  />
                  <Typography.Text>Creativity</Typography.Text>
                </div>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Progress
                    type="circle"
                    percent={90}
                    strokeColor="#0fddcc"
                    size={80}
                  />
                  <Typography.Text>Communication</Typography.Text>
                </div>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Progress
                    type="circle"
                    percent={75}
                    strokeColor="#0fddcc"
                    size={80}
                  />
                  <Typography.Text>Problem Solving</Typography.Text>
                </div>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Progress
                    type="circle"
                    percent={85}
                    strokeColor="#0fddcc"
                    size={80}
                  />
                  <Typography.Text>Teamwork</Typography.Text>
                </div>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Progress
                    type="circle"
                    percent={55}
                    strokeColor="#0fddcc"
                    size={80}
                  />
                  <Typography.Text>Agile Tools</Typography.Text>
                </div>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Progress
                    type="circle"
                    percent={85}
                    strokeColor="#0fddcc"
                    size={80}
                  />
                  <Typography.Text>Jira</Typography.Text>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SkillPage;
