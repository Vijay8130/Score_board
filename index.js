let homeScoresEl = document.getElementById("home-scores");
let guestScoresEl = document.getElementById("guest-scores")
let panelsEl = document.getElementById("panels")

function plus1(count) {
    return count + 1;
}

function plus2(count) {
    return count + 2;
}

function plus3(count) {
    return count + 3;
}

function compare() {
    let homeScore = Number(homeScoresEl.textContent);
    let guestScore = Number(guestScoresEl.textContent);
    return  homeScore > guestScore? 1 : homeScore < guestScore? 2 : homeScore !== 0? 3: 4;
}

function leader() {
    switch(compare()){
        case 1:
        panelsEl.style.setProperty("--home-color", "yellow"); 
        panelsEl.style.setProperty("--guest-color", "grey");                 
        break;
        case 2: 
        panelsEl.style.setProperty("--guest-color", "yellow");
        panelsEl.style.setProperty("--home-color", "grey");         
        break;    
        case 3:
        panelsEl.style.setProperty("--home-color", "grey"); 
        panelsEl.style.setProperty("--guest-color", "grey");         
        break;       
        case 4:
        panelsEl.style.setProperty("--home-color", "white"); 
        panelsEl.style.setProperty("--guest-color", "white");         
        break;  
        default:
        break;
    }
    }

function homePlus1() {
    console.log("The home team scores 1 !")
    let iniNum = Number(homeScoresEl.textContent);
    homeScoresEl.textContent = iniNum + 1;
    leader();
}
function homePlus2() {
    console.log("The home team scores 2 !")
    let iniNum = Number(homeScoresEl.textContent);
    homeScoresEl.textContent = iniNum + 2;
    leader();    
}
function homePlus3() {
    console.log("The home team scores 3 !")
    let iniNum = Number(homeScoresEl.textContent);
    homeScoresEl.textContent = iniNum + 3; 
    leader();
    
}

function guestPlus1() {
    console.log("The guest team scores 1 !")
    let iniNum = Number(guestScoresEl.textContent);
    guestScoresEl.textContent = iniNum + 1;
    leader();
    
}
function guestPlus2() {
    console.log("The guest team scores 2 !")
    let iniNum = Number(guestScoresEl.textContent);
    guestScoresEl.textContent = iniNum + 2;
    leader();
    
}
function guestPlus3() {
    console.log("The guest team scores 3 !")
    let iniNum = Number(guestScoresEl.textContent);
    guestScoresEl.textContent = iniNum + 3;
    leader();
    
}

function newGame() {
    console.log("They've started a new game!");
    homeScoresEl.textContent = 0;
    guestScoresEl.textContent = 0;
    leader();
    
}


