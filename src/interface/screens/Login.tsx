import styled from "styled-components/native"
import { signupHeader } from "../../assets/images"

const LoginScreen = () => {
    return (
        <HeaderContainer>
            <HeaderImage source={signupHeader} />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const HeaderImage = styled.Image`
    width: 125px;
    height: 125px;

    border-radius: 72.5px;
`

export default LoginScreen