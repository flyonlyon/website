// Check to see if the DOM is already loaded, and run the rest of our code once it is
if (document.readyState === "complete" || document.readyState === "interactive") {
    runAfterDOMLoaded();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        runAfterDOMLoaded();
    });
}

function runAfterDOMLoaded() {
    
    // ====================== Fading background ====================== //
    let currentBackgroundIndex = 0;
    const background = document.querySelector('#background');
    const images = [
        "url(Assets/Images/Space1.png)", 
        "url(Assets/Images/Space2.png)"
    ]; // images

    function setBackground() {
        background.style.backgroundImage = images[currentBackgroundIndex];
        currentBackgroundIndex = (currentBackgroundIndex + 1) % images.length;
    } // setBackground()
    
    
    // =========================== About Me =========================== //
    const allWork = document.getElementById('all-work');
    const allPlay = document.getElementById('all-play');
    
    const aboutMeText = document.getElementById('about-me-text');
    const aboutMeImage1 = document.getElementById('about-me-img-1');
    const aboutMeImage2 = document.getElementById('about-me-img-2');
    const aboutMeImage3 = document.getElementById('about-me-img-3');
    
    function toggleWork() {
        allWork.classList.add('active-option');
        allPlay.classList.remove('active-option');
        aboutMeText.style.opacity = 0;
        aboutMeImage1.setAttribute("src", "Assets/Images/Google.png");
        aboutMeImage2.setAttribute("src", "Assets/Images/Chinatown.png");
        aboutMeImage3.setAttribute("src", "Assets/Images/KTP.png");
        setTimeout(() => {
            aboutMeText.innerHTML = "I’m a senior at the University of Michigan double majoring in Computer Science and Asian Studies. <br><br> In elementary school, I was introduced to Scratch   , a block-based game programming website, and unknowingly stumbled face first into the world of software development. <br><br> Since then, I’ve been involving myself more with disciplines adjacent to my own, and have gotten the chance to work on projects ranging from video editing and UX design to music production and storytelling! <br><br> I want to harness technology to create products and experiences that bridge cultures, inspire creativity, and bring people together. <br><br> If you’re interested in working together, please reach out!";
            aboutMeText.style.opacity = 1;
        }, 250);
    } // toggleWork()
    
    function togglePlay() {
        allPlay.classList.add('active-option');
        allWork.classList.remove('active-option');
        aboutMeText.style.opacity = 0;
        aboutMeImage1.setAttribute("src", "Assets/Images/Sarah.png");
        aboutMeImage2.setAttribute("src", "Assets/Images/Football.png");
        aboutMeImage3.setAttribute("src", "Assets/Images/Birthday.png");
        setTimeout(() => {
            aboutMeText.innerHTML = "Video games, unsurprisingly, take a prominent place in my list of hobbies. I love anything multiplayer, but some of my recent favorites games have been Minecraft, Rainbow 6 Siege, Dead By Daylight, Valorant, and Animal Crossing. <br><br> But video games are just one of the many things I’m passionate about! Outside of work, I love language learning, keyboard building, card/board games, playing piano, trying new teas, and diving. <br><br> My lifetime ambitions are to become fluent in Chinese, Japanese, and Swedish, learn another instrument (while getting better at the piano), make the perfect matcha, and get a piece of writing published. <br><br> As much as I never want to stop chasing those dreams, <br> I’m just happy to be here.";
            aboutMeText.style.opacity = 1;
        }, 250);
    } // togglePlay
    
    
    // =========================== Resizing =========================== //
    
    const homeCard1 = document.getElementById('home-card-1');
    const homeCard2 = document.getElementById('home-card-2');
    const homeSubtitle = document.getElementById('home-subtitle');
    
    const lifeImages = document.getElementById('life-images');
    const lifeInfo = document.getElementById('life-info');
    const hikeImages = document.getElementById('hike-images');
    const hikeInfo = document.getElementById('hike-info');
    const brawlImages = document.getElementById('brawl-images');
    const brawlInfo = document.getElementById('brawl-info');
    
    function resizeElements() {
        let viewHeight = window.innerHeight;
        let viewWidth = window.innerWidth;
        
        console.log(viewWidth);
        
        // Home cards
        if (viewWidth < 951) {
            homeCard1.classList.add('hidden');
            homeCard1.classList.remove('visible');
            homeCard2.classList.add('hidden');
            homeCard2.classList.remove('visible');
        } else if (viewWidth < 1176) {
            homeCard1.classList.add('hidden');
            homeCard1.classList.remove('visible');
            homeCard2.classList.add('visible');
            homeCard2.classList.remove('hidden');
        } else {
            homeCard1.classList.add('visible');
            homeCard1.classList.remove('hidden');
            homeCard2.classList.add('visible');
            homeCard2.classList.remove('hidden');
        } // if else
        
        // Home Subtitle
        if (viewWidth < 651) {
            homeSubtitle.innerHTML = "Developer, designer, and game enthusiast @ umich <br> seeking full-time opportunities starting in 2025";
        } else {
            homeSubtitle.innerHTML = "I’m a developer, designer, and game enthusiast @ umich <br> seeking full-time opportunities starting in 2025";
        } // if else
        
        // Experience Columns
        if (viewWidth < 901) {
            lifeImages.classList.add('col-10');
            lifeInfo.classList.add('col-11');
            lifeImages.classList.remove('col-5');
            lifeInfo.classList.remove('col-6');
            
            hikeImages.classList.add('col-10');
            hikeInfo.classList.add('col-11');
            hikeImages.classList.remove('col-5');
            hikeInfo.classList.remove('col-6');
            
            brawlImages.classList.add('col-10');
            brawlInfo.classList.add('col-11');
            brawlImages.classList.remove('col-5');
            brawlInfo.classList.remove('col-6');
        } else {
            lifeImages.classList.add('col-5');
            lifeInfo.classList.add('col-6');
            lifeImages.classList.remove('col-10');
            lifeInfo.classList.remove('col-11');
            
            hikeImages.classList.add('col-5');
            hikeInfo.classList.add('col-6');
            hikeImages.classList.remove('col-10');
            hikeInfo.classList.remove('col-11');
            
            brawlImages.classList.add('col-5');
            brawlInfo.classList.add('col-6');
            brawlImages.classList.remove('col-10');
            brawlInfo.classList.remove('col-11');
        }
        
        // Specific Experience
        
    } // resizeElements()
    
    
    // ====================== Startup Logic ====================== //
    
    // Fading Background
    setBackground();
    setInterval(setBackground, 1500);
    
    // About Me
    allWork.addEventListener('click', toggleWork);
    allPlay.addEventListener('click', togglePlay);
    
    // Resizing
    resizeElements();
    window.addEventListener('resize', resizeElements)
    
} // runAfterDOMLoaded()
