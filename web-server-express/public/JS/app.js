console.log("javascript file is loaded ");

// fetch('http://puzzle.mead.io/puzzle').then(resp => resp.json())
// .then(data => console.log(data))

// fetch("http://localhost:3000/weather?address=!")
// .then(resp => resp.json())
// .then(data => {
//   if(data.error){
//    console.log("error:", data.error)
//   }
//   console.log(data)
// })

const weatherForm = document.querySelector("form");

const search = document.querySelector("input");

const errorP = document.querySelector("#error");

const forecastP = document.querySelector("#forecast");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  errorP.textContent = "";
  forecastP.textContent = "";

  const location = `http://localhost:3000/weather?address=${search.value}`;

  fetch(location)
    .then((resp) => resp.json())
    .then((data) => {
      debugger;
      if (data.error || data.error) {
        errorP.style.color = "red";
        return (errorP.textContent = data.error);
      }
      if (data.errorApi) {
        errorP.style.color = "red";
        return (errorP.textContent = data.errorApi.info);
      }
      forecastP.textContent = data.forecast;
    });
});
