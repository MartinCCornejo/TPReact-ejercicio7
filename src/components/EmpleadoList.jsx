import React from 'react';
import { ListGroup } from 'react-bootstrap';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = () => {

    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business",
        pic: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department:
        "Marketing", pic: "https://images.pexels.com/photos/2748242/pexels-photo-2748242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department:
        "Business", pic: "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department:
        "Engineering", pic: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department:
        "Marketing", pic: "https://images.pexels.com/photos/1812634/pexels-photo-1812634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department:
        "Engineering", pic: "https://images.pexels.com/photos/3756907/pexels-photo-3756907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist",
        department: "Marketing", pic: "https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department:
        "Engineering", pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department:
        "Engineering", pic: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
        ]
        

    return (
        <ListGroup className='my-4'>
            {
                empleados.map((empleado)=> <EmpleadoRow empleado={empleado}></EmpleadoRow>)
            }
        </ListGroup>
    );
};

export default EmpleadoList;