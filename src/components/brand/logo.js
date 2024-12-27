import React from "react";

const Logo = ({
  useIcon = true,
  iconColor = "#4834D4",
  textColor = "#100658",
  width = "150px",
  height = "40px",
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="172"
      height="32"
      fill="none"
      viewBox="0 0 172 32"
    >
      <path
        fill="#212121"
        d="M44.368 10.832V22h-2.24v-4.752h-4.784V22h-2.24V10.832h2.24v4.592h4.784v-4.592h2.24Zm3.34 1.248c-.394 0-.725-.123-.991-.368a1.283 1.283 0 0 1-.384-.944c0-.373.128-.683.384-.928.266-.256.597-.384.992-.384.394 0 .72.128.976.384.266.245.4.555.4.928s-.134.688-.4.944c-.256.245-.582.368-.976.368Zm1.105 1.056V22h-2.24v-8.864h2.24Zm4.453-2.976V22h-2.24V10.16h2.24Zm4.453 0V22h-2.24V10.16h2.24Zm4.261 10h3.952V22h-6.496v-1.808l3.872-5.216h-3.856v-1.84h6.432v1.808L61.98 20.16Z"
      />
      <path
        fill="#0FDDCC"
        d="M71.792 9.436v2.034h-3.348V22h-2.52V11.47h-3.348V9.436h9.216Zm11.109 7.362c0 .36-.024.684-.072.972h-7.29c.06.72.312 1.284.756 1.692.444.408.99.612 1.638.612.936 0 1.602-.402 1.998-1.206h2.718a4.588 4.588 0 0 1-1.656 2.376c-.816.612-1.818.918-3.006.918-.96 0-1.824-.21-2.592-.63a4.637 4.637 0 0 1-1.782-1.818c-.42-.78-.63-1.68-.63-2.7 0-1.032.21-1.938.63-2.718a4.396 4.396 0 0 1 1.764-1.8c.756-.42 1.626-.63 2.61-.63.948 0 1.794.204 2.538.612.756.408 1.338.99 1.746 1.746.42.744.63 1.602.63 2.574Zm-2.61-.72c-.012-.648-.246-1.164-.702-1.548-.456-.396-1.014-.594-1.674-.594-.624 0-1.152.192-1.584.576-.42.372-.678.894-.774 1.566h4.734Zm3.801.936c0-1.032.21-1.932.63-2.7a4.428 4.428 0 0 1 1.746-1.8c.744-.432 1.596-.648 2.556-.648 1.236 0 2.256.312 3.06.936.816.612 1.362 1.476 1.638 2.592h-2.718a1.923 1.923 0 0 0-.738-1.008c-.336-.252-.756-.378-1.26-.378-.72 0-1.29.264-1.71.792-.42.516-.63 1.254-.63 2.214 0 .948.21 1.686.63 2.214.42.516.99.774 1.71.774 1.02 0 1.686-.456 1.998-1.368h2.718c-.276 1.08-.822 1.938-1.638 2.574-.816.636-1.836.954-3.06.954-.96 0-1.812-.21-2.556-.63a4.58 4.58 0 0 1-1.746-1.8c-.42-.78-.63-1.686-.63-2.718Zm17.092-5.13c.756 0 1.428.168 2.016.504.588.324 1.044.81 1.368 1.458.336.636.504 1.404.504 2.304V22h-2.52v-5.508c0-.792-.198-1.398-.594-1.818-.396-.432-.936-.648-1.62-.648-.696 0-1.248.216-1.656.648-.396.42-.594 1.026-.594 1.818V22h-2.52V8.68h2.52v4.59a3.214 3.214 0 0 1 1.296-1.008 4.204 4.204 0 0 1 1.8-.378Z"
      />
      <path
        fill="#010101"
        d="M0 20h30v4H0zm22 10v-6h4v6zM4 8V2h4v6zM0 8h30v4H0z"
      />
      <path fill="#0FDDCC" d="M0 14h30v4H0z" />
    </svg>
  );
};

export default Logo;