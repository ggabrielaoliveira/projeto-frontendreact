import { CardContainer } from "./styles"

function Card (props) {
    // console.log(props);
    const{ img, name , preco} = props
    return(

        <CardContainer>
            <img src={img} alt={name}/>
            <h2>{name}</h2>
            <p>{preco}</p>
        </CardContainer>
    )
}
export default Card