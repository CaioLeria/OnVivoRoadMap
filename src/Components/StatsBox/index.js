import * as Styles from './StatsBoxStyles'
import { Column } from '../GlobalStyle';

const StatsBox = (props) => {
    return (
        <Styles.Container>
        <Styles.Box>
            <Styles.BoxTitle>Seu Progresso:</Styles.BoxTitle>
            <Column>
            <Styles.ValuesArea>
                <Styles.ValuesLabel>Cursos Concluídos:</Styles.ValuesLabel>
                <Styles.Values>3</Styles.Values>
            </Styles.ValuesArea>
            <Styles.ValuesArea>
                <Styles.ValuesLabel>Horas Estudadas:</Styles.ValuesLabel>
                <Styles.Values>150</Styles.Values>
            </Styles.ValuesArea>
            <Styles.ValuesArea>
                <Styles.ValuesLabel>Projetos Finalizados:</Styles.ValuesLabel>
                <Styles.Values>2</Styles.Values>
            </Styles.ValuesArea>
            </Column>
        </Styles.Box>
        </Styles.Container>
    )
}

export default StatsBox;