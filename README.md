# DevOps for Freshers — Ghi chú theo playlist

Website tĩnh HTML/CSS/JavaScript, không cần framework/build/backend.

Nguồn khóa học: https://devopsedu.vn/courses/devops-for-freshers/
Playlist đối chiếu: https://www.youtube.com/playlist?list=PLsvroIvFNP1KU8foUeCC-hbJbqnAggWL2

## Nội dung bản chỉnh theo video

- 7 phần: Giới thiệu, Linux, Git, CI/CD, Docker, Jenkins, Monitoring.
- 37 bài, giữ số bài gốc **0–35 và 3.1**. ID nội bộ dùng lưu tiến độ giữ ổn định.
- Mỗi bài có tóm tắt, các mốc nội dung liên kết về YouTube, video gốc và phần thực hành bổ sung ghi nhãn riêng.
- Các bài mở đầu từng phần vẫn giữ.
- Transcript/phụ đề tự động của cả 37 video đã truy cập để đối chiếu nội dung. Nguồn trả về có cả tiếng Việt và tiếng Anh/phiên bản tự động; trang hiển thị ngôn ngữ đối chiếu ở từng bài.
- Ghi chú là diễn giải ngắn có chọn lọc, không phải transcript đầy đủ. Chưa kiểm chứng toàn bộ từng thao tác/chữ trên màn hình. Không khẳng định các snippet bổ sung giống từng ký tự file tác giả.
- Không phân phối raw transcript, video, license key hoặc tài nguyên khóa học yêu cầu đăng nhập. Các lỗi nhận dạng thuật ngữ rõ ràng được chuẩn hóa; mốc xem lại giúp kiểm tra nguyên bản.

Các chi tiết đã chỉnh theo bài: frontend gồm Vue/Nginx và React/systemd; Java backend có MariaDB/import SQL; GitLab CI bài 16 là Shell runner/backend; Dockerfile bài 21 dùng bối cảnh Java 8 và bài 22 minh họa Node 18.18 Alpine; bài 31 có parameter/Active Choices/start-stop-update-rollback; bài 32 là job xem log; bài 35 kiểm tra TCP listen 8080 bằng item/trigger. Những phiên bản xuất hiện trong video không phải đề xuất phiên bản mới nhất.

## Chạy

```sh
cd /Users/quyph/Downloads/DevOps_Freshers
python3 -m http.server 4174 --bind 127.0.0.1
```

Mở http://127.0.0.1:4174. Ctrl+C để dừng. Có thể mở index.html trực tiếp; clipboard/video nhúng tùy chính sách trình duyệt. Nếu iframe YouTube không hoạt động, dùng nút Mở YouTube hoặc các mốc thời gian.

## Cấu trúc

- index.html: giao diện.
- style.css: sách, responsive, sáng/tối.
- course.js: mô tả, link nguồn và khóa lưu localStorage.
- content.js: bài học, video ID, mốc thời gian và nội dung tự luyện.
- app.js: router, mục lục, tìm kiếm không dấu, player, tiến độ và quiz bổ sung.
- .nojekyll: phục vụ trực tiếp trên GitHub Pages.

Route mới khớp số bài gốc: `#/bai/0`, `#/bai/3.1`, `#/bai/35`. `#/phan/1` vẫn là mở đầu. Bookmark dạng số bài của bản cũ 1–37 không còn tương ứng nội dung cũ; vị trí đọc đã lưu trong localStorage được chuyển đổi một lần khi nâng từ bản trước. Tiến độ hoàn thành dùng ID nội bộ không đổi. Dữ liệu chỉ lưu trên trình duyệt, không đồng bộ giữa thiết bị; kết quả quiz không được lưu.

## Cập nhật GitHub Pages

Bản này chưa tự push. Tại repo đã cấu hình đúng remote:

```sh
git status
git add index.html style.css course.js content.js app.js README.md
git commit -m "Align handbook with original DevOps video lessons"
git push origin main
```

Giữ Settings → Pages → main → / (root). Chỉ thêm file website, tránh thêm .git của thư mục con hay tài nguyên lab. Không thay cấu hình tài khoản Git, remote, credential, history hoặc push tự động trong lần cập nhật source này.
