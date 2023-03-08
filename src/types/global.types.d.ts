export namespace GlobalTypes {
	export type PickRequired<T, U extends keyof T> = Omit<T, U> & Required<Pick<T, U>>
}
