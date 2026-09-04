// === BANCO DE DADOS DOS DIÁRIOS ===
const diariosDB = [
    {
        id: 'edric',
        nome: 'Edric',
        tituloDiario: 'Diário de Edric',
        assinatura: 'E. Baratheon',
        entradas: [
            {
                id: 'e1',
                data: '2º Dia da 4ª Lua, 298 AC',
                titulo: 'Sussurros na Tempestade',
                // Use a crase (`) para permitir pular linhas exatamente como no Discord
                texto: `Minhas noites em Ponta Tempestade têm sido inquietas. Ontem, conversei com Steffon sobre Aerys. O olhar dele dizia que tudo ficaria bem, que era apenas uma doença passageira. Mas eu o conheço melhor do que isso. 

Há algo no ar desta fortaleza que me sufoca. O barulho das ondas contra a pedra parece um aviso constante de que a tempestade verdadeira não está no mar, mas em Porto Real.

Preciso treinar com a espada amanhã cedo para limpar a mente. A fúria é nossa, mas a paciência me escapa.`
            },
            {
                id: 'e2',
                data: '15º Dia da 4ª Lua, 298 AC',
                titulo: 'Partida',
                texto: `Os cavalos estão selados. Não posso mais esperar pelas mentiras confortáveis do meu cunhado. Cavalgaremos amanhã.`
            }
        ]
    },
    {
        id: 'jaime',
        nome: 'Jaime',
        tituloDiario: 'Memórias de Ouro e Sangue',
        assinatura: 'J. L.',
        entradas: [
            {
                id: 'j1',
                data: 'Dia do Torneio',
                titulo: 'A Humilhação Pública',
                texto: `Aquele bêbado gordo sentou no trono e riu. Ele Riu. 

Eu tinha o maldito Stannis desarmado, a vitória era minha. Sim, usei as armadilhas do terreno, e daí? Um combate real não se vence com gentilezas, se vence com inteligência e sobrevivência. 

Quando Robert levantou a voz, cercado por aqueles bajuladores imundos, e me chamou de trapaceiro sem honra... juro pelos deuses antigos e novos, minha mão foi ao cabo da espada. Se Cersei não estivesse no camarote me olhando, talvez eu tivesse cometido outro regicídio hoje.`
            }
        ]
    },
    {
        id: 'martell',
        nome: 'Príncipe Martell',
        tituloDiario: 'Relatos do Sol Exilado',
        assinatura: 'Insubmisso.',
        entradas: [
            {
                id: 'm1',
                data: 'Na Estrada do Rei',
                titulo: 'Frio nas Marcas',
                texto: `O clima nestas terras é tão miserável quanto a comida. Sinto falta das laranjas de Lançassolar e do vinho forte. A caravana anda devagar, mas os corvos andam rápidos. Já sei das mortes no norte.`
            }
        ]
    }
];

// === ELEMENTOS DA INTERFACE ===
const uiAuthorList = document.getElementById('author-list');
const uiBookContainer = document.getElementById('book-container');
const uiDiaryAuthorName = document.getElementById('diary-author-name');
const uiEntriesList = document.getElementById('diary-entries-list');

const uiEntryContent = document.getElementById('entry-content');
const uiEmptyState = document.getElementById('empty-state');

const uiEntryDate = document.getElementById('entry-date');
const uiEntryTitle = document.getElementById('entry-title');
const uiEntryText = document.getElementById('entry-text');
const uiEntrySignature = document.getElementById('entry-signature');

// === LÓGICA DE FUNCIONAMENTO ===

let autorAtual = null;

// 1. Gera o Menu Lateral de Autores
function renderMenuAutores() {
    diariosDB.forEach((autor, index) => {
        const li = document.createElement('li');
        li.textContent = autor.nome;
        
        li.addEventListener('click', () => {
            document.querySelectorAll('#author-list li').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            
            abrirDiario(autor);
        });

        // Abre automaticamente o primeiro autor
        if (index === 0) {
            li.classList.add('active');
            abrirDiario(autor);
        }

        uiAuthorList.appendChild(li);
    });
}

// 2. Abre o Livro e carrega os registros na página esquerda
function abrirDiario(autor) {
    autorAtual = autor;
    
    // Atualiza o título do livro
    uiDiaryAuthorName.textContent = autor.tituloDiario;
    uiBookContainer.style.display = 'flex';
    
    // Reseta a página da direita
    uiEntryContent.style.display = 'none';
    uiEmptyState.style.display = 'flex';

    // Lista os registros
    uiEntriesList.innerHTML = '';
    
    autor.entradas.forEach((entrada, index) => {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <div class="entry-item-date">${entrada.data}</div>
            <div class="entry-item-title">${entrada.titulo}</div>
        `;
        
        li.addEventListener('click', () => {
            document.querySelectorAll('.entries-list li').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            lerRegistro(entrada, autor.assinatura);
        });

        uiEntriesList.appendChild(li);
    });
}

// 3. Lê o Registro (Exibe o texto na página direita com a caligrafia)
function lerRegistro(entrada, assinatura) {
    uiEmptyState.style.display = 'none';
    
    uiEntryDate.textContent = entrada.data;
    uiEntryTitle.textContent = entrada.titulo;
    uiEntryText.textContent = entrada.texto;
    uiEntrySignature.textContent = assinatura;
    
    uiEntryContent.style.display = 'block';
}

// Inicia a página
renderMenuAutores();