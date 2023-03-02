import { CarouselListProps } from './Carousel.styles'

export module CarouselAnimation {
	export const opacityAnimation = (props: CarouselListProps) => {
		const itemArray = new Array(props.items).fill(null)
		const opacityMultiplier = (index: number) => Math.abs(props.current - index)
		const opacityCalc = (index: number) => 1 - opacityMultiplier(index) * 0.3

		return itemArray.reduce(
			(acc, _, index) => `${acc}& > li:nth-of-type(${index + 1}) {
        opacity: ${opacityCalc(index)};
      }`,
			'',
		)
	}
}
