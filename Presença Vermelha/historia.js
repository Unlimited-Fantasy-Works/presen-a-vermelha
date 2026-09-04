// === BANCO DE DADOS DA LORE (HISTÓRIA) ===
const loreDatabase = [
    {
        id: 'longa-noite',
        titulo: 'A Longa Noite',
        subtitulo: 'A Era dos Heróis (Aprox. 8.000 Antes da Conquista)',
        // Link temporário para você VER a imagem funcionando:
        imagem: 'TheLongNight-sketch.jpg', 
        texto: 'A Longa Noite foi um inverno que durou uma geração inteira. As crianças nasciam, cresciam e morriam na escuridão. Foi neste período que os Caminhantes Brancos desceram das Terras de Sempre Inverno pela primeira vez, montando aranhas gigantes de gelo e ressuscitando os mortos para lutarem por eles. Os Primeiros Homens e os Filhos da Floresta precisaram se unir para sobreviver à ameaça, culminando na Batalha da Alvorada.'
    },
    {
        id: 'conquista',
        titulo: 'A Conquista de Aegon',
        subtitulo: 'Ano 2 A.C. a 1 D.C.',
        // Link temporário:
        imagem: 'https://awoiaf.westeros.org/images/thumb/d/d4/Aegon_on_Balerion.jpg/1200px-Aegon_on_Balerion.jpg', 
        texto: 'Aegon Targaryen, montado em seu gigantesco dragão Balerion, o Terror Negro, desembarcou na foz da Torrente da Água Negra acompanhado de suas esposas-irmãs, Rhaenys e Visenya. Em pouco tempo, com o poder do fogo de dragão, os Sete Reinos independentes de Westeros caíram um a um, sendo unificados sob o estandarte do dragão de três cabeças.'
    },
    {
        id: 'danca',
        titulo: 'A Dança dos Dragões',
        subtitulo: 'Ano 129 a 131 D.C.',
        // Link temporário:
        imagem: 'https://placehold.co/400x200/transparent/333333?text=Imagem+da+Danca+dos+Dragoes', 
        texto: 'A guerra civil mais devastadora da história de Westeros. Uma disputa de sucessão pelo Trono de Ferro entre a Princesa Rhaenyra Targaryen (os Negros) e seu meio-irmão, o Rei Aegon II Targaryen (os Verdes). O conflito partiu o reino ao meio e resultou na morte de quase todos os dragões que existiam no mundo, marcando o início do declínio da Casa Targaryen.'
    }
];

// === LÓGICA DE FUNCIONAMENTO ===
const menuList = document.getElementById('history-menu');
const contentTitle = document.getElementById('content-title');
const contentSubtitle = document.getElementById('content-subtitle');
const contentBody = document.getElementById('content-body');
const contentImg = document.getElementById('content-img');

function renderMenu() {
    loreDatabase.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.titulo;
        
        li.addEventListener('click', () => {
            updateContent(item);
            document.querySelectorAll('#history-menu li').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
        });

        if (index === 0) {
            li.classList.add('active');
            updateContent(item);
        }

        menuList.appendChild(li);
    });
}

function updateContent(item) {
    contentTitle.textContent = item.titulo;
    contentSubtitle.textContent = item.subtitulo;
    contentBody.textContent = item.texto;
    
    if(item.imagem) {
        contentImg.src = item.imagem;
        contentImg.style.display = 'block';
    } else {
        contentImg.style.display = 'none';
    }
}

renderMenu();