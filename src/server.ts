import fastify from "fastify";

const server = fastify({logger: true});

const years = [
  {id: 1, year: 2014, name: "BioWare", publisher: "Electronic Arts"},
  {id: 2, year: 2015, name: "CD Project Red", publisher: "CD Project"},
  {id: 3, year: 2016, name: "Blizzard Entertainment", publisher: "Blizzard Entertainment"},
  {id: 4, year: 2017, name: "Nintendo", publisher: "Nintendo"},
  {id: 5, year: 2018, name: "Santa Monica Studio", publisher: "Sony Interactive Entertainment"},
  {id: 6, year: 2019, name: "FromSoftware", publisher: "Activision"},
  {id: 7, year: 2020, name: "Naughty Dog", publisher: "Sony Interactive Entertainment"},
  {id: 8, year: 2021, name: "Hazelight Studios", publisher: "Electronic Arts"},
  {id: 9, year: 2022, name: "FromSoftware", publisher: "Bandai Namco Enternainment"},
  {id: 10, year: 2023, name: "Larian Studios", publisher: "Larian Studios"},
  {id: 11, year: 2024, name: "Team Asobi", publisher: "Sony Interactive Entertainment"},
]

const games = [
  {id: 1, name: "Dragon Age: Inquisition"},
  {id: 2, name: "The Witcher 3: Wild Hunt"},
  {id: 3, name: "Overwatch"},
  {id: 4, name: "The Legend of Zelda: Breath of the Wild"},
  {id: 5, name: "God of War"},
  {id: 6, name: "Sekiro: Shadows Die Twice"},
  {id: 7, name: "The Last of Us Part II"},
  {id: 8, name: "It Takes Two"},
  {id: 9, name: "Elden Ring"},
  {id: 10, name: "Baldur's Gate III"},
  {id: 11, name: "Astro Bot"},
];

server.get("/years", async(request, response) => {
  response.type("application/json").code(200);
  return { years };
});

server.get("/games", async(request, response)=>{
  response.type("application/json").code(200);
  return { games };
});

interface gamesParams {
  id: string;
}

interface yearsParams {
  id: string;
}

server.get<{Params: gamesParams}>("/games/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const game = games.find((g) => g.id === id);

  if(!game) {
    response.type("application/json").code(404);
    return {message: "Game not found!"}
  } else {
    response.type("application/json").code(200);
    return { game }
  }
});

server.get<{Params: yearsParams}>("/years/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const year = years.find((y) => y.id === id);

  if(!year) {
    response.type("application/json").code(404);
    return {message: "Year not found!"}
  } else {
    response.type("application/json").code(200);
    return { year }
  }
});

server.listen({port: 3333}, ()=>{
  console.log("Server init");
});
