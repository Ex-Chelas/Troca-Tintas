// pages/Home.tsx
import React from "react";
import WelcomeBanner from "../../components/WelcomeBanner";

export default function Home() {
  return (
    <div>
      <WelcomeBanner message="Welcome to the Home Page!" />
      <h2>Home</h2>
      <p>This is the home page of our amazing project. Explore the features and enjoy your stay!</p>
      <ul>
        <li>Feature 1: Interactive content</li>
        <li>Feature 2: Easy navigation</li>
        <li>Feature 3: Responsive design</li>
      </ul>
    </div>
  );
}
