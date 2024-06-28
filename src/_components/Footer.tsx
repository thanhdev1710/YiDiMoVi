import {
  Mail,
  MonitorPlay,
  MonitorSmartphone,
  Phone,
  Smartphone,
  TabletSmartphone,
  YoutubeIcon,
} from "lucide-react";
import { LogoMain } from "./LogoMain";
import { NavLinkList } from "./NavLinkList";
import { NavLinkProps } from "./NavLinkProps";
import Link from "next/link";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

const NavLinkAbout: NavLinkProps[] = [
  {
    href: "gioiThieu",
    name: "Giới thiệu",
  },
  {
    href: "cacGoiDichVu",
    name: "Các gói dịch vụ",
  },
  {
    href: "lienHe",
    name: "Liên hệ",
  },
  {
    href: "trungTamHoTro",
    name: "Trung tâm hỗ trợ",
  },
  {
    href: "thongTin",
    name: "Thông tin",
  },
];

const NavLinkService: NavLinkProps[] = [
  { href: "dichVu", name: "Dịch vụ" },
  { href: "goiData", name: "Gói DATA" },
  { href: "quangCao", name: "Quảng cáo" },
  { href: "muaGoi", name: "Mua gói" },
  { href: "baoHanh", name: "Bảo hành" },
];

const NavLinkRegulations: NavLinkProps[] = [
  { href: "quiDinh", name: "Qui định" },
  { href: "dieuKhoanSuDung", name: "Điều khoản sử dụng" },
  { href: "chinhSachThanhToan", name: "Chính sách thanh toán" },
  {
    href: "chinhSachBaoMatThongTinDuLieu",
    name: "Chính sách bảo mật thông tin dữ liệu",
  },
];

export function Footer() {
  return (
    <footer className="space-default pt-6 pb-2 border-b-2 bg-blue-100 dark:bg-blue-950  border-b-blue-default grid grid-cols-4 gap-[32px_60px]">
      <div>
        <LogoMain />
      </div>
      <div className="col-span-3"></div>
      <div className="col-span-2 ">
        <p className="text-sm leading-6">
          YiDiMoVi là trang web xem phim trực tuyến với kho phim đa dạng và chất
          lượng cao. Giao diện thân thiện, dễ sử dụng. Tận hưởng giải trí đỉnh
          cao tại YiDiMoVi!
        </p>
      </div>
      <div className="col-span-2"></div>
      <div>
        <NavLinkList linkList={NavLinkAbout} />
      </div>
      <div>
        <NavLinkList linkList={NavLinkService} />
      </div>
      <div className="col-span-2">
        <NavLinkList linkList={NavLinkRegulations} />
      </div>
      <div className="col-span-4 flex flex-col gap-4 border-b-2 pb-8 border-blue-200">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <span className="leading-[0] text-sm">19009000</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5" />
          <span className="leading-[0] text-sm">yidimovi@gmail.com</span>
        </div>
        <div>
          <p className="text-sm mb-4">Theo dõi chúng tôi trên</p>
          <div className="flex gap-4">
            <Link
              className="p-1 dark:bg-white bg-blue-950 rounded-full"
              href="/"
            >
              <InstagramLogoIcon className="h-6 w-6 text-blue-100 dark:text-blue-950" />
            </Link>
            <Link
              className="p-1 dark:bg-white bg-blue-950 rounded-full"
              href="/"
            >
              <YoutubeIcon className="h-6 w-6 text-blue-100 dark:text-blue-950" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-4 text-sm">
        <p>
          Công ty Cổ phần YiDiMoVi - Người đại diện: Ông YiDiDev. Trụ sở: Tầng
          3, Tòa nhà YiDi Tower, Số 25 Phố Nguyễn Huệ, Phường Bến Nghé, Quận 1,
          TP. Hồ Chí Minh.
        </p>
        <p>
          Địa chỉ liên lạc: Tầng 7, Block B, tòa nhà YiDi Plaza, số 15 Phạm
          Hùng, quận 8, TP. Hồ Chí Minh.
        </p>
        <p>
          Số điện thoại liên hệ: 028 1234 5678. Thư điện tử: hotro@yidimovi.com
          hoặc dichvu@yidimovi.com.
        </p>
        <p>
          Giấy chứng nhận đăng ký doanh nghiệp số 0101234567 do Sở Kế hoạch và
          Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 15/8/2010, cấp đăng ký
          thay đổi lần thứ 15 vào ngày 15/5/2023.
        </p>
        <p>
          Giấy phép cung cấp dịch vụ phát thanh, truyền hình trả tiền số
          456/GP-BTTTT cấp sửa đổi bổ sung lần 2 ngày 12/11/2023.
        </p>
      </div>
      <div className="col-span-4">
        <div className="flex gap-2">
          <MonitorPlay />
          <MonitorSmartphone />
          <TabletSmartphone />
          <Smartphone />
        </div>
      </div>
      <div className="flex text-xs justify-center items-center col-span-4">
        <p>Copyright &copy; by YiDiDev</p>
      </div>
    </footer>
  );
}
