import styled from 'styled-components'

export interface RainProps {
	delay: number
	duration: number
	left: number
	size: number
}

export const RainCont = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: hidden;
  z-index: -1;
`

export const Rain = styled.div<RainProps>`
  position: absolute;
  top: -35rem;
  left: ${(props) => `${props.left}px`};
  width: 1px;
  height: ${(props) => `${props.size}px`};
  background-color: #d3d3d3;
  filter: blur(1.2px);
  animation: rain ${(props) => `${props.duration}s`} linear ${(props) => `${props.delay}s`} infinite;
`
