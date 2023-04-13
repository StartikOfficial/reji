import "./HomePage.scss";
import "react-intl-tel-input/dist/main.css";

import { useRef, useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Form } from "@unform/web";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../../../components/Header";
import GridCard from "../../../components/GridCard";
import GridCardLarge from "../../../components/GridCardLarge";
import GridCardMedium from "../../../components/GridCardMedium";
import GridCardSmall from "../../../components/GridCardSmall";
import Input from "../../../components/Input";
import IntlTelInput from "react-intl-tel-input";
import { OutsideClick } from "../../../components/OutsideClick";

import { ArrowRight, Camera, Lock } from "../../../components/svgs";

import suitcase from "../../../asserts/images/suitcase.png";
import lovelySmileEmoji from "../../../asserts/images/lovely-smile-emoji.png";
import loveEyesEmoji from "../../../asserts/images/love-eyes-emoji.png";
import heartEmoji from "../../../asserts/images/heart-emoji.png";
import wavingHandEmoji from "../../../asserts/images/waving-hand-emoji.png";
import ledVled from "../../../asserts/images/led-vled.png";
import omskInfo from "../../../asserts/images/omsk-info-cropped.png";

import backgroundS1 from "../../../asserts/images/background-s-1.png";
import backgroundS2 from "../../../asserts/images/background-s-2.png";
import backgroundM1 from "../../../asserts/images/background-m-1.png";
import backgroundM2 from "../../../asserts/images/background-m-2.png";
import backgroundL1 from "../../../asserts/images/background-l-1.png";

export default function HomePage() {

    // для анимации приветствия
    const fadeLeft = {
        visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 }, x: 0},
        hidden: { opacity: 0, x: -200}
    };
    const fadeDown = {
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 }, y: 0, x:0},
    hidden: { opacity: 0, y: 200}
    };
    const fadeRight = {
        visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3   }, x: 0},
        hidden: { opacity: 0, x: 100}
    };

    const control = useAnimation();
    const [animateRef, inView] = useInView();

    useEffect(() => {
        if (inView) {
        control.start("visible");
        } 
    }, [control, inView]);

    // для горизонтального скролла карусели
    const ref = useRef(null);

    const carouselRange = [0, 8, 34, 70, 90, 100];
    const carouselTagsValues = [
        {id: 0, text: "Аналитика", className: "analytics"},
        {id: 1, text: "Проектирование", className: "planning"},
        {id: 2, text: "Дизайн", className: "design"},
        {id: 3, text: "Разработка", className: "developing"},
        {id: 4, text: "Тестирование", className: "testing"}
    ]

    useEffect(() => {
        const carousel = document.querySelector(".carousel");
        if (carousel.scrollLeft === 0) setSelected(0);
        const handleScroll = event => {
            let maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
            let delta;
            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {delta = event.deltaY;}
            else {delta = event.deltaX}
            if ((delta > 0 && carousel.scrollLeft < maxScrollLeft) ||
            (delta < 0 && carousel.scrollLeft > 0)) {
                event.preventDefault();
                carousel.scrollLeft += delta;
                const position = carousel.scrollLeft / maxScrollLeft * 100;
                for (let i = 0; i < carouselRange.length - 1; i++) {
                    if (position < carouselRange[i+1]) {setSelected(i); break;}
                }
            }
        };

        const element = ref.current;

        element.addEventListener("wheel", handleScroll);

        return () => {
            element.removeEventListener("wheel", handleScroll);
            clearInterval(ref);
        };
    }, []);

    const [selected, setSelected] = useState(null);
  
    const setSelectedOnClick = (id) => {
        setSelected(id);
    }

    // key для li элементов. Почему-то все равно ошибка в консоли
    const randomKey = () => {
        return Math.floor(Math.random()*99999)
    }

    // вывод в консоль отправки формы
    function handleSubmit(data, { reset }) {
        console.log(data);
        reset();
      }
    
    // обработка события при нажатии вне блока формы
    const [isFormWrapperOpen, setIsFormWrapperOpen] = useState(false);  
    const toggleFormWrapper = () => {setIsFormWrapperOpen(!isFormWrapperOpen);};
    useEffect(()=>{
        const body = document.body;
        if (isFormWrapperOpen) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    })

    // появление кнопки активировать
    const [promocodeButtonShown, setPromocodeButtonShown] = useState(false);
    const promocodeRef = useRef(null);
    const showPromocodeButton = (promocode) => {
        setPromocodeButtonShown(true);
        if (promocode) {
            promocode.children[0].style.width = "50%";
        }  
    }

    // обработка кнопки активировать
    const handlePromocodeButton = () => {
        alert("Указанный промокод не найден или не действителен");
        const promocodeInput = document.querySelector("#input-promocode");
        promocodeInput.value = "";
    }

    // нормализация инпута номера телефона
    const [phoneNumber, setPhoneNumber] = useState();
    const [phoneNumberString, setPhoneNumberString] = useState();
    const normalizeInput = (currentValue) => {
        const cvLength = currentValue.length;
        
        if (currentValue) {
          if (cvLength < 4) return currentValue;
          if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
          return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
        }
      };

      
    return (
    <>
        <Header/>
        <main>
            <div className="sections flex-row-center">
                <div>UX/UI Design</div>
                <div>Web Development</div>
                <div>Analytics</div>
            </div>
            <h1 id="main-header">
                Мы поможем реализовать ваши бизнес 
                <div className="emoji-wrapper">
                    <img src={suitcase} alt="suitcase" loading="lazy"/> 
                </div>
                идеи через дизайн и it
                <div className="emoji-wrapper">
                    <img src={loveEyesEmoji} alt="love-eyes" loading="lazy"/>
                </div>
            </h1>
            <div className="examples-of-work">
                <img src={ledVled} id="led-vled" height="100%" alt="led-vled" loading="lazy"/>
                <div>
                    <p className="examples-of-work-text">Специализируемся на разработке web-сайтов и 
                        интернет-порталов. Cоздаем фирменные стили компаний,
                        разрабатываем мобильные версии и приложения.</p>
                    <img src={omskInfo} id="omsk-info" alt="omsk-info" loading="lazy"/>
                </div>
            </div>

            <div className="greetings">
                <div className="greetings-container">
                    <div className="greetings-header">
                        <div className="greetings-text">
                            <motion.h3
                                ref={animateRef}
                                variants={fadeLeft}
                                initial="hidden"
                                animate={control}
                            >Здравствуйте</motion.h3>
                            <motion.p
                                ref={animateRef}
                                variants={fadeDown}
                                initial="hidden"
                                animate={control}
                            >Приветствуем на сайте it студии REJI</motion.p>
                        </div>

                        <motion.div 
                            className="emoji-wrapper"
                            ref={animateRef}
                            variants={fadeRight}
                            initial="hidden"
                            animate={control}
                        >
                            <img src={wavingHandEmoji} alt="waving-hand"/>
                        </motion.div>
                    </div>
                    <div className="grid-cards">
                    <p className="grid-description">Мы используем индивидуальный подход и набор решений при разработке
                        сайтов — от предварительного изучения, анализа и проектирования
                        веб-сайтов до создания интерактивных презентаций с
                        описанием анимированных решений.️</p>
                    <GridCard className="grid-card">
                        <div className="grid-card-video">
                            <div className="flex-row-center">
                                <div>
                                    <div className="circle-50">
                                        <Camera/>
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
                                <ArrowRight/>
                            </div>
                        </div>
                    </GridCardMedium>
                    <div className="grid-row-3">
                        <GridCardSmall imageBackground={backgroundS2} className="grid-card grid-card-small grid-card-background">
                            <Lock/>
                            <p>Наши продукты надежно защищены</p>
                        </GridCardSmall>
                        <GridCardMedium imageBackground={backgroundM2} className="grid-card grid-card-medium grid-card-background">
                            <h4>Проектируем</h4>
                            <p>рациональный дизайн для цифровых продуктов</p>
                            <div className="circle-40">
                                <ArrowRight className="arrow-right-blue"/>
                            </div>
                        </GridCardMedium>
                        <GridCard className="grid-card">
                            <div className="grid-card-two-video">
                                <div className="flex-row-center">
                                        <div className="circle-50">
                                            <Camera/>
                                        </div>
                                    <div>
                                        <h4>Как мы ведем проекты</h4>
                                        <span className="video-time">05:44</span>
                                    </div>
                                    <img className="emoji" src={heartEmoji} alt="heart"/>
                                </div>
                                <div className="flex-row-center">
                                        <div className="circle-50">
                                            <Camera/>
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
                    <GridCardLarge imageBackground={backgroundL1} className="grid-card grid-card-large grid-card-background">
                            <h4>Аналитика вашего проекта</h4>
                            <p>Оставьте заявку сейчас и получите готовый аналитический отчет о вашем сайте на почту.</p>
                            <span className="price">490₽</span>
                            <button className="application-btn flex-row-center" onClick={toggleFormWrapper}>
                                <span>Оставить заявку</span>
                                <ArrowRight className="arrow-right-orange"/>
                            </button>
                            
                        </GridCardLarge>
                    </div >
                </div>
            </div>

            {isFormWrapperOpen && <div className="form-wrapper">
                    <OutsideClick onClickOutside={toggleFormWrapper} show={isFormWrapperOpen}>
                        <Form className="form-application" onSubmit={handleSubmit}>
                            <div className="order">
                                <h3>Ваш заказ:</h3>
                                <ul className="order-products"></ul>
                                <span className="order-sum">Сумма: 0 руб.</span>
                            </div>
                            <Input name="first-name" label="Ваше имя" placeholder="Иван"/>
                            <Input name="surname" label="Ваша фамилия" placeholder="Иванов"/>
                            <Input name="email" label="Ваш email" type="email" placeholder="hello@thereji.com"/>
                            <div>
                                
                            <label htmlFor="phone-number">Whatsapp/Telegram</label>
                            <IntlTelInput 
                            telInputProps={{
                                onKeyPress: (event) => {
                                //   const regex = /^[+0-9]*$/;
                                //   if (event.key === "Enter") return true;
                                //   const test = new RegExp(regex).test(event.key);
                                //   const currentValue = event.target.value+event.key;
                                //   const cvLength = currentValue.length;
                                // if (!test) event.preventDefault();
                                // if (currentValue) {
                                // if (cvLength < 4) return setPhoneNumber(currentValue);
                                // if (cvLength < 7) return setPhoneNumber(`(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`);
                                // return setPhoneNumber(`(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`);
                                // }
                                // console.log(event.key);
                                // if (event.key !== "Backspace") setPhoneNumber(prev => prev+event.key.replace(/\D/g,''));
                                // if (phoneNumber.length > 3) setPhoneNumber(prev => `${prev.slice(0,3)}-${prev.slice(3,phoneNumber.length)}`);
                                // setPhoneNumber(prev => prev+"");
                                // setPhoneNumber(prev => prev.replace(",",""));
                                // let x = phoneNumber.split('.');
                                // let x1 = x[0];
                                // let x2 = x.length > 1 ? '.' + x[1] : '';
                                // var rgx = /(\d+)(\d{3})/;
                                // while (rgx.test(x1)) {
                                //     x1 = x1.replace(rgx, '$1' + ',' + '$2');
                                // }
                                // setPhoneNumber(x1+x2);
                                },
                              }}
                                value={phoneNumberString}
                                onPhoneNumberChange={(b, n, c, number) => {
                                    // setPhoneNumber(normalizeInput(n));
                                    // console.log(phoneNumber);
                                    // console.log(n);
                                    const num = n.replace(/[^0-9]/g,'');
                                    const length = num?.length;
                                    if (length === 10 && !phoneNumber) {setPhoneNumber(num); setPhoneNumberString(`(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6, 8)}-${num.slice(8, 10)}`)}
                                    else {setPhoneNumberString(num); setPhoneNumber(null)};
                                    console.log(number)
                                    console.log(length)
                                    // console.log(n);
                                    // : setPhoneNumber(prev => prev.replace(/-/g,''));
                                    // if (phoneNumber) {
                                    //     (phoneNumber.length < 3) && setPhoneNumber(prev => prev.replace(/-/g,''));
                                    //     (phoneNumber.length < 7) && setPhoneNumber(prev => `${prev.slice(0,3)}-${prev.slice(3)}`);
                                    //     (phoneNumber.length < 12) && setPhoneNumber(prev => `${prev.slice(0,3)}-${prev.slice(3)}-${prev.slice(7,)}`);
                                    // }
                                    
                                }}
                                preferredCountries={['ru']} 
                                name="phone-number" 
                                placeholder="(999) 999-99-99" 
                                separateDialCode={true}/>
                            </div>
                            <label htmlFor="promocode" >Промокод</label>
                            <div className="flex-row-center promocode" onClick={()=>showPromocodeButton(promocodeRef.current)}>
                                <input id="input-promocode" name="promocode" placeholder="Введите промокод"/>
                                <div className={promocodeButtonShown ? "promocode-button" : "none"} onClick={handlePromocodeButton}>Активировать</div>
                            </div>
                            <button type="submit">Оформить</button>
                            <span>Нажимая на кнопку, Вы соглашаетесь с <a href="#">Политикой конфиденциальности</a></span>
                        </Form>
                    </OutsideClick>   
                </div>}

            <section className="how-we-work">
                <h2 id="h2-how-we-work">
                <span id="span-how-we-work">
                Как мы работаем</span> над проектом
                </h2>
                <div className="carousel-tags flex-row-center">
                    {carouselTagsValues.map((val) => (
                        <HashLink 
                            scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center"})}
                            to={`/#${val.className}`}
                            >
                            <li key={val.id} className={`${val.id === selected ? "selected" : ""}`} onClick={() => setSelectedOnClick(val.id)}>
                                {val.text}
                            </li>
                        </HashLink>
                        
                    ))}
                </div>
                <ul className="carousel" ref={ref}>
                    <li className="carousel-element" id="analytics" key={randomKey()}>
                        <div className="carousel-data">22.01.2022</div>
                        <div className="carousel-card carousel-card-analytics">
                            <h5>Аналитика</h5>
                            <span className="carousel-card-term">срок: 7 дней</span>
                            <ul className="carousel-card-description">
                                <li key={randomKey()}>UX/UI аналитика</li>
                                <li key={randomKey()}>Аналитика конкурентов</li>
                                <li key={randomKey()}>Аналитика пользователей</li>
                                <li key={randomKey()}>Составление мудборда</li>
                            </ul>
                            <div className="carousel-card-tag flex-row-center">
                                <div className="circle-8"></div>
                                <span>Подготовка</span>
                            </div>
                        </div>
                    </li>
                    <li className="carousel-element" id="planning" key={randomKey()}>
                        <div className="flex-row-center">
                            <div>
                                <div className="carousel-data">22.01.2022</div>
                                <div className="carousel-card carousel-card-planning">
                                    <h5>Разработка структуры/прототипа сайта</h5>
                                    <span className="carousel-card-term">срок: 14 дней</span>
                                    <p className="carousel-card-description">На данном этапе мы вносим в проект все ваши
                                        желания и потребности вашего бизнеса.</p>
                                    <a className="carousel-card-example flex-row-center" href="#">
                                        <span>Пример: смотреть</span>
                                        <ArrowRight/>
                                    </a>
                                    <div className="carousel-card-tag flex-row-center">
                                        <div className="circle-8"></div>
                                        <span>Проектирование</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <div className="carousel-data">22.01.2022</div>
                                <div className="carousel-card carousel-card-planning">
                                    <h5>Копирайтинг</h5>
                                    <span className="carousel-card-term">срок: 5 дней</span>
                                    <p className="carousel-card-description">На данном этапе мы наполняем
                                        текстом ваш будущий онлайн проект.</p>
                                    <a className="carousel-card-example flex-row-center" href="#">
                                        <span>Пример: смотреть</span>
                                        <ArrowRight/>
                                    </a>
                                    <div className="carousel-card-tag flex-row-center">
                                        <div className="circle-8"></div>
                                        <span>Проектирование</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="carousel-data">22.01.2022</div>
                                <div className="carousel-card carousel-card-planning">
                                    <h5>Отрисовка прототипа моб. версий</h5>
                                    <span className="carousel-card-term">срок: 4 дня</span>
                                    <p className="carousel-card-description">Адаптируем ваш будущий онлайн проект
                                        под все мобильные устройства.</p>
                                    <a className="carousel-card-example flex-row-center" href="#">
                                        <span>Пример: смотреть</span>
                                        <ArrowRight/>
                                    </a>
                                    <div className="carousel-card-tag flex-row-center">
                                        <div className="circle-8"></div>
                                        <span>Проектирование</span>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </li>
                    <li className="carousel-element" id="design" key={randomKey()}>
                        <div className="flex-row-center">
                            <div>
                            <div className="carousel-data">22.01.2022</div>
                        <div className="carousel-card carousel-card-design">
                            <h5>Разработка дизайн макета в Figma</h5>
                            <span className="carousel-card-term">срок: 3 дня</span>
                            <p className="carousel-card-description">Проектируем дизайнерские решения для ваших
                                бизнес задач и делаем продукт удобным для пользователя.</p>
                            <a className="carousel-card-example flex-row-center" href="#">
                                <span>Пример: смотреть</span>
                                <ArrowRight/>
                            </a>
                            <div className="carousel-card-tag flex-row-center">
                                <div className="circle-8"></div>
                                <span>Дизайн</span>
                            </div>
                        </div>
                            </div>

                            <div>
                            <div className="carousel-data">22.01.2022</div>
                        <div className="carousel-card carousel-card-design">
                            <h5>Визуализация UX/UI взаимодействий с платформой</h5>
                            <span className="carousel-card-term">срок: 5 дней</span>
                            <p className="carousel-card-description">Разработка иконок, кнопок, анимаций переходов,
                                и различных сценариев пользовательского опыта.</p>
                            <a className="carousel-card-example flex-row-center" href="#">
                                <span>Пример: смотреть</span>
                                <ArrowRight/>
                            </a>
                            <div className="carousel-card-tag flex-row-center">
                                <div className="circle-8"></div>
                                <span>Дизайн</span>
                            </div>
                        </div>
                            </div>

                            <div>
                            <div className="carousel-data">22.01.2022</div>
                        <div className="carousel-card carousel-card-design">
                            <h5>Разработка адаптивной версии дизайн макета</h5>
                            <span className="carousel-card-term">срок: 3 дня</span>
                            <p className="carousel-card-description">Разработка страниц ошибок, разработка 404 страницы.
                                Этап завершен, согласование с клиентом и переход на it разработку.</p>
                            <a className="carousel-card-example flex-row-center" href="#">
                                <span>Пример: смотреть</span>
                                <ArrowRight/>
                            </a>
                            <div className="carousel-card-tag flex-row-center">
                                <div className="circle-8"></div>
                                <span>Дизайн</span>
                            </div>
                        </div>
                            </div>
                        </div>
                        
                    </li>
                    <li className="carousel-element" id="developing" key={randomKey()}>
                        <div className="carousel-data">22.01.2022</div>
                        <div className="carousel-card carousel-card-development-blue">
                            <h5>Верстка на React</h5>
                            <span className="carousel-card-term">срок: 3 дня</span>
                            <p className="carousel-card-description">Верстка на React, JavaScript, HTML,
                                SCSS/LESS, TypeScript.</p>
                            <a className="carousel-card-example flex-row-center" href="#">
                                <span>Пример: смотреть</span>
                                <ArrowRight/>
                            </a>
                            <div className="carousel-card-tag flex-row-center">
                                <div className="circle-8"></div>
                                <span>Разработка</span>
                            </div>
                        </div>
                    </li>
                    <li className="carousel-element" key={randomKey()}>
                        <div className="carousel-data">22.01.2022</div>
                        <div className="carousel-card carousel-card-development-yellow">
                            <h5>Интеграция с CMS платформой</h5>
                            <span className="carousel-card-term">срок: 3 дня</span>
                            <p className="carousel-card-description">Интеграция либо с готовыми решениями,
                                либо разработка с нуля.</p>
                            <a className="carousel-card-example flex-row-center" href="#">
                                <span>Пример: смотреть</span>
                                <ArrowRight/>
                            </a>
                            <div className="carousel-card-tag flex-row-center">
                                <div className="circle-8"></div>
                                <span>Разработка</span>
                            </div>
                        </div>
                    </li>
                    <li className="carousel-element" id="testing" key={randomKey()}>
                        <div className="flex-row-center">
                            <div>
                            <div className="carousel-data">22.01.2022</div>
                        <div className="carousel-card carousel-card-testing">
                            <h5>Подключение приема заявок и ответных email</h5>
                            <span className="carousel-card-term">срок: 3 дня</span>
                            <p className="carousel-card-description">Фикс багов, оптимизация front,
                                настроить микроразметку Open Graph & schema.org.</p>
                            <a className="carousel-card-example flex-row-center" href="#">
                                <span>Пример: смотреть</span>
                                <ArrowRight/>
                            </a>
                            <div className="carousel-card-tag flex-row-center">
                                <div className="circle-8"></div>
                                <span>Тестирование</span>
                            </div>
                        </div>
                            </div>

                            <div>
                            <div className="carousel-data">22.01.2022</div>
                        <div className="carousel-card carousel-card-testing">
                            <h5>Запуск</h5>
                            <span className="carousel-card-term">срок: 3 дня</span>
                            <ul className="carousel-card-description">
                                <li key={randomKey()}>Настроить заголовки H1, H2 …</li>
                                <li key={randomKey()}>Подключение домена, подключение к хостигну, подключение Яндекс.Метрики, подключение SSL сертификата.</li>
                            </ul>
                            <a className="carousel-card-example flex-row-center" href="#">
                                <span>Пример: смотреть</span>
                                <ArrowRight/>
                            </a>
                            <div className="carousel-card-tag flex-row-center">
                                <div className="circle-8"></div>
                                <span>Тестирование</span>
                            </div>
                        </div>
                            </div>
                        </div>
                        
                    </li>
                </ul>
            </section>


        </main>
    </>
    )
}