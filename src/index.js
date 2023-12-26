import './styles.css';

const content = document.getElementById('content');

document.querySelectorAll('.navigate a')
    .forEach(a => a.addEventListener('click', handleNavClick));

function handleNavClick(e) {
    // Delete existing DOM elements inside #content section
    while (content.firstChild) content.removeChild(content.firstChild);

    const dataName = e.target.getAttribute('data-name');
    if (dataName === 'home') generateHome();
    else if (dataName === 'menu') generateMenu();
    else generateContact();
}

function generateHome() {
    alert('clicked');
    console.log('clicked');
}
function generateMenu() {
    alert('clicked');
    console.log('clicked');
}
function generateContact() {
    alert('clicked');
    console.log('clicked');
}

