function submitData(){
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    if(name == ""){
        return alert("Name Required")
     } else if(email == ""){
        return alert("Email Required")
     } else if(phone == ""){
        return alert("Phone required")
     } else if(subject == ""){
        return alert("Subject required")
     } else if(message == ""){
        return alert("Messages required")
     }

     let emailReceiver = "dimalaon2@gmail.com"

     let a = document.createElement('a')
     a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak ke nomor ${phone}`
     a.click()

}


// contoh object

let mobil1 = {
   jenis: "toyota",
   tahun: "2018",
   warna: "merah"

}
console.log(mobil1);
