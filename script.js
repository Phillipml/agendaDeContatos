const form = document.getElementById("contactForm");
let allContacts = [];
let newLine = "";

function formatPhoneNum(input) {
  let value = input.value.replace(/\D/g, "");

  if (value.length <= 2) {
    input.value = `(${value}`;
  } else if (value.length <= 6) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else if (value.length <= 10) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
      6,
      10
    )}`;
  } else {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
      7,
      11
    )}`;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addNumber();
  updateNewContact();
});
function addNumber() {
  const contactName = document.getElementById("name");
  const contactPhone = document.getElementById("phone");

  if (allContacts.some((contact) => contact.name === contactName.value)) {
    alert("Nome existente, acrescente uma variação");
  } else if (
    allContacts.some((contact) => contact.phone === contactPhone.value)
  ) {
    alert("Número existente");
  } else {
    allContacts.push({
      name: contactName.value,
      phone: contactPhone.value,
    });

    line = "<tr>";
    line += `<td>${contactName.value}</td>`;
    line += `<td>${contactPhone.value}</td>`;
    line += `<td><button class="deleteBtn" onclick="deleteContact('${contactPhone.value}')">Excluir</button></td>`;
    line += "</tr>";
    newLine += line;
  }
  contactName.value = "";
  contactPhone.value = "";
}
function updateNewContact() {
  const newContact = document.querySelector("tbody");
  newContact.innerHTML = newLine;
}

function deleteContact(contactPhone) {
  allContacts = allContacts.filter((contact) => contact.phone !== contactPhone);
  newLine = "";
  allContacts.forEach((contact) => {
    newLine += "<tr>";
    newLine += `<td>${contact.name}</td>`;
    newLine += `<td>${contact.phone}</td>`;
    newLine += `<td><button class="deleteBtn" onclick="deleteContact('${contact.phone}')">Excluir</button></td>`;
    newLine += "</tr>";
  });
  const newContact = document.querySelector("tbody");
  newContact.innerHTML = newLine;
}
