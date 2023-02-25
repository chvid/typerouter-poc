import React from "react";

export const DefaultLoadingIndicator: React.FC = () => (
  <div
    style={{
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: 9999,
      background: "#ffffff55"
    }}
  >
    <div
      style={{
        position: "fixed",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 1
      }}
    >
      <svg width="200" height="200" viewBox="0 0 50 50">
        <path fill="#000000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" opacity={0.5}>
          <animate attributeName="opacity" values="0.1;0.5" dur="1s" />
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1s"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
      </svg>
    </div>
  </div>
);
