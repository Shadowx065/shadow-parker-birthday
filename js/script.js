// CONTROLADOR LÓGICO DEL EVENTO DE CUMPLEAÑOS - EFREN URIEL

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CONFIGURACIÓN DE WHATSAPP
    const numeroDestino = "525540866982";
    const botonFelicitar = document.getElementById('btnFelicitar');

    botonFelicitar.addEventListener('click', () => {
        const mensajePredeterminado = `¡Feliz cumpleaños! 
Espero que tengas un día increíble y que este nuevo año de vida esté lleno de salud, felicidad, éxitos y grandes momentos. Gracias por formar parte de mi vida y por todos los recuerdos compartidos.
¡Disfruta mucho tus 23 años! `;
        
        const mensajeCodificado = encodeURIComponent(mensajePredeterminado);
        const enlaceWhatsApp = `https://wa.me/${numeroDestino}?text=${mensajeCodificado}`;
        window.open(enlaceWhatsApp, '_blank');
    });

    // 2. EXPEDIENTES DE HÉROES (Rutas y nombres limpios validados sin espacios)
    const heroDatabase = {
        spiderman: {
            name: "Spider-Man",
            alterEgo: "Peter Parker",
            creators: "Stan Lee, Steve Ditko",
            firstApp: "Amazing Fantasy #15 (1962)",
            theme: "Responsabilidad y Persistencia",
            headerColor: "#ff2a2a",
            hasVariants: true,
            leftImage: "images/Amazing_Fantasy_15.jpg",
            rightImage: "images/Miguel_ATSV.png",
            variant: "<strong>Variante Favorita:</strong> Spider-Man 2099 (Miguel O'Hara) de la película <em>Spider-Man: Across the Spider-Verse (2023)</em>. Una imponente versión de tintes futuristas y liderazgo radical."
        },
        optimus: {
            name: "Optimus Prime",
            alterEgo: "Orion Pax",
            creators: "Hasbro / Marvel Comics",
            firstApp: "The Transformers #1 (1984)",
            theme: "Liderazgo, Sacrificio y Honor",
            headerColor: "#00f0ff",
            hasVariants: true,
            leftImage: "images/Transformers-1-Pic-1-Brooklyn-Comic-Shop.jpg",
            rightImage: "images/Optimus_Prime.jpg",
            variant: "<strong>Versión Favorita:</strong> La encarnación de la película animada <em>Transformers One (2024)</em>. Explora sus profundos orígenes antes de reclamar la Matrix."
        },
        superman: {
            name: "Superman",
            alterEgo: "Clark Kent / Kal-El",
            creators: "Jerry Siegel, Joe Shuster",
            firstApp: "Action Comics #1 (1938)",
            theme: "Esperanza, Bondad y Humanidad",
            headerColor: "#ffea00",
            hasVariants: true,
            leftImage: "images/Action_Comics_1.jpg",
            rightImage: "images/Superman.png",
            variant: "<strong>Versión Favorita:</strong> La adaptación de James Gunn en <em>Superman (2025)</em>, capturando al héroe optimista clásico en la era moderna."
        },
        allmight: {
            name: "All Might",
            alterEgo: "Toshinori Yagi",
            creators: "Kōhei Horikoshi",
            firstApp: "My Hero Academia - Capítulo 1 (2014)",
            theme: "El Símbolo de la Paz y la Sonrisa",
            headerColor: "#ff007f",
            hasVariants: false,
            singleImage: "images/All Might.png",
            variant: "<strong>Datos de Héroe:</strong> Su legado absoluto como el Portador del One For All y su inquebrantable voluntad para salvar a otros con una sonrisa lo vuelven un pilar inigualable."
        }
    };

    // 3. BASE DE DATOS MUSICAL (METADATOS)
    const songDatabase = {
        afterdark: {
            title: "After Dark",
            artist: "Mr.Kitty",
            album: "Time (2014)",
            composer: "Forrest Avery Carney",
            producer: "Mr.Kitty",
            genre: "Synthwave, Darkwave",
            duration: "4:17",
            desc: '"After Dark" es una obra melancólica con sintetizadores nostálgicos y atmósfera densa, un himno de la estética cyberpunk.'
        },
        michael: {
            title: "Thriller",
            artist: "Michael Jackson",
            album: "Thriller (1982)",
            composer: "Rod Temperton",
            producer: "Quincy Jones",
            genre: "Pop, Funk, Disco",
            duration: "5:57",
            desc: '"Thriller" es una joya histórica del pop con su icónica atmósfera de terror y coreografía legendaria.'
        },
        daft: {
            title: "Doin' It Right",
            artist: "Daft Punk ft. Panda Bear",
            album: "Random Access Memories (2013)",
            composer: "Thomas Bangalter, Guy-Manuel de Homem-Christo, Noah Lennox",
            producer: "Daft Punk",
            genre: "Electronic, Nu-disco",
            duration: "4:11",
            desc: 'Un bucle vocal robótico entrelazado con la voz etérea de Panda Bear, logrando un balance minimalista impecable.'
        },
        skillet: {
            title: "Comatose",
            artist: "Skillet",
            album: "Comatose (2006)",
            composer: "John L. Cooper",
            producer: "Brian Howes",
            genre: "Symphonic Rock, Alternative Metal",
            duration: "3:50",
            desc: 'Fusión dramática de cuerdas sinfónicas y riffs pesados que abordan el despertar emocional.'
        },
        siames: {
            title: "The Wolf",
            artist: "SIAMÉS",
            album: "Bounce Into The Music (2016)",
            composer: "Stoltz, Blumberg",
            producer: "Guillermo Porro",
            genre: "Indie Pop, Electro Rock",
            duration: "3:14",
            desc: 'Metáfora rítmica sobre la lucha interna contra las tentaciones, famosa por su video animado en blanco y negro.'
        },
        mystery: {
            title: "The Future",
            artist: "Mystery Skulls",
            album: "Forever (2014)",
            composer: "Luis Dubuc",
            producer: "Luis Dubuc",
            genre: "Indie Pop, Neo-soul",
            duration: "3:10",
            desc: 'Energía desbordante de electropop cargada de ritmo funk retro-moderno que inyecta dinamismo inmediato.'
        }
    };

    // 4. INTERACTIVOS DE EXPEDIENTES DE HÉROES
    const heroButtons = document.querySelectorAll('.hero-tag-btn');
    const heroPanel = document.getElementById('hero-spec-panel');

    heroButtons.forEach(button => {
        button.addEventListener('click', () => {
            const heroKey = button.getAttribute('data-hero');
            const data = heroDatabase[heroKey];

            if (!data) return;

            if (button.classList.contains('hero-active')) {
                button.classList.remove('hero-active');
                heroPanel.classList.add('hero-panel-hidden');
                return;
            }

            heroButtons.forEach(btn => btn.classList.remove('hero-active'));
            button.classList.add('hero-active');
            
            heroPanel.style.borderLeft = `4px solid ${data.headerColor}`;
            
            let visualHTML = '';
            if(data.hasVariants) {
                const rightImgClass = (heroKey === 'superman') ? 'class="img-superman-2025"' : '';
                visualHTML = `
                    <div class="hero-visual-content" style="border: 2px solid ${data.headerColor}">
                        <img src="${data.leftImage}" alt="Primera Aparición">
                    </div>
                    <div class="hero-text-content">
                        <div class="hero-spec-header" style="color: ${data.headerColor}">
                            <i class="fa-solid fa-shield-halved"></i> ${data.name}
                        </div>
                        <div class="hero-details-grid">
                            <p><strong>Identidad:</strong> ${data.alterEgo}</p>
                            <p><strong>Creadores:</strong> ${data.creators}</p>
                            <p><strong>Primera Aparición:</strong> ${data.firstApp}</p>
                            <p><strong>Filosofía:</strong> ${data.theme}</p>
                        </div>
                        <div class="hero-variant-box">
                            ${data.variant}
                        </div>
                    </div>
                    <div class="hero-visual-content" style="border: 2px solid ${data.headerColor}">
                        <img src="${data.rightImage}" alt="Versión Favorita" ${rightImgClass}>
                    </div>
                `;
            } else {
                visualHTML = `
                    <div class="hero-text-content">
                        <div class="hero-spec-header" style="color: ${data.headerColor}">
                            <i class="fa-solid fa-shield-halved"></i> ${data.name}
                        </div>
                        <div class="hero-details-grid">
                            <p><strong>Identidad:</strong> ${data.alterEgo}</p>
                            <p><strong>Creadores:</strong> ${data.creators}</p>
                            <p><strong>Primera Aparición:</strong> ${data.firstApp}</p>
                            <p><strong>Filosofía:</strong> ${data.theme}</p>
                        </div>
                        <div class="hero-variant-box">
                            ${data.variant}
                        </div>
                    </div>
                    <div class="hero-visual-content" style="border: 2px solid ${data.headerColor}">
                        <img src="${data.singleImage}" alt="${data.name}">
                    </div>
                `;
            }

            heroPanel.innerHTML = `<div class="hero-flex-layout">${visualHTML}</div>`;
            heroPanel.classList.remove('hero-panel-hidden');
        });
    });

    // 5. SISTEMA MULTICANAL DE AUDIO DIGITAL
    const mainAudio = document.getElementById('bgMusic');
    const mainAudioBtn = document.getElementById('audioToggle');
    const mainAudioIcon = mainAudioBtn.querySelector('i');
    const mainAudioText = mainAudioBtn.querySelector('span');

    const musicButtons = document.querySelectorAll('.music-tag-btn');
    const infoPanel = document.getElementById('song-info-panel');
    
    const allAudios = [
        mainAudio,
        document.getElementById('audio-michael'),
        document.getElementById('audio-daft'),
        document.getElementById('audio-skillet'),
        document.getElementById('audio-siames'),
        document.getElementById('audio-mystery')
    ];

    allAudios.forEach(track => { if(track) track.volume = 0.40; });

    function displaySongInfo(trackKey) {
        const data = songDatabase[trackKey];
        if (!data) return;

        infoPanel.innerHTML = `
            <div class="song-title-header">
                <i class="fa-solid fa-compact-disc fa-spin"></i> ${data.title} – ${data.artist}
            </div>
            <div class="song-details-grid">
                <p><strong>Artista:</strong> ${data.artist}</p>
                <p><strong>Álbum:</strong> ${data.album}</p>
                <p><strong>Compositor:</strong> ${data.composer}</p>
                <p><strong>Productor:</strong> ${data.producer}</p>
                <p><strong>Género:</strong> ${data.genre}</p>
                <p><strong>Duración:</strong> ${data.duration}</p>
            </div>
            <div class="song-description">
                <strong>Descripción:</strong><br>
                ${data.desc}
            </div>
        `;
        infoPanel.classList.remove('song-panel-hidden');
    }

    function resetAllPlayback() {
        allAudios.forEach(track => {
            if (track) {
                track.pause();
                track.currentTime = 0;
            }
        });
        musicButtons.forEach(btn => btn.classList.remove('track-active'));
        mainAudioBtn.classList.remove('audio-playing');
        mainAudioIcon.className = 'fa-solid fa-play';
        mainAudioText.innerText = 'Música 🎵';
        infoPanel.classList.add('song-panel-hidden');
    }

    mainAudioBtn.addEventListener('click', () => {
        if (mainAudio.paused) {
            resetAllPlayback();
            mainAudio.play();
            mainAudioBtn.classList.add('audio-playing');
            mainAudioIcon.className = 'fa-solid fa-pause';
            mainAudioText.innerText = 'After Dark 🎶';
            displaySongInfo('afterdark');
        } else {
            resetAllPlayback();
        }
    });

    musicButtons.forEach(button => {
        button.addEventListener('click', () => {
            const trackId = button.getAttribute('data-track');
            const targetAudio = document.getElementById(`audio-${trackId}`);

            if (!targetAudio) return;

            if (!targetAudio.paused) {
                resetAllPlayback();
            } else {
                resetAllPlayback();
                targetAudio.play();
                button.classList.add('track-active');
                displaySongInfo(trackId);
            }
        });
    });

    console.log("-----------------------------------------");
    console.log("🚀 Protocolo de Cumpleaños Efren v23.5 Sincronizado.");
    console.log("-----------------------------------------");
});