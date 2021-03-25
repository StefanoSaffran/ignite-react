import { Repository as RepositoryTypes } from './RepositoryList'

type RepositoryProps = {
  repository: RepositoryTypes
}

export function Repository({ repository }: RepositoryProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>
        Acessar repositório
      </a>
    </li>
  )
}
