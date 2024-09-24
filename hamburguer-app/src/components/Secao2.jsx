export default function Secao2() {
    return(
    <div className="secao2">
        <div className="texto">
            <h1>Hamburguer Gourmet</h1>
        </div>
        <div className="photos">

            <div className="photo-text">
                <div className="photo">
                    <img src="./images/hamb1.jpg" alt="photo1"></img>
                </div>
                <p><strong>X-Australiano:</strong><br></br>pão de gergelim<br></br>preto, bovino, tomate,<br></br>alface,
                picles, cebola  </p>
           
            </div>

            <div className="photo-text">
                <div className="photo">
                    <img src="./images/hamb2.PNG" alt="photo2"></img>
                </div>
                <p><strong>X-Americano:</strong><br></br>pão brioche, bovino, <br></br> tomate, alface, <br></br> cheddar, picles</p>
            </div>

            <div className="photo-text">
                <div className="photo">
                    <img src="./images/hamb3.PNG" alt="photo3"></img>
                </div>
                <p><strong>X-Parmegiana:</strong><br></br> pão brioche, bovino, <br></br> tomate, alface, queijo <br></br> cheddar,
                    cebola
                </p>
            </div>

            <div className="photo-text">
                <div className="photo">
                    <img className="hamburguer" src="./images/hamb4.PNG" alt="photo4"></img>
                </div>
                <p><strong>X-Chicken Burguer:</strong><br></br> pão com gergelim, <br></br> frango, tomate, alface, <br></br> queijo
                    prato, cebola</p>
            </div>
        </div>
    </div>
    );
}
 