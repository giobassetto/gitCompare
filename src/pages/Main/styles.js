import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;
export const Imagem = styled.img`
  max-width: 200px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 27px;
    margin-left: 10px;
    border: ${props => (props.withError ? '3px solid #F00' : 0)};
  }

  button {
    height: 55px;
    padding: 0 20px;
    background: #171212;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 27px;
    margin-left: 10px;
    margin-right: 10px;

    &:hover {
      background: #3f3131;
    }
  }
`;
