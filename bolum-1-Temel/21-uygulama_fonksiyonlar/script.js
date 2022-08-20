// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function kelimeYazdir(kelime, adet) {
  for (let i = 1; i <= adet; i++) {
    console.log(kelime);
  }
}

// kelimeYazdir("ali" , 10);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevreHesaplama(kisa, uzun) {
  let alan = kisa * uzun;
  let cevre = (kisa + uzun) * 2;

  return `alan: ${alan} cevre: ${cevre}`;
}

let sonuc = alanCevreHesaplama(7, 10);
// console.log(sonuc);

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

function yaziTura() {
  let random = Math.random(); //0-1

  if (random < 0.5) {
    console.log("yazi");
  } else {
    console.log("tura");
  }
}

// yaziTura();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function bolenleriBulma(sayi) {
  let sayilar = [];

  for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      sayilar.push(i);
    }
  }
  return sayilar;

}

// console.log(bolenleriBulma(10)) ;
// console.log(bolenleriBulma(20)) ;

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam(){
    let sonuc = 0;

    for(let i= 0; i<arguments.length; i++){
        sonuc += arguments[i];
    }
    return sonuc;
}

console.log(toplam(2,5));
console.log(toplam(2,5,7));
console.log(toplam(2,5,7,9));
