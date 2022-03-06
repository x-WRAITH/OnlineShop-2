import config from "./config.js"
import * as util from "./util.js"

window.addEventListener("DOMContentLoaded", () => {
	const viewcard = document.querySelector(".cards");
	viewcard.innerHTML = "";
	
	config.promotedProducts.map(v => util.card(v)).forEach(el => {
		viewcard.append(el)
	})
})
