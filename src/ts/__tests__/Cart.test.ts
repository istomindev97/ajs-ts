import Cart from '../service/Cart';
import Book  from '../domain/Book';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('should add an item to the cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart.items.length).toBe(1);
});

test('should calculate an amout without discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Movie(150, 1000, 'The Avengers', 'J.Cameron', 2012,'USA', 'Avengers Assemble!', 'action', 137))

  expect(cart.countTotalWithoutDiscount()).toBe(3000);
});

test('should calculate an amout with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Movie(150, 1000, 'The Avengers', 'J.Cameron', 2012,'USA', 'Avengers Assemble!', 'action', 137))

  expect(cart.countTotalWithDiscount(50)).toBe(1500);
});

test('should delete an item from the list', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Movie(150, 1000, 'The Avengers', 'J.Cameron', 2012,'USA', 'Avengers Assemble!', 'action', 137))

  cart.deleteItem(150)

  expect(cart.items.length).toBe(1);
});