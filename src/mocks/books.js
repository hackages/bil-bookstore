const books = [
  { id: 1887, title: "Angular up", category: "web" },
  { id: 2897, title: "NativeScript in Action", category: "mobile" },
  { id: 8370, title: "Using React & Redux", category: "web" },
  { id: 2391, title: "Data Visualisation", category: "data engineering" },
  { id: 5648, title: "Build Robot with JavaScript", category: "iot" },
  { id: 5670, title: "Efficient JavaScript", category: "web" },
  { id: 9087, title: "Learning React Native", category: "mobile" },
  {
    id: 8007,
    title: "Functional Programming with JavaScript",
    category: "web",
  },
  {
    id: 9997,
    title: "Building Web JavaScript Applications",
    category: "web",
  },
  { id: 1847, title: "Introduction to IoT with Tessel", category: "iot" },
  { id: 1948, title: "Introduction to C#", category: "programming language" },
  { id: 2048, title: "Building complex apps with Vue", category: "web" },
  {
    id: 9941,
    title: "Functional programming with F#",
    category: "programming language",
  },
];

export const getBooks = () => {
  return new Promise((resolve) => {
    resolve(books);
  });
};
export const getBookById = (id) => {
  return new Promise((resolve, reject) => {
    const results = books.filter((book) => book.id === parseInt(id));

    if (results) {
      resolve(results[0]);
    } else {
      reject({ message: `Book with id ${id} does not exist` });
    }
  });
};
