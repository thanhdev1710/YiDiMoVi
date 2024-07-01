import { auth } from "@/_libs/auth";
import Link from "next/link";

export default async function page() {
  const session = await auth();
  const list = [
    {
      name: "Tài khoản",
      value: session?.user.phone || "0123456789",
      isSetup: false,
    },
    {
      name: "ID",
      value: session?.user.userId?.toString().padStart(8, "0"),
      isSetup: false,
    },
    { name: "E-mail", value: session?.user.email, isSetup: false },
    { name: "Khu vực", value: session?.user.area, isSetup: true },
  ];
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Hồ sơ</h2>
      <div className="flex justify-between items-center mb-8 px-6 gap-8 py-4 bg-gray-800 rounded">
        <div className="w-20 h-20 p-1 flex-shrink-0 bg-gray-400 rounded-full">
          <img
            className="rounded-full"
            alt={`Ảnh người dùng`}
            src={session?.user?.image || ""}
          />
        </div>
        <div className="w-full flex flex-col justify-between">
          <p className="mb-4 text-white text-xl font-bold">
            {session?.user.phone || "0123456789"}
          </p>
          <div className="flex text-gray-400 text-sm">
            <p className="pr-5 border-r border-gray-400 mr-5">
              Giới tính:{" "}
              <span className="text-sm text-white font-semibold">
                {session?.user.gender
                  ? session.user.gender
                  : "( Chưa cập nhật )"}
              </span>
            </p>
            <p>
              Ngày sinh:{" "}
              <span className="text-sm text-white font-semibold">
                {session?.user.birthday
                  ? new Date(session.user.birthday).toLocaleDateString("vi-VN")
                  : "( Chưa cập nhật )"}
              </span>
            </p>
          </div>
        </div>
        <Link
          href="/taiKhoan/thongTinCaNhan/thayDoi"
          className="hover:!bg-gray-600 py-2 px-4 rounded flex-shrink-0 text-sm font-semibold"
        >
          Thay đổi
        </Link>
      </div>
      <h2 className="text-lg font-semibold mb-4">Tài khoản bảo mật</h2>
      <div className="flex flex-col mb-8 px-6 py-4 bg-gray-800 rounded">
        {list.map((item) => (
          <div
            className="border-b-2 flex justify-between items-center border-gray-400 py-4 last:border-none first:pt-0 last:pb-0"
            key={item.name}
          >
            <p className="text-gray-400 text-sm py-2">
              <span className="w-20 inline-block">{item.name}:</span>
              <span className="text-white font-bold ml-6">
                {item.value ? item.value : "( Chưa cập nhật )"}
              </span>
            </p>
            {item.isSetup && (
              <Link
                href="/taiKhoan/thongTinCaNhan/thayDoi"
                className="hover:!bg-gray-600 py-2 px-4 rounded flex-shrink-0 text-sm font-semibold"
              >
                Thay đổi
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
