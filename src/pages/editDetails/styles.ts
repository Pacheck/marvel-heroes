import styled from 'styled-components';

export const Container = styled.div`
  background: #161616;
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;

  img {
    position: absolute;
    top: 58px;
    left: 0;
  }
`;

export const Form = styled.form`
  background-color: #b11010c4;
  width: 50rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0.2em yellow;

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  input {
    width: 20rem;
    padding: 0.5rem;
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
