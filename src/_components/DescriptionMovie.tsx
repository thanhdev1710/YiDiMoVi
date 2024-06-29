"use client";
import { Dot } from "lucide-react";

export function DescriptionMovie({
  total_episodes,
  time,
  language,
  quality,
  className = "mb-3",
}: {
  total_episodes: number;
  time: string;
  language: string;
  quality: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center text-sm ${className}`}>
      <span>{total_episodes === 1 ? "Full" : `${total_episodes} tập`} </span>
      <Dot />
      <span>{time}</span>
      <Dot />
      <span>{language}</span>
      <Dot />
      <span>{quality}</span>
    </div>
  );
}
