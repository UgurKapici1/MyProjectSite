var objPeople = {
    users: [
        {
            mail: "ugur@gmail.com",
            sifre: "123"
        }
    ]
}


function FunctionKayıt() {
    var ad = document.getElementById("ad").value;
    var mail = document.getElementById("mail").value;
    var sifre = document.getElementById("sifre").value;
    var sifreonay = document.getElementById("sifreonay").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var users = objPeople.users.filter(Element => Element.mail == mail && Element.sifre == sifre);
    var user = {
        mail: mail,
        sifre: sifre

    }
    objPeople.users.push(user);

    if (ad.length == 0 || mail.length == 0 || sifre.length == 0 || sifreonay.length == 0) {

        alert("Tüm boşlukları doldurmalısınız!");
    }
    else if (reg.test(mail) == false) {
        alert('Hatalı Mail Formatı!');

    }

    else if (sifre != sifreonay) {
        alert("Şifre onaylamada hata!");
    }
    else if (users.length != 0) {
        alert("Kayıt Zaten Var!");
        return;
    }

    else {


        document.getElementById("kayıt").onclick = function () {
            window.location.href = "Giris.html";
        }
    }

}

function FunctionGiris() {

    var mail = document.getElementById("mail").value;
    var sifre = document.getElementById("sifre").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var user = objPeople.users.filter(Element => Element.mail == mail && Element.sifre == sifre);

    if (mail.length == 0 || sifre.length == 0) {

        alert("Tüm boşlukları doldurmalısınız!");
    }
    else if (reg.test(mail) == false) {
        alert('Hatalı Mail Formatı!');


    }  else {

        document.getElementById("giris").onclick = function () {
            window.location.href = "AnaSayfa.html";
        }

    }

}