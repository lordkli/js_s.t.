let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.

// for(i of sayilar){
//     console.log(i*i);
// }

//2-sayilar listesindeki hangi sayilar 5in katidir?

// for(i of sayilar){
//     if(i % 5 ==0){
//         console.log(i);
//     }
// }

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.

// let toplam = 0;
// for (i of sayilar) {
//   if (i % 2 == 0) {
//     toplam += i;
//   }
// }
// console.log(toplam);

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];
// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

// for(let urun of urunler){
//     console.log(urun.toUpperCase());
// }
// 5- urunler listesinde samsung geçen kaç ürün vardır?

// let adet = 0;

// for(let urun of urunler){
//     if(urun.includes("samsung")){
//         adet++;
//     }
// }
// console.log(adet);

let ogrenciler =[
    {"ad":"yigit", "soyad": "bilgi", "notlar": [60, 70 ,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80, 70 ,80]},
    {"ad":"cinar", "soyad": "turan", "notlar": [10, 20 ,60]},

]
// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
for(let ogrenci of ogrenciler){
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;

    for(let not of ogrenci.notlar){
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;

    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli ogrencinin not ortalamasi : ${ortalama}`);

    if(ortalama >= 50){
        console.log("basarili.");
    }else {
        console.log("basarisiz.")
    }
}

// tüm öğrencilerin not ortalaması kaçtır?
