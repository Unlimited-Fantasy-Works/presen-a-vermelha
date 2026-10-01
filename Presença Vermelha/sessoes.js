// === BANCO DE DADOS DAS SESSÕES ===
// Vincula Sessão ➡️ Personagem ➡️ O que ele fez naquela Sessão
const cronicasDB = [
    {
        id: 'sessao-1',
        titulo: 'Sessão I: A Quebra das Ondas',
        // Personagens presentes NESTA sessão
        personagens: [
            {
                nome: 'Torvin',
                retrato: 'https://i.ibb.co/S4fbYnPw/torvin.png', // Coloque o nome do arquivo da moldura
                detalhes: {
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqmza_QvVLnxHe4-VTsZiR_KKOcU9v23Z6JyzjQzjl-DCOcYiQfGvPev4&s=10', // Imagem que abre no modal
                    tituloAcao: 'O Segundo Ousado',
                    texto: 'Torvin Snow, o bastardo dos Bolton, tinha apenas treze anos quando chegou a Ponta Tempestade e fez seu nome entre homens muito mais velhos: no torneio, enfrentou um dos incontáveis filhos de Lorde Frey, conhecido pelo apelido de Espinha, e o derrotou diante de nobres e cavaleiros, embora mais tarde tenha sido vencido por Donnel Clegane, um homem adulto e experiente, derrota que pouco diminuiu a ousadia demonstrada pelo jovem. Entre os que assistiram às suas façanhas estava Ser Barristan Selmy, antigo amigo do pai de Torvin desde os dias da Guerra dos Reis das Nove Moedas; impressionado pela coragem do rapaz, Barristan ofereceu-se para tomá-lo como escudeiro em Porto Real. Desde então, Torvin passou a ser lembrado como o Segundo Ousado, um garoto que, apesar da idade e do nascimento bastardo, não hesitava em lançar-se contra homens feitos, como se ainda não tivesse aprendido o medo que os adultos carregavam.'
                }
            },
            
            {
                nome: 'Gargon',
                retrato: 'https://i.ibb.co/3m6VXHkr/Gargon.png',
                detalhes: {
                    imagem: 'https://static.vecteezy.com/ti/vetor-gratis/p1/67526649-martelo-de-guerra-40k-imperial-martelo-com-cranio-e-asas-vintage-arte-silhueta-projeto-emblema-vetor.jpg',
                    tituloAcao: 'Sussurros em Ponta Tempestade',
                    texto: 'Gargon Bolton chegou à festa do dia do nome de Renly Baratheon esperando apenas cumprir seu dever, mas acabou encontrando no jovem Robert Baratheon um amigo inesperado; na véspera do torneio, os dois treinaram juntos até o cair da noite, e a camaradagem entre eles cresceu depressa, embora o comportamento de Gargon durante as justas tenha lançado uma sombra sobre a amizade, pois, tomado pela fúria do combate, tentou matar Brandon Stark, provocando sérios atritos entre as casas Bolton e Stark. Ainda assim, foi outro escândalo que fez a paciência de Gargon chegar ao fim: seu sobrinho Jaime, herdeiro dos Bolton e prometido a Lyanna Stark, foi descoberto trocando carícias com o herdeiro de Tarth, colocando em risco a aliança cuidadosamente construída entre Bolton e Stark e trazendo desonra sobre sua casa. Com a situação cada vez mais difícil de conter, Gargon foi então convidado a partir para o Vale de Arryn na companhia do herdeiro de Ponta Tempestade, numa tentativa de afastá-lo das intrigas e dar-lhe tempo para esfriar a cabeça antes que sua ira transformasse a desonra de sua família em algo ainda pior.'
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
