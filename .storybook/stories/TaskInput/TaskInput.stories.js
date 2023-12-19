import React from "react";
import { storiesOf } from "@storybook/react-native";
import TaskInput from "./TaskInput";

storiesOf("TaskInput", module).add("default", () => (
	<TaskInput value='' onChangeText={() => {}} />
));
