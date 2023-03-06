import styled from 'styled-components'

export type FireflyAnimation = 'fireflyDown' | 'fireflyUp'

export interface FireflyProps {
	top: number
	left: number
	opacity: number
	blur: number
	spread: number
	scale: number
	animation: FireflyAnimation
	duration: number
	delay: number
}

export const Fireflies = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: hidden;
  z-index: -1;
`

export const Firefly = styled.div<FireflyProps>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: 4px;
  height: 4px;
  background-color: #f6e60a;
  opacity: ${(props) => props.opacity};
  border-radius: 100%;
  box-shadow: ${(props) => `0 0 ${props.blur}px ${props.spread}px #ffffff`};
  transform: ${(props) => `scale(${props.scale})`};
  animation: ${(props) => `${props.animation} ${props.duration}s linear ${props.delay}s infinite alternate`};
`
