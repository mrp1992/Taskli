import React from "react";
import {Modal, StyleSheet, Text, View} from "react-native";

export const AddForm = ({isVisible, setVisibility}: {isVisible: boolean, setVisibility: (visible: boolean) => void}) => {
	return (
		<Modal visible={isVisible} animationType={'slide'} onRequestClose={() => setVisibility(false)}>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: 368, height: 311 }}>
				<Text>Modal will be here</Text>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 50,
		paddingRight: 10,
		borderWidth: 1,
		borderColor: '#00C6AB',

	},
	circularAdd: {
		alignSelf: 'flex-end',
		flexDirection: 'column-reverse'
	},
});
