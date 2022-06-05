import * as S from './styles'
import { Accordion } from 'react-bootstrap';

const AccordionMenu = ({ title, content, id }) => {
  return (
    <S.Container>
    <Accordion defaultActiveKey={['1']} alwaysOpen>
  <Accordion.Item eventKey={id}>
    <Accordion.Header>{title}</Accordion.Header>
    <Accordion.Body >
      {content}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
      {/* <div className="bar">
        <h2>{title}</h2>
          <AiOutlinePlus className="iconPlus"/>
      </div>
      <div className="content">
        <p>{content}</p>
      </div> */}
    </S.Container>
  );
};

export default AccordionMenu;
