"use client";
import { Heart, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { createMovieFavorite, deleteMovieFavorite } from "@/_libs/actions";
import { toast } from "react-hot-toast";
import { useState } from "react";

export function FavoriteAndShare({
  id,
  name,
  slug,
  image,
}: {
  id: number | null | undefined;
  name: string;
  slug: string;
  image: string;
}) {
  const prevList = JSON.parse(
    localStorage.getItem("listFavorite") ||
      JSON.stringify([{ id: "", name: "", slug: "", image: "" }])
  );
  const [is, setIs] = useState(
    prevList.find((item: any) => item.name === name)
  );

  async function handleClickFavorite() {
    if (id) {
      if (!is) {
        const error = await createMovieFavorite(id, name, slug, image);
        if (error) {
          console.log("Thêm vào danh sách yêu thích thất bại");
          return;
        }
        localStorage.setItem(
          "listFavorite",
          JSON.stringify([...prevList, { id, name, slug, image }])
        );
        setIs({ id, name, slug, image });
      } else {
        const error = await deleteMovieFavorite(id, name);
        if (error) {
          console.log("Xoá khỏi danh sách yêu thích thất bại");
          return;
        }
        const newList = prevList.filter((item: any) => item.name !== is.name);
        localStorage.setItem("listFavorite", JSON.stringify(newList));
        setIs(null);
      }
    } else {
      toast.error("Không thể thêm vào danh sách yêu thích");
    }
  }

  const handleCopyLink = () => {
    const linkToCopy = `${process.env.NEXT_PUBLIC_APP_DOMAIN}/xemPhim/${slug}`;

    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        toast.success("Link đã được sao chép vào clipboard!");
      })
      .catch((err) => {
        toast.error("Không thể sao chép link: " + err);
      });
  };

  return (
    <>
      <Button
        onClick={handleClickFavorite}
        className="rounded-full w-10 h-10 !p-[10px]"
        variant="secondary"
      >
        <Heart
          className={`${is ? "text-blue-default fill-blue-default" : ""} `}
        />
      </Button>
      <Button
        onClick={handleCopyLink}
        className="rounded-full w-10 h-10 !p-[10px]"
        variant="secondary"
      >
        <Share2 />
      </Button>
    </>
  );
}
