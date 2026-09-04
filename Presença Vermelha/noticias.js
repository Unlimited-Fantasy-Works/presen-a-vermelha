// === BANCO DE DADOS DE NOTÍCIAS ===
const noticiasDB = [
    {
        id: 1,
        data: '278 DC - Lua 10',
        categoria: 'mundo',
        titulo: 'Festa do Dia do Nome de Renly Baratheon',
        texto: `Corvos negros voaram de Ponta tesmpestade trazendo notícias alegres. Renly, terceiro filho de Steffon Baratheon, comemora seu primeiro ano de vida.\n\nLorde Steffon decidiu comemorar o dia com um grande banquete, fazendo jus a alegria de estar junto com sua família e amigos da região.`
    },
    {
        id: 2,
        data: '278 DC - Lua 6',
        categoria: 'mundo',
        titulo: 'Chegada da Comitiva de Dorne',
        texto: `Uma luxuosa caravana com o estandarte do Sol e da Lança cruzou as fronteiras das Terras da Tempestade.\n\nRumores dizem que um importante nobre Martell busca alianças nas Marcas de Dorne. Jogadores que estiverem na região devem ficar atentos a convites para banquetes e negociações.`
    },
    {
        id: 3,
        data: 'Atualização do Mestre',
        categoria: 'mecanicas',
        titulo: 'Novas Regras de Fadiga e Honra',
        texto: `Atenção jogadores, a partir da próxima sessão implementaremos a barra de "Fadiga de Batalha".\n\n🛡️ FADIGA:\nAções extras, manobras complexas e bloquear ataques pesados agora custarão pontos de Fadiga. Caso sua Fadiga chegue ao limite, seu personagem receberá desvantagem em todos os testes físicos até realizar um descanso curto.\n\n⚖️ HONRA:\nO sistema de Honra foi ajustado. Suas ações públicas afetam sua reputação. Ter Honra Alta concederá bônus de Persuasão com nobres, mas penalidades com mercenários.`
    },
    {
        id: 4,
        data: 'Sábado - 19:00',
        categoria: 'avisos',
        titulo: 'Sessão III Adiada',
        texto: `Aviso aos senhores de Westeros: A próxima sessão ("O Torneio da Mão") foi adiada para o próximo sábado às 19h devido a um imprevisto nas Terras Fluviais (o Mestre ficou sem internet).\n\n⚔️ TAREFA DE CASA:\nPor favor, atualizem suas fichas no sistema. Me enviem as listas de montarias e equipamentos adquiridos até sexta-feira.`
    }
];

// === ELEMENTOS DA INTERFACE ===
let categoriaAtual = 'todas';
const uiList = document.getElementById('news-list');
const uiTag = document.getElementById('news-tag');
const uiDate = document.getElementById('news-date');
const uiTitle = document.getElementById('news-title');
const uiBody = document.getElementById('news-body');
const abas = document.querySelectorAll('.tab-btn');

// Nomes bonitos para as categorias
const nomesCategorias = {
    mundo: 'Westeros',
    mecanicas: 'Regras',
    avisos: 'Avisos da Mesa'
};

// === LÓGICA DE FUNCIONAMENTO ===

function renderizarIndice() {
    uiList.innerHTML = ''; 
    
    const filtradas = categoriaAtual === 'todas' 
        ? noticiasDB 
        : noticiasDB.filter(n => n.categoria === categoriaAtual);

    if(filtradas.length === 0) {
        uiList.innerHTML = '<li class="news-item"><div class="news-item-title">Nenhum corvo chegou...</div></li>';
        uiTitle.textContent = "Sem Novidades";
        uiBody.textContent = "Não há mensagens para esta categoria no momento.";
        uiTag.textContent = "-";
        uiDate.textContent = "-";
        return;
    }

    filtradas.forEach((noticia, index) => {
        const li = document.createElement('li');
        li.className = 'news-item';
        li.innerHTML = `
            <div class="news-item-date">${noticia.data}</div>
            <div class="news-item-title">${noticia.titulo}</div>
        `;
        
        li.addEventListener('click', () => {
            document.querySelectorAll('.news-item').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            mostrarNoticia(noticia);
        });

        uiList.appendChild(li);

        if (index === 0) {
            li.classList.add('active');
            mostrarNoticia(noticia);
        }
    });
}

function mostrarNoticia(noticia) {
    uiTag.textContent = nomesCategorias[noticia.categoria] || 'Corvo';
    uiDate.textContent = noticia.data;
    uiTitle.textContent = noticia.titulo;
    uiBody.textContent = noticia.texto;
}

abas.forEach(aba => {
    aba.addEventListener('click', (e) => {
        abas.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        categoriaAtual = e.target.dataset.category;
        renderizarIndice();
    });
});

renderizarIndice();

// ==========================================
// ====== SISTEMA DE CALENDÁRIO / LORE ======
// ==========================================

// Banco de Dados da Linha do Tempo (Eventos)
// Formato: "Ano" -> "Mês/Lua" -> "Dia": { título, texto }
const calendarioDB = {
    "278": {
        "10": {
            13: { titulo: "Dia do Nome de Renly Baratheon", texto: "Festa em Ponta Tempestade" }
        },
        "12": {
            25: { titulo: "Festival de Inverno", texto: "Feriado de fim de ano nas Terras da Tempestade. Celebração para estocar os últimos mantimentos antes que a neve bloqueie as estradas." }
        }
    },

};

let anoCalendario = 278;
let luaCalendario = 1; // 1 a 12 (Jan a Dez)

// Elementos
const contNoticias = document.getElementById('news-container');
const contCalendario = document.getElementById('calendar-container');
const listaLuas = document.getElementById('moons-list');
const gradeCalendario = document.getElementById('calendar-grid');
const tituloCalendario = document.getElementById('calendar-title');
const boxEvento = document.getElementById('event-details');
const seletorAno = document.getElementById('year-select');

// 1. Alterna entre a visão de Notícias e a do Calendário
function alterarTela(categoria) {
    if (categoria === 'calendario') {
        contNoticias.style.display = 'none';
        contCalendario.style.display = 'flex';
        renderizarListaLuas();
        renderizarGrade();
    } else {
        contCalendario.style.display = 'none';
        contNoticias.style.display = 'flex';
        categoriaAtual = categoria;
        renderizarIndice();
    }
}

// 2. Modifica o evento das Abas (tabs)
abas.forEach(aba => {
    // Vamos remover o evento antigo e substituir por este:
    aba.replaceWith(aba.cloneNode(true)); // Limpa listeners antigos
});
// Readiciona com a nova lógica
document.querySelectorAll('.tab-btn').forEach(aba => {
    aba.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        alterarTela(e.target.dataset.category);
    });
});

// 3. Renderiza a lista lateral de Luas (1ª Lua até 12ª Lua)
function renderizarListaLuas() {
    listaLuas.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        const li = document.createElement('li');
        li.className = 'news-item';
        li.innerHTML = `<div class="news-item-title">${i}ª Lua</div>`;
        
        if (i === luaCalendario) li.classList.add('active');

        li.addEventListener('click', () => {
            luaCalendario = i;
            document.querySelectorAll('#moons-list .news-item').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            renderizarGrade();
        });
        listaLuas.appendChild(li);
    }
}

// Muda o ano quando o mestre/jogador trocar a select
seletorAno.addEventListener('change', (e) => {
    anoCalendario = parseInt(e.target.value);
    renderizarGrade();
});

// 4. Constrói a Grade do Calendário (Usando a datação real do ano!)
function renderizarGrade() {
    gradeCalendario.innerHTML = '';
    boxEvento.style.display = 'none'; // Esconde o evento ao trocar de mês
    tituloCalendario.textContent = `${luaCalendario}ª Lua do Ano ${anoCalendario} DC`;

    // Truque JS: Pega exatamente os dias da semana do ano real da história (Ex: ano 300 depois de cristo)
    let dataReferencia = new Date();
    dataReferencia.setFullYear(anoCalendario, luaCalendario - 1, 1);
    
    let diaDaSemanaInicio = dataReferencia.getDay(); // 0(Dom) a 6(Sáb)
    let diasNoMes = new Date(anoCalendario, luaCalendario, 0).getDate(); // Quantidade de dias (28, 30, 31)

    // Preenche os quadrados vazios antes do dia 1
    for (let i = 0; i < diaDaSemanaInicio; i++) {
        const empty = document.createElement('div');
        empty.className = 'cal-day empty';
        gradeCalendario.appendChild(empty);
    }

    // Preenche os dias do mês
    for (let dia = 1; dia <= diasNoMes; dia++) {
        const diaCell = document.createElement('div');
        diaCell.className = 'cal-day';
        diaCell.textContent = dia;

        // Verifica no Banco de Dados se existe um evento neste dia/mês/ano
        const eventoHoje = calendarioDB[anoCalendario]?.[luaCalendario]?.[dia];

        if (eventoHoje) {
            diaCell.classList.add('has-event');
            
            // Quando clica num dia com evento
            diaCell.addEventListener('click', () => {
                // Tira destaque dos outros e põe neste
                document.querySelectorAll('.cal-day').forEach(el => el.classList.remove('active-event'));
                diaCell.classList.add('active-event');
                
                // Preenche o quadro inferior
                document.getElementById('event-date-text').textContent = `${dia}º Dia da ${luaCalendario}ª Lua, ${anoCalendario} DC`;
                document.getElementById('event-title').textContent = eventoHoje.titulo;
                document.getElementById('event-desc').textContent = eventoHoje.texto;
                boxEvento.style.display = 'block';
            });
        }
        
        gradeCalendario.appendChild(diaCell);
    }
}