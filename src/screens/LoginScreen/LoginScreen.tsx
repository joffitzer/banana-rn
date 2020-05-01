import React, { useState, RefObject, createRef } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	ScrollView,
	View,
	Alert,
	Text,
	TextInput,
	KeyboardAvoidingView,
} from 'react-native';
import useGlobal from '@state';
import {
	Title,
	LinkButton,
	FormTextInput,
	DropdownInput,
} from '@elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import styles from './LoginScreen.styles';

export default () => {
	const { navigate } = useNavigation();
	const [ state, actions ] = useGlobal() as any;
	const { userIdentity } = state;
	const { logIn } = actions;

	const passwordInputRef: RefObject<TextInput> = createRef();

	const [ email, setEmail ] = useState(useNavigationParam('email') ?? '');
	const [ password, setPassword ] = useState(useNavigationParam('password') ?? '');
	const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);

	const clearEmailAndPassword = () => { setEmail(''); setPassword(''); };

	const handleEmailInputSubmit = () => passwordInputRef.current?.focus();

	const handleLogin = async () => {
		const statusCode = await logIn({ email, password });
		switch (statusCode) {
			case 202: {
				await clearEmailAndPassword();
				navigate('LoginSuccessScreen');
				return;
			}
			case 401: Alert.alert('Incorrect email or password'); return;
			case 404: Alert.alert('Server not found - please try again'); return;
			case 500: Alert.alert('Network error - please try again'); return;
			default: Alert.alert(`Server replied with ${statusCode} status code`);
		}
	};

	const handleForgotPassword = () => { console.log('Handle forgot password.'); };

	const [ val, setVal ] = useState();

	const data = [
		'1',
		'2',
		'3',
		'4',
		'5',
	];

	return (
		<SafeAreaView>
			<KeyboardAvoidingView style={styles.outerContainer} behavior="padding">
				<View style={{
					position: 'relative',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				>
					<DropdownInput
						label="test"
						value={val || data[0]}
						setValue={setVal}
						data={data}
						style={{
							width: '30%',
						}}
					/>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};
