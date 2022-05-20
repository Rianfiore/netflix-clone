import { i18n } from "../../translate/i18n";
import * as S from "./styles";
import { BsChevronRight } from "react-icons/bs";

const RegisterLabel = () => {
  function translate(phrase) {
    return i18n.t(`initialScreen.main.${phrase}`);
  }

  return (
    <S.Container>
      <div className="RegisterBox">
        <h3>{translate("section1.registerTitle")}</h3>
        <div className="CTA">
          <input
            placeholder={translate("section1.placeholderRegisterButton")}
          ></input>
          <button type="button" class="btn btn-danger shadow-none">
            <div className="Text">
              <span>{translate("section1.registerButton")}</span>
              <BsChevronRight />
            </div>
          </button>
        </div>
      </div>
    </S.Container>
  );
};

export default RegisterLabel;
