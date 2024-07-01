import { auth } from "@/_libs/auth";

export default async function page() {
  const session = await auth();
  const deviceInfo = await fetch(
    `${process.env.NEXT_PUBLIC_APP_DOMAIN}api/logDeviceInfo?email=${session?.user.email}`,
    { next: { revalidate: 0 } }
  ).then((res) => res.json());
  console.log(deviceInfo);
  return (
    <div>
      <h2>{deviceInfo.userAgent}</h2>
      {deviceInfo.previousVisit === "Chưa có lần truy cập trước"
        ? "Chưa có lần truy cập trước"
        : new Date(deviceInfo.previousVisit).toLocaleString("vi-VN")}
    </div>
  );
}
