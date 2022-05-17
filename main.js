p1=0;
p2=0;
v1=0;
v2=0;
a=0;
aw1=0;
aw2=0;
switchPlayer=0;
switchtoComputer=0;
let deaktivierungDesIntervalls= 0
//es fehlt noch die möglichkeit das der spieler den player switch und das beenden seiner runde selber entscheidet dazu muss vllt die funktion gestoppt werden
function wuerfeln() {
    a = 0
    aw1 = 0
    aw2 = 0
    aw1 = Math.round(Math.random() * 5+1)
    aw2 = Math.round(Math.random() * 5+1)
    a = aw1 + aw2
    if (switchtoComputer==0) { //ob der Spieler gegen den Computer spielen will
        if (switchPlayer == 0) { //entscheidung ob spieler 1 noch dran oder spieler 2 dran ist
            if (a !== 7) { //spieler 1 weiter dran
                v1 = v1 + 1
                p1 = p1 + a
                document.getElementById("augenzahlWuerfel1").innerHTML = "Augenzahl Würfel 1:"+ aw1
                document.getElementById("augenzahlWuerfel2").innerHTML = "Augenzahl Würfel 2:"+ aw2
                document.getElementById("punktzahlSpieler1").innerHTML = "Punkte Spieler 1: " + p1 + "."
                document.getElementById("VersucheSpieler1").innerHTML = "Versuche Spieler 1: " + v1 + "."
                stop();

            } else { //Spieler 1 nicht mehr dran
                switchPlayer = 5
                alert("Spieler 1 hat eine 7 gewürfelt. Nun ist Spieler 2 dran!")
                document.getElementById("augenzahlWuerfel1").innerHTML = "Augenzahl Würfel 1:"+ aw1
                document.getElementById("augenzahlWuerfel2").innerHTML = "Augenzahl Würfel 2:"+ aw2
                document.getElementById("punktzahlSpieler1").innerHTML = "Punkte Spieler 1: " + p1 + "."
                document.getElementById("VersucheSpieler1").innerHTML = "Versuche Spieler 1: " + v1 + "."
                stop();
            }
        } else { // Spieler 2 dran
            v2 = v2 + 1
            if (v2 > v1) { // wenn Spieler 2 nicht mehr dran ist wegen Versuchen
                alert("Spieler 2 hat keine weiteren Versuche mehr")
                if (p2 > p1) {
                    document.getElementById("ergebnisAuswertung").innerHTML = "Spieler 2 hat gewonnen"
                } else {
                    document.getElementById("ergebnisAuswertung").innerHTML = "Spieler 1 hat gewonnen"
                }
                stop();
            } else { //Wenn Spieler 2 noch dran ist nach Versuchen
                if (a !== 7) { //wenn spieler 2 weiter dran ist
                    p2 = p2 + a
                    document.getElementById("augenzahlWuerfel1").innerHTML = "Augenzahl Würfel 1:"+ aw1
                    document.getElementById("augenzahlWuerfel2").innerHTML = "Augenzahl Würfel 2:"+ aw2
                    document.getElementById("punktzahlSpieler2").innerHTML = "Punkte Spieler 2: " + p2 + "."
                    document.getElementById("VersucheSpieler2").innerHTML = "Versuche Spieler 2: " + v2 + "."
                    stop();
                } else { //Wenn spieler 2 nicht mehr dran ist
                    alert("Spieler 2 hat eine 7 gewürfelt. Nun folgt die Auswertung")
                    document.getElementById("augenzahlWuerfel1").innerHTML = "Augenzahl Würfel 1:"+ aw1
                    document.getElementById("augenzahlWuerfel2").innerHTML = "Augenzahl Würfel 2:"+ aw2
                    document.getElementById("punktzahlSpieler2").innerHTML = "Punkte Spieler 2: " + p2 + "."
                    document.getElementById("VersucheSpieler2").innerHTML = "Versuche Spieler 2: " + v2 + "."
                    if (p2 > p1) {
                        document.getElementById("ergebnisAuswertung").innerHTML = "Spieler 2 hat gewonnen"
                    } else {
                        document.getElementById("ergebnisAuswertung").innerHTML = "Spieler 1 hat gewonnen"
                    }
                    stop();
                }
            }
        }
    } else { //Spiel gegen den Computer
        if (switchPlayer!==5){
             setInterval(FunktiondesComputers,5000);
             clearInterval(FunktiondesComputers); //funktionniert warscheinlich nicht
        }else{ // Spieler 2 dran
            v2 = v2 + 1
            if (v2 > v1) {
                alert("Spieler 2 hat keine weiteren Versuche mehr")
                if (p2 > p1) {
                    document.getElementById("ergebnisAuswertung").innerHTML = "Spieler 2 hat gewonnen"
                } else {
                    document.getElementById("ergebnisAuswertung").innerHTML = "Computer hat gewonnen"
                }
                stop();
            } else {
                if (a !== 7) { //wenn spieler 2 nicht die 7 erwischt hat
                    p2 = p2 + a
                    document.getElementById("augenzahlWuerfel1").innerHTML = "Augenzahl Würfel 1:"+ aw1
                    document.getElementById("augenzahlWuerfel2").innerHTML = "Augenzahl Würfel 2:"+ aw2
                    document.getElementById("punktzahlSpieler2").innerHTML = "Punkte Spieler 2: " + p2 + "."
                    document.getElementById("VersucheSpieler2").innerHTML = "Versuche Spieler 2: " + v2 + "."
                    stop();
                } else { //Wenn spieler 2 die 7 erwischt hat
                    alert("Du hast eine 7 gewürfelt das Spiel ist zuende!")
                    document.getElementById("augenzahlWuerfel1").innerHTML = "Augenzahl Würfel 1:"+ aw1
                    document.getElementById("augenzahlWuerfel2").innerHTML = "Augenzahl Würfel 2:"+ aw2
                    document.getElementById("punktzahlSpieler2").innerHTML = "Punkte Spieler 2: " + p2 + "."
                    document.getElementById("VersucheSpieler2").innerHTML = "Versuche Spieler 2: " + v2 + "."
                    if (p2 > p1) {
                        document.getElementById("ergebnisAuswertung").innerHTML = "Spieler 2 hat gewonnen"
                    } else {
                        document.getElementById("ergebnisAuswertung").innerHTML = "Computer hat gewonnen"
                    }
                    stop();
                }
            }
        }
    }
}

function nichtWeiterSpielen(){
    switchPlayer=5
    alert("Du hast deinen Spielzug früher beendet. Nun ist Spieler 2 dran")
}

function reset(){
    p1=0;
    p2=0;
    v1=0;
    v2=0;
    a=0;
    aw1=0;
    aw2=0;
    switchPlayer=0;
    switchtoComputer=0;
    deaktivierungDesIntervalls=0;
    document.getElementById("punktzahlSpieler1").innerHTML = "Punkte Spieler 1:"
    document.getElementById("VersucheSpieler1").innerHTML = "Versuche Spieler 1:"
    document.getElementById("punktzahlSpieler2").innerHTML = "Punkte Spieler 2:"
    document.getElementById("VersucheSpieler2").innerHTML = "Versuche Spieler 2:"
    document.getElementById("augenzahlWuerfel1").innerHTML = "Augenzahl Würfel 1:"
    document.getElementById("augenzahlWuerfel2").innerHTML = "Augenzahl Würfel 2:"
    document.getElementById("ergebnisAuswertung").innerHTML = "Vie Glück"

}

function gegendenComputer(){
    switchtoComputer=5
}

function FunktiondesComputers(){
    if (deaktivierungDesIntervalls!==5) {
        a = 0
        aw1 = 0
        aw2 = 0
        aw1 = Math.round(Math.random() * 7)
        aw2 = Math.round(Math.random() * 7)
        a = aw1 + aw2
        v1 = v1 + 1
        p1 = p1 + a
        document.getElementById("augenzahlWuerfel1").innerHTML = "Augenzahl Würfel 1:" + aw1
        document.getElementById("augenzahlWuerfel2").innerHTML = "Augenzahl Würfel 2:" + aw2
        document.getElementById("punktzahlSpieler1").innerHTML = "Punkte Computer: " + p1 + "."
        document.getElementById("VersucheSpieler1").innerHTML = "Versuche Computer: " + v1 + "."
        if (a == 7) {
            switchPlayer = 5
            deaktivierungDesIntervalls = 5
            alert("Computer hat eine 7 gwürfelt! Nun ist Spieler 2 dran")
            stop();
        }
    }else {
        //funktion wird zwars weiter ausgeführt da der intervall sich nicht stoppen lässt aber es passiert nichts mehr
    }
}

