# Ginji Portfolio

Website cá nhân của Ginji (CoCo), viết bằng HTML, CSS và JavaScript thuần. Không cần cài thư viện hoặc build.

## Cấu trúc

- `public/index.html`: nội dung trang.
- `public/styles.css`: giao diện và bố cục responsive.
- `public/app.js`: chuyển ngôn ngữ, ánh sao và tương tác khi cuộn.
- `public/assets/`: ảnh và tài nguyên tĩnh.
- `.github/workflows/pages.yml`: triển khai trực tiếp lên GitHub Pages.

## Xem trên máy

Mở `public/index.html` trong trình duyệt, hoặc phục vụ thư mục `public` bằng HTTP server tĩnh.

Kiểm tra cú pháp JavaScript nếu có Node.js:

```sh
node --check public/app.js
```

## GitHub Pages

URL mặc định dự kiến: https://ceococo.github.io/ginji-portfolio/

Thiết lập một lần tại repository `CeoCoCo/ginji-portfolio`:

1. Mở **Settings → Pages → Build and deployment**.
2. Chọn **Source: GitHub Actions**.
3. Push workflow lên nhánh `main`. Xem tiến trình tại **Actions → Deploy to GitHub Pages**; có thể chạy lại bằng **Run workflow**.

Workflow kiểm tra cú pháp JavaScript, đóng gói riêng thư mục `public` và triển khai bằng các GitHub Pages actions chính thức. Không có bước build, dependency bên ngoài hay token triển khai thủ công; dùng `GITHUB_TOKEN` của workflow.

CSS, JavaScript và ảnh dùng đường dẫn tương đối (`styles.css`, `app.js`, `assets/...`) nên hoạt động dưới `/ginji-portfolio/`. Khi thêm asset, tránh đường dẫn bắt đầu bằng `/` vì nó trỏ tới gốc tên miền thay vì thư mục repository.

Mỗi lần push lên `main` sẽ cập nhật website. Chờ workflow thành công trước khi kiểm tra bản mới.

## Ngắt nền tảng triển khai cũ

Nếu project vẫn được liên kết với Vercel, mở project đó tại **Settings → Git** và ngắt kết nối repository. Xóa cấu hình trong repository không tự ngắt Git integration ở dịch vụ bên ngoài. Không cần xóa project hay deployment cũ để dùng GitHub Pages.

Luồng triển khai của repository này: **GitHub → GitHub Actions → GitHub Pages**.
