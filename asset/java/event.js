// Đăng Ký và đăng nhập

function dangnhap(){
    if(formValidate()){
        alert("Đăng nhập thành công!");
        chuyenhuongtrangchu();
    }
    return true;
}

function chuyenhuongtrangchu(){
    window.location.href = 'index.html';
}


function formValidate() {
    var email = document.getElementById("Email");
    var req = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    var matkhau = document.getElementById("taomatkhau");
    var req1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
    // Kiểm tra email hợp lệ
    if (req.test(email.value) == false) {
        alert("Vui lòng nhập email hợp lệ");
        return false;
    }
    
    if(req1.test(matkhau.value)==false){
        alert("Mật khẩu tối thiểu 8 ký tự, ít nhất 1 chữ cái viết hoa, 1 chữ cái viết thường, 1 số và 1 ký tự đặc biệt");
        return false;
    }
    return true;
}

function testpass(){
    var matkhau = document.getElementById("taomatkhau").value;
    var nhaplaimatkhau = document.getElementById("nhaplaimatkhau").value;
    if(matkhau != nhaplaimatkhau){
        alert("Vui lòng nhập đúng mật khẩu");
        return false;
    }
    return true;
}

function dangky() {
    if (formValidate() && testpass()) {
        alert("Đăng ký thành công!");
        chuyenhuongdangnhap();
    }
    return true;
}


function chuyenhuongdangnhap(){
    window.location.href = 'dangnhap.html';
}

// Đăng Ký và đăng nhập

//Lien He
function nutGui() {
    var tenlh = document.getElementById("lienheten").value.trim();
    var emaillh = document.getElementById("lienheemail").value.trim();
    var chudelh = document.getElementById("lienhechude").value.trim();
    var cmt = document.getElementById("lienhecmt").value.trim();

    if (tenlh !== "" && emaillh !== "" && chudelh !== "" && cmt !== "") {
        alert("Nội dung đã được gửi!");
        document.getElementById("lienheten").value = "";
        document.getElementById("lienheemail").value = "";
        document.getElementById("lienhechude").value = "";
        document.getElementById("lienhecmt").value = "";
    }
    else {
        alert("Vui lòng nhập đầy đủ các thông tin yêu cầu!");
        document.getElementById("lienheten").value = "";
        document.getElementById("lienheemail").value = "";
        document.getElementById("lienhechude").value = "";
        document.getElementById("lienhecmt").value = "";
    }

    document.getElementById("lienheten").value = "";
    document.getElementById("lienheemail").value = "";
    document.getElementById("lienhechude").value = "";
    document.getElementById("lienhecmt").value = "";
}