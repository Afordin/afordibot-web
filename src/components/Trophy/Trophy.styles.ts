import styled from 'styled-components'

export type TrophyPlaces = 'first' | 'second' | 'third'

export interface TrophyProps {
	width?: number
	height?: number
	place: TrophyPlaces
}

const places = {
	first: '#ffd700',
	second: '#c0c0c0',
	third: '#cd7f32',
}

export const Trophy = styled.svg<TrophyProps>`
  fill: none;
  & > path {
    stroke: ${({ place }) => places[place]};
  }
`

export const TrophyPath = styled.path`
  stroke-width: 3.4;
`
