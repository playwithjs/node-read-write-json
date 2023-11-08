
const fs = require("fs")
const books = [
    {
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "imageLink": "images/le-pere-goriot.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "year": 1835
    },
    {
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    },
    {
      "author": "Giovanni Boccaccio",
      "country": "Italy",
      "imageLink": "images/the-decameron.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
      "pages": 1024,
      "title": "The Decameron",
      "year": 1351
    },
    {
      "author": "Jorge Luis Borges",
      "country": "Argentina",
      "imageLink": "images/ficciones.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Ficciones\n",
      "pages": 224,
      "title": "Ficciones",
      "year": 1965
    }
  ];

const data = JSON.stringify(books);

// fs.writeFile("./data.json", data, "utf-8", (error) => {
//     if(error)
//         console.log(error)
//     else
//         console.log("Write file has been completed...")
// })

fs.readFile("./data.json","utf-8", (error, json) =>{
    if(error){
        console.log(error);
        return;
    }
    try {
        const books = JSON.parse(json);
        books.forEach(element => {
            console.log(`${element.title} by ${element.author}`)
        });
    } catch (error) {
        console.log(error)
    }
})