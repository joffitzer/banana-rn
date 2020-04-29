import React from 'react';
import { 
	View, 
	Picker, 
	TextInputProps
} from 'react-native';
import {
	InputLabel
} from '@elements';
import styles from './DropdownInput.styles';

interface DropdownInputProps {
	value: TextInputProps['value'];

	setValue: TextInputProps['onChangeText'];

	label: string;

	data?: Array<String>;

	style?: object;

}

export const DropdownInput = ({
			value,
			setValue,
			label,
			// style,
			// data
		}: DropdownInputProps) => {

			let testData = ['WA', 'NY', 'NJ']
	
			return (
				<View>
					<InputLabel text={label} />
					<View style={styles.dropdown}>
						<Picker
							style={styles.picker}
							itemStyle={styles.pickerItemStyle}
							selectedValue={value}
							onValueChange={setValue}>
								{testData.map(st => {
									return <Picker.Item label={st} value={st} />
								})}
								{/* {{data}.map(st => {
									return <Picker.Item label={st} value={st} />
								})} */}
						</Picker>
					</View>
				</View>
			)
}
