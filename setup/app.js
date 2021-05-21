// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const setDate = document.querySelector('#date');

setDate.innerHTML = new Date().getFullYear();

// ********** close links ************
const toggleButton = document.querySelector('.nav-toggle');

const linksContainer = document.querySelector('.links-container');

const links = document.querySelector('.links');

// adding eventlistener.....action starts now...

toggleButton.addEventListener('click', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }

})

// ********** fixed navbar ************
const navbar = document.getElementById('nav');

const scrollbtn = document.querySelector('.top-link');


window.addEventListener('scroll', () => {
    const navbarHeight = navbar.getBoundingClientRect().height;

    const scrollHeight = window.pageYOffset;

    if (scrollHeight > navbarHeight) {
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        scrollbtn.classList.add('show-link');
    }
    else {
        scrollbtn.classList.remove('show-link');
    }

})


// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((scrolllink) => {
    scrolllink.addEventListener('click', (e) => {
        // preventing default behaviour...
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navbarHeight = navbar.getBoundingClientRect().height;

        const containerHeight = linksContainer.getBoundingClientRect().height;
        let position = element.offsetTop - navbarHeight;
        if (!navbar.classList.contains('fixed-nav')) {
            position = position - navbarHeight;
        }
        if (navbarHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0, top: position
        })

        linksContainer.style.height = 0;




    })
})
