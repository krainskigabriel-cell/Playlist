// ============================================================
//  API DE PLAYLIST  -  Relacionando Musicas e Artistas
//  Backend 2DAT2  -  3o Trimestre
//  O frontend ja esta pronto em public/. Complete os TODOs.
// ============================================================
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

// ---- LISTA 1: artistas (cada um tem um id) ----
const artistas = [
  { id: 1, nome: "Trash Poll", pais: "Brasil" },
  { id: 2, nome: "Raphyx", pais: "Brasil" },
  { id: 3, nome: "K a m a i t a c h i", pais: "Brasil" },
  { id: 4, nome: "Muqueta Na Oreia", pais: "Brasil" },
];

// ---- LISTA 2: musicas (Nome corrigido para 'musicas' para evitar erros) ----
const musicas = [
  { id: 1, titulo: "MARTELO", artistaId: 1, duracao: 126 },
  { id: 2, titulo: "Artífice", artistaId: 2, duracao: 296 },
  { id: 3, titulo: "Opalão", artistaId: 4, duracao: 192 },
  { id: 4, titulo: "Tsar", artistaId: 3, duracao: 171 },
  { id: 5, titulo: "CALÇALARGA", artistaId: 1, duracao: 174 },
  { id: 6, titulo: "Exu Caveira", artistaId: 4, duracao: 175 },
];

// 1) LISTAR ARTISTAS
app.get("/artistas", (req, res) => {
  res.status(200).json(artistas);
});

// 2) LISTAR MÚSICAS (Com o nome do artista resolvido)
app.get("/musicas", (req, res) => {
  const resultado = musicas.map((m) => {
    // Procura o artista correspondente pelo ID
    const artista = artistas.find((a) => a.id === m.artistaId);
    
    return {
      id: m.id,
      titulo: m.titulo,
      duracao: m.duracao,
      // Retorna o NOME do artista (ou o país, caso seu front peça especificamente o país)
      artista: artista ? artista.nome : "Artista Desconhecido"
    };
  });
  
  res.status(200).json(resultado);
});

// 3) LISTAR MÚSICAS DE UM ARTISTA ESPECÍFICO
app.get("/artistas/:id/musicas", (req, res) => {
  const id = Number(req.params.id);
  const doArtista = musicas.filter((m) => m.artistaId === id);
  res.status(200).json(doArtista);
});

app.listen(PORT, () => {
  console.log(`Playlist no ar: http://localhost:${PORT}`);
});


// 2) LISTAR MUSICAS  (juntando cada musica com o seu artista)

  // TODO: use map para percorrer 'musicas'.
  //       para cada musica, use find em 'artistas' para achar
  //       aquele cujo id === m.artistaId.
  //       devolva um objeto com: titulo, duracao, artista (nome) e pais.
  //       lembre: find pode devolver undefined -> trate com ? :



