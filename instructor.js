//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};

//
//DEFINE FUNCTIONS HERE
//
function getItems(objectData) {
	return objectData.items;
}

function getItemsByBrand(items, brand) {
	var result = [];
	for (var itemIndex in items) {
		if (items[itemIndex].product.brand.toLowerCase() === brand.toLowerCase()) {
			result.push(items[itemIndex]);
		}
	}
	return result;
}

function getItemsByAuthor(items, author) {
	var result = [];
	for (itemIndex in items) {
		if (
			items[itemIndex]
				.product
				.author
				.name
				.toLowerCase()
				.indexOf(
					author.toLowerCase()
				) != -1
			) {
			result.push(items[itemIndex]);
		}
	}
	return result;
}

function getAvailableProducts(items) {
	var result = [];
	for (itemIndex in items) {
		if (items[itemIndex].product.inventories[0].availability === "inStock") {
			result.push(items[itemIndex]);
		}
	}
	return result;
}


//load products.json
var data = require("./products.json")

//
//USE FUNCTIONS HERE
//
var items = getItems(data);
//console.log(items);
/*
console.log(
	getItemsByBrand(items, "Nikon")
);
*/
var bySony = getItemsByBrand(items, "Sony");
console.log("Number of items by Sony: "+bySony.length);
console.log("Available items by Sony: "+getAvailableProducts(bySony).length);
var byAdorama = getItemsByAuthor(items, "Adorama Camera");
console.log("Available items by Adorama Camera: "+getAvailableProducts(byAdorama).length);
var byNikon = getItemsByBrand(items, "Nikon");
console.log("Items by Nikon with author eBay: "+getItemsByAuthor(byNikon, "eBay").length);

//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));