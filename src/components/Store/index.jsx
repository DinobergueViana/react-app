import './Store.css'
import Card from '../Card';

const Store = () => {

    const produto = [
        { nome: "Carro", preco: 33233, img: "https://cdn-motorshow-ssl.akamaized.net/wp-content/uploads/sites/2/2019/08/3_ms430_mercado-suvs1.jpg" },
        { nome: "Moto", preco: 5532, img: "https://www.honda.com.br/motos/sites/hda/files/styles/product_860x550/public/2018-12/cores_pop110i_branca_0.png" },
        { nome: "Patinete", preco: 200, img: "https://decathlonpro.vteximg.com.br/arquivos/ids/200335-500-500/scooter-town-7xl-black-v1-1.jpg?v=636549227523700000" },
        { nome: "Patinete", preco: 200, img: "https://decathlonpro.vteximg.com.br/arquivos/ids/200335-500-500/scooter-town-7xl-black-v1-1.jpg?v=636549227523700000" },
        { nome: "Patinete", preco: 200, img: "https://decathlonpro.vteximg.com.br/arquivos/ids/200335-500-500/scooter-town-7xl-black-v1-1.jpg?v=636549227523700000" }
    ]

    function getCard() {
        return produto.map((produto, index) =>
            <Card key={index} img={produto.img} nome={produto.nome} preco={produto.preco}>
                Descrição do produto
            </Card>
        )
    }

    return (
        <section className="App-store">
            {getCard()}
        </section>
    )
}

export default Store;