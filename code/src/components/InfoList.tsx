// components/InfoList.tsx
import React from "react";

interface InfoListProps {
  title: string;
  items: string[];
}

export default function InfoList({ title, items }: InfoListProps) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
