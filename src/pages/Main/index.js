import React, { Component } from 'react';
import moment from 'moment';
import logo from '../../assets/GitHub_Logo.png';
import { Container, Imagem, Form } from './styles';
import CompareList from '../../components/compareList';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    reposityInput: '',
    repositories: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    this.setState({ loading: false, repositories: await this.getRepositories() });
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { repositories: reps, reposityInput, repositoryError } = this.state;
      const { data: repository } = await api.get(`/repos/${reposityInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositories: [...reps, repository],
        reposityInput: '',
        repositoryError: false,
      });

      if (!repositoryError) {
        const { repositories } = this.state;
        if (!reps) {
          await localStorage.setItem('Repos', JSON.stringify(repositories));
        } else {
          await localStorage.removeItem('Repos');
          await localStorage.setItem('Repos', JSON.stringify(repositories));
        }
      }
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  getRepositories = async () => JSON.parse(await localStorage.getItem('Repos')) || [];

  removeRepository = async (id) => {
    const { repositories } = this.state;

    const newRepository = repositories.filter(repos => repos.id !== id);

    await localStorage.setItem('Repos', JSON.stringify(newRepository));
    this.setState({
      repositories: await this.getRepositories(),
    });
  };

  updateRepository = async (id) => {
    const { repositories } = this.state;

    const update = repositories.find(repo => repo.id === id);

    try {
      const { data } = await api.get(`/repos/${update.full_name}`);
      data.lastCommit = moment(data.pushed_at).fromNow();
      this.setState({
        repositoryError: false,
        reposityInput: '',
        repositories: repositories.map(repo => (repo.id === data.id ? data : repo)),
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    const {
      repositories, reposityInput, repositoryError, loading,
    } = this.state;

    return (
      <Container>
        <Imagem src={logo} alt="GitHub Compare" />

        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={reposityInput}
            onChange={e => this.setState({ reposityInput: e.target.value })}
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
        </Form>
        <CompareList
          repositories={repositories}
          removeRepository={this.removeRepository}
          updateRepository={this.updateRepository}
        />
      </Container>
    );
  }
}
