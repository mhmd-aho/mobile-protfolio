import { Outlet } from "react-router";
import Header from "/src/components/header";
import Pattern from "/src/components/background";
import {useState,useEffect} from "react";
export default function Layout() {
    const [theme,setTheme] = useState(()=>localStorage.getItem("theme") || "dark")
    useEffect(() => {
        localStorage.setItem("theme",theme);
    }, [theme]);
    return (
        <div className={theme}>
            <Pattern theme={theme}/>
            <Header theme={theme} setTheme={setTheme}/>
            <Outlet/>
        </div>
    )
}