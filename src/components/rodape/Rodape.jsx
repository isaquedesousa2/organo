import './Rodape.css'

const Rodape = () => {
    return (
        <div className='rodape'>
            <div className="imagem">
                <div className='social'>
                    <img src="./images/fb.png" alt="" />
                    <img src="./images/ig.png" alt="" />
                    <img src="./images/tw.png" alt="" />
                </div>
                <div className="logo">
                    <img src="./images/logo.png" alt="" />
                </div>
                <div className="titulo">
                    <span>Desenvolvido por Alura.</span>
                </div>
            </div>
        </div>
    )
}

export default Rodape