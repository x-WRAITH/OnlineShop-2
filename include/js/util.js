import config from "./config.js";

window.$ = query => document.querySelector(query)
window.$all = query => [...document.querySelectorAll(query)]

const cache = {}
window.$ = new Proxy($, {
	// An epic by-id selector
	// $.content == $("#content")
	get(target, p) {
		return cache[p] || (cache[p] = target("#"+p))
	}
})

window.cart = window.cart || new class Cart {
	constructor() {
		this.products = {}
		if (localStorage.cart) {
			this.products = JSON.parse(localStorage.cart)
		}
		window.addEventListener("beforeunload", () => {
			localStorage.cart = JSON.stringify(this.products)
		})
	}
	increment(id) {
		this.products[id] = this.products[id] || 0
		this.products[id]++
		this.countAll()
	}
	decrement(id) {
		this.products[id]--
		if (this.products[id] <= 0) {
			this.remove(id)
		}
		this.countAll()
	}
	incrementVisual1(id, el) {
		this.increment(id)
		el = el.parentElement.querySelector(".count")
		el.innerText = this.count(id)+" w koszyku"
		this.countAll()
	}
	incrementVisual2(id, el, delta) {
		if (delta === 1) {
			this.increment(id)
		} else {
			this.decrement(id)
		}
		if (this.count(id) === 0) {
			el.parentElement.remove()
		} else {
			el = el.parentElement.querySelector(".cart-product-count")
			el.innerText = this.count(id)
		}
		this.countAll()
	}
	count(id) {
		return this.products[id] || 0
	}
	remove(id) {
		delete this.products[id]
		this.countAll()
	}
	removeVisual(id, el) {
		delete this.products[id]
		el.parentElement.remove()
		this.countAll()
	}
	countAll() {
		let total = $("#total")
		if (total) {
			total.innerText = "W sumie: "+(Object.entries(this.products).reduce((a, b) => a+config.allProducts[b[0]].price*b[1], 0))+"$"
		}
		$all(".amountItem-cart").forEach(v => v.innerText = "("+Object.keys(this.products).length+")")
	}
}
window.addEventListener("DOMContentLoaded", () => {
	cart.countAll()
})

export function card(object) {
	let desc = object.description
	// if (desc.length > 70) {
	// 	desc = desc.slice(0, 70) + "... <a onclick='window.showMore(this)' class='show-more'>Pokaż więcej</a>"
	// }
	const container = document.createElement("div")
	container.classList.add("card")
	container.innerHTML = `
        <img src="${object.images[0]}" alt="" />
        <div class="card-info">
            <h2>${object.name}</h2>
            <p>${desc}</p>
        </div>
        <div class="buy-info">
            <h2 class="price">$${object.price}</h2>
            <div onclick="cart.incrementVisual1(${object.id}, this)" class="add-to-cart material-icons">
				shopping_cart
            </div>
            <div class="count">${cart.count(object.id) ? cart.count(object.id)+" w koszyku" : ""}</div>
		</div>
	`
	
	return container
}

export function cartCard(object) {
	let desc = object.description
	const container = document.createElement("div")
	container.classList.add("card")
	container.innerHTML = `
		<img src="${object.images[0]}" alt=""/>
		<div class="card-info">
			<h2>${object.name}</h2>
            <p>${desc}</p>
		</div>
		<h2 class="price-cart">$${object.price}</h2>
		<div onclick="cart.removeVisual(${object.id}, this)" class="circle-button material-icons">close</div>
		<div onclick="cart.incrementVisual2(${object.id}, this, 1)" class="circle-button material-icons">arrow_upward</div>
		<div class="circle-button cart-product-count" style="font-size: 15px">${cart.count(object.id)}</div>
		<div onclick="cart.incrementVisual2(${object.id}, this, -1)" class="circle-button material-icons">arrow_downward</div>
	`
	
	return container
}
