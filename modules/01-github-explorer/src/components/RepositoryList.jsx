import React from 'react';
import { Repository } from './Repository';

// import { Container } from './styles';

const repository = {
  name: 'unform',
  description: "Forms in React",
  link: "https://github.com/unform/unform"
}

export function RepositoryList() {
  return <section className="repository-list">
    <h1>Lista de repositórios</h1>

    <ul>
      <Repository repository={repository} />
      <Repository repository={repository} />
      <Repository repository={repository} />
      <Repository repository={repository} />
    </ul>
  </section>
}
