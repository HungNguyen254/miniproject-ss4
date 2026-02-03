let username = "admin";
let pass = "12345";
let count = 3;
let choose = 0;
let usernamelower = username.toLowerCase();
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
    usernamelower = prompt("Nhap ten tai khoan");
    pass = +prompt("Nhap mat khau");
    if (count == 0) {
        islogin = false;
        alert("Hết lượt đăng nhập")
        break;
    }
    if (usernamelower == "admin" && pass == "12345") {
        islogin = true;
        alert(`Đăng nhập thành công`);
        break;
    } else if (usernamelower == "admin" && pass != "12345") {
        alert(`Sai mat khau (con ${count} lan)`)
        count--;
    } else if (usernamelower != "admin" && pass == "12345") {
        alert(`Sai tai khoan (con ${count} lan)`);
        count--;
    }
} while (username != "admin" || pass != "12345");
if (islogin == true) {

    do {
    menu = "menu\n"
    menu += "1.Phân loại mã số sách.\n"
    menu += "2.Thiết kế bản đồ kho sách\n"
    menu += "3.Dự toán phí bảo trì sách theo năm\n"
    menu += "4.Tìm mã số sách may mắn\n"
    menu += "5.Thoát chương trình\n"
    choose = Number(prompt(menu))
         if (isNaN(choice)) {
      alert("Vui lòng nhập số!");
      continue;
    }
    switch (choose) {
    case 1:
        do {
            bookid = +prompt("Nhập mã số sách (Nhập 0 để dừng): ");
            totalcount++;
            if(bookid % 2 === 0){
                counteven++;
            }else {
                countodd++;
            }
        } while (bookid != 0);
        console.log("Kết quả mã phân loại sách");
        console.log("Tổng số mã sách: "+ totalcount);
        console.log("Số sách khoa học: "+ counteven);
        console.log("Số sách vật lý: "+ countodd);
        break;
    case 2:
        rows = +prompt("Nhap hang:");
        cols = +prompt("Nhap cot: ");
        for(let i = 1;i<=rows;i++){
            let line = "";
            for(let j =1;j<=cols;j++){
                if(i===j){
                    console.log(`${i}-${j} (kệ ưu tiên)`);
                }else {
                    console.log(`${i}-${j}`);
                }
            }
        }
        break;
    case 3:
        let quantity = +prompt("số lượng sách hiện tại:"));
        let cost = +prompt("phí bảo trì gốc cho 1 cuốn:"));
        let years = +prompt("số năm dự toán:"));

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
          document.writeln("BẢNG DỰ TOÁN PHÍ BẢO TRÌ" + "<br>");

          for (let i = 1; i <= years; i++) {
            let totalCost = quantity * cost;
            document.writeln("Năm " + i + ": " + totalCost + " VNĐ" + "<br>");
            cost = cost * 1.1;
          }
        }
        break;
break;
   case 4:
     let n = Number(prompt("Nhập số giới hạn N:"));

        if (isNaN(n) || n <= 0) {
          alert("Dữ liệu không hợp lệ!");
        } else {
          let count = 0;

          document.writeln("DANH SÁCH MÃ SỐ SÁCH MAY MẮN: " + "<br>");
          for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 !== 0) {
              document.writeln(i);
              count++;
            }
          }

          document.writeln("<br>" + "Tổng số mã may mắn: " + count + "<br>");
        }
        break;
break;
    default:
        console.log("vui lòng nhập từ 1-5");
        break;
}
    } while (choose !=5);

}
