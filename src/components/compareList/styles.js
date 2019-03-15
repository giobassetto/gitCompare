import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 25px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  margin-bottom: 20px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #666;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #c6c5c5;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1 1;

      .update {
        height: 25px;
        padding: 0 20px;
        background: #008000;
        color: #fff;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 27px;
        margin-left: 10px;
        margin-bottom: 10px;

        &:hover {
          background: #3f3131;
        }
      }

      .delete {
        height: 25px;
        padding: 0 20px;
        background: #ff0000;
        color: #fff;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 27px;
        margin-left: 10px;
        margin-bottom: 10px;

        &:hover {
          background: #3f3131;
        }
      }
    }
  }
`;
