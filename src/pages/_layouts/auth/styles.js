import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #ee4d64, #ee415a);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #fff;
  padding: 50px 30px;
  border-radius: 4px;
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.5);

  img {
    width: 114px;
    height: 52px;
    margin-bottom: 5px;
  }

  h1 {
    font-family: Roboto;
    font-size: 27px;
    font-weight: bold;
    color: #ee4d64;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    strong {
      display: flex;
      justify-content: flex-start;
      font-family: Roboto;
      font-size: 14px;
      font-weight: bold;
      color: #444444;
      margin-bottom: 8px;
    }

    input {
      border: 0;
      border-radius: 4px;
      border: solid 1px #dddddd;
      background-color: #ffffff;
      height: 45px;
      padding: 0 15px;
      color: #999999;
      margin: 0 0 10px;

      &::placeholder {
        color: #999999;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#ee4d64')};
      }
    }
  }
`;
