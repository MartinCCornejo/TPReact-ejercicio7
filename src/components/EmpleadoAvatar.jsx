const EmpleadoAvatar = ({empleado}) => {
    return (
        <div className="img-container">
            <img className="img-fluid-custom" src={empleado.pic}></img>
        </div>
    );
};

export default EmpleadoAvatar;