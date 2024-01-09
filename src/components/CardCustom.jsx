/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export default function CardCustom(props) {
    return (
        <div 
            {...props}
            className="col-lg-6 col-md-4 col-12"
        >
            <Link to={props.rota} className="d-block mb-4 h-100">
                <img
                    className="img-fluid img-thumbnail"
                    src={props.urlImagem}
                    alt={props.rota}
                />
            </Link>
        </div>
    )
}