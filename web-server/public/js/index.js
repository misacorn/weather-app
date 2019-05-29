const weatherForm = document.querySelector("form");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  fetch("http://localhost:3000/weather?search=helsinki").then(response => {
    response.json().then(data => {
      data.error && console.log(data.error);
      console.log(data.location);
      console.log(data.forecast);
    });
  });
});
