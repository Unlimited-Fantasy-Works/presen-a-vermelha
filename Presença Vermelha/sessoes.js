// === BANCO DE DADOS DAS SESSÕES ===
// Vincula Sessão ➡️ Personagem ➡️ O que ele fez naquela Sessão
const cronicasDB = [
    {
        id: 'sessao-1',
        titulo: 'Sessão I: A Quebra das Ondas',
        // Personagens presentes NESTA sessão
        personagens: [
            {
                nome: 'Jaime',
                retrato: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2i3owH36lxD5l90OrMIk2OWRiQmnYH6H3ufzOiIsMw&s=10', // Coloque o nome do arquivo da moldura
                detalhes: {
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihfb8D4-4ZDHxx67td13qLR1WbKBf1LjDMFMxBVFv6A&s=10', // Imagem que abre no modal
                    tituloAcao: 'O Duelo Desleal',
                    texto: 'Jaime desafia Stanis para um duelo, argumentando que ele não possui tanta honra quanto diz. Durante o duelo Jaime trapaceia colocando armadilhas pelo terreno. Ao final do combate é descoberto por Robert que o humilha na presença de todos.'
                }
            },
            
            {
                nome: 'Edric',
                retrato: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gkpiwDV3GomhljCor-1r71PVzaa7iOcld3FZ7oyzcA&s=10',
                detalhes: {
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOWxPaD4TpyWJRjFLxbT2hlVeTHsK-Qufc5qeGFWYvg&s=10',
                    tituloAcao: 'Sussurros em Ponta Tempestade',
                    texto: 'Em uma reunião com, seu cunhado e Senhor de Ponta Tempestade, Steffon Baratheon, Edric demonstra preocupações com seu amigo Aerys. Steffon diz que ele só está um pouco doente e não é para se preocupar.'
                }
            }
            
        ]
    },
    {
        id: 'sessao-2',
        titulo: 'Sessão II: Torneio dos Dragões',
        personagens: [
            {
                nome: 'Tyrion Lannister',
                retrato: 'retrato_tyrion.jpg',
                detalhes: {
                    imagem: 's02_tyrion_banquete.jpg',
                    texto: 'Tyrion tentou acalmar as tensões durante o banquete em Winterfell, bebendo e zombando de seu próprio status para desarmar ofensas. Ele percebeu o perigo oculto na corte.'
                }
            },
            {
                nome: 'Ned Stark',
                // Ned pode ter detalhes diferentes na Sessão II
                retrato: 'retrato_ned.jpg', 
                detalhes: {
                    imagem: 's02_ned_rei.jpg',
                    texto: 'Ned Stark foi forçado a aceitar o convite do Rei Robert para se tornar a Mão do Rei. Ele se despediu de sua esposa Catelyn, sabendo que as intrigas de Porto Real mudariam tudo.'
                }
            }
        ]
    }
];

// === ELEMENTOS DA INTERFACE ===
const uiListaSessoes = document.getElementById('session-list');
const uiGridPersonagens = document.getElementById('character-grid');
const uiOverlayDetalhes = document.getElementById('details-overlay');
const uiNomePersonagem = document.getElementById('details-char-name');
const uiImagemAcao = document.getElementById('details-action-img');
const uiTituloAcao = document.getElementById('details-action-title');
const uiTextoDescricao = document.getElementById('details-text');

// === LÓGICA DE FUNCIONAMENTO ===

// 1. Gera o Menu Lateral de Sessões
function renderMenu() {
    cronicasDB.forEach((sessao, index) => {
        const li = document.createElement('li');
        li.textContent = sessao.titulo;
        
        li.addEventListener('click', () => {
            // Destaque amarelo no menu
            document.querySelectorAll('#session-list li').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            
            // TÓPICO 2: Carrega as "molduras" desta sessão
            loadCharacterFrames(sessao.personagens);
        });

        // Seleciona automaticamente a primeira sessão ao abrir
        if (index === 0) {
            li.classList.add('active');
            loadCharacterFrames(sessao.personagens);
        }

        uiListaSessoes.appendChild(li);
    });
}

// TÓPICO 2: Gera a grade central de personagens (Molduras)
function loadCharacterFrames(personagens) {
    uiGridPersonagens.innerHTML = ''; // Limpa a grade anterior

    personagens.forEach(char => {
        const frame = document.createElement('div');
        frame.className = 'char-frame';
        
        frame.innerHTML = `
            <img src="${char.retrato}" class="portrait" alt="${char.nome}" onerror="this.src='retrato_fallback.jpg'">
            <div class="frame-label">${char.nome}</div>
        `;

        // TÓPICO 3: Quando clica no quadro, abre a "aba" de detalhes
        frame.addEventListener('click', () => {
            openDetails(char);
        });

        uiGridPersonagens.appendChild(frame);
    });
}

// TÓPICO 3: Abre a Aba/Modal de Detalhes
function openDetails(charData) {
    uiNomePersonagem.textContent = charData.nome;
    
    // NOVO: Adiciona o título da ação (com um fallback caso você esqueça de preencher algum)
    uiTituloAcao.textContent = charData.detalhes.tituloAcao || 'Crônicas da Sessão';
    
    uiTextoDescricao.textContent = charData.detalhes.texto;
    
    // Mostra a imagem da ação se houver
    if (charData.detalhes.imagem) {
        uiImagemAcao.src = charData.detalhes.imagem;
        uiImagemAcao.style.display = 'block';
    } else {
        uiImagemAcao.style.display = 'none';
    }

    // Revela a aba (overlay)
    uiOverlayDetalhes.style.display = 'flex';
}

// Função para fechar a Aba/Modal
function closeDetails() {
    uiOverlayDetalhes.style.display = 'none';
}

// Adiciona evento para fechar o modal se clicar fora da janela envelhecida
uiOverlayDetalhes.addEventListener('click', (e) => {
    if (e.target === uiOverlayDetalhes) {
        closeDetails();
    }
});

// Inicia o sistema
renderMenu();