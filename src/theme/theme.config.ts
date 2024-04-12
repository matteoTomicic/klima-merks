/* eslint-disable perfectionist/sort-enums */
export enum Breakpoints {
	TABLET = "768px",
	DESKTOP = "1280px"
}

export enum Device {
	TABLET = `@media (min-width: ${Breakpoints.TABLET})`,
	DESKTOP = `@media (min-width: ${Breakpoints.TABLET})`
}
