import * as Styles from './SuspendedListStyles'
import * as GlobalStyles from '../GlobalStyle'

const SuspendedList = (props) => {
    return (
        <GlobalStyles.Column>
            <GlobalStyles.H1>{props.label}</GlobalStyles.H1>
            <Styles.Select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </Styles.Select>
        </GlobalStyles.Column>
    )
}

export default SuspendedList