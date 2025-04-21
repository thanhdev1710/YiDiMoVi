"use client";
import React, { useState } from "react";
import { vi } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DatePicker({
  birthday,
}: {
  birthday: string | undefined | null;
}) {
  const [date, setDate] = useState(
    new Date(birthday || new Date().toISOString())
  );
  return (
    <>
      <input
        name="birthday"
        readOnly
        type="hidden"
        className="hidden"
        value={date.toISOString()}
      />
      <DayPicker
        defaultMonth={date}
        components={{
          Day: (props) => {
            const isBirthday =
              props.day.date.toDateString() === date.toDateString();
            return (
              <div className="rdp-day">
                {isBirthday ? "🎂" : props.day.date.getDate()}
              </div>
            );
          },
        }}
        locale={vi}
        captionLayout="dropdown"
        fromYear={1900}
        toYear={new Date().getFullYear()}
        dir="vi"
        className="text-black bg-white rounded-lg flex justify-center items-center h-[360px] max-w-[340px] !m-0"
        required
        selected={date}
        mode="single"
        onSelect={(date) => {
          if (date) {
            setDate(date);
          }
        }}
        footer={date && `Ngày bạn đã chọn: ${date.toLocaleDateString("vi-VN")}`}
      />
    </>
  );
}
