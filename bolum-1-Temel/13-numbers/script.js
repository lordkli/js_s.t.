let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("10");

let sayi = 15.12355467;

sonuc = sayi.toPrecision(5);
// sayinin kac basamagini okumak istiyorsan (15.123)(!!!! yuvarliyor eger ondan sonrasindaki rakam 5 den buyukse 124 olurdu)
sonuc = sayi.toFixed(5);
// sayinin ondalik basamagindan kac tanesini okumak istiyorsan onu istiyor

sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2);
sonuc = Math.floor(2.6);
sonuc = Math.sqrt(25);
sonuc = Math.pow(2,3);
sonuc = Math.abs(-10);
sonuc = Math.min(4,6,8,3,9);
sonuc = Math.max(4,6,8,3,9);
sonuc = Math.floor(Math.random() * 10) + 1; //1 ile 10 arasi 10 dahil
//normalde sadece random 0 ile 1 arasinda

console.log(typeof sonuc);
console.log(sonuc);