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
}

export const DropdownInput = ({
			value,
			setValue,
			label,
			// data
		}: DropdownInputProps) => {

			let testData = ['WA', 'NY', 'NJ']
	
			return (
				<View>
					<InputLabel text={label} />
					<View style={styles.dropdown}>
						<Picker
							style={styles.picker}
							selectedValue={value}
							onValueChange={setValue}>
								{testData.map(st => {
									return <Picker.Item label={st} value={st} />
								})}
						</Picker>
					</View>
				</View>
			)
}
