class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    add(book) {
        this.books.push(book);
    }

    getBook(name) {
        for (let book of this.books) {
            if (book.name === name) {
                return book;
            }
        }
    }
}