let ad = "Sadık";
let soyad = "Turan";
let yas = 75;
let sehir = "Kocaeli";

let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + '\'de yaşıyorum.' + 'Emekliliğe ' + (65 - yas) + ' yılım kaldı.';

// backtick
mesaj = `Benim adim ${ad} ve soyadim ${soyad}. ${sehir}'de yasiyorum. Emeklilige ${65 - yas} yilim kaldi.`
// ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65-yas) + " yıl kaldı." : "Zaten emekli OLABILIRSINIZ:.";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.${emeklilik}`;

console.log(mesaj);