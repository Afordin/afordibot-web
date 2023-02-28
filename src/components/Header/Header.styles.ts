import styled from 'styled-components'

export const Header = styled.header`
    height: 50rem;
    background-color: transparent;
    display: grid;
    place-items: center;
`

export const Title = styled.h1`
    font-size: 45rem;
    width: 140rem;
    text-align: center;
    line-height: 45rem;
    font-family: 'Root Of Life';
    user-select: none;
    background-image: linear-gradient(40deg, #fc00ff 0%, #00fffc 45%, #fffc00 100%);
    color: transparent;
    background-clip: text;
    transition: filter 0.3s ease-in-out;
    &:hover {
        filter: drop-shadow(0 0 1rem #00bbbb);
    }
    `
