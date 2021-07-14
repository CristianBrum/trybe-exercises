import { cleanup, fireEvent } from '@testing-library/react';
import renderWithRedux from './helpers';
import App from '../App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  it('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

  it('Crie um teste com o valor padrão do reducer e teste se um clique funciona.', () => {
    const { queryByText, getByRole } = renderWithRedux(<App />);
    expect(queryByText('0')).toBeInTheDocument();
    const buttonAdicionar = getByRole('button');
    fireEvent.click(buttonAdicionar);
    expect(queryByText('1')).toBeInTheDocument();
  });

  it('Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos', () => {
    const { queryByText, getByRole } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

    expect(queryByText('10')).toBeInTheDocument();
    const buttonAdicionar = getByRole('button');
    fireEvent.click(buttonAdicionar);
    expect(queryByText('11')).toBeInTheDocument();
  });
});