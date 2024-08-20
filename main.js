document.addEventListener('DOMContentLoaded', ()=>
    {activate('home')})
function activate(activeId) {
    // List of all possible links
    const links = ['home', 'calendar', 'customization'];
    // Iterate over each link to update their active state
    links.forEach(link => {
        // Get the elements for the current link
        const activeElement = document.querySelector(`.${link}-a`);
        const inactiveElement = document.querySelector(`.${link}-i`);
        const page = document.querySelector(`.${link}`);
        if (link === activeId) {
            // If it's the active link, show the active icon and hide the inactive icon
            activeElement.style.display = 'block';
            inactiveElement.style.display = 'none';
            page.style.display = 'block';
        } else {
            // Otherwise, hide the active icon and show the inactive icon
            activeElement.style.display = 'none';
            inactiveElement.style.display = 'block';
            page.style.display = 'none';
        }
    });
}

// Optional: Set the initial state if needed
activate('home'); // Example to set 'home' as the initial active ico
 