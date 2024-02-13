import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const fontData = await fetch(
    new URL("../../../../assets/fonts/Inter-Bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "white",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          fontSize: 72,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: "center",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            backgroundColor: "#000",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Nikodem Domaracki
        </div>
        <div style={{ fontSize: "36", padding: "20px" }}>|</div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(0, 144, 120), rgb(0, 223, 216))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: 60,
          }}
        >
          Frontend Developer
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
