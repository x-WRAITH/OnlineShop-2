import config from "./config.js"
import "./util.js"

function card(object) {
	let desc = object.description
	if (desc.length > 70) {
		desc = desc.slice(0, 70) + "... <a onclick='void 0' class='show-more'>Pokaż więcej</a>"
	}
	const container = document.createElement("div")
	container.classList.add("card")
	container.innerHTML = `
        <img src="${object.images[0]}" alt="" />
        <div class="card-info">
            <h2>${object.name}</h2>
            <p>${desc}</p>
        </div>
        <h2 class="price">$${object.price}</h2>
	`
	
	return container
}

window.addEventListener("DOMContentLoaded", () => {
	const viewcard = document.querySelector(".cards");
	viewcard.innerHTML = "";
	
	for (let i = 0; i < 3; i++) {
		let prod = card(config.allProducts[Math.floor(Math.random() * config.allProducts.length)])
		viewcard.append(prod)
	}
})
