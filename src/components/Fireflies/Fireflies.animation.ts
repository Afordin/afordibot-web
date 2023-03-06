import { FireflyAnimation } from './Fireflies.styles'

export module FirefliesAnimation {
	export const chooseAnimation = (height: number): FireflyAnimation => {
		return height < window.innerHeight / 2 ? 'fireflyDown' : 'fireflyUp'
	}

	export const getRandomNumberInclusive = (min: number, max: number) => {
		return Math.random() * (max - min + 1) + min
	}
}
