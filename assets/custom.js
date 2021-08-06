/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
function getYear() {
	var today = new Date();
	var year = today.getFullYear();
    let el = document.getElementById("currentYear");
  
  	el.innerHTML = year;
}

getYear();

document.addEventListener('variant:changed', function(event) {
  var variant = event.detail.variant; 
  var edpId = "edp-" + variant.id;
  if(document.getElementById(curEdpId)) {
  	document.getElementById(curEdpId).style.display = "none";
    
    if(document.getElementById(edpId)){ 
      document.getElementById(edpId).style.display = "inline";
      
      curEdpId = edpId;
    }
  }
  
 });

document.addEventListener('variant:changed', function(event) {
  var variant = event.detail.variant;
  var varprice = variant.price;
  
  if (varprice >= 19900) {
  	document.getElementById('qualify-shipping').innerHTML = 'This Item Ships <span>FREE</span>';
  } else if (varprice <= 19900) {
  	document.getElementById('qualify-shipping').innerHTML = '';
  } else {
  	document.getElementById('qualify-shipping').innerHTML = '';
  }

});

function removeRatingBox() {
	let ratingSelector = document.getElementsByClassName("ais-facet-meta.turnto.product_rating")[0]; 
  	ratingSelector.style.display = "none";
    
}

function checkImg() {
	let el = document.getElementById('rondellCarousel');
  let el2 = document.getElementsByClassName('pdp-newtag')[0];
  let h = el.offsetHeight;
  	
  if (h < 500) {
  	let newOffset = h - 140;
    el2.style.top = newOffset + "px";
  }
}

function makeSelected(collectionName, index) {
	
  if (collectionName == 'New Products') {
  	console.log(collectionName);
    let el = document.getElementsByClassName('ais-sort-by-selector--item')[3];
   
    el.setAttribute("selected", "selected");
  }
}




