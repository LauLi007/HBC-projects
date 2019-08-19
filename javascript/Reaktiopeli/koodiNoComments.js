"use strict";

// nappulaelementit taulukkoon = array. 
var nappulat = [
  document.getElementById('nappula0'),
  document.getElementById('nappula1'),
  document.getElementById('nappula2')
];

var tulos = 0;
var pisteet = 0; //itse luotu muuttuja
var vaihtoaika = 1000; //itse luotu muuttuja
var yrityksia = 3;
var aloitaPeliNappi = document.querySelector('#start');

var nykyinen = 0;   // nykyinen aktiivinen nappula

// käynnistetään kone
var ajastin = setTimeout(aloitaPeli, 100);

// funktio, joka pyörittää konetta: 
function aktivoiSeuraava(aika) {
  // arvo seuraava aktiivinen nappula
  var seuraava = arvoUusi(nykyinen);

  // päivitä nappuloiden värit: vanha mustaksi, uusi punaiseksi
  nappulat[nykyinen].style.backgroundColor = "darkslategray"; // vanha mustaksi
  nappulat[seuraava].style.backgroundColor = "orange"; // uusi punaiseksi

  // aseta uusi nykyinen nappula
  nykyinen = seuraava;

  // aseta ajastin seuraavalle vaihdolle
  // Koodaa niin, että vaihtumistahti kiihtyy koko ajan!
  console.log("Aktiivinen " + nykyinen);
  ajastin = setTimeout(aktivoiSeuraava, aika, aika);

  function arvoUusi(edellinen) {
    // Tämä on vain demotarkoituksessa näin!
    // Koodaa tämä niin, että seuraava arvotaan. Muista, että sama ei saa
    // tulla kahta kertaa peräkkäin.
    var uusi = (edellinen + getRandomInt(0, 2)) % 3; //itse lisätty koodi. Arpoo randomisti pallukat (nyt 3 kpl) 
    return uusi; //itse lisätty koodi. 
  }
}

// Tätä funktiota kutsutaan aina, kun jotain nappulaa painetaan
// Pelilogiikkasi vaatinee, että lisäät tänne jotain...
function painallus(i) { //i on painetun pallukan numero. 
  if(i === nykyinen){ //arvottu pallukka. 
    tulos++;
    pisteet++;
    document.getElementById('tulos').innerHTML = tulos;
    if(pisteet === 3){
      vaihtoaika = vaihtoaika === 400 ? 400 : vaihtoaika * 0.5; //jos on 400 se pysyy samana. ?-->if ja :-->else. 
      clearTimeout(ajastin); //poistaa edellisen ajastimen. 
      ajastin = setTimeout(aktivoiSeuraava, vaihtoaika, vaihtoaika);
      pisteet = 0; //aloittaa uudestaan laskeminen nollasta kolmeen ja lisää vauhtia. 
    }
  } else {
  lopetaPeli();
  }
}

// Kutsu tätä funktiota, kun peli loppuu.
// Tämäkin tarvinnee täydennystä
function lopetaPeli() {
    clearTimeout(ajastin); // pysäytä ajastin
    for (var i = 0; i < 3; i++) {
      nappulat[i].style.backgroundColor = "red"; // aseta kaikki punaisiksi
      nappulat[i].onclick = null; // disabloi nappuloiden käsittelijät
    }
    document.getElementById('overlay').style.visibility = "visible"; 
    //var button = document.createElement('button'); //tällä tavalla luodaan nappi
    //button.setAttribute('type', 'button');
    //var text = document.createTextNode('Aloita uusi peli');
    //button.appendChild(text);
    //document.getElementById('gameover').appendChild(button); 

  }

  aloitaPeliNappi.addEventListener('click', function(){
    aloitaPeli();
  });

  function aloitaPeli(){
    document.getElementById('overlay').style.visibility = "hidden";
    for (var i = 0; i < 3; i++) {
      nappulat[i].style.backgroundColor = "darkslategray"; // aseta kaikki harmaaksi
    }
    // onclick-käsittelyjät kaikille nappuloille
    nappulat[0].onclick = function() { painallus(0) };
    nappulat[1].onclick = function() { painallus(1) };
    nappulat[2].onclick = function() { painallus(2) };
    vaihtoaika = 1000;
    tulos = 0; 
    pisteet = 0;
    document.getElementById('tulos').innerHTML = tulos;
    ajastin = setTimeout(aktivoiSeuraava, 1400, vaihtoaika);
  }
  
  // generoi satunnaisen kokonaisluvun väliltä min - max
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  } //floor poistaa desimaalit pois ja pyöristää luvun alaspäin. 