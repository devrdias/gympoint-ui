import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 100%;

  form {
    display: flex;
    flex-direction: column;

    input {
      border: solid 1px #ddd;
      background-color: #fff;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin-bottom: 10px;

      &::placeholder {
        color: #999;
      }
    }

    div {
      display: flex;
      flex: 1;
      flex-direction: row;
      overflow: hidden;
      input {
        margin-right: 10px;
      }
    }
    .last-item {
      margin-right: 0;
    }

    .column {
      display: flex;
      flex-direction: column;
    }

    .form-buttons {
      display: flex;
      justify-content: flex-end;

      button {
        border: 0;
        width: 142px;
        height: 36px;
        border-radius: 4px;
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        margin: 20px 0 20px 10px;

        transition: background 0.3s;
        &#submit {
          background: #ee4d64;
        }
        &#submit:hover {
          background: ${lighten(0.08, '#ee4d64')};
        }
        &#cancel {
          background: #999;
        }
        &#cancel:hover {
          background: ${lighten(0.08, '#999')};
        }

        &[disabled] {
          cursor: not-allowed;
          opacity: 0.6;
        }
      }
    }

    span {
      font-size: 14px;
      color: red;
    }
  }
`;
