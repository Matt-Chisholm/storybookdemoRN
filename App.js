import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MainScreen from "./screens/MainScreen";

// Storybook import
import StorybookUIRoot from "./.storybook";

// Flag to toggle between Storybook and the main app
const SHOW_STORYBOOK = true;

const App = () => {
	if (SHOW_STORYBOOK) {
		return <StorybookUIRoot />;
	}

	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<MainScreen />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;
