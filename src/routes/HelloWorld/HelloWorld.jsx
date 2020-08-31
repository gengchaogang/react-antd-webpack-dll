import React from "react";
import styles from "./style.less";
import ThemeContext from './ThemeContext'
import Child from './components/Child'
const Themes = {
	dark: {
		color: "#000"
	},
	red: {
		color: "red"
	}
}
export default function HelloWorld(props) {
	console.log(props);
	return <div className={styles.main}>
		<ThemeContext.Provider value={Themes.dark}>
			<Child />
		</ThemeContext.Provider>
	</div>;
}
