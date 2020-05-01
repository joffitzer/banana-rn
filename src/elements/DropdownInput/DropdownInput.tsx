import React, {
	useState,
} from 'react';
import {
	View,
	Text,
	Picker,
	PickerProps,
	StyleProp,
	ViewStyle,
	TouchableWithoutFeedback,
	Modal,
	Platform,
} from 'react-native';
import {
	InputLabel,
	Icon,
} from '@elements';
import { LIGHT_YELLOW, WHITE_TRANSPARENT } from '@util/colors';
import styles from './DropdownInput.styles';

interface DropdownInputProps {
	value: PickerProps['selectedValue'];

	setValue: Function;

	label: string;

	data?: Array<string>; // data is required

	style?: StyleProp<ViewStyle>;
}

export const DropdownInput = ({
	value,
	setValue,
	label,
	style,
	data,
}: DropdownInputProps) => {
	const [ isPickerOpen, setIsPickerOpen ] = useState(false);

	const handleOnValueChange = (itemValue, itemIndex) => {
		setValue(itemValue);
	};

	const handlePress = () => {
		setIsPickerOpen(!isPickerOpen);
	};

	return (
		<View style={style}>
			<InputLabel text={label} />
			{
				Platform.OS === 'android' || Platform.OS === 'web'
					? (
						<Picker
							style={[
								styles.picker,
								{
								// height: 300,
								},
							]}
							itemStyle={styles.pickerItemStyle}
							selectedValue={value}
							onValueChange={handleOnValueChange}
						>
							{data && data.map(st => <Picker.Item color="NAVY_BLUE" label={st} value={st} />)}
						</Picker>
					)
					: (
						<View>
							<TouchableWithoutFeedback onPress={handlePress}>
								<View style={[
									styles.dropdownInput,
									{
										flexDirection: 'row',
										justifyContent: 'space-between',
									},
								]}
								>
									<Text style={styles.textColor}>{value}</Text>

									<Icon name="dropdown" size={18} />
								</View>
							</TouchableWithoutFeedback>

							<Modal
								visible={isPickerOpen}
								transparent={true}
								onRequestClose={() => setIsPickerOpen(false)}
							>
								<View
									style={{
										flex: 1,
										backgroundColor: WHITE_TRANSPARENT,
									}}
								>
									<TouchableWithoutFeedback
										onPress={() => { setIsPickerOpen(false); }}
									>
										<View
											style={{
												flex: 1,
											}}
										/>
									</TouchableWithoutFeedback>

									<View
										style={{
											// flex: 1,
											width: '100%',
											backgroundColor: LIGHT_YELLOW,
											position: 'absolute',
											bottom: 0,
										}}
									>
										<Picker
											style={[
												styles.picker,
												{
													// height: 300,
												},
											]}
											itemStyle={styles.pickerItemStyle}
											selectedValue={value}
											onValueChange={handleOnValueChange}
										>
											{data && data.map(st => (
												<Picker.Item
													color="NAVY_BLUE"
													label={st}
													value={st}
													key={st}
												/>
											))}
										</Picker>
									</View>
								</View>
							</Modal>
						</View>
					)
			}
		</View>
	);
};
