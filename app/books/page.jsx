'use client';
import { useState, useEffect } from 'react';
import Books from '../components/Books';
import LoadingPage from '../loading';
import BookSearch from '../components/BookSearch';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch('/api/books');
      const data = await res.json();
      setBooks(data);
      setLoading(false);
    };
    fetchBooks();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <BookSearch getSearchResults={(results) => setBooks(results)} />
      <Books books={books} />
    </div>
  );
};

export default BooksPage;
