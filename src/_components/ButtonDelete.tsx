"use client";
import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function ButtonDelete({ name }: { name: string }) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className="w-full mb-2"
      variant="destructive"
    >
      <p className="text-xs">
        {pending ? "Đang thực hiện xoá" : `Xoá ${name} ra khỏi danh sách`}
      </p>
    </Button>
  );
}
