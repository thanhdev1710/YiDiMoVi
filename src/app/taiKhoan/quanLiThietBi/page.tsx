import { auth } from "@/_libs/auth";
import { DeviceInfo } from "@/_components/DeviceInfo";

export default async function page() {
  const session = await auth();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Thiết bị đã đăng nhập</h1>
      <DeviceInfo session={session} />
    </div>
  );
}
