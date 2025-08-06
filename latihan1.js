class Message {
    send() {
        console.log("mengirim pesan umum");
    }
}

class Email extends Message {
    send() {
        console.log("mengirim email ke pengguna");
    }
}

class SMS extends Message {
    send() {
        console.log("mengirim SMS Ke nomor penerima");
    }
}

const pesanUmum = new Message();
const pesanEmail = new Email();
const pesanSMS = new SMS();

pesanUmum.send();   // Output: mengirim pesan umum
pesanEmail.send();  // Output: mengirim email ke pengguna
pesanSMS.send();    // Output: mengirim SMS