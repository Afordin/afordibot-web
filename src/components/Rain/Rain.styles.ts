import styled from 'styled-components'

export interface RainProps {
	delay: number
	duration: number
	left: number
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

export const Rain = styled.i<RainProps>`
  position: absolute;
  width: 2px;
  height: 50px;
  top: -350px;
  background-color: #d3d3d3;
  filter: blur(1.2px);
  animation: rain linear infinite;
  animation-duration: ${(props) => `${props.duration}s`};
  animation-delay: ${(props) => `${props.delay}s`};
  left: ${(props) => `${props.left}px`};
`
