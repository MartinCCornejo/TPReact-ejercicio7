import { ListGroup, Row, Col } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleado }) => {
  return (
    <ListGroup.Item className="box-shadow py-4 mb-4">
      <Row>
        <Col sm={4} className="mb-3 mb-sm-0">
          <EmpleadoAvatar empleado={empleado}></EmpleadoAvatar>
        </Col>
        <Col sm={8} className="text-center text-sm-start">
          <p className="fs-5 fw-bold text-darkRed fst-italic">
            Id: {empleado.id}
          </p>
          <h3 className="my-3 fs-2">{empleado.fullName}</h3>
          <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-3">
            <h4 className="text-uppercase pb-2 fs-5">{empleado.title}</h4>
            <p className="departament fs-5">{empleado.department}</p>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
