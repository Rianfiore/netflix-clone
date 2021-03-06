import styled from "styled-components";
import { i18n } from "../../translate/i18n";

function translate(phrase) {
  return i18n.t(`initialScreen.main.${phrase}`);
}

export const Container = styled.div`
  header {
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    height: 45vw;
    max-height: 1000px;
    box-shadow: 0 0 200px rgba(0, 0, 0, 0.9) inset,
      0 0 400px rgba(0, 0, 0, 0.9) inset, 0 0 800px rgba(0, 0, 0, 0.9) inset;

    .Background {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: url(${translate("background")}) no-repeat center;
      filter: brightness(50%) blur(2px);
      background-size: cover;
    }

    .MainContent {
      color: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-self: center;
      align-items: center;
      gap: 60px;
      width: 60vw;
      max-width: 1100px;
      transform: scale(0.8);

      .TextBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;

        h1 {
          font-size: clamp(0.5rem, 5rem, 6rem);
          min-width: 400px;
        }

        h2 {
          font-size: clamp(0.7rem, 2.5vw, 3rem);
          font-weight: 300;
        }
      }
    }

    @media (max-width: 1450px) {
      .MainContent {
        gap: 30px;

        .TextBox {
          h1 {
            font-size: clamp(0.5rem, 4rem, 6rem);
          }
        }
      }
    }

    @media (max-width: 1200px) {
      .MainContent {
        gap: 15px;
        .TextBox {
          h1 {
            font-size: clamp(0.5rem, 3rem, 6rem);
          }
        }
      }
    }

    @media (max-width: 750px) {
      .MainContent {
        transform: scale(1);

        .TextBox {
          h1 {
            font-size: clamp(0.3rem, 2rem, 6rem);
            min-width: 250px;
          }
        }
      }
    }

    @media (max-width: 550px) {
      .MainContent {
        .TextBox {
          h1 {
            font-size: clamp(1.5rem, 1.5rem, 6rem);
          }
        }
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    .FAQ {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: black;
      color: white;
      border-top: 0.5vw solid #222222;
      border-bottom: 0.5vw solid #222222;
      padding: 5% 0;

      .title {
        font-size: 3vw;
        padding-bottom: 2vw;
      }

      .Accordions {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5vw;
        padding-bottom: 2.5vw;
      }
    }
  }

  footer {
    border-top: 0.5vw solid #222222;
  }
`;

export const Section = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  border-top: 0.5vw solid #222222;

  section {
    width: 80%;
    background-color: black;
    display: flex;
    flex-direction: ${(props) => props.direction};
    align-items: center;
    justify-content: space-between;
    padding: 2.5% 0;

    figure img {
      width: 40vw;
    }

    .TextBox {
      color: white;
      width: 80vw;
      display: flex;
      flex-direction: column;
      gap: 15px;

      h2 {
        font-size: 3vw;
        font-weight: 700;
      }

      p {
        font-size: 1.8vw;
        line-height: 150%;
      }
    }
  }
`;
