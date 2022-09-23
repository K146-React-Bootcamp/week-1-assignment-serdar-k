// COOKIE ILE SET VE GET ISLEMLERI

/* COOKIE'LER BILGISAYARLARDA VERI DEPOLAYAN KUCUK BOYUTLU TEXT DOSYALARIDIR. 
INTERNET BAGLANTISI KESILDIGINDE SERVER TARAFI KULLANICI ILE ILGILI BAZI BLIGILERI KAYDETMEZ, ANCAK COOKIE'LER ILE
/BU BILGILERIN SUREKLI OLARAK KULLANICIDAN ISTENMESI ONLENIR VE KULLANICI ISLEMLERINE SAYFAYI TEKRAR ACTIGINDA DEVAM EDER
*/

// JAVASCRIPT ASAGIDAKI KOMUT ILE COOKIE OLUSTURABILIR, OKUYABILIR VEYA SILEBILIR

document.cookie = 'username = Serdar Korkmaz';

// COOKIE ILE SET ISLEMI
function setCookie(name, data, day) {
  let date_value = new Date();
  date_value.setTime(date_value.getTime() + day * 24 * 60 * 60 * 1000);
  let expire = 'Expires: ' + date_value.toUTCString();
  document.cookie = name + '=' + data + ';' + expire + ';path=/';
}

setCookie('Serdar', 'Kodluyoruz.org', 5);

// COOKIE ILE GET ISLEMI
function getCookie(cname) {
  let name = cname + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

let cookieData = getCookie('Serdar');
console.log(cookieData);

// SESSION
/* TARAYICIDA YENI BIR SEKME YA DA PENCERE ACILDIGINDA YENI BIR SAYFA OTURUMU ACILMIS KABUL EDILIR VE BU OTURUM SADECE O SAYFA YA DA SEKMEYE
OZELDIR. SESSION, SAYFA ACIK OLDUGU SURECE HAYATINA DEVAM EDER. SAYFA YENILEME GIBI ISLEMLER SONUCUNDA YENI BIR SESSION OLUSTURULUR.
SAYFA KAPATILDIGINDA ISE SESSION SONA ERER VE O SAYFADA KULLANILAN BILGILER SILINIR.
*/

// SET
let setSession = window.sessionStorage.setItem('Serdar', 'Kodluyoruz.org');

// GET
let getSession = window.sessionStorage.getItem('Serdar');

console.log(getSession);
