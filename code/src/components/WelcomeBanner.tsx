// components/WelcomeBanner.tsx
import React from "react";

interface WelcomeBannerProps {
  message: string;
}

export default function WelcomeBanner({ message }: WelcomeBannerProps) {
  return <div style={{ backgroundColor: "#d9f7be", padding: "10px", marginBottom: "15px" }}>{message}</div>;
}
