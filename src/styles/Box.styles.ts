import styled, { css } from 'styled-components'

export module BoxStyles {
	export const CenterFlex = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `

	export const Box = styled.div`
    background-image: linear-gradient(to right, #3b82f6, #86efac, #9333ea);
    padding: 6px;
  `
}
