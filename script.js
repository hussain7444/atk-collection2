/**
 * Increases or decreases product quantity
 * @param {string} id - The ID of the input field
 * @param {number} delta - +1 or -1
 */
function changeQty(id, delta) {
    const input = document.getElementById(id);
    let currentVal = parseInt(input.value);
    let newVal = currentVal + delta;
    
    // Ensure quantity is never less than 1
    if (newVal < 1) newVal = 1;
    input.value = newVal;
}

/**
 * Calculates total and populates the checkout form
 */
function selectItem(name, price, qtyId) {
    const quantity = document.getElementById(qtyId).value;
    const totalPrice = price * quantity;
    const summaryInput = document.getElementById('selected_prod');
    
    summaryInput.value = `${name} x${quantity} (Total: ₹${totalPrice})`;
    
    // Scroll to the checkout section smoothly
    document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Validates form and opens WhatsApp with order details
 */
function sendOrder() {
    const mobile = "918291767175"; 
    const order = document.getElementById('selected_prod').value;
    const name = document.getElementById('cust_name').value.trim();
    const address = document.getElementById('cust_address').value.trim();

    // Validation
    if (!order) {
        alert("Pehle kisi product ka 'Order Now' button click karein!");
        return;
    }
    if (!name || !address) {
        alert("Kripya apna naam aur pura address bharein!");
        return;
    }

    // Prepare WhatsApp Message
    const message = `*✨ NEW ORDER FROM ATK COLLECTION ✨*%0A%0A` +
                    `*Order Details:* ${encodeURIComponent(order)}%0A` +
                    `*Customer Name:* ${encodeURIComponent(name)}%0A` +
                    `*Delivery Address:* ${encodeURIComponent(address)}%0A%0A` +
                    `Please confirm my order!`;

    const whatsappUrl = `https://wa.me/${mobile}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
}