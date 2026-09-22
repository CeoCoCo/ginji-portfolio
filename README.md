# Ginji Portfolio

Trang giới thiệu cá nhân của Ginji (CoCo), viết bằng HTML và CSS.

## Nội dung
- `public/index.html`: nội dung trang.
- `public/styles.css`: giao diện và bố cục responsive.
- `vercel.json`: cấu hình Vercel, phục vụ thư mục `public`.

## Xem trên máy
Mở `public/index.html` bằng trình duyệt. Không cần cài thư viện hoặc build.

## Triển khai trên Vercel
Import repository `CeoCoCo/ginji-portfolio` vào Vercel.
- Framework Preset: Other.
- Root Directory: gốc repository.
- Output Directory: public (đã khai báo trong vercel.json).
- Build Command và Install Command: để trống.

## Tự chỉnh sửa bằng PowerShell
Cài Git for Windows trước, sau đó chạy từng dòng:

```powershell
git clone https://github.com/CeoCoCo/ginji-portfolio.git
cd ginji-portfolio
Start-Process .\public\index.html
```

Sau khi sửa file và lưu, cấu hình danh tính Git cho dự án (một lần; thay tên và email):

```powershell
git config user.name "Tên của bạn"
git config user.email "Email GitHub hoặc email noreply của bạn"
```

Lưu thay đổi rồi gửi lên GitHub:

```powershell
git status
git add .
git commit -m "Update profile"
git push
```

Nếu đã liên kết Vercel với GitHub, thay đổi trên nhánh main sẽ kích hoạt triển khai mới.
