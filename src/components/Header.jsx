import { LogoName, LogoIcon } from "./svgs"

export default function Header() {
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
        </nav>
    </header>
    )
}