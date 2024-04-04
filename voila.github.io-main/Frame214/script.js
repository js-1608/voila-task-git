document.addEventListener("DOMContentLoaded", function() {
    // Assuming you have a variable or method to get the username
    var username = getUsername(); // Replace getUsername() with the actual method to get the username

    // Update the placeholder with the actual username
    var usernamePlaceholder = document.getElementById("usernamePlaceholder");
    if (usernamePlaceholder) {
        usernamePlaceholder.textContent = username;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Create a new link element
    var link = document.createElement("a");

    // Set attributes for the link (href, text content, etc.)
    link.href = "https://example.com";
    link.textContent = link.href; // The text content of the link

    // Append the link to the container element
    var container = document.getElementById("dynamicLinkContainer");
    container.appendChild(link);
});

