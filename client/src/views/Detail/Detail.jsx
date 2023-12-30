import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDetail} from "../../redux/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./detail.styles.css"

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    
    useEffect(() => {
        if(id) {
            dispatch(getDetail(id));
        }
    }, [dispatch, id])

    const dog = useSelector((state) => state.dogDetail)

    return (
        <div className="fondo">
            <div className="container">
        <div className="detailContainer">
            <div className="imageContainer">
            {dog ? (
                <img
                    src={dog.image}
                    alt="perro"
                />
                ) : (
                    <Loading />
                )} 
            </div>
            <div className="characteristicsContainer">
            {dog ? (
      <div>
         <h1>ID: {dog.id}</h1>
         <h1>Name: {dog.name}</h1>
         <h1>Height: {dog.height ? dog.height : 'N/A'} Kg</h1>
         <h1>Weight: {dog.weight ? dog.weight : 'N/A' } Cm</h1>
         <h1>Temperaments: { dog.temperaments ? dog.temperaments.join(', ') : dog.temperament}
         
         </h1>
         <h1>Life span: {dog.life_span ? dog.life_span : 'N/A'}</h1>
      </div>
                ):(
                    <Loading/>
                )}
            </div>
            </div>  
    </div>
    <div>
    <Link  to="/home">
        <button className="buttonReturn" >Return home</button>
    </Link> 
    </div>
    </div>
    )
}

export default Detail