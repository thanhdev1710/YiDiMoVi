import Main from "@/_components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới Thiệu - YidiMovi",
  alternates: {
    canonical: "/gioiThieu",
    languages: {
      vi: "/vi-VN",
    },
  },
  keywords:
    "YidiMovi, giới thiệu, phim trực tuyến, xem phim, bộ sưu tập phim, chương trình truyền hình",
  description:
    "Giới thiệu về YidiMovi - nền tảng phim trực tuyến hàng đầu, cung cấp bộ sưu tập đa dạng các phim và chương trình truyền hình. Khám phá và trải nghiệm ngay với YidiMovi!",
  openGraph: {
    title: "Giới Thiệu - YidiMovi",
    description:
      "Giới thiệu về YidiMovi - nền tảng phim trực tuyến hàng đầu, cung cấp bộ sưu tập đa dạng các phim và chương trình truyền hình. Khám phá và trải nghiệm ngay với YidiMovi!",
    url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/gioiThieu`,
    type: "website",
    images: {
      url: `/images/website.png`,
      width: 1200,
      height: 630,
      alt: "YiDiMoVi Website",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Giới Thiệu - YidiMovi",
    description:
      "Giới thiệu về YidiMovi - nền tảng phim trực tuyến hàng đầu, cung cấp bộ sưu tập đa dạng các phim và chương trình truyền hình. Khám phá và trải nghiệm ngay với YidiMovi!",
    images: {
      url: `/images/website.png`,
      width: 1200,
      height: 630,
      alt: "YiDiMoVi Website",
    },
  },
  robots: "index, follow",
};

export default function page() {
  return (
    <Main>
      <h1 className="text-center sm:text-4xl text-2xl font-bold mt-8 text-blue-default">
        Giới thiệu về YiDiMoVi
      </h1>
      <section className="space-y-4 mt-10" id="gioiThieu">
        <p>
          Công ty Cổ phần YiDiMoVi là dịch vụ truyền hình Internet hàng đầu tại
          Việt Nam, được cung cấp bởi Công ty Cổ phần YiDiMoVi. Với tiêu chí
          “Không giới hạn”, YiDiMoVi mang đến cho Người Dùng các gói dịch vụ
          truyền hình đa dạng, trên đa nền tảng, đa hạ tầng. Thông qua website{" "}
          <a href="https://yidimovi.vn" target="_blank">
            yidimovi.vn
          </a>{" "}
          và ứng dụng YiDiMoVi được cài đặt trên các thiết bị đầu cuối, Người
          Dùng tại Việt Nam có thể tận hưởng kho nội dung đặc sắc, với gần 200
          kênh truyền hình trong nước và quốc tế, các tựa phim truyện đa quốc
          gia hàng đầu, nhiều giải đấu thể thao đỉnh cao và những chương trình
          giải trí theo xu hướng mới nhất.
        </p>

        <h2 className="font-bold text-2xl">
          1. Đặc điểm ưu việt của YiDiMoVi:
        </h2>
        <ul className="space-y-2 list-disc ml-4">
          <li>
            <strong>Đa nền tảng:</strong> Người Dùng có thể truy cập{" "}
            <a href="https://yidimovi.vn" target="_blank">
              yidimovi.vn
            </a>{" "}
            và ứng dụng YiDiMoVi để sử dụng dịch vụ thông qua kết nối Internet
            trong phạm vi lãnh thổ Việt Nam.
          </li>
          <li>
            <strong>Đa thiết bị:</strong> Mang đến khả năng sử dụng đồng thời
            trên tối đa 5 thiết bị cùng lúc, bao gồm tivi thông minh (smartTV),
            điện thoại di động (smartphone), máy tính bảng (tablet), máy tính
            bàn (PC), máy tính xách tay (laptop) và bộ giải mã truyền hình
            (YiDiMoVi Box). Đặc điểm này giúp duy trì quá trình giải trí liền
            mạch, không giới hạn của khán giả dù ở bất kỳ đâu, trong bất kỳ thời
            điểm nào.
          </li>
          <li>
            <strong>Truyền hình tương tác:</strong> Trở thành khách hàng của
            YiDiMoVi, Người Dùng sẽ luôn “giao tiếp” trực tiếp, đa chiều và tích
            cực với YiDiMoVi xuyên suốt quá trình sử dụng. Đột phá trong việc
            tích hợp công nghệ AI đi cùng dịch vụ truyền dẫn viễn thông đưa
            Người Dùng trở thành chủ thể quyết định trải nghiệm truyền hình,
            giúp không chỉ tiết kiệm thời gian và thao tác khi tìm kiếm nội dung
            mà còn nhận những đề xuất trực quan từ YiDiMoVi.
          </li>
        </ul>

        <h2 className="font-bold text-2xl">2. Các tính năng của YiDiMoVi:</h2>
        <ul className="space-y-2 list-disc ml-4">
          <li>
            <strong>Cá nhân hóa nội dung đề xuất:</strong> Dựa trên việc liên
            tục ghi nhận và nắm bắt sở thích của Người Dùng trong quá trình tìm
            kiếm, thưởng thức, YiDiMoVi sẽ đề xuất nội dung phù hợp nhất trong
            kho phim truyện, ca nhạc và thể thao cho từng Người Dùng cụ thể.
          </li>
          <li>
            <strong>Cá nhân hóa trải nghiệm thưởng thức:</strong> Cho phép Người
            Dùng chắt lọc và tùy chỉnh sao cho phù hợp với sở thích như thay đổi
            ảnh đại diện, cập nhật thông tin tài khoản, xem tiếp tại điểm dừng.
          </li>
          <li>
            <strong>Truyền hình xem lại:</strong> Giúp Người Dùng không bỏ lỡ
            bất kỳ chương trình truyền hình nào trong 24 giờ tiếp theo kể từ
            thời điểm phát sóng.
          </li>
          <li>
            <strong>Lưu yêu thích:</strong> Giúp Người Dùng lưu lại các kênh,
            các chương trình yêu thích.
          </li>
          <li>
            <strong>Đa ngữ:</strong> Cho phép Người Dùng bật/tắt thuyết minh,
            phụ đề tiếng Việt hoặc ngôn ngữ gốc của nhiều kênh truyền hình quốc
            tế.
          </li>
          <li>
            <strong>Đa thoại:</strong> Giúp Người Dùng lựa chọn luồng âm thanh
            bình luận khi theo dõi trực tiếp các sự kiện trong mục Trực tiếp,
            mang đến nhiều cách thưởng thức hơn cho các đối tượng khác nhau.
          </li>
          <li>
            <strong>Độ trễ thấp:</strong> Giảm thiểu độ lệch tín hiệu, đem đến
            trải nghiệm thể thao và giải trí trọn vẹn cho Người Dùng.
          </li>
          <li>
            <strong>Trình phát Moments:</strong> Giúp Người Dùng dễ dàng tìm
            thấy nội dung yêu thích thông qua các video đặc sắc (highlight) có
            độ dài tối đa 60 giây, được trích đăng từ các giải đấu thể thao,
            chương trình giải trí và phim truyện trên YiDiMoVi.
          </li>
          <li>
            <strong>Download to go:</strong> Là tính năng hữu ích giúp Người
            Dùng tải về không giới hạn số lần các chương trình yêu thích để theo
            dõi ở bất kỳ đâu trong 48 giờ.
          </li>
        </ul>
      </section>

      <section className="space-y-4 mt-10" id="cacGoiDichVu">
        <h2 className="font-bold text-2xl">3. Loại hình dịch vụ YiDiMoVi:</h2>
        <p>YiDiMoVi cung cấp hai loại hình dịch vụ chính:</p>
        <ul className="space-y-2 list-disc ml-4">
          <li>
            <strong>Thuê Nội Dung (TVOD):</strong> Cung cấp các nội dung đơn lẻ
            theo yêu cầu, cho phép Khách Hàng lựa chọn nội dung đơn lẻ theo nhu
            cầu và phải trả một khoản phí cho từng nội dung để xem trong khoảng
            thời gian nhất định là 48 giờ kể từ thời điểm Khách Hàng đăng ký
            thuê nội dung thành công.
          </li>
          <li>
            <strong>Gói Dịch Vụ (SVOD):</strong> Cung cấp các nội dung trọn gói,
            được chia thành các Gói Dịch Vụ, mỗi Gói Dịch Vụ có một số khác biệt
            về nội dung và tính năng, cho phép Khách Hàng tùy chọn Gói Dịch Vụ
            theo nhu cầu và phải trả một khoản cước phí cho từng Gói Dịch Vụ.
          </li>
        </ul>
      </section>

      <section className="space-y-4 mt-10">
        <h2 className="font-bold text-2xl">
          4. Cước phí và cách tính cước phí:
        </h2>
        <ul className="space-y-2 list-disc ml-4">
          <li>
            <strong>Gói Dịch Vụ (SVOD):</strong> Cước, phí Gói Dịch Vụ được niêm
            yết công khai tại{" "}
            <a href="https://yidimovi.vn/mua-goi" target="_blank">
              yidimovi.vn/mua-goi
            </a>{" "}
            và mục “Mua Gói” trên Ứng dụng YiDiMoVi. Được tính trọn tháng kể từ
            thời điểm đăng ký Gói.
          </li>
          <li>
            <strong>Thuê Nội Dung (TVOD):</strong> Cước, phí dịch vụ được thông
            báo theo từng nội dung cụ thể trên YiDiMoVi. Được tính trọn 48 giờ
            kể từ thời điểm đăng ký thuê nội dung.
          </li>
        </ul>
        <p>
          YiDiMoVi bảo lưu quyền điều chỉnh cước, phí dịch vụ theo cách thức và
          vào bất kỳ thời điểm nào do YiDiMoVi quyết định phù hợp với quy định
          pháp luật. Biểu phí mới sẽ tự động có hiệu lực tại thời điểm cập nhật
          trên YiDiMoVi và được thông báo đến Người Dùng trước khi Người Dùng
          đăng ký mới Gói Dịch Vụ.
        </p>
      </section>

      <section className="space-y-4 mt-10" id="lienHe">
        <h2 className="font-bold text-2xl">5. Liên hệ</h2>
        <p>
          Nếu có bất kỳ thắc mắc, thông tin nào cần làm rõ hoặc khiếu nại về
          chất lượng dịch vụ, Khách Hàng có thể liên hệ:
        </p>
        <ul className="space-y-2 list-disc ml-4">
          <li>
            <strong>Địa chỉ trụ sở:</strong> Tầng 3, Tòa nhà YiDi Tower, Số 25
            Phố Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh.
          </li>
          <li>
            <strong>Địa chỉ liên lạc:</strong> Tầng 7, Block B, tòa nhà YiDi
            Plaza, số 15 Phạm Hùng, quận 8, TP. Hồ Chí Minh.
          </li>
          <li>
            <strong>Số điện thoại liên hệ:</strong> 028 1234 5678.
          </li>
          <li>
            <strong>Thư điện tử:</strong>{" "}
            <a href="mailto:hotro@yidimovi.com">hotro@yidimovi.com</a> hoặc{" "}
            <a href="mailto:dichvu@yidimovi.com">dichvu@yidimovi.com</a>.
          </li>
        </ul>
        <p>
          Giấy chứng nhận đăng ký doanh nghiệp số 0101234567 do Sở Kế hoạch và
          Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 15/8/2010, cấp đăng ký
          thay đổi lần thứ 15 vào ngày 15/5/2023. Giấy phép cung cấp dịch vụ
          phát thanh, truyền hình trả tiền số 456/GP-BTTTT cấp sửa đổi bổ sung
          lần 2 ngày 12/11/2023.
        </p>
      </section>
    </Main>
  );
}
