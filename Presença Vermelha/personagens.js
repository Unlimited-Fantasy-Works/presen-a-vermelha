// === BANCO DE DADOS DAS FACÇÕES ===
const faccoesDB = [
    {
        id: 'baratheon',
        nome: 'Casa Baratheon',
        simbolo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHan1MrwvfLeb9ywKxo1BnJKLjbLOIx7gTYiG_uniqKg&s', // Substitua pelo seu cervo negro
        // O conteúdo de texto é estruturado em HTML para respeitar as margens do livro
        conteudoHTML: `
            <p>A mais nova das Grandes Casas, surgida durante as Guerras da Conquista. Havia rumores de que seu fundador, Orys Baratheon, era irmão bastardo de Aegon, o Dragão. Orys subiu na hierarquia até se tornar um dos mais ferozes comandantes de Aegon. Quando derrotou e matou Argilac, o Arrogante, o último Rei da Tempestade, Aegon o recompensou com o castelo, as terras e a filha de Argilac. Orys tomou a moça como noiva e adotou o estandarte, os títulos e o lema de sua linhagem. O selo dos Baratheon é um veado coroado, negro, em fundo dourado. Seu lema é <em>Nossa é a Fúria</em>.</p>
            
            <div class="hierarchy">
                <p><span class="char-link" data-char="steffon">LORDE STEFFON BARATHEON</span>, Senhor de Ponta Tempestade,</p>
                <p class="indent-1">– sua esposa, <span class="char-link" data-char="cassana">SENHORA CASSANA</span>, da Casa Estermont,</p>
                <p class="indent-1">– seus filhos:</p>
                <p class="indent-2">– <span class="char-link" data-char="robert">ROBERT BARATHEON</span>, o herdeiro de Ponta Tempestade, um jovem de quinze anos, pupilo de Lorde Jon Arryn no Ninho das Águias,</p>
                <p class="indent-2">– <span class="char-link" data-char="stannis">STANNIS BARATHEON</span>, um jovem de treze anos,</p>
                <p class="indent-2">– <span class="char-link" data-char="renly">RENLY BARATHEON</span>, uma criança de um ano,</p>
                <p class="indent-1">– Servos do Castelo:</p>
                <p class="indent-2">– MEISTRE CRESSEN, conselheiro e maestre de Ponta Tempestade.</p>
                <p class="indent-2">– SOR CORTNAY PENROSE, Castelão de Ponta Tempestade.</p>
            </div>

            <p><br>As principais Casas vassalas de Ponta Tempestade são: Selmy, Wylde, Trant, Penrose, Errol, Estermont, Tarth, Swann, Dondarrion e Caron.</p>
        `,
        // Dicionário de personagens. As chaves devem bater com o data-char colocado no HTML acima.
        personagens: {
            'steffon': {
                nome: 'Steffon Baratheon',
                detalhes: {
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6feQ6R57P9Uyj3_jcQlfYP86TVihIm1_ZftSxFEXVdA&s=10', 
                    tituloAcao: 'Tempestade Viajante',
                    texto: 'Lorde de Ponta Tempestade e primo do Rei Aerys II Targaryen. Amigo próximo do rei desde a juventude e combatente na Guerra dos Reis das 9 moedas. Possuí uma personalidade forte, apesar de ser bastante meigo com os pequenos. Tem o hábito de participar de inúmeras viajens por Westeros e afins.'
                }
            },
            'cassana': {
                nome: 'Cassana Estermont',
                detalhes: {
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkWh-rl5-23ZL5T5adVaU7tVavZ3ZK8VmY-G0TMsdhA&s=10',
                    tituloAcao: 'Senhora de Ponta Tempestade',
                    texto: 'Esposa de Lorde Steffon Baratheon e membro da Casa Estermont do do Castelo da Rocha Verde.'
                }
            },
            'robert': {
                nome: 'Robert Baratheon',
                detalhes: {
                    imagem: 'https://awoiaf.westeros.org/images/thumb/2/2c/Robert_Baratheon_by_ildraws.jpg/400px-Robert_Baratheon_by_ildraws.jpg',
                    tituloAcao: 'Herdeiro de Ponta Tempestade',
                    texto: 'Jovem promissor de quinze anos de idade, conhecido por ser mulherengo e ter uma fraqueza por bebida. Ainda assim é um guerreiro temido e habilidoso.'
                }
            },
            'stannis': {
                nome: 'Stannis Baratheon',
                detalhes: {
                    imagem: 'https://i.pinimg.com/564x/00/60/12/0060128d0ff8e89bb3076bc4b76bb3d8.jpg',
                    tituloAcao: 'Segundo Filho',
                    texto: 'Jovem sério e compenetrado de treze anos, crescendo em Ponta Tempestade.'
                }
            },
            'renly': {
                nome: 'Renly Baratheon',
                detalhes: {
                    imagem: 'https://i.pinimg.com/736x/39/77/9e/39779ef6d64be7b5cbc128698566b864.jpg',
                    tituloAcao: 'Filho Caçula',
                    texto: 'Ainda um garotinho de apenas um ano de idade.'
                }
            }
        }
    },

    {
        id: 'bolton',
        nome: 'Casa Bolton',
        simbolo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmGMvAcXyeWFR5saXo08Hze-on2HETjbRjuJWz0YG8Q&s', // Substitua pelo homem esfolado
        // O conteúdo de texto é estruturado em HTML para respeitar as margens do livro
        conteudoHTML: `
            <p>Uma antiga linhagem dos Primeiros Homens, famosa por sua rivalidade histórica com os Stark e pelo hábito de esfolar seus inimigos. Seu assentamento é o Forte do Pavor, uma fortaleza sombria situada às margens do Rio Chocalho. O selo dos Bolton é um homem esfolado de ponta-cabeça em uma cruz em X encarnada, em campo negro. Seu lema é <em>Nossas Lâminas São Afiadas</em>.</p>
            
            <div class="hierarchy">
                <p><span class="char-link" data-char="eddric">LORDE EDDRIC BOLTON</span>, chamado de <em>Sorriso Vermelho</em>, Senhor do Forte do Pavor,</p>
                <p class="indent-1">– sua esposa, <span class="char-link" data-char="visenya">SENHORA VISENYA</span>, chamada de <em>Cervo Branco</em>, da Casa Baratheon,</p>
                <p class="indent-1">– seus filhos:</p>
                <p class="indent-2">– <span class="char-link" data-char="jaime">JAIME BOLTON</span>, chamado de <em>Rosa Vermelha</em>, herdeiro do Forte do Pavor, um jovem de dezesseis anos,</p>
                <p class="indent-2">– <span class="char-link" data-char="micah">MICAH BOLTON</span>, um rapaz de quinze anos,</p>
                <p class="indent-1">– seus irmãos:</p>
                <p class="indent-2">– <span class="char-link" data-char="gregor">SEPTÃO GREGOR</span>, servindo no Septo de Baelor em Porto Real,</p>
                <p class="indent-3">– o filho bastardo de Gregor com Naerys Velaryon: <span class="char-link" data-char="torvin">TORVIN SNOW</span>, um rapaz de treze anos,</p>
                <p class="indent-2">– <span class="char-link" data-char="roose">ROOSE BOLTON</span>, chamado de <em>Lorde Sanguessuga</em>, um rapaz de dezessete anos,</p>
                <p class="indent-2">– <span class="char-link" data-char="lily">LILY BOLTON</span>, chamada de <em>Dente de Navalha</em>, uma donzela de treze anos,</p>
                <p class="indent-1">– seus falecidos pais:</p>
                <p class="indent-2">– {LORDE ROGER BOLTON}, chamado de <em>Pele Vermelha</em>, falecido,</p>
                <p class="indent-2">– {SENHORA JEYNE}, da Casa Frey, falecida,</p>
                <p class="indent-1">– seu pessoal de casa e agregados:</p>
                <p class="indent-2">– <span class="char-link" data-char="leon">Leon</span>, da Casa Frey, chamado de <em>Distante</em>, protegido acolhido após a morte de seus pais,</p>
                <p class="indent-2">– <span class="char-link" data-char="meistre_will">MEISTRE WILL</span>, conselheiro e curador,</p>
                <p class="indent-2">– <span class="char-link" data-char="tym">TYM</span>, da Casa Haigh, castelão do Forte do Pavor.</p>
            </div>
                    `,
        // Dicionário de personagens. As chaves batem com o data-char do HTML acima.
        personagens: {
            'eddric': {
                nome: 'Eddric Bolton',
                detalhes: {
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZdHzzPIRC1Av3zhWOVbMln8df_LD18XU42KhWwQ3-w&s=10',
                    tituloAcao: 'Sorriso Vermelho',
                    texto: 'Guerreiro formidável e lorde justo, Eddric ganhou a alcunha de "Sorriso Vermelho" durante a Guerra dos Reis das Nove Moedas ao manchar os próprios lábios com o sangue dos inimigos derrotados. Após o conflito, selou uma aliança ao se casar com Visenya Baratheon, irmã de seu grande amigo Steffon. Atualmente no comando do Forte do Pavor, ele busca consolidar a posição de sua casa negociando o casamento do herdeiro Jaime com a filha de Lorde Rickard Stark.'
                }
            },
            'visenya': {
                nome: 'Visenya Baratheon',
                detalhes: {
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxhuCQFtGrHe5NJHw_SN5VrtnjFVjZbnKArSWl8rqHg&s=10',
                    tituloAcao: 'Cervo Branco',
                    texto: 'Irmã gêmea de Steffon Baratheon, Visenya herdou os marcantes traços valirianos da mãe Targaryen, destacando-se por sua vontade férrea, gênio obstinado e recusa em ser contrariada. Por trás da postura altiva como Senhora do Forte do Pavor, esconde um coração profundamente afetuoso e protetor com os próprios filhos e com todas as crianças que crescem sob o seu teto.'
                }
            },
            'jaime': {
                nome: 'Jaime Bolton',
                detalhes: {
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSNCUQ80JdrP2_pU-quxE5KxRSQH3qiZ1pf_hTt-ww1A4iCiUhmvIE5o&s=10',
                    tituloAcao: 'Rosa Vermelha',
                    texto: 'Jovem de traços delicados e habilidade promissora na espada, o herdeiro do Forte do Pavor carrega o fardo de um noivado indesejado com Lyanna Stark. Alvo de sussurros no Norte sobre seu desinteresse por donzelas, Jaime dedica seus dias ao estudo rigoroso de táticas militares, nutrindo o sonho de restaurar o antigo respeito e temor da Casa Bolton.'
                }
            },
            'micah': {
                nome: 'Micah Bolton',
                detalhes: {
                    imagem: 'micah_modal.jpg',
                    tituloAcao: 'Segundo Filho',
                    texto: 'Diferente do irmão mais velho, Micah traz a paixão pelo combate no sangue, demonstrando uma vocação natural para a guerra e para o comando. Com uma presença imponente aos quinze anos, o segundo filho de Lorde Eddric transparece mais autoridade e espírito de liderança do que o próprio herdeiro da casa.'
                }
            },
            'gregor': {
                nome: 'Gregor Bolton',
                detalhes: {
                    imagem: 'https://64.media.tumblr.com/f297fd8235cffe5ae9a2b550d6843303/tumblr_pji744vcVr1srb6kz_640.jpg',
                    tituloAcao: 'Septão',
                    texto: 'Espadachim talentoso e antigo bon vivant, Gregor viveu uma juventude de farras e escândalos, chegando a ser cotado para a Guarda Real. Seu caso com Naerys Velaryon, então esposa de Triston Celtigar, gerou um bastardo abandonado aos cuidados de Eddric; contudo, após ser atormentado por uma visão dos Sete Infernos, renegou a vida de luxúria, converteu-se com fervor e tornou-se septão no Grande Septo de Baelor em Porto Real.'
                }
            },
            'torvin': {
                nome: 'Torvin Snow',
                detalhes: {
                    imagem: 'torvin_modal.jpg',
                    tituloAcao: 'Bastardo dos Bolton',
                    texto: 'Criado no Forte do Pavor sob a tutela do tio Eddric após o abandono do pai, Torvin cresceu como um espadachim talentoso e disciplinado. Ciente de sua condição como bastardo de sangue nobre e valiriano, o rapaz de treze anos canaliza suas energias nos treinos diários com a meta imediata de se tornar um escudeiro de renome.'
                }
            },
            'roose': {
                nome: 'Roose Bolton',
                detalhes: {
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdMBBYhWhmuvsfrSj9LpIME0akK61rOZ_60D3aJ6ebw&s=10',
                    tituloAcao: 'Lorde Sanguessuga',
                    texto: 'Frio, calado e estranho, Roose é um jovem de dezesseis anos que desperta inquietação em todos ao seu redor. Dono de um gosto sombrio pela caça, ele encontra prazer em esfolar pessoalmente os animais que abate, ostentando no dia a dia casacos feitos com as peles que ele próprio retirou.'
                }
            },
            'lily': {
                nome: 'Lily Bolton',
                detalhes: {
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCV-nJZXrvAscdVXu9zy1h1LzUwxmmhRKTYldq3SiFRCbctMRVshKRSo0&s=10',
                    tituloAcao: 'Dente de Navalha',
                    texto: 'Uma donzela peculiar de treze anos, Lily carrega feições finas, nariz arrebitado e uma dentição afiada como lâminas que lhe rendeu seu apelido. Desprovida de etiqueta e modos corteses, a jovem de temperamento exótico nutre uma obsessão singular pelo próprio sobrinho, Micah, com quem sonha em se casar.'
                }
            },
            'leon': {
                nome: 'Leon Frey',
                detalhes: {
                    imagem: 'luis_modal.jpg',
                    tituloAcao: 'O Distante',
                    texto: 'Sobrinho-neto de Lorde Walder Frey por parte de seu irmão Edmure, Leon pertence ao ramo secundário apelidado de "Distante" devido à imensa descendência das Gêmeas. Acolhido no Forte do Pavor como protegido após a morte trágica de seus pais, Gaemon Frey e Melissa Royce, em um acidente de carruagem no Vale de Arryn, o jovem tenta encontrar seu espaço no solo rigoroso do Norte.'
                }
            },
            'meistre_will': {
                nome: 'Meistre Will',
                detalhes: {
                    imagem: 'meistre_will_modal.jpg',
                    tituloAcao: 'Meistre do Forte do Pavor',
                    texto: 'Conselheiro e curador encarregado dos serviços da Cidadela no castelo.'
                }
            },
            'tym': {
                nome: 'Tym Haigh',
                detalhes: {
                    imagem: 'tym_modal.jpg',
                    tituloAcao: 'Castelão',
                    texto: 'Membro da Casa Haigh e castelão encarregado da gestão do Forte do Pavor.'
                }
            }
        }
    }
    // Adicione outras facções seguindo o mesmo padrão...
];

// === ELEMENTOS DA INTERFACE ===
const uiListaFaccoes = document.getElementById('faction-list');
const uiBookPage = document.getElementById('book-page');
const uiFactionSigil = document.getElementById('faction-sigil');
const uiFactionTitle = document.getElementById('faction-title');
const uiFactionContent = document.getElementById('faction-content');

const uiOverlayDetalhes = document.getElementById('details-overlay');
const uiNomePersonagem = document.getElementById('details-char-name');
const uiImagemAcao = document.getElementById('details-action-img');
const uiTituloAcao = document.getElementById('details-action-title');
const uiTextoDescricao = document.getElementById('details-text');

// === LÓGICA ===

function renderMenuFaccoes() {
    faccoesDB.forEach((faccao, index) => {
        const li = document.createElement('li');
        li.textContent = faccao.nome;
        
        li.addEventListener('click', () => {
            document.querySelectorAll('#faction-list li').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            loadFaction(faccao);
        });

        if (index === 0) {
            li.classList.add('active');
            loadFaction(faccao);
        }

        uiListaFaccoes.appendChild(li);
    });
}

function loadFaction(faccao) {
    uiFactionSigil.src = faccao.simbolo;
    uiFactionTitle.textContent = faccao.nome;
    
    // Injeta o texto e a hierarquia diretamente na página
    uiFactionContent.innerHTML = faccao.conteudoHTML;
    uiBookPage.style.display = 'block';

    // O "Pulo do Gato": Após injetar o HTML, encontra todos os links de personagens e adiciona o evento de clique
    const characterLinks = uiFactionContent.querySelectorAll('.char-link');
    characterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const charId = e.target.getAttribute('data-char');
            const charData = faccao.personagens[charId];
            
            if (charData) {
                openDetails(charData);
            }
        });
    });
}

function openDetails(charData) {
    uiNomePersonagem.textContent = charData.nome;
    uiTituloAcao.textContent = charData.detalhes.tituloAcao || 'Membro da Casa';
    uiTextoDescricao.textContent = charData.detalhes.texto;
    
    if (charData.detalhes.imagem) {
        uiImagemAcao.src = charData.detalhes.imagem;
        uiImagemAcao.style.display = 'block';
    } else {
        uiImagemAcao.style.display = 'none';
    }

    uiOverlayDetalhes.style.display = 'flex';
}

function closeDetails() {
    uiOverlayDetalhes.style.display = 'none';
}

uiOverlayDetalhes.addEventListener('click', (e) => {
    if (e.target === uiOverlayDetalhes) {
        closeDetails();
    }
});

renderMenuFaccoes();