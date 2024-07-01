import { auth } from "@/_libs/auth";
import { DeviceInfo } from "../../../_components/DeviceInfo";

export default async function page() {
  const session = await auth();

  return <DeviceInfo session={session} />;
}
