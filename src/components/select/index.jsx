/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { BsGlobe } from "react-icons/bs";
import i18n from "i18next";

function LanguageType(options) {
  function translate(phrase) {
    return i18n.t(`initialScreen.header.languages.${phrase}`);
  }

  function updateLanguage(target) {
    localStorage.setItem(I18N_STORAGE_KEY, target);
    window.location.reload();
  }

  const I18N_STORAGE_KEY = "i18nextLng",
    navigatorLanguage = navigator.language.replace("-", ""),
    [language] = useState(localStorage.getItem(I18N_STORAGE_KEY)),
    handleSelectChange = (target) => {
      updateLanguage(target);
    };

  useEffect(() => {
    localStorage.setItem(I18N_STORAGE_KEY, navigatorLanguage);
  }, [navigatorLanguage]);

  return (
    <S.Container>
      <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle shadow-none"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsGlobe />
            {translate(language)}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {options.map((e) => (
              <li key = {e} onClick={() => handleSelectChange(e)}>
                <a className="dropdown-item" href="#">{translate(e)}</a>
              </li>
            ))}
          </ul>
        </div>
    </S.Container>
  );
}

const Select = ({ type, options }) => {
  switch (type) {
    case "language":
      return LanguageType(options);
    default:
      break;
  }
};

export default Select;
