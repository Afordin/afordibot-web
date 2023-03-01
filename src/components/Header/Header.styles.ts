import styled from 'styled-components'

export const Header = styled.header`
    display: grid;
    place-items: center;
    height: 50rem;
    padding: 2rem;
    background-color: transparent;
`

export const Title = styled.h1`
    width: 100%;
    background-image: linear-gradient(40deg, #fc00ff 0%, #00fffc 45%, #fffc00 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: clamp(2rem, 30vw, 34rem);
    font-family: 'Root Of Life';
    text-align: center;
    transition: filter 0.3s ease-in-out;
    user-select: none;
    &:hover {
        filter: drop-shadow(0 0 1rem #00bbbb);
    }
`
