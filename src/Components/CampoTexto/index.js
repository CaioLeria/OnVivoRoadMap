import * as GlobalStyles from '../GlobalStyle'; 
import * as Styles from './CampoTextoStyle';

function CampoTexto(props) {
  
    
    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <GlobalStyles.Column>
            <GlobalStyles.H1>
                {props.label}
            </GlobalStyles.H1>
            <Styles.textInput type = {props.type} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </GlobalStyles.Column>
    )
}

export default CampoTexto;