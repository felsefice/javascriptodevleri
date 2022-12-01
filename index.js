const domDiv = document.querySelector('.mainDiv');

const isim = prompt('Lütfen isminizi giriniz...');

const dgtlst = () => {
    let baglanti;
    const tarih = new Date();
    const gunler =['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
    const gun = gunler[tarih.getDay()];
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();

    saat   = saat<10   ? `0${saat}`   : saat;
    dakika = dakika<10 ? `0${dakika}` : dakika;
    saniye = saniye<10 ? `0${saniye}` : saniye;

    baglanti = isim == "Furkan" || isim == "furkan" ? "https://furkandoganktf.github.io/resume/" :
               isim == "Muhammed" || isim == "muhammed" || isim == "Muhammed Emin" || isim == "muhammed emin" ? "https://github.com/Sheravil" :
               isim == "Ömer" || isim == "ömer" || isim == "Ömer Faruk" || isim == "ömer faruk" ? "https://www.instagram.com/farukomer999/" :
               `https://github.com/${isim}`;

    setTimeout(dgtlst, 1000);

    return domDiv.innerHTML = `
    <div>
        <h2>
        <a href="https://kodluyoruz.org" target="_blank">
        <img src="https://kodluyoruz.org/wp-content/uploads/2022/05/kodluyoruz_yatay_slogan-300x35.png" width="150" alt="Kodluyoruz">
        </a>
        </h2>
        <p>Merhaba <a href="${baglanti}" target="_blank" style="text-decoration-line: none;"><b style="color: #f78501;">${isim}!</b></a> Hoş Geldin!</p>
        <p>${saat}:${dakika}:${saniye} ${gun}</p>
        <p>tarihinde <b>Kodluyoruz Frontend Web Development Patikası</b>'nın Javascript bölümü 1. ödevindesiniz...</p>
    </div>
    `
}
 dgtlst();