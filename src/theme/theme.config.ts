/* eslint-disable perfectionist/sort-enums */
export enum Breakpoints {
	SM = "576px",
	MD = "768px",
	LG = "992px",
	XL = "1200px",
	XXL = "1400px"
}

export enum Device {
	SM = `@media (min-width: ${Breakpoints.SM})`,
	MD = `@media (min-width: ${Breakpoints.MD})`,
	LG = `@media (min-width: ${Breakpoints.LG})`,
	XL = `@media (min-width: ${Breakpoints.XL})`,
	XXL = `@media (min-width: ${Breakpoints.XXL})`
}
