import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CalenderScreen from "./screens/CalenderScreen";
import ProgressScreen from "./screens/ProgressScreen";
import SettingsScreen from "./screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: { backgroundColor: "#FFFF", height: 80, size: 30 },
				headerStyle: { backgroundColor: "#ffff" },
				headerTintColor: "black",
				tabBarInactiveTintColor: "grey",
				tabBarActiveTintColor: "#FFDB58",
				tabBarActiveBackgroundColor: "#ffff", // debating on whether to keep this or not
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Calendar"
				component={CalenderScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Fontisto name="date" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Progress"
				component={ProgressScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="linechart" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={SettingsScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="user" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
