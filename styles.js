import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  .delete-btn{
    background-color: transparent;
    border: none;
    position: absolute;
    right: 10px;
    top: 35px;
  }

  .comments-list{
    list-style: none;
    text-align: center;
    padding: 10px;
  }

  .comment{
  padding: 5px;
  background-color: #F2E5D7;
  opacity: 0.8;
  margin: 5px;
  border-radius: 10px;
  text-align: left;
  position: relative;
  font-size: 1rem; 
  }
`;
