import { Input, Typography } from "antd";
import { SvgMessageIcon } from "../svg-icon";
const { TextArea } = Input;

const KInput = ({
  disabled,
  title,
  style,
  id,
  value,
  onChange,
  required,
  placeholder,
  type,
  important = false,
}) => {
  const isPasswordInput = type === "password";
  const isTextArea = type === "textarea";
  const isHiddenInput = type === "hidden";

  if (isHiddenInput) {
    return <input type="hidden" id={id} value={value} />;
  }

  return (
    <div>
      {title && (
        <Typography className="fw-400 fz-14 mb-3" style={{ color: "#04326B" }}>
          {title}
          {important && (
            <span style={{ marginLeft: "5px", color: "red", fontSize: "16px" }}>
              *
            </span>
          )}
        </Typography>
      )}
      {isPasswordInput ? (
        <Input.Password
          size="large"
          id={id}
          style={style}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
      ) : isTextArea ? (
        <TextArea
          rows={5}
          placeholder="Tell me about the project"
          value={value}
          onChange={onChange}
        />
      ) : (
        <Input
          size="large"
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          suffix={<SvgMessageIcon style={{ color: "#999" }} />}
        />
      )}
    </div>
  );
};

export default KInput;
