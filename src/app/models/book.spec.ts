import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book(2, 2, 'Lola', 'Lolita', 'Fumando', 2, 'Porritos')).toBeTruthy();
  });
});
