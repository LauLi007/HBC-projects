'use strict'

// arvotaan arvattava numero väliltä 0-100, 0 ja sata myös mahdollisia
var arvattava = Math.floor(Math.random() * (100 + 1) );

// debug-tulostus kehittäjälle, kommentoi pois tuotantoversiosta
console.log("Arvattava: " + arvattava);

// muuttuja pelaajan nykyistä arvausta varten
// alkuarvo on undefined, jotta erotetaan, onko tehty yhtään arvausta
// vai ei
var arvaus = undefined;

// määrittele myös muuttujat, parasta
// alinta ja parasta ylintä arvausta varten sekä tehtyjen arvausten
// lukumäärää varten
var lkm = 0;
var parasAlin = 0;
var parasYlin = 100;

// kannattaa myös hakea tarvitsemasi DOM-elementit muuttujiin,
// jotta niitä on helpompi käyttää, muuttujanimet ovat lyhyempiä
// kirjoittaa kuin "document.getElementById(...)..."
var vihjeElem = document.getElementById('vihje');
var vihjeAlempi = document.getElementById('alempi');
var vihjeYlempi = document.getElementById('ylempi');
var alempiPalkki = document.getElementById('lower-bar');
var keskiPalkki = document.getElementById('middle-bar');
var ylempiPalkki = document.getElementById('upper-bar');

//
// Event-käsittelijä lomakkeelle
//
function arvausTehty() {
  // haetaan käyttäjän syöttämä arvo ja tulkitaan se numeroksi
  var syote = document.getElementById('luku').value;
  arvaus = parseInt(syote);
  console.log('Arvaus: ' + arvaus);

  // tyhjennetään lomake uutta arvausta varten
  document.getElementById('lomake').reset();

  
  if (arvaus < arvattava){
    //päivitä ohje sivuille
    console.log('Vihje:', 'Luku on suurempi');
  
    if (arvaus > parasAlin){
      parasAlin = arvaus;
      vihjeAlempi.innerHTML = 'Paras arvaus alapuolella ' + arvaus ;
    }
  } else if (arvaus > arvattava){
      console.log('Vihje:', 'Luku on pienempi');
      //päivitä paras alin sivuille
      
    if(arvaus < parasYlin){
      parasYlin = arvaus;
      vihjeYlempi.innerHTML = 'Paras arvaus yläpuolella ' + arvaus ;
    }
  
  } else {
    //päivitä paras ylin sivuille
    console.log('Vihje:', 'Luku on oikein')    

  }


console.log('Arvauksia', lkm);
console.log('Paras arvaus alapuolella', parasAlin);
console.log('Paras arvaus yläpuolella', parasYlin);



  //Toteuta tähän algoritmi:

    // Päivitä arvausten määrä
    lkm = lkm + 1;
    console.log('arvauksia tehty: ', lkm)
    vihjeElem.innerHTML = "arvauksia tehty:" + lkm;

    if(arvaus < arvattava) {
      vihjeElem.innerHTML = 'Luku on suurempi';

    } else if (arvaus > arvattava){
      vihjeElem.innerHTML = 'Luku on pienempi';

    } else {
      vihjeElem.innerHTML = 'Onnittelut, arvasit oikein! Arvauksia: ' + lkm + '';
      
      var text = "";
      var i = 0;
      while (i < arvattava) {
      text += "<br> " + i;
      i++;
}
    document.getElementById("numerot").innerHTML = text;
    }
  
    if(arvaus !== arvattava){
      alempiPalkki.style.width = `${parasAlin}%`;
      keskiPalkki.style.width = `${parasYlin - parasAlin}%`;
      ylempiPalkki.style.width = `${100 - parasYlin}%`;
    }

    /*Jos pelaajan arvaus on pienempi kuin arvattava,
        Jos arvaus on parempi kuin nykyinen alempi arvaus,
          päivitä alempi arvaus
        Anna vihje "Luku on suurempi"
    Jos pelaajan arvaus on suurempi kuin arvattava,
        Jos arvaus on parempi kuin nykyinen ylempi arvaus,
          päivitä ylempi arvaus
        Anna vihje "Luku on pienempi"
    Jos arvaus on yhtäsuuri kuin arvattava
        Kirjoita vihje-elementtiin onnitttelut ja arvausten määrä
        Kirjoita numerot-elementtiin luvut nollasta arvattavaan
          Huomaa, että numerot on kirjoitettava html-koodina, jotta
          ne näytetään oikein!
  */


  // onsubmit-käsittelijä palauttaa false, jotta lomaketta ei oikeasti lähetettäisi
  // lähetys lataisi sivun uudelleen ja nollaisi koko pelin
  return false;
}

// asetetaan tapahtumankäsittelijä lomakkeelle, siis määritellään,
// mitä funktiota kutsutaan, kun lomake lähetetään
document.getElementById('lomake').onsubmit = arvausTehty;
