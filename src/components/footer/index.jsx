import React from "react";
import { i18n } from "../../translate/i18n";
import Select from "../select";
import * as S from "./styles";

const Footer = () => {
  function translate(phrase) {
    return i18n.t(`initialScreen.footer.${phrase}`);
  }

  return (
    <S.Container>
      <h2>{translate("title")}</h2>
      <nav>
        <ul>
          <div>
            <li>{translate("ul.li1")}</li>
            <li>{translate("ul.li2")}</li>
            <li>{translate("ul.li3")}</li>
            <li>{translate("ul.li4")}</li>
            <li>{translate("ul.li5")}</li>
          </div>
          <div>
            <li>{translate("ul.li6")}</li>
            <li>{translate("ul.li7")}</li>
            <li>{translate("ul.li8")}</li>
            <li>{translate("ul.li9")}</li>
          </div>
          <div>
            <li>{translate("ul.li10")}</li>
            <li>{translate("ul.li11")}</li>
            <li>{translate("ul.li12")}</li>
            <li>{translate("ul.li13")}</li>
          </div>
          <div>
            <li>{translate("ul.li14")}</li>
            <li>{translate("ul.li15")}</li>
            <li>{translate("ul.li16")}</li>
            <li>{translate("ul.li17")}</li>
          </div>
        </ul>
      </nav>
      <Select type="language" options={["ptBR", "enUS"]}/>
      <p>{translate("info")}</p>
    </S.Container>
  );
};

export default Footer;
