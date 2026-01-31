import Image from "next/image";
import demoImage from "@/public/image.png";

export default function ImageDemoPage() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", backgroundColor: "#d59c9c" }}>
      {/* 1:20 HOW TO USE IMAGE COMPONENT */}
      <h2>Basic Image Usage</h2>
      <Image
        src={demoImage}
        alt="Basic image"  
        width={300}
        height={200}
      />

      <hr />

      {/* 3:30 WARNINGS */}
      <h2>Warning: width & height are required</h2>
      <p>
        Next.js needs width and height (or fill) to prevent layout shift.
      </p>

      <hr />

      {/* 8:50 USING FILL PROPERTY */}
      <h2>Using fill property</h2>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "250px",
          border: "1px solid #ccc",
        }}
      >
        <Image
          src={demoImage}
          alt="Fill image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <hr />

      {/* 12:30 USING QUALITY PROPERTY */}
      <h2>Using quality property</h2>
      <Image
        src={demoImage}
        alt="High quality image"
        width={300}
        height={200}
        quality={100}
      />

      <hr />

      {/* 13:00 PRIORITY PROPERTY */}
      <h2>Priority image (above the fold)</h2>
      <Image
        src={demoImage}
        alt="Priority image"
        width={300}
        height={200}
        priority
      />

      <hr />

      {/* 15:00 BLUR EFFECT */}
      <h2>Blur placeholder effect</h2>
      <Image
        src={demoImage}
        alt="Blur image"
        width={300}
        height={200}
        placeholder="blur"
      />
    </div>
  );
}
