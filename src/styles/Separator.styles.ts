import styled from 'styled-components'

export interface SeparatorProps {
	size?: 'small' | 'medium' | 'large'
}

const separatorSizes = {
	small: '1px',
	medium: '2px',
	large: '3px',
}

export const Separator = styled.div<SeparatorProps>`
	width: 100%;
	height: ${(props) => separatorSizes[props.size || 'medium']};
	margin-top: 10px;
	margin-bottom: 26px;
	background-color: #999999;
	border-radius: 4px;
`
