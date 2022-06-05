import styled from "styled-components";
import plusIcon from "../../img/expand-icon.svg";

export const Container = styled.div`
  width: 50%;

  .accordion-item {
    border: none;
    background-color: transparent;

    &:last-of-type .accordion-button.collapsed {
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
    }

    .accordion-header {
      margin-bottom: 0.1%;
      button {
        font-size: 1.7vw;
        background-color: #303030;
        border-radius: 0px;
        color: white;
        padding: 3%;
        display: flex;
        justify-content: space-between;
        &::after {
          background-image: url(${plusIcon});
          transform: rotate(45deg);
          margin: 0px;
        }
      }
    }

    .accordion-button {
      &:not(.collapsed)::after {
        transform: rotate(90deg);
      }
      &:focus {
        border: none;
        box-shadow: none;
      }
    }

    .accordion-body {
      border-bottom-right-radius: 0%;
      border-bottom-left-radius: 0%;
      background-color: #303030;
      font-size: 1.5vw;
      padding: 3% 5%;
    }
  }
`;
