// pages/About.tsx
import React from "react";import InfoList from "../../components/InfoList";


export default function About() {
  const teamInfo = [
    "John Doe - Lead Developer",
    "Jane Smith - UX Designer",
    "Sam Wilson - Project Manager"
  ];

  return (
    <div>
      <h2>About</h2>
      <p>This project was created to demonstrate best practices in React development.</p>
      <InfoList title="Our Team" items={teamInfo} />
    </div>
  );
}
