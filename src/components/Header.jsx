import { LogoName, LogoIcon } from "./svgs";
import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        const headerStyle = document.querySelector("header").style;
        const handleScroll = event => {
            if (window.scrollY === 0) {
                headerStyle.boxShadow = "0 0 0 0";
                headerStyle.background = "#F2F5F5";
            } else {
                headerStyle.background = "white";
                headerStyle.boxShadow = "0px 0px 30px 0px #D3D6D6";
            }
        };

        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);
    
    function blackout() {
        const checked = document.getElementsByTagName("input")[0].checked;
        const main = document.getElementsByTagName("main")[0];
        if (checked) {
            main.style.opacity = 0.3;
            main.style.userSelect = "none";
            main.style.pointerEvents = "none"
        }
        else {
            main.style.opacity = 1; 
            main.style.userSelect = "auto"; 
            main.style.pointerEvents = "auto"
        }
    }

    return (
    <header>
        <input type="checkbox" onClick={() => blackout()}></input>
        <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>
        <a className="logo flex-row-center" href="/">
            <LogoIcon/>
            <LogoName/>
        </a>
        <nav className="nav flex-row-center">
            <a href="#">Промо</a>
            <a href="#">Услуги</a>
            <a href="#">Портфолио</a>
            <a href="#">Стек Технологий</a>
            <a href="#">План работы</a>
            <a href="#">Контакты</a>
            <div className="language">
                <span>EN</span>
                <span>RU</span>
            </div>
        </nav>
    </header>
    )
}