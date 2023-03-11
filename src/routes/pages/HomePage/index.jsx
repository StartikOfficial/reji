import Header from "../../../components/Header";
import GridCard from "../../../components/GridCard";

import "./HomePage.scss";

import suitcase from "../../../asserts/images/suitcase.png";
import lovelySmileEmoji from "../../../asserts/images/lovely-smile-emoji.png";
import loveEyesEmoji from "../../../asserts/images/love-eyes-emoji.png";
import heartEmoji from "../../../asserts/images/heart-emoji.png";
import wavingHandEmoji from "../../../asserts/images/waving-hand-emoji.png";
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
                <img src={ledVled} alt="led-vled"/>
                <div className="text-above-image">
                    <p className="examples-of-work-text">Специализируемся на разработке web-сайтов и 
                        интернет-порталов. Cоздаем фирменные стили компаний, 
                        разрабатываем мобильные версии и приложения.</p>
                    <img width="100%" src={omskInfo} alt="omsk-info"/>
                </div>
            </div>
            <div className="greetings">
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
            <h2 id="h2-how-we-work">
                <span id="span-how-we-work">
                Как мы работаем</span> над проектом
            </h2>
            <ul className="carousel-tags flex-row-center">
                <li className="active">Аналитика</li>
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
                            <svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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