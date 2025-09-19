import * as Styles from './MenuBoxStyle'

function MenuBox(props) {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
        console.log(`Clicou em: ${props.title}`);
        // Aqui você pode adicionar a navegação ou ação específica
    };

    return (
        <Styles.Container>
        <Styles.Box onClick={handleClick}>
            <Styles.BoxTitle>{props.title}</Styles.BoxTitle>
        </Styles.Box>
        </Styles.Container>
    )
}

export default MenuBox;