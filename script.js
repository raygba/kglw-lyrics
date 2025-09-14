
let isReversed = true; // reverse list by default

// reverse list content on initial page load
window.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('myList');
    const items = Array.from(list.children).reverse();

    // clear and reinsert reversed items
    list.innerHTML = '';
    items.forEach(item => list.appendChild(item));
    list.setAttribute('reversed', '');
});

function toggleListOrder() {
    const list = document.getElementById('myList');
    const button = document.getElementById('reverseBtn');
    const items = Array.from(list.children).reverse();

    // Clear and re-render the list
    list.innerHTML = '';
    items.forEach(item => list.appendChild(item));

    // Toggle number markers and button text
    if (isReversed) {
        list.removeAttribute('reversed');
        button.textContent = 'Show Newest First';
    } else {
        list.setAttribute('reversed', '');
        button.textContent = 'Show Oldest First';
    }

    isReversed = !isReversed;
}
