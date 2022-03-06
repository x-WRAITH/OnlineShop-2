import config from "./config.js"
import * as util from "./util.js"

window.addEventListener("DOMContentLoaded", () => {
	const viewcard = document.querySelector(".cards");
	viewcard.innerHTML = "";
	
	for (let id in window.cart.products) {
		if (window.cart.products[id]) {
			viewcard.append(util.cartCard(config.allProducts[id]))
		}
	}
})
