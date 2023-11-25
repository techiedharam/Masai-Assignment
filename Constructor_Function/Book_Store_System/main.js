// Task: Design an online bookstore system using object-oriented principles.
// Instructions:
// Create constructor functions for Book and Author to represent books and authors.
// The Author constructor should take name, birthYear, and nationality as arguments.
// The Book constructor should take title, author (an Author object), genre, and price as arguments.
// Implement methods in the Book prototype:
// getBookInfo - to print the book's title, author's name, genre, and price.
// Create an online bookstore by creating instances of Book and Author objects.
// Display the book details for each book in the bookstore.
// Submit your GitHub link after completing the problem.


function Author (name , birthYear ,nationality ) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

let author1 = new Author("Dharam" , 1999 , "Indian");

function Book (title , Author ,genre ,price) {
    this.title = title;
    this.author = Author;
    this.genre = genre;
    this.price = price;
}

let book1 = Book("Computer Fundamental" , Author , "Computer" , 599);