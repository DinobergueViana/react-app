import './Card.css'
import {BuyButton} from '../../style';

const Card = (props) => {

    const msg = (produto) => {
        alert('Você efetuou uma compra! Produto: ' + produto)
    }

    return(
        <div className="Card">
            <img src={props.img}/>
            <p>{props.nome}</p>
            <p>R$ {props.preco.toFixed(2).replace(".", ",")}</p>
            <BuyButton onClick={() => msg(props.nome)} isPrimary={true}>Comprar</BuyButton>
        </div>
    )
}

export default Card;