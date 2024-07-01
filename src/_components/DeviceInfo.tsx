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
  const [isLoading, setIsLoading] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<deviceInfo | null>(null);

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      try {
        setIsLoading(true);
        const email = encodeURIComponent(session?.user.email || "");
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_APP_DOMAIN}api/logDeviceInfo?email=${email}`,
          { next: { revalidate: 3600 } }
        ).then((res) => res.json());
        setDeviceInfo(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchDeviceInfo();
  }, [session?.user.email]);

  if (isLoading) return <Loading />;

  return (
    <div className="py-4 px-6 bg-gray-800 rounded-md">
      <h2 className="text-2xl font-bold flex gap-2 items-center">
        {deviceInfo?.browser || "Chrome"}{" "}
        <span>
          <Dot className="text-blue-default h-10 w-10" />
        </span>
      </h2>
      <p className="text-sm text-gray-400">
        Đăng nhập lần cuối{" "}
        {deviceInfo?.previousVisit === "Chưa có lần truy cập trước"
          ? "Chưa có lần truy cập trước"
          : `${new Date(deviceInfo?.previousVisit || new Date()).toLocaleString(
              "vi-VN",
              {
                dateStyle: "long",
                timeStyle: "medium",
              }
            )}`}
      </p>
    </div>
  );
}
