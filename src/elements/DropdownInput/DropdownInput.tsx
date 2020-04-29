import React, {
	useState
} from 'react';
import { 
	View, 
	Text,
	Picker, 
	PickerProps,
	StyleProp,
	ViewStyle,
	TouchableWithoutFeedback
} from 'react-native';
import {
	InputLabel
} from '@elements';
import styles from './DropdownInput.styles';

interface DropdownInputProps {
	value: PickerProps['selectedValue'];

	setValue: Function;

	label: string;

	data?: Array<string>;

	style?: StyleProp<ViewStyle>;
}

export const DropdownInput = ({
			value,
			setValue,
			label,
			// style,
			// data
		}: DropdownInputProps) => {

			const [isPickerOpen, setIsPickerOpen] = useState(false)

			const handleOnValueChange = (itemValue, itemIndex) => {
				setValue(itemValue)
				setIsPickerOpen(!isPickerOpen)
			}

			const handlePress = () => {
				setIsPickerOpen(!isPickerOpen)
			}

			let testData = ['WA', 'NY', 'NJ']
	
			return (
				<View>
					<InputLabel text={label} />
						<View style={styles.dropdownInput}>
							<TouchableWithoutFeedback onPress={handlePress}>
								<Text style={styles.textColor}>{value}</Text>
							</TouchableWithoutFeedback>
						</View>
						{
							isPickerOpen && 
								<View>
									<Picker
										style={styles.picker}
										itemStyle={styles.pickerItemStyle}
										selectedValue={value}
										onValueChange={handleOnValueChange}>
											{testData.map(st => {
												return <Picker.Item label={st} value={st} />
											})}
											{/* {{data}.map(st => {
												return <Picker.Item label={st} value={st} />
											})} */}
									</Picker>
							</View>
						}
				</View>
			)
}
