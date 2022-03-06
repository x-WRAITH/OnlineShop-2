import config from "./config.js"
import * as util from "./util.js"

function update() {
	const sortSelect = $("#sorts").value
	const searchInput = $("#search-input").value
	const products = $(".cards")
	const kat = $("#kats").value
	const subkat = $("#subkats").value
	
	const foundProducts = config.allProducts.filter(prod =>
		(prod.name.toLowerCase().includes(searchInput) || prod.description.toLowerCase().includes(searchInput)) &&
		(kat === "all" || kat === prod.categories[0]) &&
		(subkat === "all" || subkat === prod.categories[1])
	)
	const searchResult = $("#search-result")
	
	products.innerHTML = ""
	if (foundProducts.length) {
		switch (sortSelect) {
			case "htol": foundProducts.sort((a, b) => b.price-a.price); break
			case "ltoh": foundProducts.sort((a, b) => a.price-b.price); break
		}
		for (let i = 0; i < Math.min(foundProducts.length, 3); i++) {
			let prod = util.card(foundProducts[i])
			products.append(prod)
		}
		searchResult.innerText = "Wyniki wyszukiwania: "+foundProducts.length
	} else {
		searchResult.innerText = "Nie znaleziono żadnych produktów"
	}
}

window.addEventListener("DOMContentLoaded", () => {
	const sortSelect = $("#sorts")
	sortSelect.addEventListener("change", update)
	const searchInput = $("#search-input")
	searchInput.addEventListener("input", update)
	
	
	const viewcard = $(".cards");
	viewcard.innerHTML = "";
	
	for (let i = 0; i < 3; i++) {
		let prod = util.card(config.allProducts[Math.floor(Math.random() * config.allProducts.length)])
		viewcard.append(prod)
	}
	
	const kats = $("#kats")
	config.products.forEach(cat => {
		kats.append(Object.assign(document.createElement("option"), {
			value: cat.name,
			innerText: cat.name,
		}))
	})
	const subkats = $("#subkats")
	kats.addEventListener("change", () => {
		if (kats.value === "all") {
			subkats.style.display = "none"
		} else {
			subkats.style.display = ""
			subkats.innerHTML = `<option value="all" selected="selected">Wszystkie podkategorie</option>`
			let kat = config.products.find(v => v.name === kats.value).subcategories
			kat.forEach(subcat => {
				subkats.append(Object.assign(document.createElement("option"), {
					value: subcat.name,
					innerText: subcat.name,
				}))
			})
		}
		update()
	})
	subkats.addEventListener("change", update)
	
})

