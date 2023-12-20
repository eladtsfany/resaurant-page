import './styles.css';

const content = document.getElementById('content');

function component() {
    const div = document.createElement('div');
    div.textContent = 'JAVASCRIPT LOADED';
    div.classList.add('css-check');
    return div;
};

content.appendChild(component());