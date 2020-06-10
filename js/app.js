/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");
const navLinks = document.querySelectorAll('.menu__link');
const navAnchors = document.querySelectorAll('a');
const header = document.getElementsByClassName("page__header")[0];
const sectionsID = [];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//  Add all Ids to Global Variables SectionID 
for(let i = 1; i <= sections.length; i++){
    let selector = `#section${i}`
    sectionsID.push(selector);
    
}

            
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavMenu() {

        
    for(let i = 0; i < sections.length; i++){
        const section = sections[i];
        console.log(sections[i])
        const li = document.createElement('li');
        const a = document.createElement('a');
        console.log(sections[i]);
        
        li.classList.add(sections[i].getAttribute('id'));
        navList.appendChild(li);
        
        
        let dataSet = section.getAttribute('data-nav');
        
        let linkText = document.createTextNode(dataSet);
        
        a.classList.add("menu__link");
        a.appendChild(linkText);
        
        a.href = `#section${i + 1}`;

        li.appendChild(a);
        

    }
    
        
    
}


// Add class 'active' to section when near top of viewport

const activeClass = document.addEventListener('scroll',  () => {
    
    
    for (const section of sections) {
        
        const element = section.getBoundingClientRect();
        
        if (element.top <= 150 && element.bottom >= 150) { 
            
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.add("active"); // querySelector() returns the first Element within the document that matches the specified selector.
            section.classList.add('your-active-class');

            // Show the active section on Navigation Bar on Responsive Menu

            let dataSet = section.getAttribute('data-nav');
            let activePar = document.getElementById("activeSection");
            activePar.innerText = dataSet;

            
        } else {
            
            section.classList.remove('your-active-class');
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.remove("active")
            
        }

    }
});


// Scroll to anchor ID using scrollTO event


function scrollToId (){

    //according my mentor https://knowledge.udacity.com/questions/226271
    
    document.querySelectorAll('.navbar__menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


   
}


// adding scroll event

//hide the navbar when scroll to top except first section

let scrollPos = 0;

window.addEventListener('scroll', function(){
    // detects new state and compares it with the new one
    if (((document.body.getBoundingClientRect()).top >= scrollPos) && 
        !sections[0].classList.contains('your-active-class') && 
        (document.body.getBoundingClientRect()).top <= 0 )

        document.querySelector(".page__header").style.cssText = "display: none;";

    else
        
        document.querySelector(".page__header").style.cssText = "display: block;";
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top ;
});


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
createNavMenu();

// Scroll to section on link click
scrollToId();

// Set sections as active
activeClass();
