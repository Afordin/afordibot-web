import styled from 'styled-components'
import { FontStyles } from 'styles/Font.styles'

export module TitleStyles {
	export const H1 = styled.h1`
    ${FontStyles.RootOfLife}
    font-size: clamp(2rem, 30vw, 30rem);
    text-align: center;
  `

	export const H2 = styled.h2`
    ${FontStyles.Raleway}
    font-size: 6rem;
    letter-spacing: 2px;
  `

	export const H3 = styled.h3`
    ${FontStyles.Raleway}
    font-size: 3rem;
    letter-spacing: 1px;
  `
}
