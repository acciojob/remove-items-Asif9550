//your JS code here. If required.
// Get references to the dropdown and button
const colorSelect = document.getElementById('colorSelect');
const removeButton = document.querySelector('input[type="button"]');

// Add a click event listener to the button
removeButton.addEventListener('click', () => {
    // Get the selected option's index
    const selectedIndex = colorSelect.selectedIndex;
    if (selectedIndex !== -1) {
        // Remove the selected option from the dropdown
        colorSelect.remove(selectedIndex);
    } else {
        alert('Please select a color to remove.');
    }
});
