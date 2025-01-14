const catalogo = {
    categories: [
        {
            category: "Ação",
            movies: [
                { id: 1, title: "O Resgate", description: "Um agente secreto deve resgatar reféns em um cenário perigoso.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_resgate.jpg ", cast: ["Chris Hemsworth", "Randeep Hooda"] },
                { id: 2, title: "Missão Impossível: Fallout", description: "Ethan Hunt enfrenta desafios extremos para salvar o mundo.", cover_url: "https://meu-api-catalogo.onrender.com/images/missao_impossivel_fallout.jpg  ", cast: ["Tom Cruise", "Henry Cavill"] },
                { id: 3, title: "Vingadores: Ultimato", description: "Os heróis se unem para impedir Thanos de destruir o universo.", cover_url: "https://meu-api-catalogo.onrender.com/images/vingadores_ultimato.jpg", cast: ["Robert Downey Jr.", "Chris Hemsworth"] },
                { id: 4, title: "John Wick: Capítulo 3", description: "John Wick luta pela sobrevivência após ser excomungado.", cover_url: "https://meu-api-catalogo.onrender.com/images/john_wick_3.jpg", cast: ["Keanu Reeves", "Halle Berry"] },
                { id: 5, title: "O Exterminador do Futuro: Gênesis", description: "A batalha entre humanos e exterminadores chega a novos extremos.", cover_url: "https://meu-api-catalogo.onrender.com/images/exterminador_do_futuro_genesis.jpg", cast: ["Arnold Schwarzenegger", "Emilia Clarke"] },
                { id: 6, title: "Mad Max: Estrada da Fúria", description: "Em um mundo apocalíptico, Max busca sobrevivência junto com Furiosa.", cover_url: "https://meu-api-catalogo.onrender.com/images/mad_max_estrada.jpg", cast: ["Tom Hardy", "Charlize Theron"] },
                { id: 7, title: "Transformers: O Lado Oculto da Lua", description: "Os Transformers estão em guerra em uma missão para salvar o planeta.", cover_url: "https://meu-api-catalogo.onrender.com/images/transformers_o_lado_oculto_da_lua.jpg", cast: ["Shia LaBeouf", "Rosie Huntington-Whiteley"] },
                { id: 8, title: "007: Operação Skyfall", description: "James Bond enfrenta uma ameaça vinda do seu passado.", cover_url: "https://meu-api-catalogo.onrender.com/images/007_skyfall.jpg", cast: ["Daniel Craig", "Javier Bardem"] },
                { id: 9, title: "Star Wars: O Império Contra-Ataca", description: "Luke Skywalker e seus aliados enfrentam o império.", cover_url: "https://meu-api-catalogo.onrender.com/images/starwars_contraataca.jpg", cast: ["Mark Hamill", "Harrison Ford"] },
                { id: 10, title: "Kingsman: O Serviço Secreto", description: "Um jovem é recrutado para uma organização secreta de elite.", cover_url: "https://meu-api-catalogo.onrender.com/images/kingsman_1.jpg", cast: ["Colin Firth", "Taron Egerton"] }
            ]
        },
        {
            category: "Comédia",
            movies: [
                { id: 11, title: "Se Beber, Não Case", description: "Um grupo de amigos perde a memória após uma noite de festa em Las Vegas.", cover_url: "https://meu-api-catalogo.onrender.com/images/se_beber_nao_case.jpg", cast: ["Bradley Cooper", "Zach Galifianakis"] },
                { id: 12, title: "Superbad: É Hoje", description: "Dois adolescentes tentam fazer sucesso em uma festa antes de se formarem no ensino médio.", cover_url: "https://meu-api-catalogo.onrender.com/images/superbad.jpg", cast: ["Jonah Hill", "Michael Cera"] },
                { id: 13, title: "A Morte de Stalin", description: "Uma sátira política que se passa após a morte do líder soviético.", cover_url: "https://meu-api-catalogo.onrender.com/images/a_morte_de_stalin.jpg", cast: ["Steve Buscemi", "Simon Russell Beale"] },
                { id: 14, title: "Os Incríveis", description: "A história de uma família de super-heróis que tenta levar uma vida normal.", cover_url: "https://meu-api-catalogo.onrender.com/images/os_incriveis.jpg", cast: ["Craig T. Nelson", "Holly Hunter"] },
                { id: 15, title: "As Branquelas", description: "Dois agentes do FBI se disfarçam de socialites para investigar um caso de sequestro.", cover_url: "https://meu-api-catalogo.onrender.com/images/as_branquelas.jpg", cast: ["Marlon Wayans", "Shawn Wayans"] },
                { id: 16, title: "O Máskara", description: "Um bancário comum se transforma em um super-herói quando usa uma máscara mágica.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_mascara.jpg", cast: ["Jim Carrey", "Cameron Diaz"] },
                { id: 17, title: "A Vida Secreta de Walter Mitty", description: "Um homem comum embarca em uma aventura extraordinária.", cover_url: "https://meu-api-catalogo.onrender.com/images/a_vida_secreta_de_walter.jpg", cast: ["Ben Stiller", "Kristen Wiig"] },
                { id: 18, title: "Escola de Rock", description: "Um músico fracassado vira professor de uma turma de alunos que ele ensina a tocar rock.", cover_url: "https://meu-api-catalogo.onrender.com/images/escola_de_rock.jpg", cast: ["Jack Black", "Miranda Cosgrove"] },
                { id: 19, title: "O Diabo Veste Prada", description: "Uma assistente luta para se ajustar ao mundo da moda.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_diabo_veste_prada.jpg", cast: ["Meryl Streep", "Anne Hathaway"] },
                { id: 20, title: "O Grande Lebowski", description: "Um homem comum se envolve em um crime após ser confundido com outra pessoa.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_grande_lebowski.jpg", cast: ["Jeff Bridges", "John Goodman"] }
            ]
        },
        {
            category: "Drama",
            movies: [
                { id: 21, title: "Forrest Gump", description: "A história de um homem simples com um impacto profundo na história americana.", cover_url: "https://meu-api-catalogo.onrender.com/images/forrest_gump.jpg", cast: ["Tom Hanks", "Robin Wright"] },
                { id: 22, title: "O Poderoso Chefão", description: "A saga da poderosa família mafiosa Corleone.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_poderoso.jpg ", cast: ["Marlon Brando", "Al Pacino"] },
                { id: 23, title: "A Espera de um Milagre", description: "Um guarda penitenciário deve lidar com um prisioneiro com habilidades especiais.", cover_url: "https://meu-api-catalogo.onrender.com/images/a_espera_de_um_milagre.jpg ", cast: ["Tom Hanks", "Michael Clarke Duncan"] },
                { id: 24, title: "Clube da Luta", description: "Um homem insatisfeito com a vida funda um clube de luta clandestino.", cover_url: "https://meu-api-catalogo.onrender.com/images/clube_da_luta.jpg", cast: ["Brad Pitt", "Edward Norton"] },
                { id: 25, title: "À Procura da Felicidade", description: "Baseado em uma história real, um homem luta para conseguir um emprego e sustentar seu filho.", cover_url: "https://meu-api-catalogo.onrender.com/images/a_procura_da_felicidade.jpg", cast: ["Will Smith", "Jaden Smith"] },
                { id: 26, title: "O Pianista", description: "A luta de um pianista judeu durante a Segunda Guerra Mundial.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_pianista.jpg", cast: ["Adrien Brody", "Thomas Kretschmann"] },
                { id: 27, title: "Os 12 Macacos", description: "Em um futuro distópico, um homem é enviado no tempo para impedir uma catástrofe global.", cover_url: "https://meu-api-catalogo.onrender.com/images/os_12_macacos.jpg", cast: ["Bruce Willis", "Madeleine Stowe"] },
                { id: 28, title: "Gladiador", description: "Um general romano busca vingança após a morte de sua família.", cover_url: "https://meu-api-catalogo.onrender.com/images/gladiador.jpg", cast: ["Russell Crowe", "Joaquin Phoenix"] },
                { id: 29, title: "O Solista", description: "A amizade entre um repórter e um músico sem-teto.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_solista.jpg", cast: ["Robert Downey Jr.", "Jamie Foxx"] },
                { id: 30, title: "O Lado Bom da Vida", description: "Após ser internado, um homem tenta reconstruir sua vida e seu relacionamento.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_lado_bom_da_vida.jpg", cast: ["Bradley Cooper", "Jennifer Lawrence"] }
            ]
        },
        {
            category: "Aventura",
            movies: [
                { id: 31, title: "O Senhor dos Anéis: A Sociedade do Anel", description: "A jornada épica de um grupo que busca destruir um anel poderoso.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_senhor_dos_aneis_a_sociedade_do_anel.jpg", cast: ["Elijah Wood", "Ian McKellen"] },
                { id: 32, title: "Piratas do Caribe: A Maldição do Pérola Negra", description: "Um pirata tenta capturar o tesouro perdido e salvar sua tripulação.", cover_url: "https://meu-api-catalogo.onrender.com/images/piratas_do_caribe_a_maldicao_do_perola_negra.jpg", cast: ["Johnny Depp", "Orlando Bloom"] },
                { id: 33, title: "Jurassic Park", description: "Um parque temático com dinossauros sai de controle.", cover_url: "https://meu-api-catalogo.onrender.com/images/jurassic_park.jpg", cast: ["Sam Neill", "Laura Dern"] },
                { id: 34, title: "Harry Potter e a Pedra Filosofal", description: "O jovem Harry Potter entra em um mundo mágico.", cover_url: "https://meu-api-catalogo.onrender.com/images/harry_potter_e_a_pedra_filosofal.jpg", cast: ["Daniel Radcliffe", "Emma Watson"] },
                { id: 35, title: "Indiana Jones e os Caçadores da Arca Perdida", description: "Indiana Jones deve encontrar e proteger a Arca da Aliança.", cover_url: "https://meu-api-catalogo.onrender.com/images/indiana_jones_e_os_cacadores_da_arca_perdida.jpg", cast: ["Harrison Ford", "Karen Allen"] },
                { id: 36, title: "O Hobbit: Uma Jornada Inesperada", description: "Bilbo Bolseiro se junta a um grupo de anões em uma aventura.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_hobbit_uma_jornada_inesperada.jpg", cast: ["Martin Freeman", "Ian McKellen"] },
                { id: 37, title: "A Viagem de Chihiro", description: "Uma jovem garota entra em um mundo de espíritos e criaturas fantásticas.", cover_url: "https://meu-api-catalogo.onrender.com/images/a_viagem_de_chihiro.jpg", cast: ["Rumi Hiiragi", "Miyu Irino"] },
                { id: 38, title: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa", description: "Quatro irmãos entram em um mundo mágico e se unem contra uma feiticeira.", cover_url: "https://meu-api-catalogo.onrender.com/images/narnia.jpg", cast: ["William Moseley", "Anna Popplewell"] },
                { id: 39, title: "O Rei Leão", description: "A jornada de Simba para assumir seu lugar como rei.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_rei_leao.jpg", cast: ["Matthew Broderick", "James Earl Jones"] },
                { id: 40, title: "Alice no País das Maravilhas", description: "Uma jovem garota cai em um mundo fantástico cheio de criaturas estranhas.", cover_url: "https://meu-api-catalogo.onrender.com/images/alice_no_pais_das_maravilhas.jpg", cast: ["Johnny Depp", "Mia Wasikowska"] }
            ]
        },
        {
            category: "Terror",
            movies: [
                { id: 41, title: "O Iluminado", description: "Um escritor enlouquece enquanto cuida de um hotel isolado no inverno.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_iluminado.jpg", cast: ["Jack Nicholson", "Shelley Duvall"] },
                { id: 42, title: "Hereditary", description: "Uma família enfrenta eventos paranormais após a morte de sua matriarca.", cover_url: "https://meu-api-catalogo.onrender.com/images/hereditario.jpg", cast: ["Toni Collette", "Alex Wolff"] },
                { id: 43, title: "O Exorcista", description: "Uma jovem é possuída por uma força demoníaca e precisa ser exorcizada.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_exorcista.jpg", cast: ["Ellen Burstyn", "Linda Blair"] },
                { id: 44, title: "Invocação do Mal", description: "Uma família é assombrada por espíritos malignos em sua casa.", cover_url: "https://meu-api-catalogo.onrender.com/images/inovacacao_do_mal.jpg", cast: ["Vera Farmiga", "Patrick Wilson"] },
                { id: 45, title: "O Chamado", description: "Uma fita de vídeo amaldiçoada faz com que todos os que a assistem morram.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_chamado.jpg", cast: ["Naomi Watts", "Martin Henderson"] },
                { id: 46, title: "A Bruxa", description: "Uma família enfrenta forças sobrenaturais em uma plantação isolada.", cover_url: "https://meu-api-catalogo.onrender.com/images/a_bruxa.jpg", cast: ["Anya Taylor-Joy", "Ralph Ineson"] },
                { id: 47, title: "O Babadook", description: "Uma mãe e seu filho enfrentam um espírito maligno em sua casa.", cover_url: "https://meu-api-catalogo.onrender.com/images/o_senhor_babadook.jpg", cast: ["Essie Davis", "Noa L. R."] },
                { id: 48, title: "Psicose", description: "Um assassino em série esconde seu passado em um motel isolado.", cover_url: "https://meu-api-catalogo.onrender.com/images/psicose.jpg", cast: ["Anthony Perkins", "Janet Leigh"] },
                { id: 49, title: "Arraste-me Para o Inferno", description: "Uma mulher é amaldiçoada após recusar ajuda a uma senhora idosa.", cover_url: "https://meu-api-catalogo.onrender.com/images/arrasteme_para_o_inferno.jpg", cast: ["Alison Lohman", "Justin Long"] },
                { id: 50, title: "A Noite dos Mortos-Vivos", description: "Um grupo de pessoas se refugia em uma casa enquanto enfrentam mortos-vivos.", cover_url: "https://meu-api-catalogo.onrender.com/images/a_noite_dos_mortos_vivos.jpg", cast: ["Duane Jones", "Judith O'Dea"] }
            ]
        }
    ]
};

module.exports = catalogo;


 



  

  

  

  



  
 
  
  
  
  
 
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
