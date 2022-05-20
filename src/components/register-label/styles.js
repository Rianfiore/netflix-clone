import styled from "styled-components";

export const Container = styled.div`
  .RegisterBox {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;

    h3 {
      width: 100%;
      min-width: 200px;
      font-size: clamp(0.7rem, 1.5vw, 1.9rem);
    }
  }

  .CTA {
    display: grid;
    grid-template-columns: 2.2fr 1fr;
    height: 5vw;
    max-height: 90px;
    font-family: "Roboto";

    input {
      outline: none;
      padding-left: 2%;
      text-align: center;
      font-weight: 700;
      letter-spacing: 0.05rem;
      font-size: clamp(0.8rem, 2.3vw, 1.6rem);

      :focus {
        ::placeholder {
          opacity: 0;
        }
      }

      ::placeholder {
        text-align: left;
        font-size: clamp(0.8rem, 1.5vw, 1.6rem);
        font-weight: 500;
        letter-spacing: 0.05px;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0px;
      font-size: clamp(0.5rem, 1.5vw, 2rem);

      .Text {
        display: flex;
        justify-content: space-between;
        gap: 1.3rem;
        align-items: center;

        span {
          margin-top: -3px;
        }
      }
    }
  }
`;
