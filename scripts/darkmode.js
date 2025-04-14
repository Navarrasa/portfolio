const moonIcon = document.getElementById('moon');
const sunIcon = document.getElementById('sun');
let lightmode = localStorage.getItem('lightmode');
const VIDEO_CLARO_URL = "https://github.com/Navarrasa/ferramentas/raw/refs/heads/main/videos/portfolio_lightmode.mp4";
const VIDEO_ESCURO_URL = "https://github.com/Navarrasa/ferramentas/raw/refs/heads/main/videos/portfolio_darkmode.mp4";
const videoPlayer = document.getElementById('videoPlayer');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
    moonIcon.classList.remove('active');
    sunIcon.classList.add('active');
    // Atualiza o vídeo para o modo claro
    videoPlayer.src = VIDEO_CLARO_URL;
    // Inicia o vídeo (opcional, dependendo do seu comportamento desejado)
    videoPlayer.play();
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
    moonIcon.classList.add('active');
    sunIcon.classList.remove('active');
    // Atualiza o vídeo para o modo escuro
    videoPlayer.src = VIDEO_ESCURO_URL;
    // Inicia o vídeo (opcional, dependendo do seu comportamento desejado)
    videoPlayer.play();
};

// Inicializa o tema e o vídeo com base no localStorage
if (lightmode === 'active') {
    enableLightmode();
} else {
    disableLightmode();
}

// Adiciona eventos de clique aos ícones
moonIcon.addEventListener('click', enableLightmode);
sunIcon.addEventListener('click', disableLightmode);