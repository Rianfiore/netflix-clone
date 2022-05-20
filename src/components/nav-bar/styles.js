import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: center;

  .NavBar {
    position: absolute;
    z-index: 1;
    width: 100%;
    max-width: 2000px;
    padding: 1.2rem 2.8rem;
    display: flex;
    justify-content: space-between;

    figure {
      display: flex;
      margin: 0;
      width: 167px;

      img {
        width: 100%;
      }
    }
  }
`;
