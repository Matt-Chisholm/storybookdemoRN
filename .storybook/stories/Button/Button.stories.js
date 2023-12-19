// Button.stories.js
import React from "react";
import { View } from "react-native";
import Button from "./Button";

export default {
	title: "Button",
	component: Button,
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
				<Story />
			</View>
		),
	],
};

export const Basic = (args) => <Button {...args} />;
Basic.args = {
	title: "Button",
	onPress: () => console.log("Button pressed"),
};

export const CustomColor = (args) => <Button {...args} />;
CustomColor.args = {
	title: "Custom Color",
	onPress: () => console.log("Button pressed"),
	style: { backgroundColor: "green" },
};
