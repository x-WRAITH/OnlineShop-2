const imagesFromAssets = (name, count = 3) => [...Array(count)].map((_, i) => `include/image/${name}/${i+1}.png`)

export const products = [
	{
		name: "Podzespoły komputerowe",
		subcategories: [
			{
				name: "Dyski twarde SSD i HDD",
				products: [
					{
						brand: "Samsung",
						type: "SSD",
						name: "Samsung SSD 970 EVO",
						images: imagesFromAssets("Samsung-SSD-970-EVO"),
						description: "Osiąga nowy poziom przetwarzania danych. Samsung 970 EVO zapewnia przełomową szybkość...",
						price: 150
					},
					{
						brand: "Western Digital",
						type: "HDD",
						name: "WD HDD 4TB",
						images: imagesFromAssets("WD-HDD-4TB", 2),
						description: "Stwórz własny system NAS, wybierając do tego odpowiednie dyski.",
						price: 100
					}
				]
			},
			{
				name: "Karty Graficzne",
				products: [
					{
						brand: "Nvidia",
						name: "Nvidia RTX 3090",
						images: imagesFromAssets("Nvidia-RTX-3090"),
						description: "GeForce RTX™ 3090 to przepotężna karta graficzna (BFGPU) o wydajności klasy TITAN.",
						price: 1500
					},
					{
						brand: "AMD",
						name: "AMD RX 6900XT",
						images: imagesFromAssets("AMD-RX-6900XT"),
						description: "Karta graficzna AMD Radeon ™ RX 6900 XT, oparta na architekturze AMD RDNA ™ 2.",
						price: 1200
					}
				]
			},
			{
				name: "Procesory",
				products: [
					{
						brand: "AMD",
						name: "AMD Ryzen 5950X",
						images: imagesFromAssets("AMD-Ryzen-5950X"),
						description: "Jednostka AMD Ryzen 9 5950X posiada 16 rdzeni i 32 wątki, gotowych do pracy przy maksymalnym obciążeniu w grach i specjalistycznych aplikacjach.",
						price: 2500
					},
					{
						brand: "Intel",
						name: "Intel i9 11900K",
						images: imagesFromAssets("Intel-i9-11900K"),
						description: "Szybkie taktowanie nawet 5,3 GHz oraz 8 rdzeni z 16 wątkami.",
						price: 1200
					}
				]
			},
			{
				name: "Płyty Główne",
				products: [
					{
						brand: "MSI",
						name: "MSI MPG Z590 GAMING CARBON WIFI",
						images: imagesFromAssets("MSI-MPG-Z590-GamingCarbonWIFI"),
						description: "Wysokowydajne płyty główne MSI charakteryzują się implementacją na nich zaawansowanych funkcji i najnowszych technologii.",
						price: 400
					},
					{
						brand: "Asus",
						name: "ROG STRIX B550-F GAMING WIFI",
						images: imagesFromAssets("Asus-ROG-Strix-B550-F-GamingWIFI"),
						description: "Płyty główne z serii ROG Strix B550 Gaming oferują zestaw funkcji zwykle spotykany w wyższej klasy serii ROG Strix X570 Gaming",
						price: 200
					}
				]
			},
			{
				name: "Obudowy Komputerowe",
				products: [
					{
						brand: "NZXT",
						name: "NZXT H500 Black",
						images: imagesFromAssets("NZXT-H500-Black"),
						description: "To nie postęp, to przełom 5G zadebiutowało w wersji Pro.",
						price: 100
					}
				]
			},
			{
				name: "Pamięci RAM",
				products: [
					{
						brand: "Corsair",
						name: "Corsair RAM 32GB DDR4",
						images: imagesFromAssets("Corsair-RAM-32GB-DD4"),
						description: "Corsair 32GB 3200MHz Vengeance LPX Black CL16.",
						price: 250
					},
				]
			},
			{
				name: "Zasilacze komputerowe",
				products: [
					{
						brand: "Corsair",
						name: "Corsair RM750 750W Zasilacz",
						images: imagesFromAssets("Corsair-RM750-750W"),
						description: "W pełni modułowe zasilacze CORSAIR z serii RM działają ze sprawnością klasy 80 PLUS Gold i niemal bezgłośnie.",
						price: 150
					}
				]
			},
			{
				name: "Chłodzenie komputerowe",
				products: [
					{
						brand: "Corsair",
						name: "Corsair H100i Platinum RGB 2x120mm",
						images: imagesFromAssets("Corsair-H100i-PlatinumRGB-2x120mm"),
						description: "Ten zestaw chłodzenia wodnego typu All-In-One został wyposażony w 240mm chłodnicę, aby zapewnić ekstremalnie wydajne chłodzenie procesora oraz stylowe podświetlenie RGB.",
						price: 100
					}
				]
			},
		]
	},
	{
		name: "Smartfony i Smartwatche",
		subcategories: [
			{
				name: "Smartfony i telefony",
				products: [
					{
						brand: "Apple",
						name: "IPhone 12 Pro Max 256 GB",
						images: imagesFromAssets("Apple-IPhone-ProMax-256GB"),
						description: "To nie postęp, to przełom 5G zadebiutowało w wersji Pro.",
						price: 1600
					},
					{
						brand: "Samsung",
						name: "Samsung Galaxy Fold2 128 GB",
						images: imagesFromAssets("Samsung-Galaxy-Fold2-128GB"),
						description: "Galaxy Z Fold2 5G Poznaj telefon, który zmienia kształt przyszłości.",
						price: 2000
					}
				]
			},
			{
				name: "Pamięci flash",
				products: [
					{
						brand: "SanDisk",
						name: "Extreme Pro Sdxc 128GB",
						images: imagesFromAssets("SanDisk-XtremePro-Sdxc-128GB"),
						description: "Najbardziej zaawansowana karta pamięci SD UHS-I zapewnia wydajność, która przeniesie Twoją kreatywność na wyższy poziom...",
						price: 20
					}
				]
			},
			{
				name: "Tablety",
				products: [
					{
						brand: "Apple",
						name: "Ipad Pro 12.9 1TB Space grey",
						images: imagesFromAssets("Apple-IPadPro-12.9-1TB"),
						description: "Najbardziej zaawansowany mobilny wyświetlacz na świecie.",
						price: 2000
					}
				]
			},
			{
				name: "Inteligentne zegarki",
				products: [
					{
						brand: "Apple",
						name: "Apple Watch 6 Cellular",
						images: imagesFromAssets("Apple-Watch-6-Cellular"),
						description: "Najbardziej zaawansowany mobilny wyświetlacz na świecie.",
						price: 1000
					}
				]
			},
			{
				name: "Czytniki ebook-ów",
				products: [
					{
						brand: "Amazon",
						name: "Amazon Kindle 10",
						images: imagesFromAssets("Amazon-Kindle-10", 1),
						description: "Czytnik e-book Kindle 10 to nowoczesny i doskonale zaprojektowany czytnik, który zachwyci nawet najbardziej wymagających.",
						price: 100
					}
				]
			},
		]
	},
	{
		name: "Laptopy i komputery",
		subcategories: [
			{
				name: "Laptopy/Notebooki/Ultrabooki",
				products: [
					{
						brand: "Lenovo",
						name: "Thinkpad P17 G1",
						images: imagesFromAssets("Lenovo-ThinkPad-P17-G1"),
						description: "Procesor Intel Core i7 10 generacji.",
						price: 10_000
					},
					{
						brand: "Dell",
						name: "Dell XPS 17",
						images: imagesFromAssets("DELL-XPS-17"),
						description: "Laptop z ekranem o przekątnej 17 cali oraz rozdzielczości 1920 x 1200 pikseli, wyposażony w procesor Intel Core i7",
						price: 7_000
					}
				]
			},
			{
				name: "Laptopy 2 w 1",
				products: [
					{
						brand: "Dell",
						name: "Dell Inspiron 5406",
						images: imagesFromAssets("DELL-INSPIRON-5406"),
						description: "Laptop o przekątnej 14 cali oraz rozdzielczości 1920 x 1080 pikseli, wyposażony w procesor Intel Core i5",
						price: 1000
					},
					{
						brand: "Dell",
						name: "Dell XPS 13 9310",
						images: imagesFromAssets("DELL-XPS-13"),
						description: "Laptop firmy DELL z matrycą o przekątnej 13.3 cali oraz rozdzielczości 1920 x 1080 pikseli.",
						price: 3_000
					},
				]
			},
			{
				name: "Komputery Stacjonarne",
				products: [
					{
						brand: "N/A",
						name: "Komputer Custom 500",
						images: imagesFromAssets("Komputer-Custom-500"),
						description: "Jakość jest dla nas najważniejsza. Dlatego produkcja desktopa Custom 500 odbywa się na nowoczesnej linii produkcyjnej.",
						price: 2000
					},
					{
						brand: "N/A",
						name: "Komputer Custom 700",
						images: imagesFromAssets("Komputer-Custom-700"),
						description: "Jakość jest dla nas najważniejsza. Dlatego produkcja desktopa Custom 700 odbywa się na nowoczesnej linii produkcyjnej.",
						price: 3500
					}
				],
			},
			{
				name: "Komputery gejmingowe",
				products: [
					{
						brand: "Acer",
						name: "Acer Predator Orion 9000",
						images: imagesFromAssets("Acer-Predator-Orion-9000"),
						description: "Okuty metalową obudową komputer z procesorem Intel Core i9‑10900X, kartą graficzną GeForce RTX 3090.",
						price: 6_000
					},
					{
						brand: "Dell",
						name: "Alienware Aurora R10",
						images: imagesFromAssets("DELL-Alienware-Aurora-R10"),
						description: "R7-5800/16GB/1TB/W10 RTX3080 ",
						price: 4_000
					}
				],
			},
			{
				name: "Serwery i Storage",
				products: [
					{
						brand: "Dell",
						name: "Dell PowerEdge T640",
						images: imagesFromAssets("DELL-PowerEdge-T640"),
						description: "PowerEdge T640 to wszechstronny, wydajny serwer, idealny do średnich biur, zdalnych lokalizacji i centrów danych.",
						price: 2000
					}
				]
			},
			{
				name: "Akcesoria",
				products: [
					{
						brand: "Wacom",
						name: "Tablet Graficzny Wacom ONE",
						images: imagesFromAssets("Wacom-Tablet-Graficzny-ONE"),
						description: "Stworzony z myślą o kreatywności - daj upust swej pasji twórczej w naturalny sposób.",
						price: 50
					},
					{
						brand: "Xiaomi",
						name: "Webcam Xiaomi HD USB",
						images: imagesFromAssets("Xioami-Webcam-HD-USB"),
						description: "Kamerka internetowa Xiaomi o rozdzielczości 1920x1080.",
						price: 40
					},
					{
						brand: "Corsair",
						name: "Klawiatura Corsair K95 RGB PLATINUM XT",
						images: imagesFromAssets("Corsair-Klawiatura-K95-RGB-PlatinumXT"),
						description: "Procesor Intel Core i7 10 generacji.",
						price: 200
					}
				]
			}
		]
	}
]

function flatten(cats, ct = []) {
	let p = []
	// meow
	for (let cat of cats) {
		ct.push(cat.name)
		if (cat.subcategories) {
			p.push(...flatten(cat.subcategories, ct))
		}
		if (cat.products) {
			p.push(...cat.products.map(v => {
				v.categories = [...ct]
				return v
			}))
		}
		ct.pop()
	}
	return p
}

// todo: ids shouldnt be bound to indexes
export const allProducts = flatten(products).map((prod, i) => {
	prod.id = i
	return prod
})

export const promotedProducts = [
	allProducts[5], allProducts[10], allProducts[15],
]
