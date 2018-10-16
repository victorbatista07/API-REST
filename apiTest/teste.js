const createMapper = require("map-factory");
//const map = createMapper();
const src = {
    "nome" : "Teste",
    "x" : {
      "y" : 123,
      "k" : "oi",
    },
    "z" : [456]
};
console.log(src);

const mapper = createMapper();

mapper.map("nome").to("name")
mapper.map("x.y").to("y")
mapper.map("z").to("z.teste")
mapper.map("x.k").to("z.eita")


const result = mapper.execute(src);
console.log(result);
