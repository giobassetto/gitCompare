import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';
// eslint-disable-next-line react/prop-types
const CompareList = ({ repositories, removeRepository, updateRepository }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>
        <ul>
          <li>
            {repository.stargazers_count}
            <small> stars </small>
          </li>
          <li>
            {repository.forks_count}
            <small> forks </small>
          </li>
          <li>
            {repository.open_issues_count}
            <small> issues </small>
          </li>
          <li>
            {repository.lastCommit}
            <small> last commit </small>
          </li>
          <div>
            <button
              className="delete"
              type="submit"
              onClick={() => removeRepository(repository.id)}
            >
              Apagar
            </button>
            <button
              className="update"
              type="submit"
              onClick={() => updateRepository(repository.id)}
            >
              Atualizar
            </button>
          </div>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
  removeRepository: PropTypes.func.isRequired,
  updateRepository: PropTypes.func.isRequired,
};

export default CompareList;
