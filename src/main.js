// @flow

import './mixins';

declare var _: Underscore;

const foo = (mouse: string): string => {
	return 'mouse ' + mouse;
}

console.log(_.first(['hey', 'now']));

console.log(_.sumArray([1, 4, 5]));
