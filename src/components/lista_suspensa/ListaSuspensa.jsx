import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="box-input">
            <label>Time</label>
            <select onChange={valor => props.aoAlterar(valor.target.value)}>
                <option value=''></option>
                {   
                    props.itens.map((item, index) => <option key={index} value={item.nome}>{item.nome}</option>)
                }
            </select>
        </div>
    )
}

export default ListaSuspensa
