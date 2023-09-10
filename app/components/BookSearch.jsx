'use client';
import { useState } from 'react';

const BookSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const res = await fetch(`/api/books/search?query=${query}`);
    const books = await res.json();
    getSearchResults(books);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        className='search-input'
        type='text'
        placeholder='Search books'
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
};

export default BookSearch;
