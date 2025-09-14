import * as Styles from './MenuBoxStyle'

function MenuBox(props) {
    return (
        <Styles.Container>
        <Styles.Box>
            <Styles.BoxTitle>{props.title}</Styles.BoxTitle>
        </Styles.Box>
        </Styles.Container>
    )
}

export default MenuBox;