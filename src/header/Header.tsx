import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const Header = () => {
	return (<View style={styles.container}>
		<Image width={100} height={100}  source={require('../static/TODO.png')} />
	</View>);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#94E0C0',
		alignItems: 'center',
		justifyContent: 'center',
		height: 95,
	},
});
