/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

const img = document.querySelector('img');

/*
img.addEventListener('click', function() {
    img.src = img.src.endsWith('firefox-icon.png') ? 'images/firefox2-icon.png' : 'images/firefox-icon.png';
});
*/

img.onclick = function() {
    img.src = img.src.endsWith('firefox-icon.png') ? 'images/firefox2-icon.png' : 'images/firefox-icon.png';
};

const changeUserButton = document.querySelector('button');
const heading = document.querySelector('h1');

function setUserName() {
    const userName = prompt('Please enter your name.');
    if (userName !== null && userName !== '') {
        localStorage.setItem('userName', userName);
        showTitle(userName);
    }
}

function showTitle(userName) {
    if (userName !== null && userName !== '') {
        heading.textContent = `Mozilla is cool, ${userName}!`;
    } else {
        heading.textContent = 'Mozilla is cool!';
    }
}

const storedName = localStorage.getItem('userName');
if (storedName === null) {
    setUserName();
} else {
    showTitle(storedName);
}

changeUserButton.onclick = setUserName;
