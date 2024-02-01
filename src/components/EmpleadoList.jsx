import React from 'react';
import { ListGroup } from 'react-bootstrap';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = () => {

    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business",
        pic: "empleado01.png" }]

    return (
        <ListGroup className='my-5'>
            <EmpleadoRow empleados={empleados}></EmpleadoRow>
            <EmpleadoRow empleados={empleados}></EmpleadoRow>
            <EmpleadoRow empleados={empleados}></EmpleadoRow>
            <EmpleadoRow empleados={empleados}></EmpleadoRow>
            <EmpleadoRow empleados={empleados}></EmpleadoRow>
            <EmpleadoRow empleados={empleados}></EmpleadoRow>
            <EmpleadoRow empleados={empleados}></EmpleadoRow>
        </ListGroup>
    );
};

export default EmpleadoList;