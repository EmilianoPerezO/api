const container = document.getElementById("contenedor");
const URL = `https://api.thecatapi.com/v1/images/search`;
const btnR = document.getElementById("generar");

fetch(URL)
    .then((res) => res.json())
    .then((data) => {

        const describe = document.getElementById("foto");
        describe.innerHTML = `
            <div class="card" style="width: 30rem;">
                <img class="card-img-top" src=${data[0].url} alt="Card image cap">
            </div>`;
    });

btnR.addEventListener("click", () => {
    location.reload();
});

