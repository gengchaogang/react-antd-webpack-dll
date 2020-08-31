import React, { useContext } from "react";
import Context from '../ThemeContext';
import Logo from "../../../public/react.jpg"
export default function Child(props) {
  const Themes = useContext(Context);
  return <div style={{ ...Themes }}>
    <img src={Logo} />
  </div>;
}