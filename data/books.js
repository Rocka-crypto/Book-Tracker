export const BOOKS = [
  {
    id: '42',
    title: 'Dune',
    author: 'Frank Herbert',
    pages: 688,
    summary: 'A young noble, a desert planet, and the most valuable substance in the universe.',
  },
  {
    id: '7',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 310,
    summary: 'A reluctant hobbit joins a company of dwarves to reclaim a mountain from a dragon.',
  },
  {
    id: '19',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    pages: 476,
    summary: 'A lone astronaut wakes up with no memory and a mission to save Earth.',
  },
  {
    id: '88',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    pages: 209,
    summary: 'Okonkwo, a proud Igbo leader, faces the arrival of colonial rule and missionaries.',
  },
];

// Simulates loading from storage or a server, so the details screen can show a loading state.
export function fetchBook(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(BOOKS.find((b) => b.id === id)), 300);
  });
}