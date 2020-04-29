import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './DropdownInput.styles';
import { DropdownLabel } from './DropdownLabel'
import { Dropdown } from 'react-native-material-dropdown'

export const DropdownInput = ({
			// style,
			// value,
			// setValue,
			// inputStyle,
			// forwardedRef,
			// editable = true,
			// ...props
		}) => {

			let data = [{
				value: 'WA'
			}, {
				value: 'NY'
			}, {
				value: 'NJ'
			}]

	
			return (
				<View>
					<DropdownLabel
					text='state'
					/>
					<Dropdown 
						data={data}
						style={styles.dropdown}
						inputContainerStyle={{ borderBottomColor: 'transparent' }}
						// renderAccessory={()=> null}
					/>
				</View>
			)

}
