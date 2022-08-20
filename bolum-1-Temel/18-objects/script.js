// dict , json
let kullanici1 ={
    "ad": "Sadik",
    "soyad": "Turan",
    "yas": 38,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "izmit"
    },
    "hobiler": ["sinema", "spor"]
}
let kullanici2 ={
    "ad": "Veli",
    "soyad": "Dayi",
    "yas": 22,
    "adres": {
        "sehir": "cubuk",
        "ilce": "dagdeviren"
    },
    "hobiler": ["pop", "sky"]
}

let kullanicilar = [
    kullanici1,
    kullanici2
];
let sonuc;

sonuc = kullanici1.ad;
sonuc = kullanici1.soyad;
sonuc = kullanici1.yas;
sonuc = kullanici1.adres.sehir;
sonuc = kullanici1.adres.ilce;
sonuc = kullanici1.hobiler[0];
sonuc = kullanici1.hobiler[1];

// sonuc = kullanicilar.kullanici2.ad;
sonuc = kullanicilar[1].ad;

let urunler =[
    {
        "urun_adi": "samsung s22",
        "urun_fiyat": 13000
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000
    }
]

sonuc = urunler[1].urun_adi;

console.log(sonuc);