"use client";
import Loading from "@/app/loading";
import { Dot } from "lucide-react";
import { Session } from "next-auth";
import { useEffect, useState } from "react";

interface deviceInfo {
  browser: string;
  currentTime: string;
  previousVisit: string;
  status: string;
  userAgent: string;
}

export function DeviceInfo({ session }: { session: Session | null }) {
  const [deviceInfo, setDeviceInfo] = useState<deviceInfo | null>(null);

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const email = encodeURIComponent(session?.user.email || "");

      if (typeof window !== "undefined") {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_DOMAIN}api/logDeviceInfo?email=${email}`
        );
        if (response.ok) {
          const data = await response.json();
          setDeviceInfo(data);
        } else {
          console.error("Failed to fetch device info:", response.statusText);
        }
      }
    };

    fetchDeviceInfo();
  }, [session?.user.email]);

  if (!deviceInfo) {
    return <Loading />;
  }

  return (
    <div className="py-4 px-6 bg-gray-800 rounded-md">
      <h2 className="text-2xl font-bold flex gap-2 items-center">
        {deviceInfo.browser}{" "}
        <span>
          <Dot className="text-blue-default h-10 w-10" />
        </span>
      </h2>
      <p className="text-sm text-gray-400">
        Đăng nhập lần cuối{" "}
        {deviceInfo.previousVisit === "Chưa có lần truy cập trước"
          ? "Chưa có lần truy cập trước"
          : `${new Date(deviceInfo.previousVisit).toLocaleString("vi-VN", {
              dateStyle: "long",
              timeStyle: "medium",
            })}`}
      </p>
    </div>
  );
}
