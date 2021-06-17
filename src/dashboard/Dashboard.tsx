import React, {useState} from "react"
import {Dimensions, ScrollView, StyleSheet, Text, TextInput, View, Pressable} from "react-native";
import CircularAdd from "../assets/CircularAdd";
import {AddForm} from "../todo/AddForm";

export const Dashboard = () => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View style={styles.container}>
			<AddForm isVisible={modalVisible} setVisibility={setModalVisible}/>
			<ScrollView >
				<Text>Hello</Text>
			</ScrollView>
			<Pressable style={({ pressed }) => [
				{
					backgroundColor: pressed
						? 'rgb(210, 230, 255)'
						: 'white'
				},
				styles.circularAdd
			]} onPress={() => setModalVisible(!modalVisible)} >
				<CircularAdd />
			</Pressable>
		</View>

	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	circularAdd: {
		alignSelf: 'flex-end',
		flexDirection: 'column-reverse'
	},
});

