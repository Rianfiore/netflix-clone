import React from "react";
import { i18n } from "../../translate/i18n";
import * as S from "./styles";
import Select from "../select";

const OptionsMenu = ({ type }) => {
  function translate(phrase) {
    return i18n.t(`initialScreen.header.${phrase}`);
  }

  const Primary = () => {
      return (
        <S.Primary>
          <Select type="language" options={["ptBR", "enUS"]}/>
          <button type="button" className="btn btn-danger shadow-none">
            {translate("entryButton")}
          </button>
        </S.Primary>
      );
    },
    Secondary = () => {
      return (
        <S.Secondary>
          <Select type="language" options={["ptBR", "enUS"]}/>
        </S.Secondary>
      );
    };

  switch (type) {
    case "primary":
      return <Primary />;
    case "secondary":
      return <Secondary />;
    default:
      break;
  }
};

export default OptionsMenu;
