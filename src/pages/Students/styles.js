import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  padding: 30px;
  margin: 0 auto;
  max-width: 1200px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 4px;

  header {
    font-family: Roboto;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    h1 {
      font-size: 24px;
      font-weight: bold;
      color: #444;
    }

    div {
      display: flex;
      flex-direction: row;
      button {
        border: 0;
        margin-right: 16px;

        width: 142px;
        height: 36px;
        border-radius: 4px;
        font-size: 14px;
        color: #fff;
        background: #ee4d64;
        font-weight: bold;

        transition: background 0.3s;
        &:hover {
          background: ${lighten(0.08, '#ee4d64')};
        }
      }

      form {
        position: relative;

        input {
          height: 36px;
          border-radius: 4px;
          border: solid 1px #ddd;
          background-color: #fff;
          padding: 0 15px;

          &::placeholder {
            color: #999;
          }
        }
      }
    }
  }
`;

export const ResponsiveTable = styled.div`
  overflow-x: auto;
`;

export const StudentTable = styled.table`
  background-color: #fff;
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;

  th,
  td {
    border-bottom: 1px solid #ddd;
  }

  thead th {
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    color: #444;
    padding: 8px;
    width: 40%;
    text-align: left;
  }

  tbody {
    tr:hover {
      background-color: #eee;
    }

    td {
      padding: 8px;

      button {
        background: none;
        border: 0;

        &#edit {
          margin-right: 15px;
        }

        &#delete {
          margin-right: 5px;
        }
      }
    }

    .center-content {
      display: flex;
      align-items: center;
    }
  }

  /* tbody tr:nth-of-type(even) {
    background-color: #ddd;
  } */
`;
