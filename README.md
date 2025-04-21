# 🎬 YiDiMoVi – Trang web xem phim trực tuyến

YiDiMoVi là nền tảng xem phim trực tuyến hiện đại, cung cấp trải nghiệm giải trí chất lượng cao với kho phim đa dạng, phong phú. Dự án được xây dựng bằng [Next.js](https://nextjs.org/), hỗ trợ giao diện tối/sáng, tối ưu SEO và hiển thị tốt trên mọi thiết bị.

![YiDiMoVi Banner](https://www.yididev.online/images/website.png)

---

## 🚀 Tính năng nổi bật

- ✅ Giao diện hiện đại, responsive, hỗ trợ **Dark Mode**
- ✅ Tích hợp hệ thống **SEO tối ưu** với cấu hình metadata chuẩn
- ✅ Hiển thị danh sách phim theo từng trang
- ✅ Routing động cho trang xem phim với `slug`
- ✅ Thân thiện với người dùng và dễ dàng mở rộng
- ✅ Thông báo người dùng bằng `react-hot-toast`

---

## 🧠 Công nghệ sử dụng

| Công nghệ           | Vai trò                                  |
| ------------------- | ---------------------------------------- |
| **Next.js**         | Framework React tối ưu cho SSR/SSG       |
| **TypeScript**      | Ngôn ngữ kiểu tĩnh giúp code an toàn hơn |
| **Tailwind CSS**    | Thiết kế giao diện nhanh gọn, hiệu quả   |
| **React Hot Toast** | Hiển thị toast thông báo                 |
| **Google Fonts**    | Tải và tối ưu font Inter tự động         |

---

## ⚙️ Cài đặt và khởi chạy

### 1. Clone dự án

```bash
git clone https://github.com/thanhdev1710/yidimovi.git
cd yidimovi
```

### 2. Cài đặt dependencies

```bash
npm install
# hoặc
yarn
# hoặc
pnpm install
```

### 3. Thiết lập biến môi trường `.env`

Tạo file `.env.local` và điền:

```env
NEXT_PUBLIC_APP_API_KNN
SUPABASE_URL
NEXTAUTH_URL
NEXTAUTH_SECRET
AUTH_TRUST_HOST
AUTH_GOOGLE_SECRET
AUTH_GOOGLE_ID
SUPABASE_KEY
NEXT_PUBLIC_APP_DOMAIN
NEXT_PUBLIC_APP_API_FILM
```

### 4. Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

---

## 📁 Cấu trúc thư mục

```
.
├── app/                 # Cấu trúc routing theo App Router
│   └── page.tsx        # Trang chủ
├── components/         # Các component tái sử dụng (Header, Footer, ThemeProvider)
├── public/             # Hình ảnh tĩnh, favicon...
├── styles/             # File CSS toàn cục
├── utils/              # Các hàm tiện ích (ví dụ: fetch API, xử lý slug)
└── ...
```

---

## 📦 Triển khai

Dự án có thể triển khai dễ dàng trên [Vercel](https://vercel.com) – nền tảng tối ưu nhất cho Next.js:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_source=your-repo-name&utm_campaign=deploy-button)

---

## 🧩 Đóng góp

Rất hoan nghênh mọi ý tưởng hoặc pull request để giúp YiDiMoVi hoàn thiện hơn! Hãy tạo issue nếu bạn gặp lỗi hoặc muốn đề xuất tính năng mới.

---

## 📜 Giấy phép

Dự án được cấp phép theo [MIT License](LICENSE).

---

**YiDiMoVi** – Giải trí mọi lúc, mọi nơi.  
Website phim trực tuyến cho trải nghiệm điện ảnh tuyệt vời hơn mỗi ngày!
