import React from "react";
import { View } from "react-native";
import TaskItem from "./TaskItem";

const MyTaskItemMeta = {
	title: "TaskItem",
	component: TaskItem,
	argTypes: {
		toggleTaskCompletion: { action: "toggled task completion" },
	},
	args: {
		task: {
			id: 1,
			title: "Task 1",
			completed: false,
		},
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
				<Story />
			</View>
		),
	],
};

export default MyTaskItemMeta;

export const Basic = {};

export const Completed = {
	args: {
		task: {
			id: 1,
			title: "Task 1",
			completed: true,
		},
	},
};

export const AnotherExample = {
	args: {
		task: {
			id: 2,
			title: "Task 2",
			completed: false,
		},
	},
};
