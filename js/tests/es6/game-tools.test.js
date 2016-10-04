const test = require('tape').test;
import GameTools from '../../es5/game-tools';

test('The getRandomArrayInRangeOfSize method', t => {

	{ //check type of array
		const isArray = Array.isArray(GameTools.getRandomArrayInRangeOfSize(0, 3,20));
		t.ok(isArray, 'should return Array for correct data');
	}

	{ //check length of array
		const lengthArg = 20;

		const actualLength = GameTools.getRandomArrayInRangeOfSize(0, 3, lengthArg).length;
		const expectedLength = lengthArg;

		t.equal(actualLength, expectedLength, 'should return proper length');
	}

	{ //check proper output

		const arg1 = 1;
		const arg2 = 4;

		const actual = GameTools.getRandomArrayInRangeOfSize(arg1, arg2, 10);

		let expected;

		t.ok(1,'should return proper output: ');
		for (let i = 0; i < actual.length; ++i) {
			expected = (actual[i] === 1 ||
				actual[i] === 2 ||
				actual[i] === 3 ||
				actual[i] === 4);

			t.ok(expected, `Element number ${i} of array: ${actual[i]} should be equal to 1,2,3 or 4`);
		}
	}

	t.end();
});
