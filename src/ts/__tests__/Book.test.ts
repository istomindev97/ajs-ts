import Book from "../domain/Book";

it('should create a Book instance with correct properties', () => {
  const book = new Book(1, '1984', 'George Orwell', 9.99, 328);
  const expectedBook = {
    id: 1,
    name: '1984',
    author: 'George Orwell',
    price: 9.99,
    pages: 328
  }

  expect(book).toEqual(expectedBook);
});