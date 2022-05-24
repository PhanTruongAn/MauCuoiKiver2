$(document).ready(function () {

    // $("#formdangky").click(function(){
    //     $("#mymodal").modal()
    // })

    function kthoten() {
        let regex = /^[A-Z]\w*(\s[A-Z]\w*)*?$/
        if ($("#txthoten").val() == "") {
            $("#erhoten").html("Bat buoc nhap!!")
            return false
        }
        if (!regex.test($("#txthoten").val())) {
            $("#erhoten").html("viet Hoa chua cai dau!!!")
            return false
        }
        $("#erhoten").html("(*)")
        return true
    }
    $("#txthoten").blur(kthoten)


    function ktngayden() {
        let ngayden = new Date($("#txtngayden").val())
        let ngayhientai = new Date()
        if ($("#txtngayden").val() == "") {
            $("#erngayden").html("Bat buoc nhap!!")
            return false
        }
        if (ngayden < ngayhientai) {
            $("#erngayden").html("ngay den van lon hon ngay hien tai!!")
            return false
        }
        $("#erngayden").html("(*)")
        return true
    }
    $("#txtngayden").blur(ktngayden)


    function ktngaydi() {
        let ngayden = new Date($("#txtngayden").val())
        let ngaydi = new Date($("#txtngaydi").val())
        if ($("#txtngaydi").val() == "") {
            $("#erngaydi").html("Bat buoc nhap!!")
            return false
        }
        if (ngaydi < ngayden) {
            $("#erngaydi").html("ngay di phai lon hon ngay lon!!")
            return false
        }
        $("#erngaydi").html("(*)")
        return true
    }
    $("#txtngaydi").blur(ktngaydi)

    $("#txtngaydi").change(function () {
        let ngayden = new Date($("#txtngayden").val())
        let ngaydi = new Date($("#txtngaydi").val())
        let songay = (ngaydi.getTime() - ngayden.getTime()) / (24 * 60 * 60 * 1000)
        $("#txtsongay").val(songay)
    })

    $("#txtloaiphong").change(function () {
        let loaiphong = $("#txtloaiphong").val()
        let giaphong = loaiphong == "Luxury" ? 1200000 : loaiphong == "Superior" ? 1500000 : loaiphong == "View Sea" ? 1900000 : 1700000
        $("#txtgiaphong").val(giaphong)
    })

    $("#btndangky").click(function () {
        if (!kthoten() || !ktngayden() || !ktngaydi())
            return false
        let hoten = $("#txthoten").val()
        let ngaydi = $("#txtngaydi").val()
        let ngayden = $("#txtngayden").val()
        let songay = $("#txtsongay").val()
        let loaiphong = $("#txtloaiphong").val()
        let dichvu = []
        let phidichvu = 0
        let giaphong = $("#txtgiaphong").val()
        if ($("#txtgiatui").is(":checked")) {
            dichvu.push("Giat ui")
            phidichvu += 200000
        }
        if ($("#txtxeduaruoc").is(":checked")) {
            dichvu.push("xe dua ruoc")
            phidichvu += 200000
        }
        if ($("#txtansang").is(":checked")) {
            dichvu.push("an sang tai phong")
            phidichvu += 200000
        }
        let tongchiphi = giaphong * songay + phidichvu
        let row = "<tr>" +
            "<td>" + hoten + "</td>" +
            "<td>" + ngaydi + "</td>" +
            "<td>" + ngayden + "</td>" +
            "<td>" + songay + "</td>" +
            "<td>" + loaiphong + "</td>" +
            "<td>" + dichvu + "</td>" +
            "<td>" + tongchiphi + "</td>" +
            "</tr>"
        $("tbody").append(row)
        alert("dat thanh cong")
    })

})