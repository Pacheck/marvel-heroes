import styled from 'styled-components';

import IronMan from '../../assets/iron-man.jpg';

export const Container = styled.div`
  /* background: #161616; */
  background: url(${IronMan});
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background-color: #b11010c4;
  border: 1px solid #b11010c4;
  width: 50rem;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 0 0.2em gray;
  button {
    padding: 1rem 6rem;
    font-family: 'Lexend Deca';
    background: darkred;
    cursor: pointer;

    :hover {
      background: #380101;
      color: #fff;
    }
  }
  input {
    width: 20rem;
    padding: 1rem;
    margin: 0.7rem;
    background: #161616;
    color: #fff;
  }
  textarea {
    background: #161616;
    color: #fff;
  }
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  textarea:-webkit-autofill:active,
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    background: #161616;
    -webkit-box-shadow: 0 0 0 30px #161616 inset !important;
    -webkit-text-fill-color: #fff;
  }
`;

export const Title = styled.h1`
  font-family: 'Lexend Deca';
  color: #fff;
`;

export const InsertDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
