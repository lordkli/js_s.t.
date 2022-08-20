// yas >= 18
// mezuniyet == "lise"  ya da mezuniyet == "üniversite"

let mezuniyet = "üniversite";
let yas = 20;

if ((yas >= 18) && (mezuniyet == "lise") || mezuniyet == "universite") {
    console.log("ehliyet alabilir.");
}else {
    console.log("ehliyet sartlaari tutmuyor.")
}

// and
// true , true => true
// true , false => false

// or
// true, true => true
// true, false => true
// false, false => false
