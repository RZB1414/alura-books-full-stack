import OpcoesHeader from '../OpcoesHeader';
import Logo from '../Logo'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components';

const Header = () => {

    const HeaderContainer = styled.header`
        background-color: #FFF;
        display: flex;
        justify-content: center;
    `

    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header