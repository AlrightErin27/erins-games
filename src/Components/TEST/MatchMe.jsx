import "./MatchMe.css";
import { useState } from "react";
import { Card } from "./Card";

export default function MatchMe() {
  const items = ["🗝", "🔔", "🎱", "🍁", "🐚", "🎩", "🧦", "🪶"];
  return (
    <div className="MatchMe">
      {items.map((emoji, i) => (
        <Card emoji={emoji} key={i} />
      ))}
    </div>
  );
}
