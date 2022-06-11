//Elkövette: Rozsumberszki Imre
function Rn(alsoHatar, felsoHatar) {
    var veletlen = Math.round(Math.random() * Math.abs(felsoHatar - alsoHatar) + alsoHatar);
    return veletlen;
}
function UniverzalisTombGeneralo(kezdoertek, vegsoertek, elemSzam) {
    var generaltTomb = [];
    for (var i = 0; i < elemSzam; i++) {
        generaltTomb[i] = Rn(kezdoertek, vegsoertek);
    }
    return generaltTomb;
}
function univerzTombKiirato(tombBB) {
    for (var i = 0; i < tombBB.length; i++) {
        document.write(tombBB[i] + ", ");
    }
    document.write("<br>");
}
function DiakInfo(nev, csoport, tipus) {
    var csoportString = csoport < 10 ? "0" + csoport : csoport.toString();
    var tipusString = (tipus == true) ? "Junior Frontend" : "Webprogramozó";
    var visszaString = nev + " [" + "Team" + csoportString + "] - " + tipusString;
    return visszaString;
}
//let a:string=prompt("Kérlek ")
document.write("<br> Egyszerű string kiíratás:<br>");
document.write("" + DiakInfo("Minta Márton", 8, true));
function SzovegesErtekeles(jegy) {
    var tupleVissza = ["", ""];
    switch (jegy) {
        case 2:
            tupleVissza = ["Hanyag", "Rossz"];
            break;
        case 3:
            tupleVissza = ["Változó", "Változó"];
            break;
        case 4:
            tupleVissza = ["Jó", "Jó"];
            break;
        case 5:
            tupleVissza = ["Példás", "Példás"];
            break;
        default:
            tupleVissza = ["Hibás adat", "Hibás adat"];
            break;
    }
    return tupleVissza;
}
document.write("<br><hr>");
var visszaTuple = SzovegesErtekeles(2);
document.write("Jegyértékelés próba: [Magatartás,Szorgalom] <br><b>SzovegesErtekeles(2):  </b>");
document.write("[ " + visszaTuple[0] + "," + visszaTuple[1] + "]");
document.write("<br><hr>");
//Hárommal osztható számok listája
function HarommalOszthatokSzama(tombBe) {
    var haroszthato = 0;
    for (var i = 0; i < tombBe.length; i++) {
        if (tombBe[i] % 3 == 0) {
            haroszthato++;
        }
    }
    return haroszthato;
}
document.write("<br><hr>");
univerzTombKiirato([10, 23, 12, 24, 31, 33, 42, 20]);
document.write("H\u00E1rommal oszthat\u00F3 sz\u00E1mok ezek k\u00F6z\u00FCl: ".concat(HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]), " darab"));
document.write("<br><hr>");
//Nyerőszám sorsoló
function NyeroSzamok(mennyiseg, alsoHatar, felsoHatar) {
    var nyeroszamTomb = [];
    var vanMar = false;
    //a file elején levő véletlenszámgenerátort használom:
    //   for (let i = 0; i < mennyiseg; i++) {
    while (nyeroszamTomb.length < mennyiseg) {
        var ujVeletlen = Rn(alsoHatar, felsoHatar);
        vanMar = false;
        for (var j = 0; j < nyeroszamTomb.length; j++) {
            if (ujVeletlen == nyeroszamTomb[j]) {
                vanMar = true;
            }
        }
        if (!vanMar) {
            nyeroszamTomb.push(ujVeletlen);
        }
    }
    //kigenerálás
    //ismétlődés vizsgálat
    // }
    //nyeroszamTomb.sort();
    return nyeroszamTomb;
}
document.write("<br><hr>");
document.write("Nyerőszám generálás teszt a függvény: Nyeroszamok(5,1,90) -re a kigenerált értékek (növekvősor):<br>");
var nyeroszamokVissza = NyeroSzamok(5, 1, 90);
nyeroszamokVissza.sort(function (a, b) { return a - b; }); //loptam :-)
univerzTombKiirato(nyeroszamokVissza);
document.write("<br><hr>");
document.write("Nyerőszám generálás teszt a függvény: Nyeroszamok(20,1,90) -re a kigenerált értékek (növekvősor):<br>");
nyeroszamokVissza = NyeroSzamok(20, 1, 90);
nyeroszamokVissza.sort(function (a, b) { return a - b; }); //loptam :-)
univerzTombKiirato(nyeroszamokVissza);
document.write("<br><hr>");
document.write("1 szelvény Lottószám generálás teszt a függvény: 6 db Nyeroszamok(5,1,90) -re a kigenerált értékek (növekvősor):<br>");
for (var i = 0; i < 6; i++) {
    nyeroszamokVissza = NyeroSzamok(5, 1, 90);
    nyeroszamokVissza.sort(function (a, b) { return a - b; }); //loptam :-)
    univerzTombKiirato(nyeroszamokVissza);
}
document.write("<br><hr>");
