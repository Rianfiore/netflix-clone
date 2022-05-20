import styled from "styled-components";

export const Container = styled.div`
  .dropdown {
    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .btn,
    .btn-secondary,
    .dropdown-toggle {
      background-color: transparent;
      backdrop-filter: blur(5px);
      border: 1px solid white;
    }

    ul {
      background-color: transparent;
      backdrop-filter: blur(5px);
      border: 1px solid white;
      min-width: 0px;
      width: 100%;

      .dropdown-item {
        color: white;
        text-align: center;
      }
    }
  }
`;
