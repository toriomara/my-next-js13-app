import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/toriomara/${name}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const repo = await response.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  console.log(repo);
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className='card-stats'>
        <div className='card-stat'>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='card-stat'>
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className='card-stat'>
          <FaEye />
          <span>{name.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
