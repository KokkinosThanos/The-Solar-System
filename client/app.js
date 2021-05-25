const GRAPHQL_URL = "https://solar-system.kokkinos-thanos.com/graphql";

async function fetchResults() {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
                query {
                    planets{
                        Planet
                        Description
                        Tempeture
                        Rotation
                        Revolution
                        Radius
                      }
                }
            `,
    }),
  });

  const { data } = await response.json();

  return data;
}

fetchResults().then(({ planets }) => {
  const dataDom = document.querySelector(".data");

  for (var i = 0; i < planets.length; i++) {
    dataDom.innerHTML += `<ul class="ul${i}"> `;

    // ---  --- --- --- ---

    const ulCreate = document.querySelector(`.ul${i}`);

    Object.entries(planets[i]).forEach((entry) => {
      const [key, value] = entry;

      ulCreate.innerHTML += `<li>  ${value} </li>`;
    });
  }

  let ul = document.querySelectorAll("ul");

  for (var j = 0; j < ul.length; j++) {
    let node = ul[j].childNodes;

    let planet = node[1].textContent;
    node[1].innerHTML = `<h2 class="planet"> ${planet} </h2>`;

    let description = node[2].textContent;
    node[2].innerHTML = `<p class="description"> ${description} </p>`;

    let tempeture = node[3].textContent;
    node[3].innerHTML = `<li class="key"> Average Tempeture </li> <li class="value">${tempeture} C </li> `;

    let rotation = node[4].textContent;
    node[4].innerHTML = `<li class="key"> Rotation </li> <li class="value">${rotation} days </li> `;

    let revolution = node[5].textContent;
    node[5].innerHTML = `<li class="key"> Revolution </li> <li class="value">${revolution} days </li> `;
    if (j > 2) {
      node[5].innerHTML = `<li class="key"> Revolution </li> <li class="value">${revolution} years </li> `;
    }

    let radius = node[6].textContent;
    node[6].innerHTML = ` <li class="key"> Equatorial Radius </li> <li class="value">${radius} km </li> `;

    let image = document.createElement("div");
    image.setAttribute("id", `img${j}`);
    image.setAttribute("class", "image");
    ul[j].appendChild(image);
  }
});
