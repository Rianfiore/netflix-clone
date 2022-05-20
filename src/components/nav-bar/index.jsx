import netflixImg from "../../img/logo.svg";
import OptionsMenu from "../options-menu";
import * as S from "./styles";

const NavBar = () => {
  return (
    <S.NavBar>
      <div className="NavBar">
        <figure className="Logo">
          <img src={netflixImg} alt="netflix-logo" />
        </figure>
        <OptionsMenu type="primary" />
      </div>
    </S.NavBar>
  );
};

export default NavBar;
