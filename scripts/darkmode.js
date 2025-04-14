const moonIcon = document.getElementById('moon');
const sunIcon = document.getElementById('sun');
let lightmode = localStorage.getItem('lightmode');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
    moonIcon.classList.remove('active');
    sunIcon.classList.add('active');
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
    moonIcon.classList.add('active');
    sunIcon.classList.remove('active');
};

const disableIcon = () => {
    if (lightmode === 'active') {
        moonIcon.classList.remove('active');
        sunIcon.classList.add('active');
    }
    else {
        moonIcon.classList.add('active');
        sunIcon.classList.remove('active');
    }
}

// Inicializa o tema com base no localStorage
if (lightmode === 'active') {
    enableLightmode();
    disableIcon();
} else {
    disableLightmode();
    disableIcon();
}

// Adiciona eventos de clique aos ícones
moonIcon.addEventListener('click', enableLightmode);
sunIcon.addEventListener('click', disableLightmode);
