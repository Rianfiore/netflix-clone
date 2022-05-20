import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer";
import AccordionMenu from "../../components/accordeon-menu";
import RegisterLabel from "../../components/register-label";
import { i18n } from "../../translate/i18n";
import tvImg from "../../img/tv.png";
import offlineImg from "../../img/mobile-0819.jpg";
import streamImg from "../../img/device-pile.png";
import kidsImg from "../../img/kidsValueProp.png";
import * as S from "./styles";

const Section = ({
  sectionClassName,
  imgSrc,
  imgAlt,
  title,
  subtitle,
  reverse,
}) => {
  return (
    <section className={sectionClassName}>
      <figure>
        <img src={imgSrc} alt={imgAlt} />
      </figure>
      <div className="SectionTextBox">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

const Main = () => {
  function translate(phrase) {
    return i18n.t(`initialScreen.main.${phrase}`);
  }

  return (
    <S.Container>
      <NavBar />
      <header>
        <div className="Background">
        </div>
        <div className="MainContent">
          <div className="TextBox">
          <h1>{translate("section1.title")}</h1>
          <h2>{translate("section1.subtitle")}</h2>
          </div>
          <RegisterLabel className="RegisterLabel"/>
        </div>
      </header>
      <main>
        <Section
          sectionClassName="TVSection"
          imgSrc={tvImg}
          imgAlt="TV-slideshow"
          title={translate("section2.title")}
          subtitle={translate("section2.subtitle")}
          reverse={false}
        />
        <Section
          sectionClassName="OfflineSection"
          imgSrc={offlineImg}
          imgAlt="download-content"
          title={translate("section3.title")}
          subtitle={translate("section3.subtitle")}
          reverse={false}
        />
        <Section
          sectionClassName="StreamSection"
          imgSrc={streamImg}
          imgAlt="stream-multi"
          title={translate("section4.title")}
          subtitle={translate("section4.subtitle")}
          reverse={false}
        />
        <Section
          sectionClassName="KidSection"
          imgSrc={kidsImg}
          imgAlt="kids"
          title={translate("section5.title")}
          subtitle={translate("section5.subtitle")}
          reverse={false}
        />
        <section>
          <h2>{translate("section6.title")}</h2>
          <AccordionMenu
            title={translate("section6.menu1.title")}
            content={translate("section6.menu1.content")}
          />
          <AccordionMenu
            title={translate("section6.menu2.title")}
            content={translate("section6.menu2.content")}
          />
          <AccordionMenu
            title={translate("section6.menu3.title")}
            content={translate("section6.menu3.content")}
          />
          <AccordionMenu
            title={translate("section6.menu4.title")}
            content={translate("section6.menu4.content")}
          />
          <AccordionMenu
            title={translate("section6.menu5.title")}
            content={translate("section6.menu5.content")}
          />
          <AccordionMenu
            title={translate("section6.menu6.title")}
            content={translate("section6.menu6.content")}
          />
          <RegisterLabel className="RegisterLabel"/>
        </section>
      </main>
      <Footer />
    </S.Container>
  );
};

export default Main;
