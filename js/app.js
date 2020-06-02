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
const activeClass = "your-active-class";
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");
const sectionsID = [];





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//  Add all Ids to Global Variables SectionID 
for(let i = 1; i <= sections.length; i++){
    let selector = `#section${i}`
    sectionsID.push(selector)
    
}


                    
                    
                    
                    
                    





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

sectionsID.forEach(function(id){
    let li = document.createElement('li');
    navList.appendChild(li);

    for(let i = 0; i <= sections.length; i++){
        
        let dataNav = sections[i].getAttribute("data-nav");

        let a = document.createElement('a');
        let linkText = document.createTextNode(dataNav);
        a.appendChild(linkText);
        a.title = linkText;
        a.classList.add("menu__link");
        a.href = sectionsID[i];
        li.appendChild(a);
    }

    
});


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active