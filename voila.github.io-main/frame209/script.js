function calculateTotal() {
    var shootAmount = parseFloat(document.getElementById("shootAmount").value);
    var shipAmount = parseFloat(document.getElementById("shipAmount").value);
    
    var gst = (shootAmount * 0.18);
    var totalAmount = shootAmount + gst + shipAmount;
    
    document.getElementById("gstAmount").textContent = "₹ " + gst.toFixed(2);
    document.getElementById("totalAmount").textContent = "₹ " + totalAmount.toFixed(2);
}