import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress, style, textStyle }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
			<Text style={[styles.text, textStyle]}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#007bff",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 5,
	},
	text: {
		color: "#ffffff",
		fontSize: 16,
	},
});

export default Button;
