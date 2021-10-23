import { useState } from "react";

const Avatar = props => {
const [Enable, setEnable]=useState(true);
    function desactivar(evento) {
        // evento.target.classList.toggle('disable');
        setEnable(!Enable);
    }

    return (
        <picture>
            <img 
                onClick={(evento) => desactivar(evento)}
                src={`${process.env.PUBLIC_URL}/${props.imagen}`}
                className={Enable === true ? '' : 'disable'}
                />
        </picture>
    )

}

export default Avatar;