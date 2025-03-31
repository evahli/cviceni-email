const goodbye = (text) => {
  const rozlouceni = document.querySelector(".email__closing");
  rozlouceni.textContent = (text);
}

// const rozlouceni = goodbye("Na shledanou, Eva");

const fillSubject = (subject) => {
  const predmet = document.querySelector(".email__subject");
  predmet.textContent = (subject)
}

//const predmet = fillSubject("Nejlepsi nabidka prace ever")

const fillBody = (body, text, subject) => {
  const telo = document.querySelector(".email__body");
  telo.textContent = body;
  goodbye(text);
  fillSubject(subject);
}

const telo = fillBody("tak me tu mate!", "Na shledanouuuuu, Eva", "nabidka")
