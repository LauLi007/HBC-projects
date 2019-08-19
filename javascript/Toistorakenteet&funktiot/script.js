
function parilliset() {
    let i = 2;
    while (i <= 50) {
        println(i);
        i = i + 2;
        console.log(i);

    }
}

function yhdestaJohonkin(luku) {
    let i = 1;
    while (i <= luku) {
        println(i);
        i++;
    }
}

/*toinen tapa yhdestaJohonkin. 
function yhdestaJohonkin(luku){
    for(let i = 0; i <= luku; i++){
        println(i);
    }
}
*/

function jostainJohonkin(alku, loppu) {
    while (alku <= loppu){
    println(alku);
    alku++;
}

}

/*jostainJohonkin for-loopilla. 
function jostainJohonkin(alku, loppu){
    for(let i = alku; i <= loppu; i++){
        println(i);
    }
}
*/


function tulostaTahtia(montako){
    let i = 1;
    let tahdet = '';
    while (i <= montako){
        tahdet = tahdet + '* ';
        i++;
    }
    println(tahdet);  //println(tahdet.length); --> tulostaa tähtien määrä
}


/* tämä oli mun tekemä, ei oikea tapa. 
function tulostaNelio(sivunPituus){
    let i = 1;
    let tahdet = '';
    while (i <= sivunPituus){
        tahdet = tahdet + '*';
        i++;
    }
    println(tahdet);
    println(tahdet);
    println(tahdet);
    println(tahdet);
}
*/

function tulostaNelio(sivunPituus){
    for(let i = 0; i < sivunPituus; i++){
        tulostaTahtia(sivunPituus);
    }
}



function tulostaSuorakulmio(tahtienMaara, tulostusKerta){
    for(let i = 0; i < tulostusKerta; i++){
        tulostaTahtia(tahtienMaara);
    }
}


function tulostaKolmio(koko){
    let lkm = 1; 
    for(let i = 0; i < koko; i++){
        tulostaTahtia(lkm);
        lkm++; // on sama kuin lkm = lkm + 1;
    }
}
tulostaKolmio(5);


//function tulostaKolmio(korkeus){
//  for(let i = 0; i < korkeus; i++){
//  tulostaTahtia(i + 1);
//  }
//}


function lukusarjanSumma(n){
    let summa = 0;
    for(let i = 0; i <= n; i++){
        summa = summa + i;
    }
    return summa;
}


function kertoma(n){
    let kerta = 1;
    for(let i = 1; i < n; i++){
        kerta = kerta * i;
    }
    return kerta;
}


function ajaKaikki(){
    println('');
    println('Parilliset');
    parilliset();

    println('');
    println('Yhdestä johonkin');
    yhdestaJohonkin(12);

    println('');
    println('Jostain johonkin');
    jostainJohonkin(5, 17);
    
    println('');
    println('Tulosta tahtiä');
    tulostaTahtia(9);

    println('');
    println('Tulosta neliö');
    tulostaNelio(4);

    println('');
    println('Tulosta suorakulmio');
    tulostaSuorakulmio(17, 3);

    println('');
    println('Tulosta kolmio');
    tulostaKolmio(5);

    println('');
    println('Lukusarjan summa');
    println((lukusarjanSumma(100)));

    println('');
    println('Kertoma');
    println((kertoma(10)));
}

//Bonustehtävät. Tehty yhdessä opettajan kanssa. 

function rekursiivinenKertoma(n){
    if (n == 0){
        return 1;
    } else {
    return n * rekursiivinenKertoma(n - 1);
    }
}

function rekursiivinenSumma(n){
    if (n == 0){
        return 0;
    } else {
        return n + rekursiivinenSumma (n - 1);
    }
}