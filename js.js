let ticketType = '';
let ticketDuration = 0;
let ticketPrice = 0;
let color = ""


//Function das ich die Zeit bekomme und dann ausrechnen kann bis wann das jeweilige Ticket hält
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}




function upDateTicketInfo(typ, dauer, uhrzeit) {

}



//Functions die aufgerufen werden wenn man ein Ticket auswählt um upDateTicketInfo upzudaten um das ticket am Ende richtig zu gestalten.
function tag(element) {
    upDateTicketInfo("Tageskarte", 24, getCurrentTime());
    toggleTicketBox(element)
    color = "#4CAF50"
}


function mini(element) {

    upDateTicketInfo("Mini", 0.75, getCurrentTime());
   color = "#3498db"
    toggleTicketBox(element)
}


function longrange(element) {
    upDateTicketInfo("Midi", 8, getCurrentTime());
    color = "#e74c3c"
    toggleTicketBox(element)
}

function woche(element) {
    upDateTicketInfo("Maxi", 168, getCurrentTime());
    toggleTicketBox(element)
    color = "#1abc9c"
}

function monat(element) {
    upDateTicketInfo("Maxi", 744, getCurrentTime());
    toggleTicketBox(element)
    color = "#ac1abc"
}

function toggleTicketBox(element) {
    document.querySelectorAll('.ticketboxes.expanded').forEach(function(ticketBox) {
      ticketBox.classList.remove('expanded');
    });
  
    element.classList.add('expanded');


   document.getElementById('auswahl').style.marginTop = "-23%"

  document.getElementById('buyer').style.display =  'block';

  const buyingDiv = document.getElementById('buyer');
  buyingDiv.innerHTML = `
    <h2>Kaufen</h2>
    <form>
      <label for="quantity">Anzahl der Karten:</label>
      <input type="number" id="quantity" value="1" min="1">
      <br>
      <label for="youth">Jugendlich:</label>
      <input type="checkbox" id="youth">
      <br>
      <p id="price"></p>
      <button id="pay-button" onclick="payTicket()">Zahlen</button>
    </form>
  `;
  
  const quantityInput = document.getElementById('quantity');
  const youthCheckbox = document.getElementById('youth');
  const priceElement = document.getElementById('price');
  

  
  switch (element.id) {
    case 'tag':
      ticketType = 'Tageskarte';
      ticketDuration = 24;
      ticketPrice = 4;
      break;
    case 'longrange':
      ticketType = 'Langstrecke';
      ticketDuration = 8;
      ticketPrice = 2;
      break;
    case 'mini':
      ticketType = 'Mini';
      ticketDuration = 0.75;
      ticketPrice = 1;
      break;
    case 'woche':
      ticketType = 'Woche';
      ticketDuration = 168;
      ticketPrice = 4;
      break;
    case 'monat':
      ticketType = 'Monat';
      ticketDuration = 744;
      ticketPrice = 4;
      break;
  }
  updatePrice()
  quantityInput.addEventListener('input', updatePrice);
  youthCheckbox.addEventListener('input', updatePrice);
  
  function updatePrice() {
    const quantity = parseInt(quantityInput.value);
    const isYouth = youthCheckbox.checked;
    let price = ticketPrice * quantity;
    if (isYouth) {
      price *= 0.5;
    }
    priceElement.textContent = `Preis: ${price} €`;
  }
  
}


function payTicket() {
    document.body.innerHTML = `<img id="ticket" src="./img/Ticket.png" alt="">
    <div id="ticket-text">
    <div id="color-type"></div>
    <h2 id="type-ticket">${ticketType}!</h2><br>
    <h2 id="duration-ticket">Dauer: ${ticketDuration}h</h2>
    <h2 id="price-ticket">Preis: ${ticketPrice}€</h2></div>`;
    
    document.getElementById('color-type').style.backgroundColor = color
  
  }