import * as GlobalStyles from '../GlobalStyle'; 
import * as Styles from './CampoTextoStyle';

function CampoTexto(props) {
  
    
    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <GlobalStyles.colounm>
            <GlobalStyles.h1>
                {props.label}
            </GlobalStyles.h1>
            <Styles.textInput value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </GlobalStyles.colounm>
    )
}

export default CampoTexto;