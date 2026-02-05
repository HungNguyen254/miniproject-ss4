let username = "admin";
let pass = "12345";
let count = 3;
let choose = 0;
let usernamelower = "";
let islogin = false;
let totalcount = 0;
let counteven = 0;
let countodd = 0;
let bookid;
let menu;
let rows;
let cols;
let quantity;
let cost;
let years;
do {
  usernamelower = prompt("Nhập tên tài khoản");
  pass = prompt("Nhập mật khẩu");

  if (count === 0) {
    islogin = false;
    alert("Tài khoản đã bị khóa");
    break;
  }

  if (usernamelower === "admin" && pass === "12345") {
    islogin = true;
    alert("Đăng nhập thành công");
    break;
  } else {
    count--;
    alert(`Sai tài khoản hoặc mật khẩu (còn ${count} lần)`);
  }
} while (true);
if (islogin === true) {
  do {
    menu = "MENU\n";
    menu += "1. Phân loại mã số sách\n";
    menu += "2. Thiết kế bản đồ kho sách\n";
    menu += "3. Dự toán phí bảo trì sách theo năm\n";
    menu += "4. Tìm mã số sách may mắn\n";
    menu += "5. Thoát chương trình\n";

    choose = Number(prompt(menu));

    if (isNaN(choose)) {
      alert("Vui lòng nhập số!");
      continue;
    }
    switch (choose) {
      case 1:
        totalcount = 0;
        counteven = 0;
        countodd = 0;

        do {
          bookid = Number(prompt("Nhập mã số sách (Nhập 0 để dừng):"));
          if (bookid === 0) break;

          totalcount++;
          if (bookid % 2 === 0) {
            counteven++;
          } else {
            countodd++;
          }
        } while (true);

        console.log("KẾT QUẢ PHÂN LOẠI SÁCH");
        console.log("Tổng số mã sách:", totalcount);
        console.log("Số sách khoa học:", counteven);
        console.log("Số sách vật lý:", countodd);
        break;
      case 2:
        rows = Number(prompt("Nhập hàng:"));
        cols = Number(prompt("Nhập cột:"));

        for (let i = 1; i <= rows; i++) {
          for (let j = 1; j <= cols; j++) {
            if (i === j) {
              console.log(`${i}-${j} (kệ ưu tiên)`);
            } else {
              console.log(`${i}-${j}`);
            }
          }
        }
        break;
      case 3:
        quantity = Number(prompt("Số lượng sách hiện tại:"));
        cost = Number(prompt("Phí bảo trì gốc cho 1 cuốn:"));
        years = Number(prompt("Số năm dự toán:"));

        if (
          isNaN(quantity) ||
          isNaN(cost) ||
          isNaN(years) ||
          quantity <= 0 ||
          cost <= 0 ||
          years <= 0
        ) {
          alert("Dữ liệu không hợp lệ!");
        } else {
          document.writeln("BẢNG DỰ TOÁN PHÍ BẢO TRÌ<br>");
          for (let i = 1; i <= years; i++) {
            let totalCost = quantity * cost;
            document.writeln(`Năm ${i}: ${totalCost} VNĐ<br>`);
            cost = cost * 1.1;
          }
        }
        break;
      case 4:
        let n = Number(prompt("Nhập số giới hạn N:"));

        if (isNaN(n) || n <= 0) {
          alert("Dữ liệu không hợp lệ!");
        } else {
          let dem = 0;
          document.writeln("DANH SÁCH MÃ SỐ SÁCH MAY MẮN:<br>");

          for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 !== 0) {
              document.writeln(i + "<br>");
              dem++;
            }
          }
          document.writeln("Tổng số mã may mắn: " + dem + "<br>");
        }
        break;
      case 5:
        alert("Thoát chương trình");
        break;

      default:
        alert("Vui lòng chọn từ 1 đến 5");
    }
  } while (choose !== 5);
}
