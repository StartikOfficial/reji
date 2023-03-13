import Header from "../../../components/Header";
import GridCard from "../../../components/GridCard";
import GridCardLarge from "../../../components/GridCardLarge";
import GridCardMedium from "../../../components/GridCardMedium";
import GridCardSmall from "../../../components/GridCardSmall";

import "./HomePage.scss";

import suitcase from "../../../asserts/images/suitcase.png";
import lovelySmileEmoji from "../../../asserts/images/lovely-smile-emoji.png";
import loveEyesEmoji from "../../../asserts/images/love-eyes-emoji.png";
import heartEmoji from "../../../asserts/images/heart-emoji.png";
import wavingHandEmoji from "../../../asserts/images/waving-hand-emoji.png";
import ledVled from "../../../asserts/images/led-vled.png";
// import omskInfo from "../../../asserts/images/omsk-info.png";
// import omskInfo from "../../../asserts/images/omsk-info-cropped.png";
import backgroundS1 from "../../../asserts/images/background-s-1.jpg";
import backgroundS2 from "../../../asserts/images/background-s-2.jpg";
import backgroundM1 from "../../../asserts/images/background-m-1.jpg";
import backgroundM2 from "../../../asserts/images/background-m-2.jpg";
import backgroundL1 from "../../../asserts/images/background-l-1.jpg";

export default function HomePage() {
    return (
    <>
        <Header></Header>
        <main>
            <div className="sections flex-row-center">
                <div>UX/UI Design</div>
                <div>Web Development</div>
                <div>Analytics</div>
            </div>
            <h1 className="main-header">
                Мы поможем реализовать ваши бизнес 
                <div className="emoji-wrapper">
                    <img src={suitcase} alt="suitcase"/> 
                </div>
                идеи через дизайн и it
                <div className="emoji-wrapper">
                    <img src={loveEyesEmoji} alt="love-eyes"/>
                </div>
            </h1>
            <div className="examples-of-work">
                <img src={ledVled} height="100%" alt="led-vled"/>
                <div>
                    <p className="examples-of-work-text">Специализируемся на разработке web-сайтов и 
                        интернет-порталов. Cоздаем фирменные стили компаний, 
                        разрабатываем мобильные версии и приложения.</p>
                    <div id="omsk-info"></div>
                    {/* <img width="100%" src={omskInfo} alt="omsk-info"/> */}
                </div>
            </div>
            <div className="greetings">
                <div>
                    <div className="greetings-header">
                        <div className="greetings-text">
                            <h3>Здравствуйте</h3>
                            <p>Приветствуем на сайте it студии REJI</p>
                        </div>
                    
                        <img src={wavingHandEmoji} alt="waving-hand"/>
                    </div>
                    <div className="grid-cards">
                    <p className="grid-description">Мы используем индивидуальный подход и набор решений при разработке 
                        сайтов — от предварительного изучения, анализа и проектирования
                        веб-сайтов до создания интерактивных презентаций с 
                        описанием анимированных решений.️</p>
                    <GridCardLarge imageBackground={backgroundL1} className="grid-card grid-card-large grid-card-background">
                            <h4>Аналитика вашего проекта</h4>
                            <p>Оставьте заявку сейчас и получите готовый аналитический отчет о вашем сайте на почту.</p>
                            <span className="price">490₽</span>
                            <button type="submit" className="submit-btn flex-row-center">
                                <span>Оставить заявку</span>
                                <svg width="55px" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="#FF8544"/>
                                </svg>
                            </button>
                    </GridCardLarge>
                    <GridCard className="grid-card">
                        <div className="grid-card-video">
                            <div className="flex-row-center">
                                <div>
                                    <div className="circle-50">
                                        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11V2C1 1.44772 1.44772 1 2 1H11.5C12.0523 1 12.5 1.44771 12.5 2V11C12.5 11.5523 12.0523 12 11.5 12H2C1.44772 12 1 11.5523 1 11Z" fill="#589CFF"/>
                                            <path d="M17.1679 9.25193L15.4056 6.60841C15.164 6.24607 15.1847 5.76907 15.4568 5.42901L17.2191 3.22609C17.8096 2.48795 19 2.9055 19 3.85078V8.69722C19 9.68663 17.7168 10.0752 17.1679 9.25193Z" fill="#589CFF"/>
                                            <path d="M1 11V2C1 1.44772 1.44772 1 2 1H11.5C12.0523 1 12.5 1.44771 12.5 2V11C12.5 11.5523 12.0523 12 11.5 12H2C1.44772 12 1 11.5523 1 11Z" stroke="#589CFF" stroke-linejoin="round"/>
                                            <path d="M17.1679 9.25193L15.4056 6.60841C15.164 6.24607 15.1847 5.76907 15.4568 5.42901L17.2191 3.22609C17.8096 2.48795 19 2.9055 19 3.85078V8.69722C19 9.68663 17.7168 10.0752 17.1679 9.25193Z" stroke="#589CFF" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <span className="video-time">02:23</span>
                                </div>
                                <h4>Чем мы можем помочь вашему бизнесу?</h4>
                                <img className="emoji" src={heartEmoji} alt="heart"/>
                            </div>
                            <p>Комплексный подход к проектированию прототипов, мобильных версий
                                и программной разработке,
                                учитывающий особенности бизнеса!
                            </p>
                        </div>
                        
                    </GridCard>
                    <GridCardSmall imageBackground={backgroundS1} className="grid-card grid-card-small grid-card-background">
                            <img src={lovelySmileEmoji} alt="" />
                            <p>В работе применяем методологии waterfall или agile</p>                        
                    </GridCardSmall>
                    <GridCardMedium imageBackground={backgroundM1} className="grid-card grid-card-medium-cases grid-card-background">
                        <h4>Наши проекты</h4>
                        <p>Что мы успели сделать за 3 года  продуктивной работы</p>
                        <div className="flex-row-center">
                            <span>5 кейсов</span>
                            <div className="circle-40 blue">
                                <svg width="55px" height="16" viewBox="0 0 57 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                                </svg>
                            </div>
                        </div>   
                    </GridCardMedium>
                    <div className="grid-row-3">
                        <GridCardSmall imageBackground={backgroundS2} className="grid-card grid-card-small grid-card-background">
                            <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9452 14.4967C24.5426 14.0916 24.0542 13.8892 23.479 13.8892H22.7896V9.72224C22.7896 7.06021 21.8413 4.77451 19.9441 2.86475C18.0471 0.954917 15.7767 0 13.1319 0C10.4872 0 8.21645 0.954917 6.31957 2.86467C4.42238 4.77451 3.47409 7.06014 3.47409 9.72224V13.8892H2.78434C2.20965 13.8892 1.7209 14.0916 1.31845 14.4967C0.915994 14.9016 0.714844 15.3936 0.714844 15.9726V28.4727C0.714844 29.0512 0.91607 29.5434 1.31845 29.9486C1.7209 30.3533 2.20965 30.556 2.78434 30.556H23.4796C24.0547 30.556 24.5431 30.3535 24.9457 29.9486C25.3478 29.5434 25.5493 29.0512 25.5493 28.4727V15.9724C25.5496 15.3938 25.3478 14.9019 24.9452 14.4967ZM18.6507 13.8892H7.61323V9.72224C7.61323 8.18874 8.15227 6.87931 9.23013 5.79441C10.3081 4.70937 11.6087 4.16696 13.1322 4.16696C14.6558 4.16696 15.9561 4.70929 17.0341 5.79441C18.1117 6.87923 18.6507 8.18874 18.6507 9.72224V13.8892Z" fill="white"/>
                            </svg>
                            <p>Наши продукты надежно защищены</p>
                        </GridCardSmall>
                        <GridCardMedium imageBackground={backgroundM2} className="grid-card grid-card-medium grid-card-background">
                            
                            <h4>Проектируем</h4>
                            <p>рациональный дизайн для цифровых продуктов</p>
                            <div className="circle-40">
                                <svg width="55px" height="16" viewBox="0 0 57 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="#447BC7"/>
                                </svg>
                            </div>
                            
                        </GridCardMedium>
                        <GridCard className="grid-card">
                            <div className="grid-card-two-video">
                                <div className="flex-row-center">
                                        <div className="circle-50">
                                            <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 11V2C1 1.44772 1.44772 1 2 1H11.5C12.0523 1 12.5 1.44771 12.5 2V11C12.5 11.5523 12.0523 12 11.5 12H2C1.44772 12 1 11.5523 1 11Z" fill="#589CFF"/>
                                                <path d="M17.1679 9.25193L15.4056 6.60841C15.164 6.24607 15.1847 5.76907 15.4568 5.42901L17.2191 3.22609C17.8096 2.48795 19 2.9055 19 3.85078V8.69722C19 9.68663 17.7168 10.0752 17.1679 9.25193Z" fill="#589CFF"/>
                                                <path d="M1 11V2C1 1.44772 1.44772 1 2 1H11.5C12.0523 1 12.5 1.44771 12.5 2V11C12.5 11.5523 12.0523 12 11.5 12H2C1.44772 12 1 11.5523 1 11Z" stroke="#589CFF" stroke-linejoin="round"/>
                                                <path d="M17.1679 9.25193L15.4056 6.60841C15.164 6.24607 15.1847 5.76907 15.4568 5.42901L17.2191 3.22609C17.8096 2.48795 19 2.9055 19 3.85078V8.69722C19 9.68663 17.7168 10.0752 17.1679 9.25193Z" stroke="#589CFF" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    <div>
                                        <h4>Как мы ведем проекты</h4>
                                        <span className="video-time">05:44</span>
                                    </div>
                                    <img className="emoji" src={heartEmoji} alt="heart"/>
                                </div>
                                <div className="flex-row-center">
                                        <div className="circle-50">
                                            <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 11V2C1 1.44772 1.44772 1 2 1H11.5C12.0523 1 12.5 1.44771 12.5 2V11C12.5 11.5523 12.0523 12 11.5 12H2C1.44772 12 1 11.5523 1 11Z" fill="#589CFF"/>
                                                <path d="M17.1679 9.25193L15.4056 6.60841C15.164 6.24607 15.1847 5.76907 15.4568 5.42901L17.2191 3.22609C17.8096 2.48795 19 2.9055 19 3.85078V8.69722C19 9.68663 17.7168 10.0752 17.1679 9.25193Z" fill="#589CFF"/>
                                                <path d="M1 11V2C1 1.44772 1.44772 1 2 1H11.5C12.0523 1 12.5 1.44771 12.5 2V11C12.5 11.5523 12.0523 12 11.5 12H2C1.44772 12 1 11.5523 1 11Z" stroke="#589CFF" stroke-linejoin="round"/>
                                                <path d="M17.1679 9.25193L15.4056 6.60841C15.164 6.24607 15.1847 5.76907 15.4568 5.42901L17.2191 3.22609C17.8096 2.48795 19 2.9055 19 3.85078V8.69722C19 9.68663 17.7168 10.0752 17.1679 9.25193Z" stroke="#589CFF" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    <div>
                                        <h4>Как мы делаем аналитику</h4>
                                        <span className="video-time">08:11</span>
                                    </div>
                                    <img className="emoji" src={heartEmoji} alt="heart"/>
                                </div>
                            </div>
                            
                        </GridCard> 
                    </div>
                    
                    
                    </div >
                </div>
                
                
                
            </div>
            
            <h2 id="h2-how-we-work">
                <span id="span-how-we-work">
                Как мы работаем</span> над проектом
            </h2>
            <ul className="carousel-tags flex-row-center">
                <li className="active">Аналитика</li>
                <li>Проектирование</li>
                <li>Дизайн</li>
                <li>Разработка</li>
                <li>Тестирование</li>
            </ul>
            <ul className="carousel">
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-analytics">
                        <h5>Аналитика</h5>
                        <span className="carousel-card-term">срок: 7 дней</span>
                        <ul className="carousel-card-description">
                            <li>UX/UI аналитика</li>
                            <li>Аналитика конкурентов</li>
                            <li>Аналитика пользователей</li>
                            <li>Составление мудборда</li>
                        </ul>
                        <div className="carousel-card-tag flex-row-center">
                            <div className="circle-8"></div>
                            <span>Подготовка</span>
                        </div>
                    </div>
                </li>
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-planning">
                        <h5>Разработка структуры/прототипа сайта</h5>
                        <span className="carousel-card-term">срок: 14 дней</span>
                        <p className="carousel-card-description">На данном этапе мы вносим в проект все ваши 
                        желания и потребности вашего бизнеса.</p>
                        <a className="carousel-card-example flex-row-center" href="#">
                            <span>Пример: смотреть</span>
                            <svg width="55px" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="carousel-card-tag flex-row-center">
                            <div className="circle-8"></div>
                            <span>Проектирование</span>
                        </div>
                    </div>
                </li>
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-planning">
                        <h5>Копирайтинг</h5>
                        <span className="carousel-card-term">срок: 5 дней</span>
                        <p className="carousel-card-description">На данном этапе мы наполняем
                            текстом ваш будущий онлайн проект.</p>
                        <a className="carousel-card-example flex-row-center" href="#">
                            <span>Пример: смотреть</span>
                            <svg width="55px" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="carousel-card-tag flex-row-center">
                            <div className="circle-8"></div>
                            <span>Проектирование</span>
                        </div>
                    </div>
                </li>
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-planning">
                        <h5>Отрисовка прототипа моб. версий</h5>
                        <span className="carousel-card-term">срок: 4 дня</span>
                        <p className="carousel-card-description">Адаптируем ваш будущий онлайн проект 
                        под все мобильные устройства.</p>
                        <a className="carousel-card-example flex-row-center" href="#">
                            <span>Пример: смотреть</span>
                            <svg width="55px" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="carousel-card-tag flex-row-center">
                            <div className="circle-8"></div>
                            <span>Проектирование</span>
                        </div>
                    </div>
                </li>
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-design">
                        <h5>Разработка дизайн макета в Figma</h5>
                        <span className="carousel-card-term">срок: 3 дня</span>
                        <p className="carousel-card-description">Проектируем дизайнерские решения для ваших 
                        бизнес задач и делаем продукт удобным для пользователя.</p>
                        <a className="carousel-card-example flex-row-center" href="#">
                            <span>Пример: смотреть</span>
                            <svg width="55px" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="carousel-card-tag flex-row-center">
                            <div className="circle-8"></div>
                            <span>Дизайн</span>
                        </div>
                    </div>
                </li>
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-design">
                        <h5>Визуализация UX/UI взаимодействий с платформой</h5>
                        <span className="carousel-card-term">срок: 5 дней</span>
                        <p className="carousel-card-description">Разработка иконок, кнопок, анимаций переходов, 
                        и различных сценариев пользовательского опыта.</p>
                        <a className="carousel-card-example flex-row-center" href="#">
                            <span>Пример: смотреть</span>
                            <svg width="55px" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="carousel-card-tag flex-row-center">
                            <div className="circle-8"></div>
                            <span>Дизайн</span>
                        </div>
                    </div>
                </li>
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-design">
                        <h5>Разработка адаптивной версии дизайн макета</h5>
                        <span className="carousel-card-term">срок: 3 дня</span>
                        <p className="carousel-card-description">Разработка страниц ошибок, разработка 404 страницы. 
                        Этап завершен, согласование с клиентом и переход на it разработку.</p>
                        <a className="carousel-card-example flex-row-center" href="#">
                            <span>Пример: смотреть</span>
                            <svg width="55px" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="carousel-card-tag flex-row-center">
                            <div className="circle-8"></div>
                            <span>Дизайн</span>
                        </div>
                    </div>
                </li>
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-development-blue">
                        <h5>Верстка на React</h5>
                        <span className="carousel-card-term">срок: 3 дня</span>
                        <p className="carousel-card-description">Верстка на React, JavaScript, HTML, 
                        SCSS/LESS, TypeScript.</p>
                        <a className="carousel-card-example flex-row-center" href="#">
                            <span>Пример: смотреть</span>
                            <svg width="55px" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="carousel-card-tag flex-row-center">
                            <div className="circle-8"></div>
                            <span>Разработка</span>
                        </div>
                    </div>
                </li>
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-development-yellow">
                        <h5>Интеграция с CMS платформой</h5>
                        <span className="carousel-card-term">срок: 3 дня</span>
                        <p className="carousel-card-description">Интеграция либо с готовыми решениями, 
                        либо разработка с нуля.</p>
                        <a className="carousel-card-example flex-row-center" href="#">
                            <span>Пример: смотреть</span>
                            <svg width="55px" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="carousel-card-tag flex-row-center">
                            <div className="circle-8"></div>
                            <span>Разработка</span>
                        </div>
                    </div>
                </li>
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-testing">
                        <h5>Подключение приема заявок и ответных email</h5>
                        <span className="carousel-card-term">срок: 3 дня</span>
                        <p className="carousel-card-description">Фикс багов, оптимизация front, 
                        настроить микроразметку Open Graph & schema.org.</p>
                        <a className="carousel-card-example flex-row-center" href="#">
                            <span>Пример: смотреть</span>
                            <svg width="55px" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="carousel-card-tag flex-row-center">
                            <div className="circle-8"></div>
                            <span>Тестирование</span>
                        </div>
                    </div>
                </li>
                <li className="carousel-element">
                    <div className="carousel-data">22.01.2022</div>
                    <div className="carousel-card carousel-card-testing">
                        <h5>Запуск</h5>
                        <span className="carousel-card-term">срок: 3 дня</span>
                        <ul className="carousel-card-description">
                            <li>Настроить заголовки H1, H2 …</li>
                            <li>Подключение домена, подключение к хостигну, подключение Яндекс.Метрики, подключение SSL сертификата.</li>
                        </ul>
                        <a className="carousel-card-example flex-row-center" href="#">
                            <span>Пример: смотреть</span>
                            <svg width="55px" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM1 9H56V7H1V9Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="carousel-card-tag flex-row-center">
                            <div className="circle-8"></div>
                            <span>Тестирование</span>
                        </div>
                    </div>
                </li>



            </ul>
        </main>
    </>
    )
}