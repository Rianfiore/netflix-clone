import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  div {
    width: 50%;

    nav {
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 0px;

        div {
          width: 100%;
          line-height: 200%;

          li {
            list-style: none;
            text-align: left;
          }
        }
      }
    }
  }
`;
