import Image from "next/image";
import icon from "../../public/icon.png";
import Link from "next/link";

export function LogoMain() {
  return (
    <Link href="/" className="flex items-end">
      <Image
        src={icon}
        width={52}
        height={52}
        quality={100}
        alt="YiDiMoVi Icon"
      />
      <span className="text-2xl font-bold text-blue-default">iDiMoVi</span>
    </Link>
  );
}
