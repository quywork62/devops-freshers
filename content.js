/* Ghi chú và câu hỏi tự biên soạn, không phải transcript/quiz khóa gốc. */
const CHAPTERS = [
  {
    "title": "Bắt đầu hành trình DevOps",
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
        "title": "Lộ trình và cách học qua thực hành",
        "text": "DevOps là cách phối hợp phát triển và vận hành để đưa thay đổi đến người dùng có kiểm soát. Công cụ giúp tự động hóa, nhưng không thay thế việc hiểu ứng dụng, quan sát kết quả và chịu trách nhiệm khi có sự cố. Sổ tay đi theo chuỗi Linux → Git → CI/CD → Docker → Jenkins → Monitoring, với các ví dụ tự biên soạn để bạn học kèm video.",
        "points": [
          "Mỗi vòng học gồm: đọc mục tiêu, dự đoán kết quả, thực hiện trên lab rồi kiểm tra bằng chứng.",
          "Đầu ra cuối cùng là ứng dụng được triển khai, có phiên bản xác định, pipeline lặp lại được và tín hiệu giám sát.",
          "Ghi lại lệnh, môi trường, lỗi gặp phải và lý do sửa; không chỉ lưu lệnh đã thành công."
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
        "chapter": 1
      }
    ],
    "id": 1
  },
  {
    "title": "Linux & triển khai ứng dụng",
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
        "title": "Linux trong công việc vận hành",
        "text": "Linux cung cấp môi trường phổ biến cho server, container và CI runner. Điểm quan trọng với người mới là hiểu filesystem, user, process, network và service: ứng dụng luôn chạy bằng một tiến trình, dưới một danh tính, đọc cấu hình ở đâu đó và lắng nghe trên một cổng.",
        "points": [
          "Filesystem bắt đầu từ /; ~ là thư mục home của user hiện tại.",
          "Shell nhận lệnh; kernel quản lý tài nguyên hệ thống. Biết shell đang dùng giúp hiểu cú pháp lệnh.",
          "Lệnh đọc trạng thái thường nên là bước đầu tiên trước khi cài hoặc sửa cấu hình."
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
        "chapter": 2
      },
      {
        "ref": "2",
        "title": "Chọn máy ảo và tài nguyên lab",
        "text": "Máy ảo tạo một hệ điều hành khách tách khỏi máy chính, phù hợp để học dịch vụ và thử cấu hình. Chọn hypervisor theo hệ điều hành máy chủ và kiến trúc CPU. VMware Workstation là một lựa chọn trên nền tảng được hỗ trợ; máy Mac cần công cụ tương thích macOS và kiến trúc của máy.",
        "points": [
          "Phân biệt host là máy chạy hypervisor, guest là Ubuntu bên trong máy ảo.",
          "Kiểm tra RAM/CPU/disk trống; GitLab, Jenkins và Zabbix cần tài nguyên riêng, không nên dồn tất cả vào VM quá nhỏ.",
          "Tải ISO và phần mềm từ nguồn chính thức; snapshot giúp quay lại trạng thái lab khi cần."
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
        "chapter": 2
      },
      {
        "ref": "3",
        "title": "Ubuntu Server và mạng bridge",
        "text": "Ở chế độ bridge, guest thường tham gia cùng mạng lớp 2 với host và có địa chỉ riêng trong mạng đó. Khả năng truy cập phụ thuộc DHCP, mạng vật lý, firewall và chính sách nơi bạn đang kết nối; bridge không tự bảo đảm truy cập được từ internet.",
        "points": [
          "Cài Ubuntu Server bằng ISO phù hợp; tạo user lab và lưu cách mở console.",
          "IP có thể đổi nếu dùng DHCP. Xác định interface và default route trước khi chỉnh mạng.",
          "Cài/mở SSH theo hướng dẫn Ubuntu; giới hạn truy cập trong mạng lab."
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
        "chapter": 2
      },
      {
        "ref": "3.1",
        "title": "Mạng NAT và chuyển tiếp cổng",
        "text": "Ở chế độ NAT, guest thường đi ra mạng ngoài thông qua mạng ảo của hypervisor. Máy khác ngoài mạng ảo muốn truy cập guest có thể cần port forwarding. Cách host truy cập guest và vị trí cấu hình forwarding phụ thuộc hypervisor.",
        "points": [
          "NAT làm thay đổi địa chỉ trên đường truyền; không phải một dịch vụ SSH.",
          "Port forwarding ánh xạ cổng ở phía host/gateway sang cổng guest.",
          "Địa chỉ 127.0.0.1 luôn chỉ chính môi trường đang gọi: host và guest có loopback khác nhau."
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
        "chapter": 2
      },
      {
        "ref": "4",
        "title": "Điều hướng và thao tác file",
        "text": "Phần lớn thao tác vận hành bắt đầu từ tìm đúng đường dẫn và đọc đúng file. Làm quen với đường dẫn tương đối/tuyệt đối, các file ẩn và cách xem nội dung trước khi chỉnh sửa.",
        "points": [
          "pwd cho vị trí hiện tại; cd đổi thư mục; ls -la bao gồm file ẩn.",
          "cp sao chép, mv di chuyển/đổi tên. Đọc nguồn và đích trước khi thực hiện.",
          "Dùng less với file lớn; head/tail để xem đầu hoặc cuối file."
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
        "chapter": 2
      },
      {
        "ref": "5",
        "title": "Sửa cấu hình bằng Vim",
        "text": "Vim có nhiều chế độ. Normal dùng để điều hướng/thao tác; Insert dùng nhập văn bản; command-line dùng lệnh như lưu và thoát. Nhấn Esc trước khi nhập lệnh để trở về trạng thái rõ ràng.",
        "points": [
          "i vào Insert; Esc về Normal.",
          "Trong Normal, /từ-khóa tìm kiếm và n chuyển đến kết quả tiếp.",
          ":w lưu; :q thoát; :wq lưu rồi thoát; :q! bỏ thay đổi chưa lưu."
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
        "chapter": 2
      },
      {
        "ref": "6",
        "title": "Process, log và kết nối mạng",
        "text": "Khi ứng dụng không hoạt động, cần xác định tiến trình có chạy, cổng có lắng nghe và log báo gì. Kết hợp các công cụ quan sát giúp bạn khoanh vùng thay vì restart liên tục.",
        "points": [
          "ps/top đọc process; systemctl quản lý service trên hệ thống dùng systemd.",
          "journalctl đọc journal; tail -f theo dõi file log đang ghi.",
          "ss -lnt hiển thị cổng TCP đang nghe; curl kiểm tra HTTP ở tầng ứng dụng."
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
        "chapter": 2
      },
      {
        "ref": "7",
        "title": "User, group và quyền truy cập",
        "text": "Quyền Linux phụ thuộc owner, group và others. Với file, r/w/x là đọc/ghi/thực thi; với thư mục, x cho phép đi qua đường dẫn. User chạy dịch vụ cần đủ quyền nhưng không nên được cấp quyền vượt nhu cầu.",
        "points": [
          "id hiển thị user và các group; ls -l cho owner/group/mode.",
          "chmod thay mode; chown thay chủ sở hữu, cần quyền phù hợp.",
          "Quyền của thư mục cha ảnh hưởng khả năng truy cập file con."
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
        "chapter": 2
      },
      {
        "ref": "8",
        "title": "Tư duy đưa một ứng dụng lên server",
        "text": "Triển khai là một chuỗi đầu vào → build → cấu hình runtime → chạy → kiểm tra. Trước khi cài công cụ, hãy đọc tài liệu dự án và tìm các điều kiện chạy: runtime, dependency, biến môi trường, database, cổng và dữ liệu cần giữ.",
        "points": [
          "Build artifact là kết quả có thể chuyển sang môi trường chạy, ví dụ dist/ hoặc file JAR.",
          "Tách cấu hình môi trường khỏi mã nguồn và tránh commit credential.",
          "Chuẩn bị health check và phiên bản quay lui trước khi thay bản đang dùng."
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
        "chapter": 2
      },
      {
        "ref": "9",
        "title": "Frontend tĩnh và Nginx",
        "text": "Frontend sau build thường là HTML, CSS và JavaScript. Nginx phục vụ các file này qua HTTP. Dự án todolist hiện có là Vue CLI cũ; kiểm tra phiên bản Node tương thích và dependency trước khi build, thay vì coi lỗi toolchain là lỗi Nginx.",
        "points": [
          "npm ci cần package-lock.json hợp lệ; không có lockfile thì dùng npm install có kiểm soát rồi ghi nhận lockfile.",
          "dist/ là đầu ra, không phải thư mục mã nguồn src/.",
          "Ứng dụng SPA dùng history mode thường cần fallback về index.html; hash router không yêu cầu rewrite route tương tự."
        ],
        "code": "# Trong dự án frontend lab, sau khi chọn Node tương thích\nnode --version\nnpm --version\nnpm run build\n# Sau khi đã cài/cấu hình Nginx trên Ubuntu lab\nsudo nginx -t\ncurl -I http://127.0.0.1",
        "exercise": "Build todolist trong môi trường tương thích. Cấu hình Nginx phục vụ artifact ở document root riêng và thử tải trang, JS/CSS cùng route bên trong.",
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
        "chapter": 2
      },
      {
        "ref": "10",
        "title": "Backend Java và systemd",
        "text": "Backend Java cần môi trường runtime phù hợp, cấu hình bên ngoài và một tiến trình được quản lý. Chạy java -jar ở terminal giúp thử nghiệm, còn systemd giúp quản lý khởi động lại, user và log khi đưa lên máy chủ Linux.",
        "points": [
          "Đọc pom.xml hoặc build.gradle để chọn JDK và lệnh build.",
          "Không đoán tên JAR bằng wildcard nếu thư mục có nhiều artifact.",
          "Dùng service user riêng; lưu cấu hình nhạy cảm ngoài Git và giới hạn quyền đọc."
        ],
        "code": "# Trong dự án Maven đã kiểm tra, có Maven Wrapper\n./mvnw test package\nfind target -maxdepth 1 -name '*.jar'\njava -version\n# Khi đã viết/cài unit service trong Ubuntu lab\nsystemctl status <ten-service> --no-pager\njournalctl -u <ten-service> -n 50 --no-pager",
        "exercise": "Với backend Java lab của bạn, xác định đúng artifact và chạy bằng JDK tương thích. Viết unit systemd có User, WorkingDirectory, ExecStart và Restart thích hợp.",
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
        "chapter": 2
      }
    ],
    "id": 2
  },
  {
    "title": "Git & quản lý phiên bản",
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
        "title": "Mô hình Git: từ file đến commit",
        "text": "Git lưu lịch sử bằng các snapshot liên kết với nhau. Working tree là file bạn sửa; staging area chọn nội dung cho commit tiếp theo; repository lưu các commit và refs. Git không phải GitLab: Git là công cụ phiên bản, GitLab là nền tảng cộng tác và CI/CD.",
        "points": [
          "git status cho biết nội dung chưa theo dõi, đã sửa và đã stage.",
          "Commit chỉ chứa nội dung đã stage, không tự lấy mọi file đang mở.",
          "Ignore dependency, output build và secret; .gitignore không gỡ file đã được theo dõi."
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
        "chapter": 3
      },
      {
        "ref": "12",
        "title": "GitLab tự quản lý: chuẩn bị cài đặt",
        "text": "GitLab Self-Managed gộp quản lý source, review và CI/CD. Cài đặt cần hostname, tài nguyên, port, TLS, email và chiến lược backup. Với người mới, nên hiểu kiến trúc trước khi thêm nhiều dịch vụ lên cùng VM.",
        "points": [
          "Phân biệt GitLab server giữ repository với runner thực thi job.",
          "Đọc yêu cầu phiên bản/OS và bộ nhớ trên tài liệu cài đặt tương ứng.",
          "Dùng tài khoản/SSH key/token giới hạn quyền; cấu hình TLS cho truy cập ngoài lab."
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
        "chapter": 3
      },
      {
        "ref": "13",
        "title": "Lệnh Git cho công việc hằng ngày",
        "text": "Quy trình cơ bản là đọc trạng thái → sửa → kiểm tra diff → stage → commit → push. Khi lấy thay đổi, fetch giúp xem remote trước; pull kết hợp lấy và tích hợp theo cấu hình của bạn.",
        "points": [
          "remote là tên tham chiếu đến repository khác, thường origin.",
          "push đưa commit lên remote, không tự deploy nếu chưa có cơ chế triển khai.",
          "revert tạo commit đảo thay đổi, phù hợp nhiều tình huống trên lịch sử đã chia sẻ."
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
        "chapter": 3
      },
      {
        "ref": "14",
        "title": "Branch, review và xử lý conflict",
        "text": "Branch cho phép phát triển thay đổi tách khỏi nhánh ổn định. Merge request/pull request cung cấp nơi review và chạy kiểm tra trước khi tích hợp. Conflict xảy ra khi Git không thể tự quyết cách kết hợp thay đổi.",
        "points": [
          "Tạo branch ngắn theo mục tiêu và commit nhỏ dễ review.",
          "Đọc cả hai phía conflict để hiểu ý định, không chỉ xóa marker.",
          "Sau merge cần kiểm tra hành vi, vì hết conflict cú pháp chưa chắc đúng logic."
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
        "chapter": 3
      }
    ],
    "id": 3
  },
  {
    "title": "CI/CD với GitLab",
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
        "title": "Từ commit đến pipeline",
        "text": "Continuous Integration kiểm tra và tích hợp thay đổi thường xuyên. Continuous Delivery giữ phiên bản ở trạng thái sẵn sàng triển khai, có thể có bước phê duyệt. Continuous Deployment tự đưa thay đổi vượt các cổng kiểm tra lên môi trường đích theo chính sách.",
        "points": [
          "Pipeline cần tiêu chí thành công, không chỉ chạy một chuỗi echo.",
          "Artifact là đầu ra dùng ở bước tiếp; cache chủ yếu giúp tăng tốc, không nên là hợp đồng truyền artifact duy nhất.",
          "Cùng một artifact đã kiểm tra nên được quảng bá qua các môi trường."
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
        "chapter": 4
      },
      {
        "ref": "16",
        "title": "GitLab CI: build artifact có kiểm chứng",
        "text": "GitLab đọc .gitlab-ci.yml trong repository và runner thực thi job. Môi trường job phải có đúng toolchain. Với frontend, job build có thể xuất dist/ thành artifact để một job triển khai tải về.",
        "points": [
          "image chọn môi trường cho executor hỗ trợ container; runner shell không tự sử dụng image theo cách đó.",
          "script chứa các bước; artifacts.paths khai báo đầu ra.",
          "Dùng CI Lint để kiểm tra YAML và rules trước khi đẩy thay đổi."
        ],
        "code": "# .gitlab-ci.yml cho frontend hiện đại tương thích Node 22\n# Có package-lock.json và script build\nstages: [build]\nfrontend_build:\n  image: node:22-bookworm-slim\n  stage: build\n  script:\n    - npm ci\n    - npm run build\n    - test -f dist/index.html\n  artifacts:\n    paths: [dist/]\n    expire_in: 7 days",
        "exercise": "Dùng repo frontend lab tương thích phiên bản Node đã chọn. Chạy pipeline và tải artifact để kiểm tra index.html cùng asset. Với Vue CLI cũ, kiểm tra/nâng toolchain trước khi dùng ví dụ Node này.",
        "verify": "Job chạy trên runner đúng executor; artifact có nội dung web có thể phục vụ độc lập.",
        "warning": "Không cho job từ branch không tin cậy truy cập SSH key production hoặc Docker socket host.",
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
        "chapter": 4
      },
      {
        "ref": "17",
        "title": "Delivery: thêm cổng duyệt trước deploy",
        "text": "Một pipeline có thể build/test tự động rồi chờ người có quyền duyệt bước triển khai. Cần bảo đảm job được duyệt sử dụng đúng artifact hoặc image đã qua kiểm tra, và không chạy build lại một phiên bản khác.",
        "points": [
          "Manual job là cơ chế thao tác; ai được deploy còn phụ thuộc quyền và cấu hình environment.",
          "Gắn environment cho job giúp ghi nhận lịch sử triển khai.",
          "Xác định rõ hành vi blocking/optional; không dựa vào mặc định khó nhớ của manual job."
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
        "chapter": 4
      }
    ],
    "id": 4
  },
  {
    "title": "Docker & đóng gói ứng dụng",
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
        "title": "Container, image và môi trường chạy",
        "text": "Image là gói gồm filesystem và cấu hình để tạo container. Container là một phiên chạy của image, dùng cơ chế cô lập và chia sẻ kernel của môi trường chạy phù hợp. Trên macOS, Docker Desktop thường cung cấp một môi trường Linux phía dưới để chạy Linux container.",
        "points": [
          "Image có thể dùng để tạo nhiều container. Sửa filesystem của một container không tự cập nhật image.",
          "Container dừng không đồng nghĩa bị xóa; container bị thay thế không bảo đảm giữ dữ liệu ở writable layer.",
          "Port mapping và volume cần khai báo theo nhu cầu ứng dụng."
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
        "chapter": 5
      },
      {
        "ref": "19",
        "title": "Quan sát và quản lý container",
        "text": "Docker CLI cho phép đọc trạng thái, log và metadata trước khi thay đổi. Lệnh exec chạy một tiến trình bổ sung trong container đang chạy; không nên coi việc sửa bằng exec là cách phát hành phiên bản mới.",
        "points": [
          "ps -a hiển thị cả container đã dừng.",
          "logs đọc stdout/stderr theo cấu hình logging; inspect đọc cấu hình và trạng thái.",
          "stop yêu cầu dừng; rm xóa container. Xem dữ liệu cần giữ trước khi xóa."
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
        "chapter": 5
      },
      {
        "ref": "20",
        "title": "Thiết kế quy trình Docker hóa",
        "text": "Docker hóa bắt đầu từ hiểu ứng dụng cần gì để build và chạy, không phải tìm một Dockerfile bất kỳ. Tách build-time khỏi runtime, chọn base image phù hợp, giảm dữ liệu đưa vào build context và xác định cách truyền cấu hình.",
        "points": [
          "COPY dependency manifests trước source giúp tái sử dụng cache khi phù hợp.",
          "Dùng .dockerignore để loại .git, node_modules và dữ liệu nhạy cảm khỏi context.",
          "Không dùng ARG/ENV để nhúng credential vào image; dùng cơ chế secret phù hợp khi build."
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
        "chapter": 5
      },
      {
        "ref": "21",
        "title": "Dockerfile cho backend Java",
        "text": "Một cách đóng gói Java là build JAR trước, sau đó đưa artifact đã kiểm tra vào runtime image. Một lựa chọn khác là multi-stage build với Maven/Gradle trong stage đầu. Chọn cách phù hợp với pipeline và khả năng truy vết artifact của bạn.",
        "points": [
          "JRE/JDK runtime phải tương thích phiên bản bytecode của dự án.",
          "COPY một artifact đã xác định, tránh lấy ngẫu nhiên nhiều file JAR.",
          "Đặt cấu hình ở runtime, chạy user không đặc quyền khi image và ứng dụng hỗ trợ."
        ],
        "code": "# Dockerfile minh họa: chuẩn bị app.jar trước khi build\nFROM eclipse-temurin:21-jre\nWORKDIR /app\nCOPY app.jar /app/app.jar\nUSER 10001:10001\nEXPOSE 8080\nENTRYPOINT [\"java\", \"-jar\", \"/app/app.jar\"]\n# Dùng JDK khác nếu ứng dụng yêu cầu; không mặc định đổi dự án lên Java 21.",
        "exercise": "Chuẩn bị backend Java lab tương thích, test/build rồi sao chép đúng JAR thành app.jar. Build image và chạy với port binding loopback.",
        "verify": "HTTP health endpoint hoạt động; container không chạy UID 0; log ứng dụng đọc được qua docker logs.",
        "warning": "Image minh họa giả định ứng dụng không cần ghi vào /app. Nếu cần file tạm hoặc dữ liệu, cấu hình volume/quyền cụ thể.",
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
        "chapter": 5
      },
      {
        "ref": "22",
        "title": "Dockerfile frontend và multi-stage",
        "text": "Frontend tĩnh chỉ cần môi trường Node lúc build; runtime có thể là Nginx. Multi-stage build giữ toolchain ở stage đầu và chỉ chuyển artifact cần thiết sang stage chạy. Với todolist Vue CLI cũ, cần giải quyết tương thích toolchain trước.",
        "points": [
          "Đọc package.json, lockfile và requirements trước khi chọn phiên bản Node.",
          "Chỉ COPY dist từ builder sang Nginx.",
          "SPA history mode cần fallback về index.html; chọn base path phù hợp nơi phục vụ."
        ],
        "code": "# Cho frontend đã xác minh tương thích Node 22, có lockfile\nFROM node:22-bookworm-slim AS build\nWORKDIR /src\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\nFROM nginx:stable\nCOPY --from=build /src/dist/ /usr/share/nginx/html/\nEXPOSE 80",
        "exercise": "Dùng một frontend tương thích để thử Dockerfile; với todolist hiện có hãy kiểm tra dependency trước. Chạy image và xem cả trang gốc lẫn route khi refresh.",
        "verify": "Runtime image không chứa node_modules của bước build; HTML/JS/CSS tải đúng và route hoạt động.",
        "warning": "Không dùng image Node mới để suy ra mọi dự án Vue cũ đều build được. Ghi rõ phiên bản đã kiểm thử trong dự án riêng.",
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
        "chapter": 5
      },
      {
        "ref": "23",
        "title": "Registry riêng và image tag",
        "text": "Registry lưu image theo repository và tag/digest. Chạy registry cục bộ giúp hiểu push/pull trước khi bổ sung TLS, xác thực và backup. Registry lab dưới đây chỉ bind loopback, không phải cấu hình production.",
        "points": [
          "Tag là nhãn có thể thay đổi; digest định danh nội dung cụ thể.",
          "Image phải được tag với địa chỉ registry đích trước push.",
          "Volume giữ dữ liệu registry qua việc thay container; quyền truy cập cần được bảo vệ."
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
        "chapter": 5
      },
      {
        "ref": "24",
        "title": "Harbor: tổ chức và quản trị registry",
        "text": "Harbor bổ sung lớp quản trị quanh registry như project, quyền, robot account, retention và các tích hợp theo phiên bản. Cài đặt cần hostname, DNS, TLS, storage và kế hoạch backup; không chỉ chạy một container rồi bỏ qua dữ liệu.",
        "points": [
          "Project là phạm vi tổ chức image và chính sách quyền.",
          "Robot account phục vụ automation với quyền giới hạn theo nhu cầu.",
          "Retention/xóa artifact cần tính đến các phiên bản đang chạy và rollback."
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
        "chapter": 5
      },
      {
        "ref": "25",
        "title": "Volumes, networks và Compose",
        "text": "Volume tách dữ liệu khỏi writable layer của container; network giúp các container giao tiếp. Compose khai báo một nhóm service cùng network/volume để có thể dựng môi trường lặp lại bằng file YAML.",
        "points": [
          "Trong Compose network, service name thường là tên để các container tìm nhau.",
          "depends_on thông thường mô tả thứ tự, không tự chứng minh ứng dụng đã sẵn sàng.",
          "Compose up có thể tạo/thay container; kiểm tra thay đổi dữ liệu và cấu hình trước khi chạy."
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
        "chapter": 5
      },
      {
        "ref": "26",
        "title": "GitLab CI với image có phiên bản",
        "text": "Pipeline Docker nên build một image có định danh gắn commit, kiểm tra image đó rồi push và triển khai đúng nội dung. Phương pháp build phụ thuộc runner: Docker-in-Docker, daemon riêng hoặc builder khác đều cần cấu hình và đánh giá quyền.",
        "points": [
          "Dùng CI_COMMIT_SHA hoặc digest để liên hệ bản chạy với commit.",
          "Đăng nhập registry qua biến CI đã quản lý; không ghi password vào repository.",
          "Deploy cần health check và cách quay lại image trước, không chỉ docker run thành công."
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
        "chapter": 5
      }
    ],
    "id": 5
  },
  {
    "title": "Tự động hóa với Jenkins",
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
        "title": "Jenkins trong chuỗi triển khai",
        "text": "Jenkins điều phối các tác vụ tự động qua job/pipeline. Controller quản lý cấu hình và lịch chạy; agent thực thi công việc trong workspace với toolchain và quyền được cung cấp.",
        "points": [
          "Pipeline là mã mô tả công việc, thường đặt trong Jenkinsfile cùng source.",
          "Agent cần runtime/tools thích hợp, không tự có Docker/Node/Java chỉ vì Jenkins đã cài.",
          "Plugin mở rộng chức năng; chọn theo nhu cầu, cập nhật và theo dõi tương thích."
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
        "chapter": 6
      },
      {
        "ref": "28",
        "title": "Cài Jenkins và cấu hình ban đầu",
        "text": "Cài Jenkins cần phiên bản Java được hỗ trợ, cơ chế lưu JENKINS_HOME và cấu hình truy cập. Dữ liệu cấu hình/credentials phải được bảo vệ và backup, không phụ thuộc một container dùng xong xóa.",
        "points": [
          "Chọn hướng dẫn cài đúng hệ điều hành/container và bản Jenkins định dùng.",
          "Hoàn thành setup qua giao diện, tạo tài khoản riêng và cấu hình phân quyền.",
          "Tạo agent thử nghiệm trước khi cấp credential deploy thật."
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
        "chapter": 6
      },
      {
        "ref": "29",
        "title": "Jenkinsfile: build và kiểm tra frontend",
        "text": "Declarative Pipeline chia công việc thành stage có steps. Jenkinsfile cho phép review quy trình cùng source. Job Pipeline from SCM checkout được repository theo cấu hình; cần agent có toolchain tương thích.",
        "points": [
          "agent chọn môi trường chạy, không phải tên máy deploy mặc định.",
          "Mỗi stage cần đầu ra/kiểm tra; test -f chỉ kiểm tra file tồn tại, không thay kiểm thử hành vi.",
          "Lưu artifact để truy vết build và bổ sung retention phù hợp."
        ],
        "code": "pipeline {\n  agent { label 'frontend-lab' }\n  options { timestamps(); disableConcurrentBuilds() }\n  stages {\n    stage('Build') {\n      steps { sh 'npm ci && npm run build' }\n    }\n    stage('Check artifact') {\n      steps { sh 'test -f dist/index.html' }\n    }\n  }\n  post {\n    success { archiveArtifacts artifacts: 'dist/**', fingerprint: true }\n  }\n}",
        "exercise": "Dùng agent label frontend-lab có Node tương thích, repo có lockfile và script build. Sau khi build ổn, thêm stage deploy chỉ vào server lab và smoke test.",
        "verify": "Artifact đúng phiên bản được lưu. Không báo deployment thành công nếu Jenkinsfile hiện mới dừng ở build.",
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
        "chapter": 6
      },
      {
        "ref": "30",
        "title": "Cổng duyệt và credentials trong Jenkins",
        "text": "Một pipeline delivery có thể chờ phê duyệt trước khi triển khai staging/production. Giới hạn người được duyệt, thời gian chờ và credential mà bước deploy sử dụng; không để credential tồn tại rộng hơn nhu cầu.",
        "points": [
          "input tạo cổng tương tác; submitter có thể giới hạn người/nhóm theo cấu hình quyền.",
          "timeout ngăn job chờ vô hạn.",
          "Credentials Binding/SSH Agent là các cách cấp credential theo phạm vi; che log không ngăn được script độc hại đọc secret."
        ],
        "code": "// Stage minh họa chèn trong Jenkinsfile đã có build/test\nstage('Approve staging') {\n  steps {\n    timeout(time: 15, unit: 'MINUTES') {\n      input message: 'Triển khai artifact đã kiểm tra lên staging?',\n            submitter: 'release-managers'\n    }\n  }\n}\n// Thêm stage deploy dùng credentials giới hạn và smoke test riêng.",
        "exercise": "Cấu hình nhóm release-managers trong lab, thử duyệt và thử timeout. Sau đó thiết kế stage deploy dùng đúng artifact từ build được duyệt.",
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
        "chapter": 6
      },
      {
        "ref": "31",
        "title": "Parameters: chọn phiên bản triển khai",
        "text": "Parameters cho phép người chạy chọn dữ liệu như môi trường hoặc phiên bản image. Đây là đầu vào cần kiểm tra; không nội suy tùy ý vào shell và không cho phép chọn mục tiêu ngoài phạm vi được cấp quyền.",
        "points": [
          "choice phù hợp tập môi trường hữu hạn; string cần validate định dạng và độ dài.",
          "Mặc định an toàn, ví dụ staging thay vì production.",
          "Chọn một phiên bản đã build/test; không âm thầm build lại branch đang thay đổi."
        ],
        "code": "// Bên trong pipeline Declarative\nparameters {\n  choice(name: 'TARGET', choices: ['staging'], description: 'Môi trường lab')\n  string(name: 'IMAGE_TAG', defaultValue: '', description: 'Commit SHA đã kiểm tra')\n}\n// Dùng withEnv + shell quoting/validation, không ghép lệnh bằng Groovy tùy ý.\n// Ví dụ validate IMAGE_TAG là 40 ký tự hex trước khi dùng.",
        "exercise": "Viết pipeline nhận IMAGE_TAG, từ chối đầu vào không phải SHA theo định dạng bạn dùng và chỉ deploy image có trong registry lab.",
        "verify": "Đầu vào chứa ký tự shell không được thực thi; bản triển khai ghi lại môi trường và digest.",
        "warning": "Không dùng sh \"deploy ${params.INPUT}\" với chuỗi người dùng chưa kiểm tra; đó có thể trở thành command injection.",
        "source": "https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#handling-parameters",
        "quiz": {
          "question": "Parameter do người chạy nhập nên được xử lý thế nào?",
          "options": [
            "Tin hoàn toàn vì chạy trong Jenkins.",
            "Validate và truyền vào lệnh với quoting phù hợp.",
            "Đổi tất cả thành sudo."
          ],
          "correct": 1,
          "explanation": "Nguồn đầu vào và quyền job khác nhau; parameter vẫn cần kiểm tra để tránh lệnh ngoài ý muốn."
        },
        "id": 33,
        "chapter": 6
      },
      {
        "ref": "32",
        "title": "Job định kỳ và vận hành pipeline",
        "text": "Jenkins có thể chạy kiểm tra định kỳ, tác vụ bảo trì hoặc báo cáo bên cạnh pipeline triển khai. Chọn tác vụ có đầu ra rõ ràng, hạn chế quyền và thiết kế để chạy lại được mà không gây hỏng dữ liệu.",
        "points": [
          "Lịch dùng cú pháp Jenkins; H giúp phân tán thời điểm chạy thay vì dồn vào cùng phút.",
          "Tránh tác vụ định kỳ chồng lấn; đặt timeout, retention và theo dõi kết quả.",
          "Job thành công nhưng không có bằng chứng kiểm tra thì chưa đủ để kết luận hệ thống khỏe."
        ],
        "code": "pipeline {\n  agent { label 'linux-lab' }\n  triggers { cron('H/15 * * * *') }\n  options { disableConcurrentBuilds(); timeout(time: 2, unit: 'MINUTES') }\n  stages {\n    stage('HTTP check') {\n      steps { sh 'curl --fail --max-time 10 http://127.0.0.1:8080/' }\n    }\n  }\n}",
        "exercise": "Chạy job HTTP check trên agent lab; thay URL bằng dịch vụ thật mà agent truy cập được. Cố ý dừng ứng dụng để kiểm tra job thất bại.",
        "verify": "Job đổi trạng thái khi dịch vụ lỗi; xác định 127.0.0.1 thuộc agent, không phải controller hoặc laptop.",
        "warning": "Đây là bài tập kiểm tra định kỳ, không thay thế hệ thống monitoring có alerting và lịch sử đầy đủ.",
        "source": "https://www.jenkins.io/doc/book/pipeline/syntax/#triggers",
        "quiz": {
          "question": "127.0.0.1 trong bước sh ở trên trỏ tới đâu?",
          "options": [
            "Môi trường đang chạy bước sh trên agent.",
            "Luôn là Jenkins controller.",
            "Máy của người mở trình duyệt."
          ],
          "correct": 0,
          "explanation": "Lệnh thực thi trên agent; loopback cũng thuộc môi trường thực thi đó."
        },
        "id": 34,
        "chapter": 6
      }
    ],
    "id": 6
  },
  {
    "title": "Monitoring & phản hồi sự cố",
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
        "title": "Giám sát từ góc nhìn người dùng",
        "text": "Monitoring thu thập và đánh giá tín hiệu để biết hệ thống có hoạt động như mong đợi. CPU thấp không chứng minh website khỏe; nên kiểm tra hành vi người dùng như HTTP availability và thời gian phản hồi cùng tài nguyên hạ tầng.",
        "points": [
          "Metrics là chuỗi số theo thời gian; logs là các sự kiện chi tiết; mỗi nguồn trả lời câu hỏi khác nhau.",
          "Theo dõi latency, traffic, errors và saturation theo khả năng hệ thống.",
          "Mỗi cảnh báo cần người chịu trách nhiệm, mức ưu tiên và hướng xử lý; giảm cảnh báo không thể hành động."
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
        "chapter": 7
      },
      {
        "ref": "34",
        "title": "Kiến trúc và thiết lập Zabbix",
        "text": "Zabbix dùng server để xử lý dữ liệu/đánh giá, database để lưu, frontend để cấu hình và xem kết quả; agent/proxy là các thành phần bổ sung tùy môi trường. Chọn hướng dẫn cài theo đúng phiên bản, OS, database và frontend.",
        "points": [
          "Host trong Zabbix là đối tượng được giám sát, có interfaces và metadata phù hợp.",
          "Passive/active checks có hướng kết nối khác nhau; firewall và hostname phải khớp cấu hình.",
          "Template tập hợp cấu hình dùng lại; xem item được tạo trước khi bật nhiều template."
        ],
        "code": "# Trên Ubuntu lab sau khi cài đúng package\nsystemctl status zabbix-server --no-pager\n# Nếu đã chọn dùng Agent 2:\nsystemctl status zabbix-agent2 --no-pager\njournalctl -u zabbix-agent2 -n 30 --no-pager\nss -lnt",
        "exercise": "Chọn phiên bản Zabbix và DB từ trang download chính thức. Cài lab theo cấu hình đó, tạo host agent và kiểm tra dữ liệu mới nhất.",
        "verify": "Frontend hoạt động; server/agent liên lạc đúng hướng; Latest data có giá trị và timestamp mới.",
        "warning": "Không mở database ra internet. Thay mật khẩu khởi tạo, cấu hình TLS và quyền theo môi trường trước khi dùng ngoài lab.",
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
        "chapter": 7
      },
      {
        "ref": "35",
        "title": "Item, trigger và kiểm tra cảnh báo",
        "text": "Item xác định dữ liệu cần thu; trigger đánh giá điều kiện từ dữ liệu item để tạo trạng thái vấn đề. Action/media/user configuration quyết định thông báo đi đâu. Thu thập, phát hiện và thông báo là ba khâu cần kiểm tra riêng.",
        "points": [
          "Đặt tên item, đơn vị, chu kỳ và kiểu dữ liệu đúng mục đích.",
          "Trigger có thể dùng một cửa sổ thời gian để tránh báo vì một điểm đo đơn lẻ; ngưỡng phải theo bối cảnh.",
          "Kiểm tra cả PROBLEM và RECOVERY, cùng lịch gửi/quyền user và media nếu dùng thông báo."
        ],
        "code": "# Checklist lab, thực hiện cấu hình item/trigger trong Zabbix UI\n# 1. Host đúng interface và agent/server liên lạc được\n# 2. Item có dữ liệu mới, đơn vị đúng\n# 3. Trigger expression kiểm tra được với item đã chọn\n# 4. Tạo tình huống lỗi có kiểm soát\n# 5. Xác nhận PROBLEM rồi phục hồi để thấy RECOVERY",
        "exercise": "Chọn một metric nhẹ trong lab, đặt ngưỡng để dễ thử mà không làm đầy disk hay gây tải lớn. Kiểm tra event và recovery; nếu gửi thông báo, chỉ dùng đích thử nghiệm do bạn quản lý.",
        "verify": "Có bằng chứng data → trigger event → recovery; nếu dùng action thì ghi nhận thông báo tới đúng đích.",
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
        "chapter": 7
      }
    ],
    "id": 7
  }
];
const LESSONS=CHAPTERS.flatMap(c=>c.lessons);
