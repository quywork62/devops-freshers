# DevOps for Freshers — Sổ tay tiếng Việt

Website tĩnh bằng HTML/CSS/JavaScript thuần. Có trang bìa, 7 trang mở đầu và 37 bài ghi chú; mỗi bài có khái niệm, lệnh/ví dụ, bài tập, tiêu chí kiểm tra, tài liệu tham khảo và câu hỏi tự kiểm tra có giải thích.

Nội dung tự biên soạn theo các chủ đề trong đề cương công khai tại https://devopsedu.vn/courses/devops-for-freshers/. Không phải transcript, đáp án bài kiểm tra, video hay tài liệu chính thức của DEVOPSEDU. Chưa truy cập các video/tài liệu yêu cầu đăng nhập. Số bài sổ tay từ 1 đến 37, dòng “Chủ đề … trong khóa gốc” giúp đối chiếu từ bài 0 đến 35, gồm chủ đề 3.1.

## Mở website

Có thể mở trực tiếp `index.html`. Để dùng các chức năng trình duyệt như clipboard thuận tiện hơn, chạy:

```sh
cd /Users/quyph/Downloads/DevOps_Freshers
python3 -m http.server 4174 --bind 127.0.0.1
```

Mở http://127.0.0.1:4174. Dừng bằng Ctrl+C. Không cần npm install hoặc build. Máy chủ này phục vụ cả nội dung thư mục hiện tại cho máy local; không bind 0.0.0.0 khi chỉ xem trên máy cá nhân.

## Các file website

- `index.html`: khung giao diện.
- `style.css`: giao diện sách, responsive, sáng/tối, giảm chuyển động.
- `course.js`: tên, mô tả, nguồn và khóa lưu dữ liệu riêng của khóa học.
- `content.js`: toàn bộ phần, bài học, lệnh, bài tập và câu hỏi.
- `app.js`: điều hướng hash, tìm kiếm không dấu, lưu tiến độ, copy lệnh và phản hồi câu hỏi.
- `.nojekyll`: để GitHub Pages phục vụ website tĩnh.

`#/` là trang bìa, `#/phan/1` là mở đầu phần, `#/bai/1` là bài đầu. Phím ←/→ chuyển trang khi không nhập liệu. Tiến độ được đánh dấu chủ động và lưu localStorage, riêng với sổ tay CKA; không đồng bộ giữa trình duyệt/máy. Câu hỏi tự kiểm tra không chấm chứng chỉ và không lưu điểm. Sáng/tối, cỡ chữ, hiệu ứng và vị trí gần nhất cũng được lưu trên trình duyệt.

Các thư mục/file có sẵn `todolist/`, `todolist.zip` được giữ nguyên. Sổ tay không chạy hay sửa dự án Vue này. Một số bài dùng nó làm tình huống học; Vue CLI/dependency cũ cần được đánh giá tương thích riêng trước khi build. Chưa cài công cụ DevOps hay chạy các lệnh lab trên máy của bạn.

## Đưa lên GitHub Pages

Tạo repo trống, ví dụ `devops-freshers`. Chỉ đưa các file website và README vào repo; không đưa nguyên `todolist/` hoặc `.git` của dự án khác vào. Từ thư mục này có thể chạy sau khi đã xác định đúng repo Git:

```sh
git init
git add index.html style.css course.js content.js app.js .nojekyll README.md
git commit -m "Publish DevOps for Freshers handbook"
git branch -M main
git remote add origin https://github.com/<username>/devops-freshers.git
git push -u origin main
```

Settings → Pages → Deploy from a branch → main → / (root) → Save. Nếu origin đã tồn tại thì kiểm tra `git remote -v`, không thêm origin lần hai. GitHub Pages sẽ công khai website; bản này chưa được tự động upload lên GitHub hay Sites.

## Chỉnh sửa nội dung

Sửa `CHAPTERS` trong content.js. Mỗi bài có id, chapter, ref, title, text, points, code, exercise, verify, warning, source và quiz. Giữ nguyên id để không làm thay đổi bookmark/tiến độ đã có. `quiz.correct` là chỉ số đáp án bắt đầu từ 0.

Ví dụ trong bài học chỉ là hướng dẫn, một số đoạn cần điền thông tin và ghép vào cấu hình hiện có. Các lệnh Linux dành cho Ubuntu lab; không chạy trực tiếp trên macOS nếu không tương thích. GitLab/Jenkins/Harbor/Zabbix cần máy chủ và cấu hình riêng. Những phép kiểm tra UI của sổ tay không xác nhận các lệnh triển khai đã chạy trên một hạ tầng thực tế.
