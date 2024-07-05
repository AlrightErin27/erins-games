import "../styles.css";
import { useState } from "react";
import { Card } from "./Card";

export default function MatchMe() {
  const items = ["🗝", "🔔", "🎱", "🍁", "🐚", "🎩", "🧦", "🪶"];
  return (
    <div className="MatchMe">
      {items.map((i) => (
        <Card emoji={i} />
      ))}
    </div>
  );
}
