"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function ButtonChangeInfo() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      variant="secondary"
      className="max-w-[340px] w-full !py-6 text-xl font-bold"
    >
      {pending ? "Đang thay đổi" : "Thay đổi"}
    </Button>
  );
}
