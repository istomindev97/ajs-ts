import Movie  from '../domain/Book';

test('should create a new instance of Movie', () => {
    const movie = new Movie(150, 1000, 'The Avengers', 'J.Cameron', 2012, 'USA', 'Avengers Assemble!', 'action', 137)
    
    expect(movie).toBeInstanceOf(Movie);
  });