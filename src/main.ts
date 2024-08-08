// Select DOM elements
const discoverBlue = document.getElementById('discoverBlue') as HTMLElement;
const discoverOrange = document.getElementById('discoverOrange') as HTMLElement;
const ticketModal = document.getElementById('ticketModal') as HTMLElement;
const closeModal = document.getElementById('closeModal') as HTMLElement;
const ticketForm = document.getElementById('ticketForm') as HTMLFormElement;
const guestCountInput = document.getElementById('guestCount') as HTMLInputElement;
const guestDetailsDiv = document.getElementById('guestDetails') as HTMLElement;
const ticketSummaryDiv = document.getElementById('ticketSummary') as HTMLElement;
const ticketContainer = document.getElementById('ticketContainer') as HTMLElement;

const bluePart = document.getElementById('bluePart') as HTMLElement;
const orangePart = document.getElementById('orangePart') as HTMLElement;
const blueArrow = document.getElementById('blueArrow') as HTMLElement;
const orangeArrow = document.getElementById('orangeArrow') as HTMLElement;
const blueImage = document.getElementById('blueImage') as HTMLElement;
const orangeImage = document.getElementById('orangeImage') as HTMLElement;

interface Guest {
  name: string;
  age: number;
}

interface Ticket {
  id: number;
  guestCount: number;
  guests: Guest[];
  totalPrice: number;
}

let ticketId = 1; // Initialize ticket ID counter

function showModal() {
  ticketModal.style.display = 'flex';
}

function hideModal() {
  ticketModal.style.display = 'none';
}

function handleDiscoverClick() {
  showModal();
}

function generateGuestFields(count: number) {
  guestDetailsDiv.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const guestDiv = document.createElement('div');
    guestDiv.classList.add('mt-4');

    // Name input
    const nameLabel = document.createElement('label');
    nameLabel.innerText = `Guest ${i + 1} Name:`;
    guestDiv.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = `guest${i + 1}Name`;
    nameInput.required = true;
    nameInput.classList.add('border', 'border-gray-300', 'rounded', 'p-2', 'block', 'w-full', 'mb-2');
    guestDiv.appendChild(nameInput);

    // Age input
    const ageLabel = document.createElement('label');
    ageLabel.innerText = `Guest ${i + 1} Age:`;
    guestDiv.appendChild(ageLabel);

    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.name = `guest${i + 1}Age`;
    ageInput.required = true;
    ageInput.classList.add('border', 'border-gray-300', 'rounded', 'p-2', 'block', 'w-full');
    guestDiv.appendChild(ageInput);

    guestDetailsDiv.appendChild(guestDiv);
  }
}

function calculateTicketPrice(age: number): number {
  if (age <= 2) return 0;
  if (age > 2 && age < 18) return 100;
  if (age >= 18 && age < 60) return 500;
  return 300;
}

function updateTicketSummary(totalPrice: number) {
  ticketSummaryDiv.innerHTML = `Total Price: INR ${totalPrice}`;
}

function renderTicketCards(tickets: Ticket[]) {
  ticketContainer.innerHTML = '';
  tickets.forEach(ticket => {
    ticketContainer.innerHTML += `
      <div class="ticket-card">
        <h3>Ticket ID: ${ticket.id}</h3>
        <p>Number of Guests: ${ticket.guestCount}</p>
        <p>Total Price: INR ${ticket.totalPrice}</p>
        ${ticket.guests.map((guest, index) => `
          <p>Guest ${index + 1}: ${guest.name}, Age: ${guest.age}, Price: INR ${calculateTicketPrice(guest.age)}</p>
        `).join('')}
      </div>
    `;
  });
}

function handleFormSubmit(event: Event) {
  event.preventDefault();

  const guestCount = parseInt(guestCountInput.value);
  const guestDetails = guestDetailsDiv.getElementsByTagName('input');
  const guests: Guest[] = [];

  let totalPrice = 0;
  for (let i = 0; i < guestCount; i++) {
    const name = (guestDetails[i * 2] as HTMLInputElement).value;
    const age = parseInt((guestDetails[i * 2 + 1] as HTMLInputElement).value);
    guests.push({ name, age });
    totalPrice += calculateTicketPrice(age);
  }

  const newTicket: Ticket = {
    id: ticketId++,
    guestCount,
    guests,
    totalPrice
  };

  // Store the guest information in local storage
  const existingTickets: Ticket[] = JSON.parse(localStorage.getItem('tickets') || '[]');
  existingTickets.push(newTicket);
  localStorage.setItem('tickets', JSON.stringify(existingTickets));

  // Update ticket summary
  updateTicketSummary(totalPrice);

  // Render new ticket cards
  renderTicketCards(existingTickets);
  
  // Show the ticket details below the form
  const ticketDetailsHtml = `
    <div class="ticket-card">
      <h3>Ticket ID: ${newTicket.id}</h3>
      <p>Number of Guests: ${newTicket.guestCount}</p>
      <p>Total Price: INR ${newTicket.totalPrice}</p>
      ${newTicket.guests.map((guest, index) => `
        <p>Guest ${index + 1}: ${guest.name}, Age: ${guest.age}, Price: INR ${calculateTicketPrice(guest.age)}</p>
      `).join('')}
    </div>
  `;
  ticketSummaryDiv.innerHTML = ticketDetailsHtml;
}

function updateImageSizes() {
  if (bluePart.classList.contains('expanded')) {
    blueImage.style.width = '800px';
    blueImage.style.height = '800px';
    orangeImage.style.width = '700px';
    orangeImage.style.height = '700px';
  } else if (orangePart.classList.contains('expanded')) {
    blueImage.style.width = '700px';
    blueImage.style.height = '700px';
    orangeImage.style.width = '800px';
    orangeImage.style.height = '800px';
  } else {
    blueImage.style.width = '750px';
    blueImage.style.height = '750px';
    orangeImage.style.width = '750px';
    orangeImage.style.height = '750px';
  }
}

function expandBluePart() {
  bluePart.classList.add('expanded');
  bluePart.classList.remove('collapsed');
  orangePart.classList.add('collapsed');
  orangePart.classList.remove('expanded');
  updateImageSizes();
}

function shrinkBluePart() {
  bluePart.classList.remove('expanded');
  bluePart.classList.add('collapsed');
  orangePart.classList.remove('collapsed');
  orangePart.classList.add('expanded');
  updateImageSizes();
}

function expandOrangePart() {
  orangePart.classList.add('expanded');
  orangePart.classList.remove('collapsed');
  bluePart.classList.add('collapsed');
  bluePart.classList.remove('expanded');
  updateImageSizes();
}

function shrinkOrangePart() {
  orangePart.classList.remove('expanded');
  orangePart.classList.add('collapsed');
  bluePart.classList.remove('collapsed');
  bluePart.classList.add('expanded');
  updateImageSizes();
}

// Event listeners
if (bluePart && orangePart && blueArrow && orangeArrow && blueImage && orangeImage) {
  blueArrow.addEventListener('mouseenter', expandBluePart);
  blueArrow.addEventListener('mouseleave', shrinkBluePart);

  orangeArrow.addEventListener('mouseenter', expandOrangePart);
  orangeArrow.addEventListener('mouseleave', shrinkOrangePart);

  bluePart.addEventListener('mouseenter', expandBluePart);
  bluePart.addEventListener('mouseleave', shrinkBluePart);

  orangePart.addEventListener('mouseenter', expandOrangePart);
  orangePart.addEventListener('mouseleave', shrinkOrangePart);
}

if (discoverBlue && discoverOrange && closeModal && ticketForm) {
  discoverBlue.addEventListener('click', handleDiscoverClick);
  discoverOrange.addEventListener('click', handleDiscoverClick);
  closeModal.addEventListener('click', hideModal);
  ticketForm.addEventListener('submit', handleFormSubmit);
  guestCountInput.addEventListener('input', () => generateGuestFields(parseInt(guestCountInput.value)));
}

// Load existing tickets from local storage and render them
document.addEventListener('DOMContentLoaded', () => {
  const savedTickets: Ticket[] = JSON.parse(localStorage.getItem('tickets') || '[]');
  renderTicketCards(savedTickets);
});
