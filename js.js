function getCurrentTime() {
    return new Date().toLocaleTimeString();
}


function upDateTicketInfo(typ, dauer, uhrzeit) {
    document.getElementById('typ').innerHTML = "Ticket Typ: " + typ;
    document.getElementById('dauer').innerHTML = "Dauer: " + dauer + " Minuten";
    document.getElementById('uhrzeit').innerHTML = "Uhrzeit: " + uhrzeit;
    document.getElementById('endzeit').innerHTML = "Endzeit: " + new Date(new Date().getTime() + dauer * 60000).toLocaleTimeString();
    document.getElementById('ticket').style.display = "block"; 
   
}




function mini() {
    upDateTicketInfo("Mini", 4, getCurrentTime());
    console.log('miniiiiiiiii')
}

function midi() {
    upDateTicketInfo("Midi", 8, getCurrentTime());
}

function maxi() {
    upDateTicketInfo("Maxi", 12, getCurrentTime());
}

function tag() {
    upDateTicketInfo("Tageskarte", 1440, getCurrentTime());
}
