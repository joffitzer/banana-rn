import { StyleSheet } from 'react-native';
import typography from '@util/typography';
import * as colors from '@util/colors';

const INPUT_PADDING_HORIZONTAL = 10;
const INPUT_HEIGHT = 48;

export default StyleSheet.create({
	dropdown: {
		...typography.body1,
		width: 100,
		top: -36,
		height: INPUT_HEIGHT,
		marginTop: 5,
		paddingBottom: 5,
		paddingHorizontal: INPUT_PADDING_HORIZONTAL,
		paddingVertical: 5,
		backgroundColor: colors.LIGHT_YELLOW,
		borderWidth: 2,
		borderStyle: 'solid',
		// Transparent border to prevent box-size adjustments when error border is revealed.
		borderColor: 'transparent'
	}
});