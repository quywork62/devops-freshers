/* Đối chiếu phụ đề 37 video; không phân phối transcript. */
const CHAPTERS = [
  {
    "title": "Giới thiệu",
    "en": "Introduction",
    "intro": "Từ một thay đổi mã nguồn đến một ứng dụng đang phục vụ người dùng có nhiều bước hơn việc chạy một lệnh. Phần mở đầu giúp bạn nhìn được toàn bộ hành trình và chuẩn bị cách học bằng thực hành.",
    "goals": [
      "Xác định mục tiêu và sản phẩm đầu ra của việc học.",
      "Tổ chức một môi trường lab và nhật ký thực hành.",
      "Phân biệt ghi chú độc lập này với nội dung video khóa học."
    ],
    "lessons": [
      {
        "ref": "0",
        "title": "Những lưu ý giúp bạn thành công trong DevOps (video quan trọng nhất)",
        "text": "Bài mở đầu tập trung vào tư duy học và lựa chọn công cụ theo nhu cầu doanh nghiệp. Tác giả khuyên hiểu lý do triển khai, thực hành lại và học các phần theo trình tự thay vì chỉ sao chép lệnh.",
        "points": [
          "Tư duy giúp giải thích vì sao dùng một công cụ; bài này định hướng trước khi đi vào kỹ thuật.",
          "Cân nhắc nguồn lực và khả năng người khác tiếp quản, bảo trì giải pháp.",
          "Tài nguyên được đề xuất trong video: máy 16 GB RAM, khoảng 80 GB disk trống; có nhắc phương án cho máy 8 GB."
        ],
        "code": "# Trên Ubuntu lab, tạo nơi lưu ghi chú\nmkdir -p ~/devops-lab/{notes,projects,artifacts}\nprintf 'Mục tiêu: triển khai ứng dụng có CI/CD và giám sát\\n' > ~/devops-lab/notes/goals.txt\ncat ~/devops-lab/notes/goals.txt",
        "exercise": "Viết một mục tiêu có thể kiểm tra, ví dụ triển khai trang tĩnh bằng Nginx, tự động cập nhật sau commit và phát hiện khi dịch vụ ngừng chạy. Ghi rõ máy nào là máy cá nhân, máy nào là Ubuntu lab.",
        "verify": "Có mục tiêu, sơ đồ máy và cách kiểm tra thành công. Khi một bước lỗi, bạn mô tả được đang lỗi ở build, deploy hay runtime.",
        "warning": "Các bài Linux dành cho Ubuntu lab. Không chạy lệnh quản trị theo thói quen trên máy cá nhân hoặc hệ thống công việc. Sổ tay không chứa video hay đáp án quiz của DEVOPSEDU.",
        "source": "https://devopsedu.vn/courses/devops-for-freshers/",
        "quiz": {
          "question": "Một bài lab được coi là hoàn thành khi nào?",
          "options": [
            "Đã chạy hết lệnh mẫu.",
            "Đạt mục tiêu và có bằng chứng kiểm tra kết quả.",
            "Không có dòng chữ màu đỏ trong terminal."
          ],
          "correct": 1,
          "explanation": "Thành công của một lệnh chưa chứng minh ứng dụng hoạt động đúng; cần kiểm tra đầu ra và hành vi thực tế."
        },
        "id": 1,
        "chapter": 1,
        "timeline": [
          {
            "time": "3:14",
            "seconds": 194,
            "text": "Tư duy giúp giải thích vì sao dùng một công cụ; bài này định hướng trước khi đi vào kỹ thuật."
          },
          {
            "time": "7:30",
            "seconds": 450,
            "text": "Cân nhắc nguồn lực và khả năng người khác tiếp quản, bảo trì giải pháp."
          },
          {
            "time": "8:57",
            "seconds": 537,
            "text": "Tài nguyên được đề xuất trong video: máy 16 GB RAM, khoảng 80 GB disk trống; có nhắc phương án cho máy 8 GB."
          },
          {
            "time": "9:55",
            "seconds": 595,
            "text": "Lộ trình nối Linux, Git, Docker, CI/CD, Jenkins và Monitoring; các phần bổ trợ nhau."
          },
          {
            "time": "12:30",
            "seconds": 750,
            "text": "Web của tác giả đặt video cạnh lệnh/tài liệu; nên triển khai từng bước rồi làm lại để hiểu."
          }
        ],
        "videoId": "3lt5qnIdebY",
        "videoUrl": "https://www.youtube.com/watch?v=3lt5qnIdebY",
        "captionLanguage": "vi",
        "duration": "13:49",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      }
    ],
    "id": 1
  },
  {
    "title": "Linux",
    "en": "Linux Foundations",
    "intro": "Làm quen máy chủ, terminal, quyền truy cập và dịch vụ. Sau phần này bạn sẽ biết tìm cấu hình, đọc log và đưa một ứng dụng lên server bằng quy trình có thể kiểm tra.",
    "goals": [
      "Sử dụng terminal và quyền filesystem có chủ đích.",
      "Phân biệt NAT, bridge và các lớp kết nối tới dịch vụ.",
      "Triển khai frontend/backend và theo dõi tiến trình."
    ],
    "lessons": [
      {
        "ref": "1",
        "title": "Tại sao sử dụng Linux?",
        "text": "Tác giả giải thích lý do dùng Linux để triển khai dự án, qua sáu nhóm ưu điểm. Đây là bài lý thuyết lựa chọn nền tảng, chưa phải bài thao tác terminal.",
        "points": [
          "Hiệu suất và chi phí: phân tích tài nguyên duy trì hệ điều hành so với tài nguyên chạy dự án.",
          "Bảo mật và ổn định: mã nguồn mở, cộng đồng xử lý vấn đề và quản lý truy cập.",
          "Khả năng kiểm soát, linh hoạt và nhiều bản phân phối để lựa chọn."
        ],
        "code": "cat /etc/os-release\nuname -m\nwhoami\npwd\nps -p $$ -o comm=",
        "exercise": "Ghi lại phiên bản hệ điều hành, kiến trúc CPU, user và shell của Ubuntu lab. Đối chiếu với máy macOS nếu đang dùng Mac.",
        "verify": "Nhận ra Ubuntu x86_64 và Ubuntu ARM64 cần package/image tương ứng; phân biệt lệnh Linux với lệnh macOS.",
        "warning": "Có package manager không đồng nghĩa cùng lệnh trên mọi bản Linux; apt thuộc hệ Debian/Ubuntu.",
        "source": "https://documentation.ubuntu.com/server/",
        "quiz": {
          "question": "Một ứng dụng báo lỗi ghi file: cần kiểm tra điều gì trước?",
          "options": [
            "User chạy tiến trình và quyền đường dẫn.",
            "Đổi toàn bộ thư mục thành quyền 777.",
            "Cài lại hệ điều hành."
          ],
          "correct": 0,
          "explanation": "Quyền hiệu lực phụ thuộc danh tính tiến trình và quyền của file/các thư mục cha."
        },
        "id": 2,
        "chapter": 2,
        "timeline": [
          {
            "time": "1:01",
            "seconds": 61,
            "text": "Hiệu suất và chi phí: phân tích tài nguyên duy trì hệ điều hành so với tài nguyên chạy dự án."
          },
          {
            "time": "1:45",
            "seconds": 105,
            "text": "Bảo mật và ổn định: mã nguồn mở, cộng đồng xử lý vấn đề và quản lý truy cập."
          },
          {
            "time": "2:34",
            "seconds": 154,
            "text": "Khả năng kiểm soát, linh hoạt và nhiều bản phân phối để lựa chọn."
          },
          {
            "time": "3:04",
            "seconds": 184,
            "text": "Phát triển/cập nhật, tương thích nhiều nền tảng và cộng đồng chuyên môn lớn."
          }
        ],
        "videoId": "wOtdMYcH3Mk",
        "videoUrl": "https://www.youtube.com/watch?v=wOtdMYcH3Mk",
        "captionLanguage": "vi",
        "duration": "4:25",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "2",
        "title": "Cài đặt VMware Workstation",
        "text": "Video ngắn thao tác cài VMware Workstation trên Windows: chạy bộ cài, đi qua các bước, hoàn tất rồi mở ứng dụng. Chưa tạo Ubuntu trong bài này.",
        "points": [
          "Chuẩn bị môi trường máy ảo và chạy bộ cài trên Windows.",
          "Đi qua các màn hình cài đặt, kết thúc bằng Finish.",
          "Mở VMware; video có bước nhập license qua Help theo bối cảnh lúc quay."
        ],
        "code": "# Trên Ubuntu guest sau khi cài\nlscpu\nfree -h\ndf -h /\nlsblk",
        "exercise": "Lập bảng host/guest, CPU architecture, RAM, disk và mục đích từng VM. Chụp snapshot trước các bài cài dịch vụ lớn.",
        "verify": "Guest khởi động ổn định, đủ dung lượng, biết cách mở console khi SSH không vào được.",
        "warning": "Không chọn ISO x86_64 cho guest ARM chỉ vì cùng tên Ubuntu; kiểm tra hỗ trợ của hypervisor.",
        "source": "https://documentation.ubuntu.com/server/tutorial/installation/",
        "quiz": {
          "question": "Host và guest là gì?",
          "options": [
            "Hai user trong cùng Ubuntu.",
            "Máy chạy hypervisor và hệ điều hành bên trong máy ảo.",
            "Hai branch của Git."
          ],
          "correct": 1,
          "explanation": "Hypervisor cung cấp phần cứng ảo cho hệ điều hành guest chạy trên host."
        },
        "id": 3,
        "chapter": 2,
        "timeline": [
          {
            "time": "0:12",
            "seconds": 12,
            "text": "Chuẩn bị môi trường máy ảo và chạy bộ cài trên Windows."
          },
          {
            "time": "0:38",
            "seconds": 38,
            "text": "Đi qua các màn hình cài đặt, kết thúc bằng Finish."
          },
          {
            "time": "0:58",
            "seconds": 58,
            "text": "Mở VMware; video có bước nhập license qua Help theo bối cảnh lúc quay."
          }
        ],
        "videoId": "PaRftNgG2jY",
        "videoUrl": "https://www.youtube.com/watch?v=PaRftNgG2jY",
        "captionLanguage": "vi",
        "duration": "1:18",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "3",
        "title": "Cài đặt Ubuntu Server (mạng bridge)",
        "text": "Bài tạo Ubuntu Server trong VMware, kiểm tra mạng, cài SSH và thiết lập IP tĩnh. Cuối bài lưu snapshot để dùng lại máy mẫu và kết nối từ terminal.",
        "points": [
          "Kiểm tra mạng bridge và gateway trước khi tạo/cấu hình server.",
          "Chọn disk cho VM; video đề xuất tối thiểu 20 GB và nhắc phương án ít tài nguyên hơn.",
          "Thiết lập thông tin server và chọn cài OpenSSH."
        ],
        "code": "ip -br address\nip route\nhostname -I\nsystemctl status ssh --no-pager\n# Từ host, thay địa chỉ đã kiểm tra\nssh <user-lab>@<ip-guest>",
        "exercise": "Đặt VM ở bridge nếu mạng cho phép, lấy IP guest và kết nối từ host. Nếu không thành công, lần lượt kiểm tra IP, route, dịch vụ SSH và firewall.",
        "verify": "Host SSH được vào đúng guest; ghi lại địa chỉ và user. Không nhầm IP host với IP guest.",
        "warning": "Thay Netplan qua SSH có thể làm mất kết nối; dùng console và netplan try nếu cấu hình hỗ trợ.",
        "source": "https://documentation.ubuntu.com/server/how-to/networking/configure-networks/",
        "quiz": {
          "question": "Bridge có làm server tự truy cập được từ internet không?",
          "options": [
            "Có, luôn luôn.",
            "Không, còn phụ thuộc routing, NAT và firewall phía ngoài.",
            "Chỉ khi đổi hostname."
          ],
          "correct": 1,
          "explanation": "Bridge chủ yếu mô tả cách guest nối vào mạng, không tự mở đường truy cập từ internet."
        },
        "id": 4,
        "chapter": 2,
        "timeline": [
          {
            "time": "0:11",
            "seconds": 11,
            "text": "Kiểm tra mạng bridge và gateway trước khi tạo/cấu hình server."
          },
          {
            "time": "3:31",
            "seconds": 211,
            "text": "Chọn disk cho VM; video đề xuất tối thiểu 20 GB và nhắc phương án ít tài nguyên hơn."
          },
          {
            "time": "6:39",
            "seconds": 399,
            "text": "Thiết lập thông tin server và chọn cài OpenSSH."
          },
          {
            "time": "7:50",
            "seconds": 470,
            "text": "Chỉnh cấu hình mạng dưới /etc/netplan để đặt IP tĩnh; địa chỉ phụ thuộc mạng lab."
          },
          {
            "time": "11:06",
            "seconds": 666,
            "text": "Tạo snapshot, khởi động lại và SSH từ máy cá nhân vào server."
          }
        ],
        "videoId": "DjlGte968ko",
        "videoUrl": "https://www.youtube.com/watch?v=DjlGte968ko",
        "captionLanguage": "vi",
        "duration": "12:28",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "3.1",
        "title": "Cài đặt Ubuntu Server (mạng NAT)",
        "text": "Bài bổ sung cài Ubuntu dùng NAT, tạo một server template để clone cho các phần sau. Trọng tâm là kết nối SSH, cấu hình địa chỉ tĩnh và tổ chức môi trường lab.",
        "points": [
          "Tạo VM template làm nguồn clone thay vì cài lại mọi server.",
          "Đọc interface/địa chỉ mạng khi cài và chọn OpenSSH.",
          "Xác định IPv4 của guest và kết nối SSH bằng terminal."
        ],
        "code": "# Trong guest\nip -br address\nip route\nss -lnt\n# Trên host, nếu đã cấu hình host:2222 -> guest:22\nssh -p 2222 <user-lab>@127.0.0.1",
        "exercise": "Cấu hình một forwarding chỉ bind loopback của host nếu công cụ hỗ trợ. So sánh kết nối trực tiếp IP guest với kết nối qua cổng chuyển tiếp.",
        "verify": "Giải thích được hai cổng 2222 và 22 thuộc bên nào; kết nối đến đúng guest.",
        "warning": "Không bind dịch vụ lab ra mọi interface nếu chỉ cần dùng từ máy cá nhân.",
        "source": "https://documentation.ubuntu.com/server/how-to/networking/",
        "quiz": {
          "question": "Chuyển host:2222 sang guest:22 thì SSH từ host dùng cổng nào?",
          "options": [
            "22 trong mọi trường hợp.",
            "2222 cho đường chuyển tiếp đó.",
            "80."
          ],
          "correct": 1,
          "explanation": "Client gọi cổng đầu vào của forwarding; bên trong guest dịch vụ vẫn có thể nghe cổng 22."
        },
        "id": 5,
        "chapter": 2,
        "timeline": [
          {
            "time": "0:42",
            "seconds": 42,
            "text": "Tạo VM template làm nguồn clone thay vì cài lại mọi server."
          },
          {
            "time": "1:48",
            "seconds": 108,
            "text": "Đọc interface/địa chỉ mạng khi cài và chọn OpenSSH."
          },
          {
            "time": "3:21",
            "seconds": 201,
            "text": "Xác định IPv4 của guest và kết nối SSH bằng terminal."
          },
          {
            "time": "5:03",
            "seconds": 303,
            "text": "Đặt IP tĩnh thay DHCP; địa chỉ/gateway phải theo mạng NAT của bạn."
          },
          {
            "time": "6:18",
            "seconds": 378,
            "text": "Lưu môi trường mẫu để mở rộng các server phục vụ những quy trình tiếp theo."
          }
        ],
        "videoId": "v1zrrq7bfEQ",
        "videoUrl": "https://www.youtube.com/watch?v=v1zrrq7bfEQ",
        "captionLanguage": "vi",
        "duration": "7:19",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "4",
        "title": "Các lệnh Linux thông dụng",
        "text": "Video thực hành trực tiếp các lệnh điều hướng, quản lý file và đọc nội dung. Tác giả liên hệ việc xem cuối file với log dự án và giải thích khi nào cần quyền sudo.",
        "points": [
          "cd, đường dẫn / và ~; quan sát vị trí đang làm việc.",
          "Dùng Tab để hoàn thành tên, nhấn tiếp khi có nhiều tên khớp.",
          "Tạo thư mục; tiếp đó thực hành tạo, sao chép, di chuyển và xóa file/thư mục."
        ],
        "code": "mkdir -p ~/devops-lab/files\ncd ~/devops-lab/files\nprintf 'hello\\n' > hello.txt\ncp hello.txt hello.backup.txt\nls -la\ncat hello.txt",
        "exercise": "Tạo cây thư mục lab, sao lưu một file rồi sửa bản gốc. So sánh hai file bằng diff.",
        "verify": "Phân biệt được file đang sửa với bản sao lưu; giải thích pwd trước và sau cd.",
        "warning": "Dấu > ghi đè file, còn >> nối thêm. Kiểm tra đường dẫn trước khi redirect.",
        "source": "https://www.gnu.org/software/coreutils/manual/coreutils.html",
        "quiz": {
          "question": "Lệnh nào nối nội dung vào cuối file?",
          "options": [
            "echo hello > notes.txt",
            "echo hello >> notes.txt",
            "cat > /dev/null"
          ],
          "correct": 1,
          "explanation": ">> append; > có thể làm mất nội dung cũ."
        },
        "id": 6,
        "chapter": 2,
        "timeline": [
          {
            "time": "1:43",
            "seconds": 103,
            "text": "cd, đường dẫn / và ~; quan sát vị trí đang làm việc."
          },
          {
            "time": "3:14",
            "seconds": 194,
            "text": "Dùng Tab để hoàn thành tên, nhấn tiếp khi có nhiều tên khớp."
          },
          {
            "time": "4:59",
            "seconds": 299,
            "text": "Tạo thư mục; tiếp đó thực hành tạo, sao chép, di chuyển và xóa file/thư mục."
          },
          {
            "time": "8:47",
            "seconds": 527,
            "text": "echo, ghi nội dung vào file, đọc nội dung và lấy các dòng cuối bằng tail."
          },
          {
            "time": "11:52",
            "seconds": 712,
            "text": "sudo để thực hiện thao tác cần quyền; phân biệt user thường và root."
          }
        ],
        "videoId": "qhVLR_6aqK0",
        "videoUrl": "https://www.youtube.com/watch?v=qhVLR_6aqK0",
        "captionLanguage": "en-US",
        "duration": "13:09",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "5",
        "title": "Cách sử dụng Vim trong Linux",
        "text": "Bài giới thiệu các thao tác Vim cần thiết để sửa cấu hình: mở file, chuyển chế độ, chỉnh dòng, tìm kiếm rồi lưu hoặc bỏ thay đổi.",
        "points": [
          "Cài Vim trên Ubuntu bằng apt với quyền phù hợp.",
          "Mở file bằng vi; i để nhập và Esc để trở lại chế độ lệnh.",
          "Thực hành dd xóa dòng, u hoàn tác, yy sao chép và p dán; phụ đề có thể nhận sai tên phím."
        ],
        "code": "cp ~/devops-lab/files/hello.txt ~/devops-lab/files/hello.before-vim.txt\nvim ~/devops-lab/files/hello.txt\n# Trong Vim: i -> nhập nội dung -> Esc -> :wq -> Enter\ncat ~/devops-lab/files/hello.txt",
        "exercise": "Thêm một dòng, lưu, mở lại rồi thử thoát không lưu một thay đổi khác. So sánh file sau cả hai lần.",
        "verify": "Bạn thoát Vim được và biết thay đổi nào đã được ghi xuống disk.",
        "warning": "Không thử sửa file cấu hình hệ thống đầu tiên khi chưa quen thao tác; dùng file trong thư mục lab.",
        "source": "https://vimhelp.org/usr_02.txt.html",
        "quiz": {
          "question": "Muốn bỏ thay đổi chưa lưu và thoát Vim?",
          "options": [
            ":wq",
            ":q!",
            ":w"
          ],
          "correct": 1,
          "explanation": ":q! thoát và bỏ thay đổi chưa lưu; :wq ghi file trước khi thoát."
        },
        "id": 7,
        "chapter": 2,
        "timeline": [
          {
            "time": "0:30",
            "seconds": 30,
            "text": "Cài Vim trên Ubuntu bằng apt với quyền phù hợp."
          },
          {
            "time": "1:06",
            "seconds": 66,
            "text": "Mở file bằng vi; i để nhập và Esc để trở lại chế độ lệnh."
          },
          {
            "time": "2:00",
            "seconds": 120,
            "text": "Thực hành dd xóa dòng, u hoàn tác, yy sao chép và p dán; phụ đề có thể nhận sai tên phím."
          },
          {
            "time": "2:28",
            "seconds": 148,
            "text": "Tìm bằng /, lưu/thoát bằng :x hoặc bỏ thay đổi bằng :q!."
          }
        ],
        "videoId": "uK2xiRITSUE",
        "videoUrl": "https://www.youtube.com/watch?v=uK2xiRITSUE",
        "captionLanguage": "vi",
        "duration": "3:09",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "6",
        "title": "Các câu lệnh Linux khác",
        "text": "Bài bổ sung nhóm lệnh xem tài nguyên, đổi hostname, quản lý tiến trình và kiểm tra kết nối giữa server. Công cụ thiếu được cài qua apt trước khi sử dụng.",
        "points": [
          "top để quan sát tiến trình/tài nguyên; tiếp theo đổi hostname và reboot.",
          "Dùng netstat; khi chưa có thì cài gói net-tools.",
          "Đọc user, PID và câu lệnh trong danh sách process."
        ],
        "code": "ps aux | head\nss -lnt\nsystemctl --failed --no-pager\njournalctl -u nginx -n 30 --no-pager\ncurl -I http://127.0.0.1",
        "exercise": "Với Nginx đã cài trên Ubuntu lab, xác định process, service, cổng và HTTP status. Nếu chưa cài, dùng một service hiện có để luyện đọc trạng thái.",
        "verify": "Bạn chỉ ra được ứng dụng lỗi vì không chạy, không nghe cổng hay phản hồi HTTP bất thường.",
        "warning": "Một số log cần quyền đọc; dùng sudo có mục đích, không thay quyền toàn bộ /var/log.",
        "source": "https://www.freedesktop.org/software/systemd/man/latest/journalctl.html",
        "quiz": {
          "question": "Process chạy nhưng HTTP không vào được: nên kiểm tra thêm gì?",
          "options": [
            "Cổng bind và đường đi request.",
            "Chỉ đổi tên process.",
            "Bỏ qua vì process chạy là đủ."
          ],
          "correct": 0,
          "explanation": "Process tồn tại không chứng minh nó lắng nghe đúng IP/cổng hoặc phục vụ request đúng."
        },
        "id": 8,
        "chapter": 2,
        "timeline": [
          {
            "time": "0:48",
            "seconds": 48,
            "text": "top để quan sát tiến trình/tài nguyên; tiếp theo đổi hostname và reboot."
          },
          {
            "time": "2:43",
            "seconds": 163,
            "text": "Dùng netstat; khi chưa có thì cài gói net-tools."
          },
          {
            "time": "3:41",
            "seconds": 221,
            "text": "Đọc user, PID và câu lệnh trong danh sách process."
          },
          {
            "time": "4:39",
            "seconds": 279,
            "text": "Thử kết nối TCP bằng telnet tới IP/port server khác."
          },
          {
            "time": "5:38",
            "seconds": 338,
            "text": "traceroute theo TCP/cổng; cuối bài hướng dẫn apt remove công cụ."
          }
        ],
        "videoId": "RUGdhS0TMMo",
        "videoUrl": "https://www.youtube.com/watch?v=RUGdhS0TMMo",
        "captionLanguage": "vi",
        "duration": "7:18",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "7",
        "title": "Quyền truy cập trong Linux",
        "text": "Video đi từ quản lý user/group đến quyền sở hữu và quyền rwx. Tác giả dùng ví dụ file/thư mục để giải thích quyền của owner, group và người dùng khác.",
        "points": [
          "So sánh useradd với adduser và xem các user được tạo.",
          "Xem danh sách user, xóa user, tạo group và thay đổi thành viên group.",
          "Tách quyền sở hữu khỏi quyền truy cập; thay owner/group bằng chown."
        ],
        "code": "id\nmkdir -p ~/devops-lab/permissions\nprintf '#!/bin/sh\\necho lab-ok\\n' > ~/devops-lab/permissions/check.sh\nchmod 750 ~/devops-lab/permissions/check.sh\nls -l ~/devops-lab/permissions/check.sh\n~/devops-lab/permissions/check.sh",
        "exercise": "Tạo script trong lab, thử chạy trước/sau khi thêm quyền execute. Giải thích mode 750 cho từng nhóm quyền.",
        "verify": "Owner có rwx, group có r-x và others không có quyền; script in lab-ok.",
        "warning": "Không dùng chmod -R 777 để chữa mọi lỗi. Không chạy chown đệ quy trên thư mục hệ thống theo ví dụ.",
        "source": "https://www.gnu.org/software/coreutils/manual/html_node/File-permissions.html",
        "quiz": {
          "question": "Mode 640 cho group quyền gì?",
          "options": [
            "Đọc và ghi.",
            "Chỉ đọc.",
            "Thực thi."
          ],
          "correct": 1,
          "explanation": "6 = rw-, 4 = r--, 0 = ---. Quyền trên thư mục có cách diễn giải riêng."
        },
        "id": 9,
        "chapter": 2,
        "timeline": [
          {
            "time": "1:36",
            "seconds": 96,
            "text": "So sánh useradd với adduser và xem các user được tạo."
          },
          {
            "time": "3:20",
            "seconds": 200,
            "text": "Xem danh sách user, xóa user, tạo group và thay đổi thành viên group."
          },
          {
            "time": "5:46",
            "seconds": 346,
            "text": "Tách quyền sở hữu khỏi quyền truy cập; thay owner/group bằng chown."
          },
          {
            "time": "7:29",
            "seconds": 449,
            "text": "Đổi quyền sở hữu đệ quy cho thư mục và nội dung bên trong."
          },
          {
            "time": "11:24",
            "seconds": 684,
            "text": "Thư mục cần quyền x để đi qua; quy đổi r=4, w=2, x=1 và đọc kết quả ls -l."
          }
        ],
        "videoId": "U5Oufnvomt4",
        "videoUrl": "https://www.youtube.com/watch?v=U5Oufnvomt4",
        "captionLanguage": "en-US",
        "duration": "14:32",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "8",
        "title": "Tư duy triển khai mọi dự án",
        "text": "Bài đưa ra khung phân tích trước khi triển khai: môi trường/công cụ cần thiết, file cấu hình, cách build và cách run. Tác giả nhấn mạnh thư mục riêng và user chạy ứng dụng riêng.",
        "points": [
          "Xác định công cụ và phiên bản dự án cần; không cài phiên bản thấp hơn yêu cầu.",
          "Phân biệt file chức năng, file cấu hình và các file mô tả hệ thống.",
          "Build tạo đầu ra; run sử dụng đầu ra đó để chạy ứng dụng."
        ],
        "code": "# Trong thư mục dự án cần triển khai\nls -la\nfind . -maxdepth 2 -name 'package.json' -o -name 'pom.xml' -o -name 'README*'\n# Đọc README và file khai báo trước khi chọn lệnh build\nss -lnt",
        "exercise": "Với todolist đã có, đọc package.json và ghi lại lệnh build, nơi sinh artifact, cách phục vụ HTTP và cách lưu dữ liệu ứng dụng.",
        "verify": "Có sơ đồ triển khai gồm nguồn, artifact, service, cấu hình, cổng và phép kiểm tra.",
        "warning": "Không chạy install script của dự án chưa kiểm tra chỉ vì thấy một file package.json.",
        "source": "https://12factor.net/",
        "quiz": {
          "question": "File nào phù hợp đưa sang web server của frontend tĩnh?",
          "options": [
            "Toàn bộ node_modules nếu muốn ít lỗi.",
            "Artifact sau build, thường là dist/.",
            "Chỉ package.json."
          ],
          "correct": 1,
          "explanation": "Web server tĩnh phục vụ HTML/CSS/JS được tạo bởi bước build; không cần toàn bộ môi trường phát triển."
        },
        "id": 10,
        "chapter": 2,
        "timeline": [
          {
            "time": "2:21",
            "seconds": 141,
            "text": "Xác định công cụ và phiên bản dự án cần; không cài phiên bản thấp hơn yêu cầu."
          },
          {
            "time": "3:05",
            "seconds": 185,
            "text": "Phân biệt file chức năng, file cấu hình và các file mô tả hệ thống."
          },
          {
            "time": "3:43",
            "seconds": 223,
            "text": "Build tạo đầu ra; run sử dụng đầu ra đó để chạy ứng dụng."
          },
          {
            "time": "4:28",
            "seconds": 268,
            "text": "Mỗi dự án có thư mục và user riêng; tránh chạy ứng dụng bằng root."
          }
        ],
        "videoId": "Ri2TFd8ddyg",
        "videoUrl": "https://www.youtube.com/watch?v=Ri2TFd8ddyg",
        "captionLanguage": "vi",
        "duration": "5:33",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "9",
        "title": "Triển khai các dự án Frontend",
        "text": "Video dùng todolist Vue.js, hướng dẫn đọc dự án và tự tìm cách build/run, sau đó triển khai theo nhiều cách. Bài không chỉ nói về Nginx mà còn có cách chạy và quản lý tiến trình.",
        "points": [
          "Đưa source todolist lên server và giải nén.",
          "Research cách build Vue thay vì chỉ chép một lệnh có sẵn.",
          "Đọc vue.config.js để xác định cấu hình cổng."
        ],
        "code": "# Trong dự án frontend lab, sau khi chọn Node tương thích\nnode --version\nnpm --version\nnpm run build\n# Sau khi đã cài/cấu hình Nginx trên Ubuntu lab\nsudo nginx -t\ncurl -I http://127.0.0.1",
        "exercise": "Với source frontend lab, ghi lại ba hướng xuất hiện trong bài: chạy trực tiếp, phục vụ artifact Vue bằng Nginx, và quản lý React bằng systemd. Xác định file cấu hình và user cho từng hướng.",
        "verify": "Trang hiển thị và asset trả HTTP thành công. Refresh route không làm xuất hiện 404 ngoài dự kiến.",
        "warning": "Không dùng npm run serve làm dịch vụ production. Nếu dự án dùng phiên bản đã hết hỗ trợ, ghi rõ nhu cầu nâng cấp trước vận hành thật.",
        "source": "https://nginx.org/en/docs/beginners_guide.html",
        "quiz": {
          "question": "Build frontend thành công nhưng JS trả 404 thường cần kiểm tra gì?",
          "options": [
            "Base URL và đường dẫn asset ở nơi deploy.",
            "Mật khẩu database ngay lập tức.",
            "Chỉ số CPU của editor."
          ],
          "correct": 0,
          "explanation": "Deploy dưới subpath có thể làm asset trỏ sai dù index.html đã tải được."
        },
        "id": 11,
        "chapter": 2,
        "timeline": [
          {
            "time": "2:57",
            "seconds": 177,
            "text": "Đưa source todolist lên server và giải nén."
          },
          {
            "time": "6:05",
            "seconds": 365,
            "text": "Research cách build Vue thay vì chỉ chép một lệnh có sẵn."
          },
          {
            "time": "9:07",
            "seconds": 547,
            "text": "Đọc vue.config.js để xác định cấu hình cổng."
          },
          {
            "time": "12:04",
            "seconds": 724,
            "text": "Đọc scripts trong package.json và chạy thử frontend bằng npm run serve."
          },
          {
            "time": "15:12",
            "seconds": 912,
            "text": "Cấu hình Nginx phục vụ todolist và kiểm tra quyền thư mục."
          },
          {
            "time": "20:13",
            "seconds": 1213,
            "text": "Minh họa chạy dự án React bằng service systemd."
          }
        ],
        "videoId": "uqNfJj6msjA",
        "videoUrl": "https://www.youtube.com/watch?v=uqNfJj6msjA",
        "captionLanguage": "vi",
        "duration": "24:07",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "10",
        "title": "Triển khai dự án Java Spring Boot",
        "text": "Bài triển khai backend Spring Boot có database: chuẩn bị Java/Maven, cài MariaDB, cấu hình dữ liệu rồi build và chạy JAR.",
        "points": [
          "Tìm hướng dẫn và cài toolchain Maven/Java phù hợp dự án.",
          "Cài MariaDB, kiểm tra cổng 3306 đang lắng nghe ở đâu.",
          "Tạo database và user/quyền phù hợp; tiếp theo nạp file SQL của dự án."
        ],
        "code": "# Trong dự án Maven đã kiểm tra, có Maven Wrapper\n./mvnw test package\nfind target -maxdepth 1 -name '*.jar'\njava -version\n# Khi đã viết/cài unit service trong Ubuntu lab\nsystemctl status <ten-service> --no-pager\njournalctl -u <ten-service> -n 50 --no-pager",
        "exercise": "Với backend Java lab và file SQL hợp lệ, liệt kê toolchain, cấu hình datasource, database/user cần có, cách import SQL, build JAR và kiểm tra HTTP sau khi chạy.",
        "verify": "Ứng dụng có HTTP endpoint kiểm tra, service chạy dưới user mong đợi, log đọc được sau restart.",
        "warning": "Không có source backend Java trong thư mục hiện tại; đây là bài tập cho dự án backend bạn chuẩn bị riêng.",
        "source": "https://docs.spring.io/spring-boot/how-to/deployment/installing.html",
        "quiz": {
          "question": "Vì sao dùng service manager thay vì giữ terminal mở?",
          "options": [
            "Để tự động build mọi lần thay code.",
            "Để quản lý vòng đời tiến trình và log theo cấu hình.",
            "Để không cần JVM."
          ],
          "correct": 1,
          "explanation": "systemd quản lý tiến trình; build và runtime Java vẫn cần được chuẩn bị riêng."
        },
        "id": 12,
        "chapter": 2,
        "timeline": [
          {
            "time": "2:37",
            "seconds": 157,
            "text": "Tìm hướng dẫn và cài toolchain Maven/Java phù hợp dự án."
          },
          {
            "time": "7:26",
            "seconds": 446,
            "text": "Cài MariaDB, kiểm tra cổng 3306 đang lắng nghe ở đâu."
          },
          {
            "time": "9:51",
            "seconds": 591,
            "text": "Tạo database và user/quyền phù hợp; tiếp theo nạp file SQL của dự án."
          },
          {
            "time": "12:09",
            "seconds": 729,
            "text": "Chọn database và import dữ liệu; cấu hình kết nối cho ứng dụng."
          },
          {
            "time": "14:21",
            "seconds": 861,
            "text": "Build đầu ra trong target, chạy java -jar và kiểm tra process/ứng dụng."
          }
        ],
        "videoId": "qATtJZxSo7o",
        "videoUrl": "https://www.youtube.com/watch?v=qATtJZxSo7o",
        "captionLanguage": "vi",
        "duration": "18:32",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      }
    ],
    "id": 2
  },
  {
    "title": "Git",
    "en": "Version Control",
    "intro": "Theo dõi thay đổi, làm việc qua branch và phối hợp bằng merge request. Phần này giúp bạn giữ lịch sử mã nguồn rõ ràng và tránh commit nhầm dữ liệu hoặc repository lồng nhau.",
    "goals": [
      "Hiểu working tree, staging area và commit.",
      "Tổ chức GitLab và quyền truy cập repository.",
      "Thực hành branch, merge và xử lý conflict."
    ],
    "lessons": [
      {
        "ref": "11",
        "title": "Kiến thức nền tảng Git",
        "text": "Tác giả dùng ví dụ cộng tác tài liệu để giải thích Git local/remote và việc quản lý phiên bản. Bài phân biệt các môi trường phát triển, staging, production với các khu vực bên trong Git local.",
        "points": [
          "Git workflow là phần cần nắm rõ để triển khai quy trình.",
          "Ví dụ nhóm góp ý, kiểm tra nội bộ rồi hoàn thiện bản đưa tới người dùng.",
          "Ba môi trường: development, staging và production."
        ],
        "code": "# Trong thư mục lab trống, không phải bên trong repo khác\nmkdir git-lab\ncd git-lab\ngit init\nprintf 'Hello DevOps\\n' > README.md\ngit add README.md\ngit diff --cached\ngit commit -m \"Add lab introduction\"",
        "exercise": "Tạo commit đầu, sửa README rồi xem git diff trước và sau git add.",
        "verify": "Giải thích được khác biệt giữa thay đổi chưa stage và commit hiện tại.",
        "warning": "Kiểm tra git rev-parse --show-toplevel trước khi git init trong một thư mục thuộc dự án khác.",
        "source": "https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F",
        "quiz": {
          "question": "git commit thông thường ghi nội dung nào?",
          "options": [
            "Toàn bộ file trên ổ cứng.",
            "Snapshot trong staging area.",
            "Chỉ các file có đuôi .js."
          ],
          "correct": 1,
          "explanation": "git add chuẩn bị snapshot; git commit lưu snapshot đó vào lịch sử."
        },
        "id": 13,
        "chapter": 3,
        "timeline": [
          {
            "time": "0:42",
            "seconds": 42,
            "text": "Git workflow là phần cần nắm rõ để triển khai quy trình."
          },
          {
            "time": "0:52",
            "seconds": 52,
            "text": "Ví dụ nhóm góp ý, kiểm tra nội bộ rồi hoàn thiện bản đưa tới người dùng."
          },
          {
            "time": "2:02",
            "seconds": 122,
            "text": "Ba môi trường: development, staging và production."
          },
          {
            "time": "3:15",
            "seconds": 195,
            "text": "Local/remote; trong local có working directory, staging area và local repository."
          }
        ],
        "videoId": "xxqwvdx6FFE",
        "videoUrl": "https://www.youtube.com/watch?v=xxqwvdx6FFE",
        "captionLanguage": "vi",
        "duration": "4:32",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "12",
        "title": "Cài đặt GitLab Server",
        "text": "Video clone một server từ template, thiết lập lại môi trường rồi cài GitLab nội bộ. Phần tiếp theo đi qua hostname, cấu hình truy cập và thiết lập quản trị ban đầu.",
        "points": [
          "Khởi động server clone và thiết lập lại thông tin/IP cho máy mới.",
          "Tìm hướng dẫn GitLab phù hợp Ubuntu và thực hiện cài đặt.",
          "Chỉnh external URL trong /etc/gitlab/gitlab.rb."
        ],
        "code": "# Trên Ubuntu lab dự định chạy GitLab\ncat /etc/os-release\nfree -h\ndf -h\nss -lnt\n# Sau khi cài Linux package theo tài liệu chính thức\nsudo gitlab-ctl status",
        "exercise": "Lập kế hoạch hostname, IP, port, dung lượng, TLS và vị trí backup. Chọn đúng hướng dẫn cài cho OS; không chạy installer trên máy cá nhân.",
        "verify": "Đăng nhập được GitLab lab, tạo project thử và phân biệt server/runner.",
        "warning": "Đổi external_url hoặc firewall có thể ảnh hưởng clone/push. Sao lưu trước khi nâng cấp hoặc đổi cấu hình lớn.",
        "source": "https://docs.gitlab.com/install/package/",
        "quiz": {
          "question": "Runner có nhiệm vụ gì?",
          "options": [
            "Thực thi job CI/CD.",
            "Luôn là nơi lưu mọi commit thay cho GitLab.",
            "Cung cấp DNS cho cả mạng."
          ],
          "correct": 0,
          "explanation": "GitLab lập lịch job; runner nhận và thực thi job trong executor đã cấu hình."
        },
        "id": 14,
        "chapter": 3,
        "timeline": [
          {
            "time": "1:41",
            "seconds": 101,
            "text": "Khởi động server clone và thiết lập lại thông tin/IP cho máy mới."
          },
          {
            "time": "3:41",
            "seconds": 221,
            "text": "Tìm hướng dẫn GitLab phù hợp Ubuntu và thực hiện cài đặt."
          },
          {
            "time": "7:04",
            "seconds": 424,
            "text": "Chỉnh external URL trong /etc/gitlab/gitlab.rb."
          },
          {
            "time": "8:47",
            "seconds": 527,
            "text": "Sao lưu/chỉnh hosts để máy cá nhân và các server phân giải hostname GitLab."
          },
          {
            "time": "10:58",
            "seconds": 658,
            "text": "Thiết lập đăng ký, Auto DevOps và user; thử đăng nhập bằng tài khoản vừa tạo."
          }
        ],
        "videoId": "Q6C5CoUxMuQ",
        "videoUrl": "https://www.youtube.com/watch?v=Q6C5CoUxMuQ",
        "captionLanguage": "vi",
        "duration": "14:06",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "13",
        "title": "Những lệnh Git thông dụng",
        "text": "Bài thực hành trên GitLab server vừa dựng: tạo group/project, đưa source lên Git và cập nhật giữa local với remote. Tác giả dành riêng một đoạn cho cách viết commit dễ hiểu.",
        "points": [
          "Tạo group/project và đặt phạm vi truy cập.",
          "Clone repository, chọn main, thêm README và thực hiện add/commit/push.",
          "Đưa source dự án vào working directory đã clone."
        ],
        "code": "git status\ngit diff\ngit log --oneline -5\ngit remote -v\ngit fetch origin\n# Sau khi đã kiểm tra thay đổi\ngit add README.md\ngit commit -m \"Update lab instructions\"\ngit push origin main",
        "exercise": "Đổi README trong repo lab, kiểm tra diff và push. Mở giao diện GitLab/GitHub để xác nhận cùng commit SHA.",
        "verify": "Local và remote có commit mong đợi; không lẫn commit chưa push với phiên bản đang deploy.",
        "warning": "Không dùng reset --hard hoặc force push để chữa lỗi chưa hiểu vì có thể mất thay đổi/lịch sử.",
        "source": "https://git-scm.com/docs",
        "quiz": {
          "question": "git push có tự triển khai ứng dụng không?",
          "options": [
            "Luôn có.",
            "Chỉ khi hệ thống đã cấu hình trigger/pipeline triển khai tương ứng.",
            "Không bao giờ có thể."
          ],
          "correct": 1,
          "explanation": "Push đồng bộ commit; tự động triển khai cần webhook, CI/CD hoặc cơ chế khác được cấu hình."
        },
        "id": 15,
        "chapter": 3,
        "timeline": [
          {
            "time": "1:11",
            "seconds": 71,
            "text": "Tạo group/project và đặt phạm vi truy cập."
          },
          {
            "time": "2:33",
            "seconds": 153,
            "text": "Clone repository, chọn main, thêm README và thực hiện add/commit/push."
          },
          {
            "time": "4:05",
            "seconds": 245,
            "text": "Đưa source dự án vào working directory đã clone."
          },
          {
            "time": "5:40",
            "seconds": 340,
            "text": "Commit rõ ý định, dùng dạng type(scope): description trong phần minh họa."
          },
          {
            "time": "9:32",
            "seconds": 572,
            "text": "Sửa README trên giao diện, sau đó git pull để cập nhật về local."
          }
        ],
        "videoId": "-IIdRLH9vR4",
        "videoUrl": "https://www.youtube.com/watch?v=-IIdRLH9vR4",
        "captionLanguage": "en-US",
        "duration": "10:39",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "14",
        "title": "Triển khai Git workflow",
        "text": "Video tổ chức branch và quyền để kiểm soát đường đi thay đổi trước khi phát hành. Tên branch có thể khác giữa doanh nghiệp; mục tiêu là hiểu luồng phát triển, kiểm tra và đưa tới người dùng.",
        "points": [
          "Luồng từ develop qua nhánh release/staging rồi tới production.",
          "Tạo develop từ main và tạo feature branch từ develop.",
          "Minh họa hoàn thành tính năng rồi tích hợp thay đổi."
        ],
        "code": "git switch -c feature/lab-notes\n# Sửa README trong branch này\ngit add README.md\ngit commit -m \"Document deployment checks\"\ngit push -u origin feature/lab-notes\n# Tạo merge request trên giao diện rồi review diff",
        "exercise": "Trong repo dùng để học, tạo hai branch sửa cùng một dòng rồi merge để quan sát conflict. Giải quyết và kiểm tra nội dung cuối.",
        "verify": "git status sạch sau commit giải quyết; nội dung giữ đúng ý định hai thay đổi.",
        "warning": "Không commit thư mục chứa .git khác nếu không chủ ý dùng submodule; website tĩnh chỉ cần các file nguồn thông thường.",
        "source": "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",
        "quiz": {
          "question": "Xóa marker conflict rồi commit có đủ bảo đảm đúng không?",
          "options": [
            "Có, Git hiểu mọi ý định.",
            "Chưa, phải kiểm tra nội dung và chạy kiểm tra phù hợp.",
            "Chỉ cần đổi tên file."
          ],
          "correct": 1,
          "explanation": "Git xử lý cấu trúc lịch sử; tính đúng của nội dung sau kết hợp vẫn cần con người và kiểm tra."
        },
        "id": 16,
        "chapter": 3,
        "timeline": [
          {
            "time": "1:45",
            "seconds": 105,
            "text": "Luồng từ develop qua nhánh release/staging rồi tới production."
          },
          {
            "time": "3:24",
            "seconds": 204,
            "text": "Tạo develop từ main và tạo feature branch từ develop."
          },
          {
            "time": "5:40",
            "seconds": 340,
            "text": "Minh họa hoàn thành tính năng rồi tích hợp thay đổi."
          },
          {
            "time": "7:43",
            "seconds": 463,
            "text": "Đặt default branch, protected branches và người được push/merge."
          },
          {
            "time": "13:10",
            "seconds": 790,
            "text": "Đánh tag để đánh dấu phiên bản/chức năng đã phát hành."
          }
        ],
        "videoId": "Y7WzTPaWbCk",
        "videoUrl": "https://www.youtube.com/watch?v=Y7WzTPaWbCk",
        "captionLanguage": "en-US",
        "duration": "14:29",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      }
    ],
    "id": 3
  },
  {
    "title": "CI/CD",
    "en": "Continuous Integration & Delivery",
    "intro": "Chuyển quy trình thủ công thành pipeline có đầu vào và đầu ra rõ ràng. Bạn sẽ phân biệt kiểm tra mã, đóng gói artifact và triển khai tự động hoặc qua bước duyệt.",
    "goals": [
      "Phân biệt integration, delivery và deployment.",
      "Đọc cấu trúc job, stage, runner và artifact.",
      "Tách quyền triển khai khỏi mã nguồn không tin cậy."
    ],
    "lessons": [
      {
        "ref": "15",
        "title": "CI/CD là gì? CI/CD để làm gì?",
        "text": "Bài xuất phát từ khó khăn triển khai thủ công nhiều dự án rồi giải thích CI, Continuous Deployment và Continuous Delivery. Tác giả nhấn mạnh chọn quy trình theo quy mô và nhu cầu thay vì có một mẫu đúng cho mọi nơi.",
        "points": [
          "Triển khai nhiều source/service thủ công làm tăng thời gian và nguy cơ gõ sai.",
          "Tự động hóa các bước kiểm tra/tích hợp trước khi tới triển khai.",
          "Deployment tự động và Delivery có bước chủ động xác nhận."
        ],
        "code": "# Thử job đơn giản trong môi trường Node phù hợp của frontend lab\nnode --version\nnpm --version\n# Nếu đã có package-lock hợp lệ\nnpm ci\nnpm run build\ntest -f dist/index.html",
        "exercise": "Viết sơ đồ pipeline frontend: checkout → dependency → test/check phù hợp → build → publish artifact → deploy → smoke test.",
        "verify": "Mỗi bước có lệnh, đầu ra và cách báo lỗi. Pipeline dừng khi kiểm tra quan trọng thất bại.",
        "warning": "Không dùng một test luôn trả thành công để làm đẹp pipeline. Ghi rõ kiểm tra nào dự án thực sự có.",
        "source": "https://docs.gitlab.com/ci/",
        "quiz": {
          "question": "Artifact và cache khác nhau thế nào?",
          "options": [
            "Artifact trao đầu ra; cache giúp tái sử dụng dữ liệu để tăng tốc.",
            "Hai tên gọi giống hệt nhau.",
            "Cache luôn là bản release chính thức."
          ],
          "correct": 0,
          "explanation": "Các job sau cần đầu ra build nên dùng artifact theo cơ chế pipeline, không phụ thuộc cache tình cờ còn tồn tại."
        },
        "id": 17,
        "chapter": 4,
        "timeline": [
          {
            "time": "1:02",
            "seconds": 62,
            "text": "Triển khai nhiều source/service thủ công làm tăng thời gian và nguy cơ gõ sai."
          },
          {
            "time": "3:28",
            "seconds": 208,
            "text": "Tự động hóa các bước kiểm tra/tích hợp trước khi tới triển khai."
          },
          {
            "time": "4:32",
            "seconds": 272,
            "text": "Deployment tự động và Delivery có bước chủ động xác nhận."
          },
          {
            "time": "5:29",
            "seconds": 329,
            "text": "Series minh họa bằng GitLab CI/CD và Jenkins, hướng tới hiểu lý do chọn công cụ."
          }
        ],
        "videoId": "olJZtO1jiuk",
        "videoUrl": "https://www.youtube.com/watch?v=olJZtO1jiuk",
        "captionLanguage": "vi",
        "duration": "8:28",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "16",
        "title": "GitLab CI/CD (Continuous Deployment)",
        "text": "Bài dùng Shell executor trên lab server để tự động hóa việc triển khai backend đã chạy thủ công trước đó. Quy trình chính gồm build, deploy và check log.",
        "points": [
          "Phân biệt Shell executor chạy trên server với executor tạo môi trường container.",
          "Kết nối runner vào project; đọc tags và phạm vi nhận job.",
          "Khai báo build, deploy, check log trong .gitlab-ci.yml."
        ],
        "code": "# Các lệnh gợi nhớ cho backend Maven, không phải toàn bộ pipeline\nmvn install\nls target\nps -ef | grep java\n# Trong .gitlab-ci.yml: build -> deploy -> check log\n# Dùng runner/tag/user và đường dẫn tương ứng lab của bạn.",
        "exercise": "Theo video, dựng ba stage build, deploy và check log bằng Shell runner trong lab. Ghi lại điều gì xảy ra với target khi runner checkout lại source và cách bạn xử lý artifact giữa các job.",
        "verify": "Runner đúng tag nhận job; JAR tồn tại ở bước deploy, user ứng dụng đúng và HTTP/log xác nhận bản mới chạy.",
        "warning": "Video minh họa điều chỉnh checkout và sudo trên lab. Đây không phải cấu hình áp dụng nguyên trạng cho mọi runner; giới hạn quyền và kiểm tra truyền artifact theo môi trường.",
        "source": "https://docs.gitlab.com/ci/yaml/",
        "quiz": {
          "question": "Job hiển thị pending chưa chạy thường cần xem gì?",
          "options": [
            "Runner online, tags và quyền nhận job.",
            "Đổi màu nút pipeline.",
            "Xóa thư mục dist trên laptop."
          ],
          "correct": 0,
          "explanation": "Job cần runner phù hợp với tags, quyền và phạm vi cấu hình để thực thi."
        },
        "id": 18,
        "chapter": 4,
        "timeline": [
          {
            "time": "4:08",
            "seconds": 248,
            "text": "Phân biệt Shell executor chạy trên server với executor tạo môi trường container."
          },
          {
            "time": "7:41",
            "seconds": 461,
            "text": "Kết nối runner vào project; đọc tags và phạm vi nhận job."
          },
          {
            "time": "9:03",
            "seconds": 543,
            "text": "Khai báo build, deploy, check log trong .gitlab-ci.yml."
          },
          {
            "time": "16:17",
            "seconds": 977,
            "text": "Chuẩn bị thư mục, quyền cho runner và user ứng dụng."
          },
          {
            "time": "19:32",
            "seconds": 1172,
            "text": "Giải thích việc checkout làm mất target; điều chỉnh chiến lược lấy source, copy/chown artifact và xử lý process trước khi chạy bản mới."
          }
        ],
        "videoId": "BfIk9-6zlSo",
        "videoUrl": "https://www.youtube.com/watch?v=BfIk9-6zlSo",
        "captionLanguage": "vi",
        "duration": "32:52",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "17",
        "title": "GitLab CI/CD (Continuous Delivery)",
        "text": "Từ pipeline tự động của bài trước, tác giả chuyển các bước cần quyết định sang manual rồi kiểm tra người kích hoạt. Bài minh họa cả lượt được phép chạy lẫn lượt bị từ chối.",
        "points": [
          "Thêm when: manual vào job tương ứng trong .gitlab-ci.yml.",
          "Kích hoạt thủ công bước đã đổi thành manual.",
          "Tra biến GitLab CI để biết user thực hiện pipeline/job."
        ],
        "code": "# Đoạn minh họa thêm vào pipeline đã có build job\napprove_release:\n  stage: deploy\n  when: manual\n  allow_failure: false\n  environment:\n    name: staging\n  script:\n    - test -f dist/index.html\n    - echo \"Thay bằng script deploy staging đã kiểm tra\"\n# Khai báo stage deploy và tải artifact build theo cấu hình pipeline.",
        "exercise": "Tạo job thủ công cho staging; thay echo bằng script triển khai lab thực sự, rồi thêm kiểm tra HTTP sau triển khai.",
        "verify": "Không gọi đây là deploy thành công khi mới chỉ echo. Ghi nhận commit/artifact và kết quả HTTP ở môi trường đích.",
        "warning": "Manual job không tự tạo quy trình phân quyền; kiểm tra quyền theo gói GitLab và chính sách dự án.",
        "source": "https://docs.gitlab.com/ci/jobs/job_control/",
        "quiz": {
          "question": "Delivery khác deployment tự động ở điểm nào trong quy trình này?",
          "options": [
            "Có cổng phê duyệt trước môi trường đích.",
            "Không có build.",
            "Không dùng Git."
          ],
          "correct": 0,
          "explanation": "Delivery vẫn tự động chuẩn bị phiên bản; quyết định phát hành có thể cần duyệt."
        },
        "id": 19,
        "chapter": 4,
        "timeline": [
          {
            "time": "0:45",
            "seconds": 45,
            "text": "Thêm when: manual vào job tương ứng trong .gitlab-ci.yml."
          },
          {
            "time": "2:18",
            "seconds": 138,
            "text": "Kích hoạt thủ công bước đã đổi thành manual."
          },
          {
            "time": "3:09",
            "seconds": 189,
            "text": "Tra biến GitLab CI để biết user thực hiện pipeline/job."
          },
          {
            "time": "3:58",
            "seconds": 238,
            "text": "Nếu không đúng user cho phép, in Permission denied và exit 1."
          },
          {
            "time": "4:53",
            "seconds": 293,
            "text": "Thử tài khoản khác để xác nhận pipeline bị ngắt như dự kiến."
          }
        ],
        "videoId": "y-ByTDU_Lg8",
        "videoUrl": "https://www.youtube.com/watch?v=y-ByTDU_Lg8",
        "captionLanguage": "vi",
        "duration": "6:15",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      }
    ],
    "id": 4
  },
  {
    "title": "Docker",
    "en": "Containers & Registries",
    "intro": "Chuẩn hóa cách build và chạy ứng dụng bằng image. Từ container đầu tiên, bạn sẽ tiến đến image frontend/backend, registry riêng và triển khai một phiên bản có thể truy vết.",
    "goals": [
      "Phân biệt image, container, network và volume.",
      "Viết Dockerfile theo nhu cầu build/runtime.",
      "Đẩy image có phiên bản và kết nối pipeline với registry."
    ],
    "lessons": [
      {
        "ref": "18",
        "title": "Container là gì? Tại sao sử dụng Docker?",
        "text": "Tác giả dùng vấn đề nhiều phiên bản runtime và việc chuyển môi trường để dẫn đến Docker. Bài giải thích chuỗi source → Dockerfile → image → registry → container trên server triển khai.",
        "points": [
          "Nhiều dự án cần các phiên bản Node khác nhau gây khó quản lý trên cùng server.",
          "Liên hệ triển khai trên nhiều server và chia tải.",
          "Ví dụ đóng gói môi trường để mang sang máy khác."
        ],
        "code": "docker version\ndocker image ls\ndocker run --name fresher-web -d -p 127.0.0.1:8080:80 nginx:stable\ncurl -I http://127.0.0.1:8080\ndocker ps",
        "exercise": "Chạy Nginx trên loopback cổng 8080, xác định image, container ID, trạng thái và ánh xạ cổng. Dừng container sau bài.",
        "verify": "HTTP trả phản hồi và bạn phân biệt cổng host 8080 với cổng container 80.",
        "warning": "Kiểm tra cổng 8080 còn trống. Không thêm --privileged hay mount host filesystem khi ví dụ không cần.",
        "source": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
        "quiz": {
          "question": "Image và container liên hệ thế nào?",
          "options": [
            "Container là một phiên chạy được tạo từ image.",
            "Image chỉ là tên của một process.",
            "Dừng container luôn xóa image."
          ],
          "correct": 0,
          "explanation": "Một image có thể tạo nhiều container có vòng đời riêng."
        },
        "id": 20,
        "chapter": 5,
        "timeline": [
          {
            "time": "1:29",
            "seconds": 89,
            "text": "Nhiều dự án cần các phiên bản Node khác nhau gây khó quản lý trên cùng server."
          },
          {
            "time": "2:14",
            "seconds": 134,
            "text": "Liên hệ triển khai trên nhiều server và chia tải."
          },
          {
            "time": "3:01",
            "seconds": 181,
            "text": "Ví dụ đóng gói môi trường để mang sang máy khác."
          },
          {
            "time": "4:37",
            "seconds": 277,
            "text": "Mô hình build image, đưa lên registry rồi pull/run ở server đích."
          }
        ],
        "videoId": "hG0scOLs3L0",
        "videoUrl": "https://www.youtube.com/watch?v=hG0scOLs3L0",
        "captionLanguage": "vi",
        "duration": "5:52",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "19",
        "title": "Cách sử dụng Docker",
        "text": "Bài cài Docker trên server lab và thực hành trực tiếp vòng đời container/image. Ví dụ đi từ Ubuntu tương tác tới Nginx chạy nền, ánh xạ cổng rồi xem và dọn tài nguyên lab.",
        "points": [
          "Chạy script cài đặt đã chuẩn bị; minh họa cách thực thi file .sh.",
          "docker run với --name và -it để vào container Ubuntu.",
          "exit, docker ps và docker ps -a để xem trạng thái."
        ],
        "code": "docker ps -a\ndocker logs --tail 30 fresher-web\ndocker inspect fresher-web --format '{{.State.Status}}'\ndocker exec fresher-web nginx -t\ndocker stop fresher-web\n# Sau khi không còn cần container lab:\ndocker rm fresher-web",
        "exercise": "Tạo lại container từ bài trước, đọc log và thử một request trước khi stop. So sánh ps và ps -a.",
        "verify": "Giải thích được vì sao container biến mất khỏi ps nhưng vẫn có trong ps -a sau stop.",
        "warning": "Không dùng docker system prune -a hoặc xóa volume để chữa lỗi container chưa được chẩn đoán.",
        "source": "https://docs.docker.com/reference/cli/docker/container/",
        "quiz": {
          "question": "Sửa file bên trong container bằng exec có cập nhật image không?",
          "options": [
            "Có tự động.",
            "Không; cần thay source/Dockerfile rồi build image mới.",
            "Chỉ khi container có tên."
          ],
          "correct": 1,
          "explanation": "Thay đổi trong writable layer của container không viết ngược vào image gốc."
        },
        "id": 21,
        "chapter": 5,
        "timeline": [
          {
            "time": "1:23",
            "seconds": 83,
            "text": "Chạy script cài đặt đã chuẩn bị; minh họa cách thực thi file .sh."
          },
          {
            "time": "3:18",
            "seconds": 198,
            "text": "docker run với --name và -it để vào container Ubuntu."
          },
          {
            "time": "5:04",
            "seconds": 304,
            "text": "exit, docker ps và docker ps -a để xem trạng thái."
          },
          {
            "time": "6:47",
            "seconds": 407,
            "text": "Nginx chạy nền bằng -d, publish port bằng -p."
          },
          {
            "time": "10:18",
            "seconds": 618,
            "text": "stop/rm container và rmi image; phân biệt đối tượng trước khi xóa."
          }
        ],
        "videoId": "jcsSTQk7k5Q",
        "videoUrl": "https://www.youtube.com/watch?v=jcsSTQk7k5Q",
        "captionLanguage": "en-US",
        "duration": "12:45",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "20",
        "title": "Cách Dockerize các dự án",
        "text": "Bài diễn giải Dockerfile từ tư duy build/run của phần Linux. Tác giả liên hệ mỗi chỉ dẫn với môi trường, source và đầu ra rồi bổ sung kinh nghiệm tối ưu/bảo mật image.",
        "points": [
          "FROM chọn base image chứa môi trường cần cho dự án.",
          "WORKDIR và COPY quyết định nơi làm việc và nơi đặt source.",
          "Phân biệt cổng host với cổng trong container."
        ],
        "code": "# .dockerignore cho ví dụ frontend\n.git\nnode_modules\ndist\n.env\n.env.*\n*.log\n# Sau khi đã có Dockerfile phù hợp:\n# docker build -t frontend-lab:dev .",
        "exercise": "Viết bảng ứng dụng cần: toolchain build, đầu ra, runtime, cổng, user, cấu hình và dữ liệu bền vững. Từ đó tạo Dockerfile riêng cho dự án.",
        "verify": "Image cuối chỉ chứa thành phần chạy cần thiết; không có source credential hoặc dependency phát triển ngoài dự kiến.",
        "warning": "Một build context lớn có thể gửi dữ liệu không cần thiết đến builder; đọc .dockerignore trước khi build.",
        "source": "https://docs.docker.com/build/concepts/context/",
        "quiz": {
          "question": ".dockerignore dùng để làm gì?",
          "options": [
            "Lọc file khỏi build context.",
            "Xóa file trên ổ cứng.",
            "Ẩn container khỏi docker ps."
          ],
          "correct": 0,
          "explanation": "Nó kiểm soát file gửi vào context, không thay thế .gitignore và không xóa file local."
        },
        "id": 22,
        "chapter": 5,
        "timeline": [
          {
            "time": "1:55",
            "seconds": 115,
            "text": "FROM chọn base image chứa môi trường cần cho dự án."
          },
          {
            "time": "3:02",
            "seconds": 182,
            "text": "WORKDIR và COPY quyết định nơi làm việc và nơi đặt source."
          },
          {
            "time": "4:14",
            "seconds": 254,
            "text": "Phân biệt cổng host với cổng trong container."
          },
          {
            "time": "5:16",
            "seconds": 316,
            "text": "Chạy bằng user riêng, chọn image phù hợp/tin cậy và giảm phần không cần thiết trong image."
          }
        ],
        "videoId": "f1Rsz6TQ9TM",
        "videoUrl": "https://www.youtube.com/watch?v=f1Rsz6TQ9TM",
        "captionLanguage": "vi",
        "duration": "8:06",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "21",
        "title": "Cách Dockerfile dự án Backend Java",
        "text": "Video dùng backend Java 8 đã triển khai trước đó và viết nhiều biến thể Dockerfile. Trọng tâm là chọn môi trường build, chuyển artifact sang runtime, thử image rồi xem log và user chạy.",
        "points": [
          "Chọn Maven/base image tương thích Java 8 của dự án trong video.",
          "Copy source và thực hiện bước build trong môi trường chứa Maven/Java.",
          "Tách môi trường chạy để chỉ giữ phần cần thiết cho JAR."
        ],
        "code": "# Gợi nhớ quy trình Java 8 trong video; dùng đúng source/backend lab\nmvn install\nls target\n# Sau khi đối chiếu Dockerfile trên màn hình:\ndocker build -t backend-lab:v1 .\ndocker logs --tail 50 <container-backend>\n# Chọn base build/runtime phù hợp Java 8 của dự án.",
        "exercise": "Viết lại các biến thể build/runtime Dockerfile theo video trên bản sao backend lab. So sánh thành phần có trong image, log khởi động và user thực thi.",
        "verify": "HTTP health endpoint hoạt động; container không chạy UID 0; log ứng dụng đọc được qua docker logs.",
        "warning": "Video dùng Java 8. Không tự đổi dự án sang Java 21 khi chép ghi chú. Đối chiếu tag image/cú pháp với video và hỗ trợ hiện tại trước khi dùng.",
        "source": "https://docs.docker.com/guides/java/containerize/",
        "quiz": {
          "question": "EXPOSE 8080 có tự mở cổng 8080 trên host không?",
          "options": [
            "Có.",
            "Không; cần publish port khi chạy.",
            "Chỉ khi dùng JAR."
          ],
          "correct": 1,
          "explanation": "EXPOSE mô tả cổng dự kiến; docker run -p hoặc cấu hình tương đương mới tạo port mapping."
        },
        "id": 23,
        "chapter": 5,
        "timeline": [
          {
            "time": "1:39",
            "seconds": 99,
            "text": "Chọn Maven/base image tương thích Java 8 của dự án trong video."
          },
          {
            "time": "3:30",
            "seconds": 210,
            "text": "Copy source và thực hiện bước build trong môi trường chứa Maven/Java."
          },
          {
            "time": "5:17",
            "seconds": 317,
            "text": "Tách môi trường chạy để chỉ giữ phần cần thiết cho JAR."
          },
          {
            "time": "7:17",
            "seconds": 437,
            "text": "Build/tag image và chạy container; so sánh các phiên bản Dockerfile."
          },
          {
            "time": "13:14",
            "seconds": 794,
            "text": "Đọc log realtime, kiểm tra dự án chạy và nhận diện user mặc định trong container."
          }
        ],
        "videoId": "8hevZ3LQ5MU",
        "videoUrl": "https://www.youtube.com/watch?v=8hevZ3LQ5MU",
        "captionLanguage": "vi",
        "duration": "14:52",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "22",
        "title": "Cách Dockerfile dự án Frontend",
        "text": "Bài dùng đúng dự án todolist Vue.js, build bằng Node 18.18 Alpine trong ví dụ, sau đó chuyển dist sang Nginx Alpine. Đây là multi-stage build gắn với dự án đã học ở phần Linux.",
        "points": [
          "Tạo build stage, chọn Node 18.18 Alpine, đặt thư mục và copy source.",
          "npm install rồi npm run build; Vue tạo dist, ví dụ React được đối chiếu với build.",
          "Run stage dùng Nginx Alpine và copy artifact vào /usr/share/nginx/html."
        ],
        "code": "# Diễn giải mẫu multi-stage theo các bước nói trong video\n# Phiên bản Node là bối cảnh lúc quay, không phải khuyến nghị mới nhất.\nFROM node:18.18-alpine AS build\nWORKDIR /app\nCOPY . .\nRUN npm install && npm run build\nFROM nginx:alpine\nCOPY --from=build /app/dist/ /usr/share/nginx/html/\nEXPOSE 80\nCMD [\"nginx\", \"-g\", \"daemon off;\"]",
        "exercise": "Đối chiếu mẫu diễn giải với Dockerfile tác giả hiển thị, build todolist trong lab rồi thử ánh xạ cổng 6868:80 như ví dụ. Ghi lại base-image tag và lỗi tương thích nếu có.",
        "verify": "Runtime image không chứa node_modules của bước build; HTML/JS/CSS tải đúng và route hoạt động.",
        "warning": "Đây là mẫu tái diễn giải từ phụ đề, không bảo đảm từng ký tự giống file tác giả. Video dùng Node 18.18; không coi phiên bản cũ là lựa chọn production hiện tại.",
        "source": "https://docs.docker.com/build/building/multi-stage/",
        "quiz": {
          "question": "Lợi ích chính của multi-stage trong ví dụ này?",
          "options": [
            "Runtime không cần mang toàn bộ toolchain Node.",
            "Ứng dụng không cần JavaScript nữa.",
            "Bỏ qua mọi test."
          ],
          "correct": 0,
          "explanation": "Builder tạo artifact; runtime giữ thành phần phục vụ web cần thiết."
        },
        "id": 24,
        "chapter": 5,
        "timeline": [
          {
            "time": "0:39",
            "seconds": 39,
            "text": "Tạo build stage, chọn Node 18.18 Alpine, đặt thư mục và copy source."
          },
          {
            "time": "1:17",
            "seconds": 77,
            "text": "npm install rồi npm run build; Vue tạo dist, ví dụ React được đối chiếu với build."
          },
          {
            "time": "1:40",
            "seconds": 100,
            "text": "Run stage dùng Nginx Alpine và copy artifact vào /usr/share/nginx/html."
          },
          {
            "time": "2:15",
            "seconds": 135,
            "text": "Dùng CMD chạy nginx với daemon off; build image."
          },
          {
            "time": "2:58",
            "seconds": 178,
            "text": "Chạy todolist:v1, ánh xạ cổng ví dụ 6868:80 rồi kiểm tra trình duyệt."
          }
        ],
        "videoId": "hatG0t8C69o",
        "videoUrl": "https://www.youtube.com/watch?v=hatG0t8C69o",
        "captionLanguage": "vi",
        "duration": "4:19",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "23",
        "title": "Cách cài đặt Docker Registry miễn phí",
        "text": "Bài giới thiệu hai hướng đã thực hành trong video: Docker Hub và private registry. Phần registry riêng đi qua hostname, chứng chỉ tự ký và cấu hình client tin cậy để push/pull.",
        "points": [
          "Đăng nhập Docker Hub và xem các image đã có.",
          "Gắn tag theo repository đích rồi docker push.",
          "Giải thích lý do nên tách registry server khỏi GitLab khi triển khai thực tế."
        ],
        "code": "docker volume create registry-lab-data\ndocker run -d --name registry-lab -p 127.0.0.1:5000:5000 \\\n  -v registry-lab-data:/var/lib/registry registry:2\n# Với image frontend-lab:dev bạn đã build:\ndocker tag frontend-lab:dev localhost:5000/frontend-lab:v1\ndocker push localhost:5000/frontend-lab:v1",
        "exercise": "Push image lab, đọc digest trả về và thử pull lại. Chỉ dùng loopback cho ví dụ HTTP local; truy cập từ máy khác cần thiết kế TLS/auth đúng.",
        "verify": "Image có trong registry, pull được từ đúng đích và bạn ghi nhận tag cùng digest.",
        "warning": "Không mở registry chưa có xác thực ra mạng công cộng. Xóa volume sẽ làm mất image lưu trong registry lab.",
        "source": "https://distribution.github.io/distribution/about/deploying/",
        "quiz": {
          "question": "Vì sao digest hữu ích hơn chỉ ghi latest?",
          "options": [
            "Nó chỉ ra nội dung image cụ thể.",
            "Nó thay mật khẩu registry.",
            "Nó tự thêm HTTPS."
          ],
          "correct": 0,
          "explanation": "Tag có thể được gán lại; digest giúp truy vết chính xác nội dung đã phát hành."
        },
        "id": 25,
        "chapter": 5,
        "timeline": [
          {
            "time": "4:18",
            "seconds": 258,
            "text": "Đăng nhập Docker Hub và xem các image đã có."
          },
          {
            "time": "6:34",
            "seconds": 394,
            "text": "Gắn tag theo repository đích rồi docker push."
          },
          {
            "time": "8:38",
            "seconds": 518,
            "text": "Giải thích lý do nên tách registry server khỏi GitLab khi triển khai thực tế."
          },
          {
            "time": "10:55",
            "seconds": 655,
            "text": "Chạy registry:2, port 5000, volume và các cấu hình liên quan chứng chỉ."
          },
          {
            "time": "13:11",
            "seconds": 791,
            "text": "Phân tích lỗi chứng chỉ tự ký; đặt CA cho Docker client và kiểm tra lại."
          }
        ],
        "videoId": "XuxZo3SB8rg",
        "videoUrl": "https://www.youtube.com/watch?v=XuxZo3SB8rg",
        "captionLanguage": "vi",
        "duration": "17:33",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "24",
        "title": "Cách cài đặt Harbor Registry",
        "text": "Bài tiếp tục phương án có domain và VPS: tạo server, trỏ domain, lấy chứng chỉ rồi cài Harbor. Phần cuối nhấn mạnh kiểm soát truy cập và bảo vệ tài nguyên registry.",
        "points": [
          "Minh họa tạo Ubuntu server qua EC2 như một VPS cho registry.",
          "Trỏ domain tới server mới và chuẩn bị môi trường.",
          "Dùng Certbot lấy chứng chỉ, có phần standalone/xác thực domain."
        ],
        "code": "# Sau khi Harbor lab đã cài TLS hợp lệ\n# Nhập mật khẩu tương tác, không ghi vào command line:\ndocker login <harbor-host>\ndocker tag frontend-lab:dev <harbor-host>/<project>/frontend:v1\ndocker push <harbor-host>/<project>/frontend:v1\ndocker pull <harbor-host>/<project>/frontend:v1",
        "exercise": "Đọc hướng dẫn Harbor cho phiên bản chọn dùng. Tạo project lab và một account chỉ có quyền cần thiết, thử push/pull rồi kiểm tra lịch sử artifact.",
        "verify": "Quyền giới hạn hoạt động đúng; client xác minh TLS; dữ liệu có vị trí lưu và backup rõ ràng.",
        "warning": "Không bỏ xác minh TLS chỉ để làm docker login hết lỗi. Với CA nội bộ, cài trust đúng hướng dẫn.",
        "source": "https://goharbor.io/docs/",
        "quiz": {
          "question": "CI nên dùng credential nào để push image?",
          "options": [
            "Tài khoản admin dùng chung vô thời hạn.",
            "Robot/service account với phạm vi quyền cần thiết.",
            "Mật khẩu ghi cứng trong Dockerfile."
          ],
          "correct": 1,
          "explanation": "Danh tính automation riêng giúp giới hạn quyền, thu hồi và truy vết."
        },
        "id": 26,
        "chapter": 5,
        "timeline": [
          {
            "time": "1:39",
            "seconds": 99,
            "text": "Minh họa tạo Ubuntu server qua EC2 như một VPS cho registry."
          },
          {
            "time": "3:11",
            "seconds": 191,
            "text": "Trỏ domain tới server mới và chuẩn bị môi trường."
          },
          {
            "time": "4:44",
            "seconds": 284,
            "text": "Dùng Certbot lấy chứng chỉ, có phần standalone/xác thực domain."
          },
          {
            "time": "8:13",
            "seconds": 493,
            "text": "Chỉnh cấu hình Harbor, mật khẩu và database rồi chạy cài đặt."
          },
          {
            "time": "9:55",
            "seconds": 595,
            "text": "Đọc project/quyền trong giao diện; phần cuối bàn cách hạn chế truy cập từ internet."
          }
        ],
        "videoId": "nW_91AiC1cI",
        "videoUrl": "https://www.youtube.com/watch?v=nW_91AiC1cI",
        "captionLanguage": "vi",
        "duration": "12:29",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "25",
        "title": "Sử dụng các thành phần khác của Docker",
        "text": "Bài không chỉ nói về network: còn dùng container làm môi trường build, mount dữ liệu, chạy MariaDB và chuyển cấu hình sang Compose. Phần cuối kiểm tra giao tiếp ứng dụng với database.",
        "points": [
          "Mount thư mục làm việc khi chạy container phục vụ build; dùng --rm cho container dùng xong bỏ.",
          "Chạy MariaDB, phân biệt cổng trong/ngoài và tránh trùng cổng host.",
          "Dữ liệu được mount để có thể dùng lại qua container khác."
        ],
        "code": "# compose.yaml cho frontend đã build\nservices:\n  web:\n    image: frontend-lab:dev\n    ports:\n      - \"127.0.0.1:8080:80\"\n# Chạy sau khi lưu file:\n# docker compose config\n# docker compose up -d\n# docker compose ps\n# docker compose logs --tail=30 web",
        "exercise": "Lưu phần YAML vào compose.yaml trong thư mục lab. Kiểm tra bằng compose config, khởi động và gọi HTTP; dùng compose down khi hoàn tất.",
        "verify": "Trạng thái service rõ ràng và HTTP hoạt động. Giải thích được dữ liệu nào nằm ở image, container và volume.",
        "warning": "docker compose down -v xóa volume do Compose quản lý; không thêm -v khi chưa xem dữ liệu.",
        "source": "https://docs.docker.com/compose/",
        "quiz": {
          "question": "localhost trong container web chỉ đến đâu?",
          "options": [
            "Chính network namespace của container đó.",
            "Luôn là laptop host.",
            "Bất kỳ container database nào."
          ],
          "correct": 0,
          "explanation": "Để gọi container khác trên network, thường dùng tên service và cổng nội bộ tương ứng."
        },
        "id": 27,
        "chapter": 5,
        "timeline": [
          {
            "time": "2:00",
            "seconds": 120,
            "text": "Mount thư mục làm việc khi chạy container phục vụ build; dùng --rm cho container dùng xong bỏ."
          },
          {
            "time": "3:58",
            "seconds": 238,
            "text": "Chạy MariaDB, phân biệt cổng trong/ngoài và tránh trùng cổng host."
          },
          {
            "time": "5:54",
            "seconds": 354,
            "text": "Dữ liệu được mount để có thể dùng lại qua container khác."
          },
          {
            "time": "7:43",
            "seconds": 463,
            "text": "Diễn giải cấu trúc Compose và chuyển cấu hình chạy sang YAML."
          },
          {
            "time": "12:03",
            "seconds": 723,
            "text": "So sánh compose ps với docker ps; kiểm tra network/kết nối giữa backend và database."
          }
        ],
        "videoId": "LWw0G22Su2k",
        "videoUrl": "https://www.youtube.com/watch?v=LWw0G22Su2k",
        "captionLanguage": "vi",
        "duration": "15:35",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "26",
        "title": "Triển khai GitLab CI/CD dự án Docker",
        "text": "Bài tái sử dụng runner và pipeline cũ, đổi sang build/push/pull/run Docker trên nhánh staging. Tác giả đặt tên image gắn tag Git và short commit SHA để truy vết phiên bản.",
        "points": [
          "Chuẩn bị nhánh staging và runner đã có từ phần trước.",
          "Cho runner quyền thao tác Docker theo môi trường lab.",
          "Khai báo tên image và biến registry; dùng tag cùng CI_COMMIT_SHORT_SHA."
        ],
        "code": "# Đoạn shell minh họa; chạy trên runner lab đã có builder riêng\nIMAGE=\"$CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\"\nprintf '%s' \"$CI_REGISTRY_PASSWORD\" | docker login \\\n  \"$CI_REGISTRY\" --username \"$CI_REGISTRY_USER\" --password-stdin\ndocker build -t \"$IMAGE\" .\n# Thêm test image thích hợp trước push\ndocker push \"$IMAGE\"",
        "exercise": "Viết pipeline riêng cho repo ứng dụng lab: build → test image → push → deploy staging → kiểm tra HTTP. Ghi commit và digest vào nhật ký release.",
        "verify": "Artifact triển khai khớp image đã test; một build thất bại không được đưa lên staging.",
        "warning": "Docker socket có thể cho quyền mạnh trên host. Không cấp nó cho job/branch không tin cậy để làm ví dụ chạy được.",
        "source": "https://docs.gitlab.com/ci/docker/using_docker_build/",
        "quiz": {
          "question": "Vì sao dùng tag commit SHA?",
          "options": [
            "Để liên hệ image với phiên bản mã nguồn.",
            "Để không cần registry.",
            "Để image tự sửa lỗi."
          ],
          "correct": 0,
          "explanation": "Tag commit giúp truy vết; bổ sung digest khi cần định danh nội dung bất biến."
        },
        "id": 28,
        "chapter": 5,
        "timeline": [
          {
            "time": "0:20",
            "seconds": 20,
            "text": "Chuẩn bị nhánh staging và runner đã có từ phần trước."
          },
          {
            "time": "1:40",
            "seconds": 100,
            "text": "Cho runner quyền thao tác Docker theo môi trường lab."
          },
          {
            "time": "3:50",
            "seconds": 230,
            "text": "Khai báo tên image và biến registry; dùng tag cùng CI_COMMIT_SHORT_SHA."
          },
          {
            "time": "8:38",
            "seconds": 518,
            "text": "Tạo tag để chạy thử, xem tên phiên bản đã push lên registry."
          },
          {
            "time": "10:23",
            "seconds": 623,
            "text": "Đăng nhập registry trên server deploy, pull đúng image rồi chạy container và đọc log."
          }
        ],
        "videoId": "LszmWAuIkMo",
        "videoUrl": "https://www.youtube.com/watch?v=LszmWAuIkMo",
        "captionLanguage": "vi",
        "duration": "13:19",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      }
    ],
    "id": 5
  },
  {
    "title": "Jenkins",
    "en": "Jenkins Pipelines",
    "intro": "Xây dựng pipeline dưới dạng mã và hiểu nơi từng bước thực thi. Từ agent đến credentials và cổng duyệt, mục tiêu là một quy trình rõ quyền và dễ quan sát.",
    "goals": [
      "Phân biệt controller, agent và workspace.",
      "Viết Jenkinsfile có stage và phép kiểm tra thật.",
      "Quản lý parameters, credentials và các bước duyệt."
    ],
    "lessons": [
      {
        "ref": "27",
        "title": "Jenkins là gì? Jenkins để làm gì?",
        "text": "Bài giới thiệu Jenkins như công cụ tự động hóa, không chỉ là công cụ CI/CD. Tác giả so sánh bối cảnh dùng với GitLab CI và giải thích vai trò kiến thức lập trình/Groovy khi đi xa hơn.",
        "points": [
          "Gợi ý xem tổng quan, làm theo rồi tự ghi lại để hiểu tư duy.",
          "Cân nhắc công cụ quản lý source và nhu cầu automation khi chọn Jenkins.",
          "Định nghĩa Jenkins và hệ sinh thái plugin."
        ],
        "code": "# Trên agent lab dự kiến dùng cho job\nwhoami\npwd\ngit --version\njava -version\n# Chỉ kiểm tra tool thực sự cần cho dự án\n# docker version",
        "exercise": "Vẽ sơ đồ controller, agent, repository, registry và máy deploy. Ghi credential cần ở từng đường kết nối.",
        "verify": "Giải thích job chạy ở máy nào, bằng user nào và artifact được giữ ở đâu.",
        "warning": "Không mặc định chạy mọi build trên controller hoặc dùng tài khoản hệ thống quyền cao cho tiện.",
        "source": "https://www.jenkins.io/doc/book/using/using-agents/",
        "quiz": {
          "question": "Workspace của job nằm ở đâu?",
          "options": [
            "Trên node/agent đang thực thi job theo cấu hình.",
            "Luôn ở laptop người bấm Build.",
            "Trong trình duyệt."
          ],
          "correct": 0,
          "explanation": "Cần đọc log node/workspace để biết nơi thật sự chạy từng bước."
        },
        "id": 29,
        "chapter": 6,
        "timeline": [
          {
            "time": "1:16",
            "seconds": 76,
            "text": "Gợi ý xem tổng quan, làm theo rồi tự ghi lại để hiểu tư duy."
          },
          {
            "time": "1:52",
            "seconds": 112,
            "text": "Cân nhắc công cụ quản lý source và nhu cầu automation khi chọn Jenkins."
          },
          {
            "time": "3:07",
            "seconds": 187,
            "text": "Định nghĩa Jenkins và hệ sinh thái plugin."
          },
          {
            "time": "3:46",
            "seconds": 226,
            "text": "Groovy phục vụ pipeline; phần học tiếp gồm deployment, delivery và ứng dụng khác."
          }
        ],
        "videoId": "CerVEwjMiRE",
        "videoUrl": "https://www.youtube.com/watch?v=CerVEwjMiRE",
        "captionLanguage": "vi",
        "duration": "4:55",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "28",
        "title": "Cài đặt Jenkins và các chức năng chính",
        "text": "Video chuẩn bị server và cài Jenkins, cấu hình hostname/reverse proxy rồi đi qua giao diện quản trị. Phần này giới thiệu nơi quản lý tools, plugins, nodes, security và credentials.",
        "points": [
          "Tạo/chạy script cài Jenkins trong môi trường server của bài.",
          "Thêm hosts để các máy phân giải được tên Jenkins nội bộ.",
          "Hoàn thành thiết lập tài khoản và URL trên giao diện phiên bản lúc quay."
        ],
        "code": "# Với Linux package/systemd trên Ubuntu lab sau khi cài theo tài liệu\nsystemctl status jenkins --no-pager\njournalctl -u jenkins -n 50 --no-pager\nss -lnt\n# Kiểm tra cổng theo cấu hình thực tế\ncurl -I http://127.0.0.1:8080",
        "exercise": "Lập kế hoạch JENKINS_HOME, port, TLS/reverse proxy và backup. Cài trên VM lab, hoàn thành setup và chạy một job không dùng credential nhạy cảm.",
        "verify": "Jenkins hoạt động sau restart, dữ liệu còn nguyên và agent chạy được job đơn giản.",
        "warning": "Không công khai mật khẩu setup hoặc bản backup JENKINS_HOME. Không phơi instance chưa setup ra internet.",
        "source": "https://www.jenkins.io/doc/book/installing/",
        "quiz": {
          "question": "Thành phần nào cần bảo vệ/backup để giữ cấu hình Jenkins?",
          "options": [
            "Chỉ file index.html.",
            "JENKINS_HOME và các thành phần phụ thuộc theo cấu hình.",
            "Không cần, container luôn tự giữ."
          ],
          "correct": 1,
          "explanation": "Cấu hình và nhiều dữ liệu quan trọng thuộc JENKINS_HOME; quy trình backup còn cần xử lý secrets và storage đúng cách."
        },
        "id": 30,
        "chapter": 6,
        "timeline": [
          {
            "time": "2:04",
            "seconds": 124,
            "text": "Tạo/chạy script cài Jenkins trong môi trường server của bài."
          },
          {
            "time": "3:34",
            "seconds": 214,
            "text": "Thêm hosts để các máy phân giải được tên Jenkins nội bộ."
          },
          {
            "time": "5:20",
            "seconds": 320,
            "text": "Hoàn thành thiết lập tài khoản và URL trên giao diện phiên bản lúc quay."
          },
          {
            "time": "7:04",
            "seconds": 424,
            "text": "Cấu hình Nginx cho hostname/port của Jenkins."
          },
          {
            "time": "8:41",
            "seconds": 521,
            "text": "Giới thiệu plugins, nodes/agent, security, credentials và users."
          }
        ],
        "videoId": "nFg_F0rlMhs",
        "videoUrl": "https://www.youtube.com/watch?v=nFg_F0rlMhs",
        "captionLanguage": "vi",
        "duration": "12:30",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "29",
        "title": "Jenkins CI/CD (Continuous Deployment)",
        "text": "Bài triển khai tự động backend trên lab server, kết nối Jenkins với GitLab rồi dựng Jenkinsfile. Nội dung gồm agent, webhook, quyền và xử lý tiến trình.",
        "points": [
          "Tạo node cho lab server và kết nối bằng Jenkins agent.",
          "Cấu hình GitLab connection/API token và thông tin lấy source.",
          "Dùng main cho ví dụ Jenkins; cấu hình webhook để nhận thay đổi từ GitLab."
        ],
        "code": "# Lệnh quan sát trên lab server sau pipeline backend\nps -ef | grep java\nls -l <thu-muc-deploy>\ntail -n 50 <file-log-ung-dung>\n# Jenkinsfile trong bài điều phối build/copy/permission/run;\n# đối chiếu agent, webhook và credential trước khi thử.",
        "exercise": "Theo video, vẽ sơ đồ Jenkins controller, lab agent và GitLab. Tạo pipeline backend chạy trên node lab, ghi lại branch main, webhook và các bước build/copy/chown/run.",
        "verify": "Thay đổi đúng branch kích hoạt job, artifact tới đúng server/user và ứng dụng phản hồi sau triển khai.",
        "warning": "Ví dụ không phải pipeline production đầy đủ: quyền deploy, kiểm thử ứng dụng và rollback cần được thiết kế theo dự án.",
        "source": "https://www.jenkins.io/doc/book/pipeline/jenkinsfile/",
        "quiz": {
          "question": "Jenkinsfile trên đã deploy ứng dụng chưa?",
          "options": [
            "Rồi, vì job thành công.",
            "Chưa, nó build/check/archive artifact.",
            "Rồi, vì có agent label."
          ],
          "correct": 1,
          "explanation": "Cần một bước triển khai thực sự tới môi trường đích và kiểm tra sau đó."
        },
        "id": 31,
        "chapter": 6,
        "timeline": [
          {
            "time": "3:59",
            "seconds": 239,
            "text": "Tạo node cho lab server và kết nối bằng Jenkins agent."
          },
          {
            "time": "11:31",
            "seconds": 691,
            "text": "Cấu hình GitLab connection/API token và thông tin lấy source."
          },
          {
            "time": "15:45",
            "seconds": 945,
            "text": "Dùng main cho ví dụ Jenkins; cấu hình webhook để nhận thay đổi từ GitLab."
          },
          {
            "time": "19:53",
            "seconds": 1193,
            "text": "Viết Jenkinsfile/Groovy; khai báo thông tin user, app, đường dẫn và script."
          },
          {
            "time": "26:24",
            "seconds": 1584,
            "text": "Build, copy artifact, đổi owner, xử lý process cũ, chạy ứng dụng và kiểm tra log."
          }
        ],
        "videoId": "8ujz58xmMFI",
        "videoUrl": "https://www.youtube.com/watch?v=8ujz58xmMFI",
        "captionLanguage": "vi",
        "duration": "32:09",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "30",
        "title": "Jenkins CI/CD (Continuous Delivery)",
        "text": "Bài tiếp tục từ agent/pipeline trước: giữ agent hoạt động bằng systemd rồi thêm bước xác nhận trước deploy. Tác giả dùng lựa chọn yes/no để quyết định có triển khai hay không.",
        "points": [
          "Xem lại kết nối lab server với Jenkins agent.",
          "Viết service Type=simple, chỉ định user/thư mục và câu lệnh chạy agent.",
          "daemon-reload, khởi động và kiểm tra service agent."
        ],
        "code": "// Stage minh họa chèn trong Jenkinsfile đã có build/test\nstage('Approve staging') {\n  steps {\n    timeout(time: 15, unit: 'MINUTES') {\n      input message: 'Triển khai artifact đã kiểm tra lên staging?',\n            submitter: 'release-managers'\n    }\n  }\n}\n// Thêm stage deploy dùng credentials giới hạn và smoke test riêng.",
        "exercise": "Dựng service cho Jenkins agent trong VM lab, kiểm tra sau restart. Thêm bước input với lựa chọn yes/no trước deploy và thử cả hai nhánh quyết định.",
        "verify": "Người không đúng quyền không duyệt được; job timeout rõ ràng; log không chứa credential.",
        "warning": "Không cho Jenkinsfile từ pull request không tin cậy truy cập credentials production.",
        "source": "https://www.jenkins.io/doc/book/pipeline/syntax/",
        "quiz": {
          "question": "Che secret khỏi log đã đủ bảo vệ trước script độc hại chưa?",
          "options": [
            "Đủ.",
            "Chưa; phải giới hạn job, branch và phạm vi truy cập credential.",
            "Chỉ cần đổi tên biến."
          ],
          "correct": 1,
          "explanation": "Masking là bảo vệ hiển thị; script chạy với credential vẫn có thể lạm dụng nó."
        },
        "id": 32,
        "chapter": 6,
        "timeline": [
          {
            "time": "3:19",
            "seconds": 199,
            "text": "Xem lại kết nối lab server với Jenkins agent."
          },
          {
            "time": "5:03",
            "seconds": 303,
            "text": "Viết service Type=simple, chỉ định user/thư mục và câu lệnh chạy agent."
          },
          {
            "time": "7:07",
            "seconds": 427,
            "text": "daemon-reload, khởi động và kiểm tra service agent."
          },
          {
            "time": "8:47",
            "seconds": 527,
            "text": "Chỉnh Jenkinsfile từ nhánh trước để dừng chờ xác nhận."
          },
          {
            "time": "10:34",
            "seconds": 634,
            "text": "input/choice cho deploy yes/no; thử pipeline dừng ở bước deploy."
          }
        ],
        "videoId": "zEnF_BWCk6U",
        "videoUrl": "https://www.youtube.com/watch?v=zEnF_BWCk6U",
        "captionLanguage": "vi",
        "duration": "14:33",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "31",
        "title": "Jenkins CI/CD Parameter",
        "text": "Bài dài xây dựng thao tác vận hành có tham số: chọn server/action, dùng Active Choices và Groovy, tách hàm điều khiển rồi bổ sung update/backup/rollback.",
        "points": [
          "Các loại parameter; chọn server và action start/stop/restart/update.",
          "Cài Active Choices và dùng các loại parameter phản ứng theo lựa chọn.",
          "Viết hàm start, lấy PID và báo lỗi nếu chạy không thành công; tiếp theo stop/restart."
        ],
        "code": "// Đoạn luyện tập parameter, không phải toàn bộ Jenkinsfile của bài\nparameters {\n  choice(name: 'server', choices: ['lab-server'], description: 'Máy lab')\n  choice(name: 'action', choices: ['start', 'stop', 'restart', 'update', 'rollback'], description: 'Thao tác')\n}\n// Bài còn có Active Choices, các hàm xử lý và danh sách backup.\n// Kiểm tra đầu vào/quyền trước khi gọi bất kỳ thao tác nào.",
        "exercise": "Lập bảng server/action và điều kiện thành công cho start, stop, restart, update, rollback. Trong repo lab, tách hàm theo từng thao tác; thử trên dữ liệu giả và xác nhận PID/phiên bản sau thao tác.",
        "verify": "Đúng server/action được chọn; có kiểm tra sau start/stop; rollback chỉ chọn backup tồn tại và xác minh được phiên bản phục hồi.",
        "warning": "Không dùng sh \"deploy ${params.INPUT}\" với chuỗi người dùng chưa kiểm tra; đó có thể trở thành command injection.",
        "source": "https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#handling-parameters",
        "quiz": {
          "question": "Trọng tâm bài parameter này là gì?",
          "options": [
            "Chỉ nhập image tag.",
            "Chọn server/action và tổ chức thao tác vận hành, update/rollback.",
            "Chỉ tạo tài khoản GitLab."
          ],
          "correct": 1,
          "explanation": "Bài xây dựng thao tác có tham số và các hàm xử lý; Active Choices hỗ trợ các lựa chọn phụ thuộc nhau."
        },
        "id": 33,
        "chapter": 6,
        "timeline": [
          {
            "time": "4:17",
            "seconds": 257,
            "text": "Các loại parameter; chọn server và action start/stop/restart/update."
          },
          {
            "time": "6:24",
            "seconds": 384,
            "text": "Cài Active Choices và dùng các loại parameter phản ứng theo lựa chọn."
          },
          {
            "time": "11:39",
            "seconds": 699,
            "text": "Viết hàm start, lấy PID và báo lỗi nếu chạy không thành công; tiếp theo stop/restart."
          },
          {
            "time": "31:40",
            "seconds": 1900,
            "text": "Checkout nguồn theo lựa chọn, tổ chức bước upload/update ứng dụng."
          },
          {
            "time": "49:33",
            "seconds": 2973,
            "text": "Hiển thị danh sách bản rollback từ backup; phần cuối chạy thử phục hồi phiên bản."
          }
        ],
        "videoId": "gknkwA9u1d0",
        "videoUrl": "https://www.youtube.com/watch?v=gknkwA9u1d0",
        "captionLanguage": "en-US",
        "duration": "1:06:57",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "32",
        "title": "Ứng dụng khác của Jenkins",
        "text": "Ví dụ chính trong video là cung cấp công cụ xem log qua Jenkins, có lựa chọn server, số dòng và keyword để lọc nội dung.",
        "points": [
          "Tạo job cho dự án, cấu hình lịch sử build và tham số phục vụ xem log.",
          "Nhập số dòng và viết hàm lấy log theo số dòng.",
          "Chọn server và kiểu kiểm tra log khi chạy job."
        ],
        "code": "# Đọc file log lab; thay bằng file thật bạn có quyền đọc\ntail -n 50 <file-log-lab>\ngrep -F -- <tu-khoa> <file-log-lab>\n# Trong Jenkins: nhận server, kiểu xem log, số dòng hoặc keyword.\n# Validate tham số và quote đường dẫn/keyword khi viết pipeline.",
        "exercise": "Viết job xem log cho server lab: một chế độ lấy N dòng cuối, một chế độ lọc theo keyword. Dùng danh sách file cho phép thay vì cho nhập đường dẫn bất kỳ.",
        "verify": "Kết quả job hiển thị đúng log theo server và chế độ đã chọn; đầu vào không hợp lệ bị từ chối.",
        "warning": "Đây là bài tập kiểm tra định kỳ, không thay thế hệ thống monitoring có alerting và lịch sử đầy đủ.",
        "source": "https://www.jenkins.io/doc/book/pipeline/syntax/#triggers",
        "quiz": {
          "question": "Ví dụ ứng dụng khác của Jenkins trong video là gì?",
          "options": [
            "Job HTTP định kỳ.",
            "Xem log theo server, số dòng và keyword.",
            "Tạo image Ubuntu."
          ],
          "correct": 1,
          "explanation": "Tác giả dùng parameter và hàm để cung cấp giao diện đọc/lọc log qua Jenkins."
        },
        "id": 34,
        "chapter": 6,
        "timeline": [
          {
            "time": "2:26",
            "seconds": 146,
            "text": "Tạo job cho dự án, cấu hình lịch sử build và tham số phục vụ xem log."
          },
          {
            "time": "3:43",
            "seconds": 223,
            "text": "Nhập số dòng và viết hàm lấy log theo số dòng."
          },
          {
            "time": "5:03",
            "seconds": 303,
            "text": "Chọn server và kiểu kiểm tra log khi chạy job."
          },
          {
            "time": "6:33",
            "seconds": 393,
            "text": "Chạy pipeline để hiển thị log trong kết quả."
          },
          {
            "time": "7:47",
            "seconds": 467,
            "text": "Thêm keyword để lọc nội dung; nêu khả năng chỉ hiện các trường cần theo lựa chọn."
          }
        ],
        "videoId": "RaKjgLLeIP8",
        "videoUrl": "https://www.youtube.com/watch?v=RaKjgLLeIP8",
        "captionLanguage": "vi",
        "duration": "9:51",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      }
    ],
    "id": 6
  },
  {
    "title": "Monitoring",
    "en": "Monitoring with Zabbix",
    "intro": "Hoàn thiện vòng phản hồi: biết khi nào hệ thống bất thường và có dữ liệu để điều tra. Phần này nối host, item, trigger và hành động thông báo thành một quy trình giám sát.",
    "goals": [
      "Chọn tín hiệu giám sát gắn với hành vi ứng dụng.",
      "Hiểu các thành phần Zabbix và luồng dữ liệu.",
      "Tạo item/trigger và kiểm tra cả phát hiện lẫn phục hồi."
    ],
    "lessons": [
      {
        "ref": "33",
        "title": "Monitoring là gì? Tại sao cần monitoring?",
        "text": "Tác giả giải thích giám sát chủ động thay vì chờ khách hàng phản ánh. Bài nêu lợi ích theo dõi tài nguyên, dịch vụ, database và lý do chọn Zabbix cho phần thực hành.",
        "points": [
          "Sự cố ảnh hưởng nhiều người dùng nên cần phát hiện sớm.",
          "Ví dụ cảnh báo RAM/disk/CPU/network theo thiết lập.",
          "Theo dõi database và truy vấn/kết nối để hỗ trợ tìm nguyên nhân chậm."
        ],
        "code": "# Trên máy có đường truy cập tới website lab\ncurl --fail --max-time 10 -o /dev/null -sS \\\n  -w 'status=%{http_code} time=%{time_total}s\n' http://127.0.0.1:8080/\ndf -h\nfree -h",
        "exercise": "Chọn ba tín hiệu: một kiểm tra HTTP, một tài nguyên hệ thống, một log lỗi. Nêu ngưỡng và hành động khi mỗi tín hiệu bất thường.",
        "verify": "Bạn biết cảnh báo nào liên quan tác động người dùng và nơi lấy bằng chứng để xác nhận.",
        "warning": "Mã HTTP 200 có thể chứa trang lỗi ứng dụng; với endpoint quan trọng hãy kiểm tra nội dung hoặc giao dịch phù hợp.",
        "source": "https://sre.google/sre-book/monitoring-distributed-systems/",
        "quiz": {
          "question": "CPU thấp có đủ kết luận website đang khỏe không?",
          "options": [
            "Có.",
            "Không, cần kiểm tra hành vi ứng dụng và các tín hiệu liên quan.",
            "Chỉ cần thêm RAM."
          ],
          "correct": 1,
          "explanation": "Website có thể không nghe cổng, trả lỗi hoặc mất kết nối database dù CPU rất thấp."
        },
        "id": 35,
        "chapter": 7,
        "timeline": [
          {
            "time": "0:36",
            "seconds": 36,
            "text": "Sự cố ảnh hưởng nhiều người dùng nên cần phát hiện sớm."
          },
          {
            "time": "1:13",
            "seconds": 73,
            "text": "Ví dụ cảnh báo RAM/disk/CPU/network theo thiết lập."
          },
          {
            "time": "1:51",
            "seconds": 111,
            "text": "Theo dõi database và truy vấn/kết nối để hỗ trợ tìm nguyên nhân chậm."
          },
          {
            "time": "2:33",
            "seconds": 153,
            "text": "Chọn Zabbix; có tích hợp kênh thông báo nhưng cần thời gian tìm hiểu và cấu hình phù hợp."
          }
        ],
        "videoId": "oVp_uX6IrLg",
        "videoUrl": "https://www.youtube.com/watch?v=oVp_uX6IrLg",
        "captionLanguage": "vi",
        "duration": "4:49",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "34",
        "title": "Cài đặt và thiết lập Zabbix chuyên nghiệp từng bước",
        "text": "Bài dựng Zabbix server, database/frontend rồi cài agent trên lab server. Tác giả cấu hình host và template, tạo tình huống tài nguyên bất thường để thấy cảnh báo và trạng thái phục hồi.",
        "points": [
          "Chọn phiên bản Zabbix trong bối cảnh lúc quay: video dùng nhánh 6.4, không phải chỉ dẫn chọn bản mới nhất hiện nay.",
          "Cài MariaDB, chuẩn bị database/user cho Zabbix.",
          "Cấu hình DB user/password, tiếp tục frontend và hostname."
        ],
        "code": "# Quan sát dịch vụ sau khi đã cài theo phiên bản/OS tương ứng\nsystemctl status zabbix-server --no-pager\n# Dùng tên service agent đã cài trong lab (agent hoặc agent2)\nsystemctl status <ten-service-agent> --no-pager\n# Kiểm tra Server, ServerActive, Hostname và dữ liệu trong giao diện.",
        "exercise": "Chọn phiên bản Zabbix và DB từ trang download chính thức. Cài lab theo cấu hình đó, tạo host agent và kiểm tra dữ liệu mới nhất.",
        "verify": "Frontend hoạt động; server/agent liên lạc đúng hướng; Latest data có giá trị và timestamp mới.",
        "warning": "Video dùng phiên bản 6.4 trong bối cảnh lúc quay. Khi cài mới, đối chiếu bản được hỗ trợ. Thử cảnh báo trong lab giới hạn, tránh làm đầy filesystem hệ thống.",
        "source": "https://www.zabbix.com/documentation/current/en/manual/installation",
        "quiz": {
          "question": "Host hiện trong giao diện đã chứng minh thu thập dữ liệu chưa?",
          "options": [
            "Có.",
            "Chưa; cần xem item, trạng thái và timestamp dữ liệu.",
            "Chỉ cần tên host đẹp."
          ],
          "correct": 1,
          "explanation": "Đối tượng cấu hình có thể tồn tại dù agent hoặc đường kết nối đang lỗi."
        },
        "id": 36,
        "chapter": 7,
        "timeline": [
          {
            "time": "3:22",
            "seconds": 202,
            "text": "Chọn phiên bản Zabbix trong bối cảnh lúc quay: video dùng nhánh 6.4, không phải chỉ dẫn chọn bản mới nhất hiện nay."
          },
          {
            "time": "6:53",
            "seconds": 413,
            "text": "Cài MariaDB, chuẩn bị database/user cho Zabbix."
          },
          {
            "time": "10:28",
            "seconds": 628,
            "text": "Cấu hình DB user/password, tiếp tục frontend và hostname."
          },
          {
            "time": "18:18",
            "seconds": 1098,
            "text": "Cấu hình Server/ServerActive và agent để liên lạc với Zabbix server."
          },
          {
            "time": "20:33",
            "seconds": 1233,
            "text": "Thêm host, kiểm tra dữ liệu và minh họa disk alert → resolved khi xử lý."
          }
        ],
        "videoId": "9GzK6rZE25E",
        "videoUrl": "https://www.youtube.com/watch?v=9GzK6rZE25E",
        "captionLanguage": "vi",
        "duration": "22:27",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      },
      {
        "ref": "35",
        "title": "Sử dụng Item và Trigger trong Zabbix",
        "text": "Ví dụ giám sát service backend ở cổng 8080. Item thu giá trị kiểm tra cổng; trigger đánh giá kết quả để tạo vấn đề. Tác giả stop/start ứng dụng qua Jenkins để kiểm tra cả phát hiện và phục hồi.",
        "points": [
          "Tạo item trên lab host, loại Zabbix agent.",
          "Chọn key net.tcp.listen[8080], kết quả số 0/1 và chu kỳ cập nhật.",
          "Giải thích vì sao không nên báo động chỉ vì một lần gián đoạn rất ngắn."
        ],
        "code": "# Key item được diễn giải trong bài\nnet.tcp.listen[8080]\n# Kiểu numeric: 1 là có cổng listen, 0 là không.\n# Tạo trigger theo kết quả bằng 0 qua expression builder.\n# Test: stop ứng dụng -> 0/PROBLEM; start -> 1/RESOLVED.",
        "exercise": "Trong lab, tạo item kiểm tra 8080 và trigger kết quả 0. Dừng/chạy lại ứng dụng qua Jenkins để kiểm tra giá trị và trạng thái phục hồi như bài giảng.",
        "verify": "Item chuyển giữa 1 và 0 theo cổng đang nghe; trigger tạo vấn đề và phục hồi sau start. Đây chưa phải bài kiểm tra đầy đủ HTTP/database.",
        "warning": "Không thử bằng cách làm đầy filesystem hệ thống. Không tự gửi cảnh báo tới người khác khi chưa được đồng ý.",
        "source": "https://www.zabbix.com/documentation/current/en/manual/config/triggers",
        "quiz": {
          "question": "Item có dữ liệu nhưng không nhận thông báo thì cần xem gì?",
          "options": [
            "Chỉ cài lại agent.",
            "Trigger/event, action, quyền user, media và lịch gửi.",
            "Xóa toàn bộ lịch sử."
          ],
          "correct": 1,
          "explanation": "Thông báo phụ thuộc chuỗi cấu hình sau thu thập; cần xác định chính xác khâu nào chưa hoạt động."
        },
        "id": 37,
        "chapter": 7,
        "timeline": [
          {
            "time": "1:36",
            "seconds": 96,
            "text": "Tạo item trên lab host, loại Zabbix agent."
          },
          {
            "time": "2:28",
            "seconds": 148,
            "text": "Chọn key net.tcp.listen[8080], kết quả số 0/1 và chu kỳ cập nhật."
          },
          {
            "time": "3:41",
            "seconds": 221,
            "text": "Giải thích vì sao không nên báo động chỉ vì một lần gián đoạn rất ngắn."
          },
          {
            "time": "4:22",
            "seconds": 262,
            "text": "Dừng ứng dụng bằng Jenkins, test item từ 1 về 0."
          },
          {
            "time": "4:47",
            "seconds": 287,
            "text": "Tạo trigger kết quả bằng 0, mức High; start lại để xem resolved."
          }
        ],
        "videoId": "chGRy6AzFp4",
        "videoUrl": "https://www.youtube.com/watch?v=chGRy6AzFp4",
        "captionLanguage": "en-US",
        "duration": "6:39",
        "evidence": "Đối chiếu phụ đề tự động; thuật ngữ được chuẩn hóa khi rõ nghĩa. Mốc xem lại giúp kiểm tra trực tiếp lời giảng và thao tác trên video."
      }
    ],
    "id": 7
  }
];
const LESSONS=CHAPTERS.flatMap(c=>c.lessons);
