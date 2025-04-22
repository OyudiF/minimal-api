"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var import_fastify = __toESM(require("fastify"));
var server = (0, import_fastify.default)({ logger: true });
var years = [
  { id: 1, year: 2014, name: "BioWare", publisher: "Electronic Arts" },
  { id: 2, year: 2015, name: "CD Project Red", publisher: "CD Project" },
  { id: 3, year: 2016, name: "Blizzard Entertainment", publisher: "Blizzard Entertainment" },
  { id: 4, year: 2017, name: "Nintendo", publisher: "Nintendo" },
  { id: 5, year: 2018, name: "Santa Monica Studio", publisher: "Sony Interactive Entertainment" },
  { id: 6, year: 2019, name: "FromSoftware", publisher: "Activision" },
  { id: 7, year: 2020, name: "Naughty Dog", publisher: "Sony Interactive Entertainment" },
  { id: 8, year: 2021, name: "Hazelight Studios", publisher: "Electronic Arts" },
  { id: 9, year: 2022, name: "FromSoftware", publisher: "Bandai Namco Enternainment" },
  { id: 10, year: 2023, name: "Larian Studios", publisher: "Larian Studios" },
  { id: 11, year: 2024, name: "Team Asobi", publisher: "Sony Interactive Entertainment" }
];
var games = [
  { id: 1, name: "Dragon Age: Inquisition" },
  { id: 2, name: "The Witcher 3: Wild Hunt" },
  { id: 3, name: "Overwatch" },
  { id: 4, name: "The Legend of Zelda: Breath of the Wild" },
  { id: 5, name: "God of War" },
  { id: 6, name: "Sekiro: Shadows Die Twice" },
  { id: 7, name: "The Last of Us Part II" },
  { id: 8, name: "It Takes Two" },
  { id: 9, name: "Elden Ring" },
  { id: 10, name: "Baldur's Gate III" },
  { id: 11, name: "Astro Bot" }
];
server.get("/years", (request, response) => __async(exports, null, function* () {
  response.type("application/json").code(200);
  return { years };
}));
server.get("/games", (request, response) => __async(exports, null, function* () {
  response.type("application/json").code(200);
  return { games };
}));
server.get("/games/:id", (request, response) => __async(exports, null, function* () {
  const id = parseInt(request.params.id);
  const game = games.find((g) => g.id === id);
  if (!game) {
    response.type("application/json").code(404);
    return { message: "Game not found!" };
  } else {
    response.type("application/json").code(200);
    return { game };
  }
}));
server.get("/years/:id", (request, response) => __async(exports, null, function* () {
  const id = parseInt(request.params.id);
  const year = years.find((y) => y.id === id);
  if (!year) {
    response.type("application/json").code(404);
    return { message: "Year not found!" };
  } else {
    response.type("application/json").code(200);
    return { year };
  }
}));
server.listen({ port: 3333 }, () => {
  console.log("Server init");
});
