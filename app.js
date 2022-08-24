const readline = require("readline-sync");
const books = require("./database");

const inputYesOrNot = readline.question("Deseja buscar um livro? S/N");

if (inputYesOrNot.toLocaleUpperCase() === "S") {
  console.log("Essas são as categorias disponíveis:");
  console.log(
    "Produtividade / Hisória brasileira / Américas / Estilo de vida / Tecnologia"
  );
  const category = readline.question("Digite a categoria que deseja: ");
  const bookFiltered = books.filter(
    (book) =>
      book.categoria === category
  );
  console.table(bookFiltered);
} else {
  orderedBooks = books.sort((a, b), a.paginas - b.paginas);
  console.log("Abaixo está todos os livros disponíveis:");
  console.table(orderedBooks);
}
