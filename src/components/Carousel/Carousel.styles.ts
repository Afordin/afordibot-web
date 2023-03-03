import { CarouselAnimation } from './Carousel.animation'
import styled from 'styled-components'

export interface CarouselListProps {
	items: number
	current: number
}

export const Carousel = styled.section`
  position: relative;
  width: 100%;
  height: 32rem;
`

export const CarouselButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 4rem;
`

export const CarouselButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  padding: 6px;
  background-color: transparent;
  border: none;
  z-index: 1;
  cursor: pointer;
  & > img {
    width: 100%;
    height: 100%;
  }
  &:last-of-type > img {
    transform: rotate(180deg);
  }
`

export const CarouselItem = styled.li`
  width: 30rem;
  height: 20rem;
  padding: 6px;
  background-image: linear-gradient(to right, #3b82f6, #86efac, #9333ea);
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  transition: margin 0.5s ease-in-out, opacity 0.5s ease-in-out;
  & > * {
    width: calc(30rem - 12px);
    height: 100%;
    background-color: #1e1e1e;
    border-radius: 10px;
  }
`

export const CarouselList = styled.ul<CarouselListProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
  height: 100%;
  list-style: none;
  overflow: hidden;
  & > ${CarouselItem}:first-of-type {
    margin-left: calc(50% - 15rem - ${(props) => props.current * 34}rem);
  }
  ${CarouselAnimation.opacityAnimation}
`
