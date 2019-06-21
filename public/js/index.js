const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.querySelector("#mes1");
const message2 = document.querySelector("#mes2");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  message1.textContent = "Loading...";
  message2.textContent = "";
  fetch("http://localhost:3000/weather?address=" + search.value).then(
    response => {
      return response.json().then(data => {
        return data.error
          ? (message1.textContent = data.error)
          : ((message1.textContent = data.location),
            (message2.textContent = data.forecast));
      });
    }
  );
});
