// @flow

const sumArray = (items: Array<number>): number => items.reduce((prev, curr) => prev + curr, 0);

_.mixin({
	sumArray,
})