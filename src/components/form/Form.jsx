import React, { useState } from 'react'
import './Form.css'
import ListaSuspensa from '../lista_suspensa/ListaSuspensa'
import CampoInput from '../campo_input/CampoInput'

const Form = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        const colaborador = {
            nome,
            cargo,
            imagem,
            time,
        } 
        props.adicionarNovoColaborador(colaborador)

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        
    }

  return (
    <div className='form-container'>
        <form onSubmit={aoSalvar}>
            <h1>Preencha os dados para criar o card do colaborador</h1>
            <div className="form-inputs">
                <CampoInput 
                label='Nome' 
                required={true} 
                placeholder='Digite seu nome'
                valor={nome}
                aoAlterar={valor => setNome(valor)}
                />
                <CampoInput
                label='Cargo' 
                required={true} 
                placeholder='Digite seu cargo'
                valor={cargo}
                aoAlterar={valor => setCargo(valor)}
                />
                <CampoInput 
                label='Imagem' 
                required={true} 
                placeholder='Informeo endereço da imagem'
                valor={imagem}
                aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa aoAlterar={valor => setTime(valor)} itens={props.times}/>
            </div>
            <button>Criar card</button>
        </form>
    </div>
  )
}

export default Form