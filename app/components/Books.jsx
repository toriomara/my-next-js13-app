import Image from 'next/image';
import Link from 'next/link';

const Books = ({ books }) => {
  return (
    <section className="books">
      {books.map((book) => (
        <div key={book.imageLink} className="card">
          <div className="card-content">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Country: {book.country}</p>
            <p>Language: {book.language}</p>
            <p>Year: {book.year}</p>
            <p>Amount page: {book.pages}</p>
            <Link href={book.link} target="_blank" className="btn">
              Go to The Book
            </Link>
          </div>
          <Image
            className="card-image"
            // placeholder="blur"
            // fill
            quality={100}
            src={`/images/${book.imageLink}`}
            width="150"
            height="200"
            alt={book.title}
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </section>
  );
};

export default Books;
