import Image from "next/image";
import Link from "next/link";

export function LogoMain({ className = "flex" }: { className?: string }) {
  return (
    <Link aria-label="Logo" href="/" className={`items-end ${className}`}>
      <Image
        src="/icon.png"
        draggable={false}
        width={52}
        height={52}
        quality={100}
        priority
        alt="YiDiMoVi Icon"
      />
      <span className="text-2xl font-bold text-[#38B6FF]">iDiMoVi</span>
    </Link>
  );
}
