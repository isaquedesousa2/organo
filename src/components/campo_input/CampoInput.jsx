import './CampoInput.css'

const CampoInput = (props) => {
  return (
    <div className="box-input">
      <label>{props.label}</label>
      <input type="text" value={props.valor} onChange={valor => props.aoAlterar(valor.target.value)} required={props.required} placeholder={props.placeholder} />
    </div>
  );
};

export default CampoInput;
