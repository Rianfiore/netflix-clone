import expandIcon from "../../img/expand-icon.svg";

const AccordionMenu = ({ title, content }) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <figure>
          <img src={expandIcon} alt="expand-icon" />
        </figure>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </>
  );
};

export default AccordionMenu;
