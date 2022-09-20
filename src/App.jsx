import './global.css';
import Banner from './components/banner/Banner';
import Form from './components/form/Form';
import { useState } from 'react'
import Time from './components/time/Time';
import Rodape from './components/rodape/Rodape';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#e8f8ff',
      corSecundaria: '#82cffa'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#f0f8e2',
      corSecundaria: '#a6d157'
    },
    {
      nome: 'Devops',
      corPrimaria: '#fde7e8',
      corSecundaria: '#e06b69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#fae9f5',
      corSecundaria: '#db6ebf'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#fff5d9',
      corSecundaria: '#ffba05'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ffeedf',
      corSecundaria: '#ff8a29'
    },
]

  const adicionarNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  return (
    <div>
      <Banner />
      <Form times={times} adicionarNovoColaborador={colaborador => adicionarNovoColaborador(colaborador)}/>
      {
        times.map(time => 
        <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => time.nome === colaborador.time)}
        />)
      }
      <Rodape />
    </div>
  );
}

export default App;
