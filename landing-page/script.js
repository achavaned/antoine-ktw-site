const descriptions = {
    en: "I am a technology enthusiast passionate about web development...",
    es: "Soy un entusiasta de la tecnología apasionado por el desarrollo web...",
    fr: "Je suis un passionné de technologie et de développement web...",
    de: "Ich bin ein technologiebegeisterter Webentwickler..."
};

const spotifyLinks = {
    en: "https://open.spotify.com/embed/playlist/ejemplo1",
    es: "https://open.spotify.com/embed/playlist/ejemplo2",
    fr: "https://open.spotify.com/embed/playlist/ejemplo3",
    de: "https://open.spotify.com/embed/playlist/ejemplo4"
};

function changeLanguage(lang) {
    document.getElementById("description").innerText = descriptions[lang];
    document.getElementById("spotify-embed").src = spotifyLinks[lang];
}
