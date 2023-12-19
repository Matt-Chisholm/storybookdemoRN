import React from "react";
import { storiesOf } from "@storybook/react-native";
import TaskItem from "./TaskItem";

const task = { id: "1", title: "Sample Task", completed: false };

storiesOf("TaskItem", module).add("default", () => (
	<TaskItem task={task} toggleTaskCompletion={() => {}} />
));
