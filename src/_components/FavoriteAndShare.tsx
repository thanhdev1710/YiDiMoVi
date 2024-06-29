"use client";
import { Heart, Share2 } from "lucide-react";
import { Button } from "./ui/button";

export function FavoriteAndShare() {
  return (
    <>
      <Button className="rounded-full w-10 h-10 !p-[10px]" variant="secondary">
        <Heart />
      </Button>
      <Button className="rounded-full w-10 h-10 !p-[10px]" variant="secondary">
        <Share2 />
      </Button>
    </>
  );
}
