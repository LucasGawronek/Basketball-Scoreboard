let homePt = document.getElementById("home-score")
let guestPt = document.getElementById("guest-score")
let homeScore = 0;
let guestScore = 0;


function homeAddOne(){
    homeScore += 1
    homePt.innerText = homeScore
}

function homeAddTwo(){
    homeScore += 2
    homePt.innerText = homeScore
}

function homeAddThree(){
    homeScore += 3
    homePt.innerText = homeScore
}

function homeSr(){
    homeScore = 0
    homePt.innerText = homeScore
}

function guestAddOne(){
    guestScore += 1
    guestPt.innerText = guestScore
}

function guestAddTwo(){
    guestScore += 2
    guestPt.innerText = guestScore
}

function guestAddThree(){
    guestScore += 3
    guestPt.innerText = guestScore
}

function guestSr(){
    guestScore = 0
    guestPt.innerText = guestScore
}

