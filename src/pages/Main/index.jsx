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
  const flexDirection = reverse ? "row" : "row-reverse"

  return (
    <S.Section direction={flexDirection}>
      <section className={sectionClassName}>
        <figure>
          <img src={imgSrc} alt={imgAlt} />
        </figure>
        <div className="TextBox">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </section>
      </S.Section>
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
          reverse={true}
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
          reverse={true}
        />
        <section className="FAQ">
          <h2 className="title">{translate("section6.title")}</h2>
          <div className="Accordions">
          <AccordionMenu
            title={translate("section6.menu1.title")}
            content={translate("section6.menu1.content")}
            id={0}
          />
          <AccordionMenu
            title={translate("section6.menu2.title")}
            content={translate("section6.menu2.content")}
            id={1}
          />
          <AccordionMenu
            title={translate("section6.menu3.title")}
            content={translate("section6.menu3.content")}
            id={2}
          />
          <AccordionMenu
            title={translate("section6.menu4.title")}
            content={translate("section6.menu4.content")}
            id={3}
          />
          <AccordionMenu
            title={translate("section6.menu5.title")}
            content={translate("section6.menu5.content")}
            id={4}
          />
          <AccordionMenu
            title={translate("section6.menu6.title")}
            content={translate("section6.menu6.content")}
            id={5}
          />
          </div>
          <RegisterLabel className="RegisterLabel"/>
        </section>
      </main>
      <Footer />
    </S.Container>
  );
};

export default Main;
