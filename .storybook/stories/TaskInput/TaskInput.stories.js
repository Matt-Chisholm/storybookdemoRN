import React from "react";
import { View } from "react-native";
import TaskInput from "./TaskInput";

const MyTaskInputMeta = {
	title: "TaskInput",
	component: TaskInput,
	argTypes: {
		onChangeText: { action: "changed text" },
	},
	args: {
		value: "",
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
				<Story />
			</View>
		),
	],
};

export default MyTaskInputMeta;

export const Basic = {};
