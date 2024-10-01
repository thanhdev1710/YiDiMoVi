"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

export default function InputComment() {
  const [value, setValue] = useState("");
  const { pending } = useFormStatus();

  useEffect(() => {
    if (pending) {
      setValue("");
    }
  }, [pending]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={pending}
      className="bg-slate-200 dark:bg-slate-800 p-3 rounded-md"
      type="text"
      id="comment"
      name="comment"
      placeholder="Bình luận..."
    />
  );
}
