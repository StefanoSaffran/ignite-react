import { useEffect, useState } from 'react';

import { Repository } from './Repository';

import '../styles/repositories.scss';

export type Repository = {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/StefanoSaffran/repos`)
      .then(response => response.json())
      .then(setRepositories)
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => (
          <Repository key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  )
}
