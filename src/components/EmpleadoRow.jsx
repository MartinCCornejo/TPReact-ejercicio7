import { ListGroup, Row, Col } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({empleados}) => {
    console.log(empleados)
  return (
    <ListGroup.Item className="box-shadow py-4 mb-4" >
      <Row >
        <Col sm={4} className="mb-3 mb-sm-0">
          <EmpleadoAvatar empleados={empleados}></EmpleadoAvatar>
        </Col>
        <Col sm={8} className="text-center text-sm-start">
            <p className="fs-5 fw-bold text-darkRed fst-italic">Id: 1</p>
            <h3 className="my-3">Nombre completo</h3>
            <div className="d-flex justify-content-center justify-content-sm-start align-item-center gap-3">
                <h4 className="text-uppercase">CEO</h4>
                <p className="departament">Busines</p>
            </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
