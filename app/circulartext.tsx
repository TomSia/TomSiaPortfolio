import React from "react";

interface CircularTextProps {
  text: string;
  radius?: number;
}

const CircularText: React.FC<CircularTextProps> = ({ text, radius = 60 }) => {
  const characters = text.split("");
  const charCount = characters.length;
  const degreeIncrement = 360 / charCount;

  return (
    <div
      style={{
        position: "relative",
        width: radius * 2,
        height: radius * 2,
        margin: "10px 20px",
        borderRadius: "50%",
      }}
    >
      {characters.map((char, i) => {
        const rotate = degreeIncrement * i;

        return (
          <span
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transformOrigin: "center",
              transform: `
                rotate(${rotate}deg)
                translate(${radius}px)
                rotate(${90}deg)
                translate(-50%, -50%)
              `,
              fontSize: 18,
              whiteSpace: "pre",
              userSelect: "none",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default CircularText;