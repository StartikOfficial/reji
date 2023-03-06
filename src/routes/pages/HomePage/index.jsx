import Header from "../../../components/Header";
import GridCard from "../../../components/GridCard";

import "./HomePage.scss";

import suitcase from "../../../asserts/images/suitcase.png";
import lovelySmileEmoji from "../../../asserts/images/lovely-smile-emoji.png";
import loveEyesEmoji from "../../../asserts/images/love-eyes-emoji.png";
import heartEmoji from "../../../asserts/images/heart-emoji.png";
import ledVled from "../../../asserts/images/led-vled.png";
import omskInfo from "../../../asserts/images/omsk-info.png";
import backgroundS1 from "../../../asserts/images/background-s-1.jpg";
import backgroundS2 from "../../../asserts/images/background-s-2.jpg";
import backgroundM1 from "../../../asserts/images/background-m-1.jpg";
import backgroundM2 from "../../../asserts/images/background-m-2.jpg";

export default function HomePage() {
    return (
    <>
        <Header></Header>
        <main>
            <div>
                <button>UX/UI Design</button>
                <button>Web Development</button>
                <button>Analytics</button>
            </div>
            <h1 className="main-header">Мы поможем реализовать ваши бизнес <img className="emoji" src={suitcase} alt="suitcase"/> 
            идеи через дизайн и it<img className="emoji" src={loveEyesEmoji} alt="suitcase"/></h1>
            <div>
                <img src={ledVled} alt="лёд влёд"/>
                <p>Специализируемся на разработке web-сайтов и 
                    интернет-порталов. Cоздаем фирменные стили компаний, 
                    разрабатываем мобильные версии и приложения.</p>
                <img src={omskInfo} alt="омск-инфо"/>
            </div>
            <div className="greetengs">
                <div className="greetings-text">
                    <h3>Здравствуйте</h3>
                    <p>Приветствуем на сайте it студии REJI</p>
                    <span>👋</span>
                </div>
                <div className="grid-cards">
                    <p className="grid-description">Мы используем индивидуальный подход и набор решений при разработке 
                        сайтов — от предварительного изучения, анализа и проектирования
                        веб-сайтов до создания интерактивных презентаций с 
                        описанием анимированных решений.️</p>
                        <img className="emoji" src={heartEmoji} alt="heart"/>
                    <GridCard>
                        <div className="circle-50">
                            <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11V2C1 1.44772 1.44772 1 2 1H11.5C12.0523 1 12.5 1.44771 12.5 2V11C12.5 11.5523 12.0523 12 11.5 12H2C1.44772 12 1 11.5523 1 11Z" fill="#589CFF"/>
                                <path d="M17.1679 9.25193L15.4056 6.60841C15.164 6.24607 15.1847 5.76907 15.4568 5.42901L17.2191 3.22609C17.8096 2.48795 19 2.9055 19 3.85078V8.69722C19 9.68663 17.7168 10.0752 17.1679 9.25193Z" fill="#589CFF"/>
                                <path d="M1 11V2C1 1.44772 1.44772 1 2 1H11.5C12.0523 1 12.5 1.44771 12.5 2V11C12.5 11.5523 12.0523 12 11.5 12H2C1.44772 12 1 11.5523 1 11Z" stroke="#589CFF" stroke-linejoin="round"/>
                                <path d="M17.1679 9.25193L15.4056 6.60841C15.164 6.24607 15.1847 5.76907 15.4568 5.42901L17.2191 3.22609C17.8096 2.48795 19 2.9055 19 3.85078V8.69722C19 9.68663 17.7168 10.0752 17.1679 9.25193Z" stroke="#589CFF" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h4 style={{fontWeight:"600", fontSize:"18px"}}>Чем мы можем помочь вашему бизнесу?</h4>
                        <img className="emoji" src={heartEmoji} alt="heart"/>
                        <p>Комплексный подход к проектированию прототипов, мобильных версий
                            и программной разработке,
                            учитывающий особенности бизнеса!
                        </p>
                    </GridCard>
                    <GridCard imageBackground={backgroundM1}>
                        <h4>Наши проекты</h4>
                        <p>Что мы успели сделать за 3 года  продуктивной работы</p>
                        <span>5 кейсов</span>
                        <div className="circle-40 blue">
                            <svg width="57" height="16" viewBox="0 0 57 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                            </svg>
                        </div>
                    </GridCard>
                </div >
                
            </div>
            <h2>
                <span style={{color: "#4A6CED", fontSize: "40px", fontWeight: "700", lineHeight: "47.99px"}}>
                Как мы работаем</span> над проектом
            </h2>
            <ul className="carousel-tags">
                <li>Аналитика</li>
                <li>Проектирование</li>
                <li>Дизайн</li>
                <li>Разработка</li>
                <li>Тестировка</li>
            </ul>
            <ul className="carousel">
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-analytics">
                        <h5>Аналитика</h5>
                    </div>
                </li>
                
            </ul>
        </main>
    </>
    )
}