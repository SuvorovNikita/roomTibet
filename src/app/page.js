"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "swiper/css";

import logo from "@/app/assets/img/logo.svg";
import Img1 from "@/app/assets/img/media/1.png";
import Img2 from "@/app/assets/img/media/2.png";
import Img3 from "@/app/assets/img/programm/1.png";
import Img4 from "@/app/assets/img/programm/2.png";
import Img5 from "@/app/assets/img/programm/3.png";
import Img6 from "@/app/assets/img/programm/4.png";
import slide1 from "@/app/assets/img/slider/1.png";
import slide2 from "@/app/assets/img/slider/2.png";
import slide3 from "@/app/assets/img/slider/3.png";

export default function Home() {
  const menuItems = [
    { text: "Главная", href: ".#" },
    { text: "Про гида", href: ".#" },
    { text: "Программа тура", href: ".#" },
    { text: "Стоимость", href: ".#" },
    { text: "Блог", href: ".#" },
    { text: "Контакты", href: ".#" },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="section section--bg">
        <div className="container">
          <header className="header">
            <div className="header__inner">
              <a className="header__logo logo" href="#">
                <Image src={logo} alt="Румтибет" priority />
              </a>
              <nav className="header__menu hidden-mobile">
                <ul className="header__menu-list">
                  {menuItems.map(({ text, href }, index) => (
                    <li key={index} className="header__menu-item">
                      <a href={href} className="header__menu-link">
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <button
                className="header__button button hidden-mobile"
                type="button"
              >
                Консультация
              </button>

              <button
                className="header__burger-menu burger-button visible-mobile"
                type="button"
                onClick={() => setIsDialogOpen(true)}
              >
                <span className="visually-hidden">open menu</span>
              </button>
            </div>
          </header>
          <div className="hero">
            <h1 className="hero__title">
              Насладись прогулкой в горах
              <br />с командой единомышленников
            </h1>
            <div className="search">
              <form className="search__form">
                <div className="search__body">
                  <div className="search__field field">
                    <select
                      required
                      className="field__select"
                      id="location"
                      name="location"
                    >
                      <option value="" defaultValue hidden>
                        Локация для тура
                      </option>
                      <option value="location1">Россия</option>
                      <option value="location2">США</option>
                      <option value="location3">Бразилия</option>
                    </select>
                    <label className="field__label">выберите из списка</label>
                  </div>
                  <div className="search__field field">
                    <input
                      required
                      className="field__input"
                      id="date"
                      name="date"
                      type="date"
                    />
                    <label className="field__label">укажите диапазон</label>
                  </div>
                  <div className="search__field field">
                    <select
                      required
                      className="field__select"
                      id="participants"
                      name="participants"
                    >
                      <option value="" defaultValue hidden>
                        Участники
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    <label className="field__label">минимум 4 человека</label>
                  </div>
                  <button
                    className="search__button button button--transparent"
                    type="submit"
                  >
                    Найти программу
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <main className="main">
        <section className="section section--p100">
          <div className="container">
            <div className="section__body">
              <div className="media">
                <div className="media__pic">
                  <Image
                    src={Img1}
                    width={350}
                    height={400}
                    alt="Горы"
                    priority
                  />
                </div>
                <div className="media__body">
                  <Image
                    src={Img2}
                    width={350}
                    height={400}
                    alt="Горы"
                    priority
                  />
                  <button className="media__play" type="button"></button>
                </div>
              </div>
              <div className="content">
                <h3 className="content__subtitle">о нашем походе</h3>
                <h2 className="content__title">
                  Исследуйте все горные массивы мира вместе с нами
                </h2>
                <div className="content__text">
                  <p>
                    Его корни уходят в один фрагмент классической латыни 45 года
                    н.э., то есть более двух тысячелетий назад. Ричард
                    МакКлинток, профессор латыни из колледжа Hampden-Sydney,
                    штат Вирджиния, взял одно из самых странных слов в Lorem
                    Ipsum, &#34;consectetur&#34; и занялся его поисками в
                    классической латинской литературе.
                  </p>
                </div>
                <button className="content__button button" type="button">
                  Программа тура
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--p80 section--dark-ligtht">
          <div className="container">
            <div className="section__body">
              <div className="content">
                <h3 className="content__subtitle">наше предложение</h3>
                <h2 className="content__title">Лучшие программы для тебя</h2>
                <div className="content__text">
                  <p>
                    Его корни уходят в один фрагмент классической латыни 45 года
                    н.э., то есть более двух тысячелетий назад. Ричард
                    МакКлинток, профессор латыни из колледжа.
                  </p>
                </div>
                <ul className="content__list">
                  <li className="content__item">
                    <span className="content__list-title">Опытный гид</span>
                    Для современного мира базовый вектор развития предполагает
                    независимые способы реализации соответствующих условий
                    активизации.
                  </li>
                  <li className="content__item">
                    <span className="content__list-title">Опытный гид</span>
                    Для современного мира базовый вектор развития предполагает
                    независимые способы реализации соответствующих условий
                    активизации.
                  </li>
                  <li className="content__item">
                    <span className="content__list-title">Опытный гид</span>
                    Для современного мира базовый вектор развития предполагает
                    независимые способы реализации соответствующих условий
                    активизации.
                  </li>
                </ul>
                <button className="content__button button" type="button">
                  Стоимость программ
                </button>
              </div>
              <div className="media grid grid--2">
                <Image src={Img3} alt="" width={250} height={250} priority />
                <Image src={Img4} alt="" width={250} height={250} priority />
                <Image src={Img5} alt="" width={250} height={250} priority />
                <Image src={Img6} alt="" width={250} height={250} priority />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--p80">
          <div className="container">
            <div className="section__inner">
              <h3 className="content__subtitle">по версии отдыхающих</h3>
              <h2 className="content__title">Популярные направления</h2>
            </div>
            <div className="card-popular">
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="card-popular__item">
                    <div className="card-pupular__image">
                      <Image src={slide1} alt="" priority />
                    </div>
                    <div className="card-popular__reating">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.98L20.21 10.8C20.88 10.22 20.52 9.12 19.64 9.04999L14.81 8.64L12.92 4.17999C12.58 3.36999 11.42 3.36999 11.08 4.17999L9.19 8.62999L4.36 9.03999C3.48 9.10999 3.12 10.21 3.79 10.79L7.46 13.97L6.36 18.69C6.16 19.55 7.09 20.23 7.85 19.77L12 17.27Z"
                          fill="#F2BE22"
                        />
                      </svg>
                      4.9
                    </div>
                    <div className="card-popular__overlay overlay">
                      <div className="overlay__info">
                        <div className="overlay__title">
                          <span className="overlay__name">Озеро возле гор</span>
                          <span className="overlay__name-desc">
                            романтическое приключение
                          </span>
                        </div>
                        <div className="overlay__price">480 $</div>
                      </div>
                      <div className="overlay__description">
                        <p>
                          Его корни уходят в один фрагмент классической латыни
                          45 года н.э., то есть более двух тысячелетий назад.
                          Ричард МакКлинток, профессор латыни из колледжа
                          Hampden-Sydney, штат Вирджиния, взял одно из самых
                          странных слов в Lorem Ipsum, &#34;consectetur&#34; и
                          занялся его поисками в классической латинской
                          литературе.
                        </p>
                      </div>
                      <button className="overlay__button button" type="button">
                        Программа тура
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-popular__item">
                    <div className="card-pupular__image">
                      <Image src={slide2} alt="" priority />
                    </div>
                    <div className="card-popular__reating">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.98L20.21 10.8C20.88 10.22 20.52 9.12 19.64 9.04999L14.81 8.64L12.92 4.17999C12.58 3.36999 11.42 3.36999 11.08 4.17999L9.19 8.62999L4.36 9.03999C3.48 9.10999 3.12 10.21 3.79 10.79L7.46 13.97L6.36 18.69C6.16 19.55 7.09 20.23 7.85 19.77L12 17.27Z"
                          fill="#F2BE22"
                        />
                      </svg>
                      4.5
                    </div>
                    <div className="card-popular__overlay overlay">
                      <div className="overlay__info">
                        <div className="overlay__title">
                          <span className="overlay__name">Ночь в горах</span>
                          <span className="overlay__name-desc">
                            в компании друзей
                          </span>
                        </div>
                        <div className="overlay__price">500 $</div>
                      </div>
                      <div className="overlay__description">
                        <p>
                          Его корни уходят в один фрагмент классической латыни
                          45 года н.э., то есть более двух тысячелетий назад.
                          Ричард МакКлинток, профессор латыни из колледжа
                          Hampden-Sydney, штат Вирджиния, взял одно из самых
                          странных слов в Lorem Ipsum, &#34;consectetur&#34; и
                          занялся его поисками в классической латинской
                          литературе.
                        </p>
                      </div>
                      <button className="overlay__button button" type="button">
                        Программа тура
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-popular__item">
                    <div className="card-pupular__image">
                      <Image
                        src={slide3}
                        alt=""
                        width={380}
                        height={500}
                        priority
                      />
                    </div>
                    <div className="card-popular__reating">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.98L20.21 10.8C20.88 10.22 20.52 9.12 19.64 9.04999L14.81 8.64L12.92 4.17999C12.58 3.36999 11.42 3.36999 11.08 4.17999L9.19 8.62999L4.36 9.03999C3.48 9.10999 3.12 10.21 3.79 10.79L7.46 13.97L6.36 18.69C6.16 19.55 7.09 20.23 7.85 19.77L12 17.27Z"
                          fill="#F2BE22"
                        />
                      </svg>
                      5.0
                    </div>
                    <div className="card-popular__overlay overlay">
                      <div className="overlay__info">
                        <div className="overlay__title">
                          <span className="overlay__name">Йога в горах</span>
                          <span className="overlay__name-desc">
                            для тех, кто забоится о себе
                          </span>
                        </div>
                        <div className="overlay__price">230 $</div>
                      </div>
                      <div className="overlay__description">
                        <p>
                          Его корни уходят в один фрагмент классической латыни
                          45 года н.э., то есть более двух тысячелетий назад.
                          Ричард МакКлинток, профессор латыни из колледжа
                          Hampden-Sydney, штат Вирджиния, взял одно из самых
                          странных слов в Lorem Ipsum, &#34;consectetur&#34; и
                          занялся его поисками в классической латинской
                          литературе.
                        </p>
                      </div>
                      <button className="overlay__button button" type="button">
                        Программа тура
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        <section className="section section--p80 section--dark-ligtht">
          <div className="container">
            <div className="section__inner">
              <h3 className="content__subtitle">делимся впечатлениями</h3>
              <h2 className="content__title">Блог о путешествиях</h2>
            </div>
            <button className="button" type="button">
              Другие материалы
            </button>
          </div>
        </section>
      </main>

      <dialog
        className="mobile-overlay visible-mobile"
        id="mobileOverlay"
        open={isDialogOpen}
      >
        <form className="mobile-overlay__close-button-wrapper" method="dialog">
          <button
            className="mobile-overlay__close-button cross-button"
            type="button"
            onClick={() => setIsDialogOpen(false)}
          >
            <span className="visually-hidden">Close navigation menu</span>
          </button>
        </form>
        <div className="mobile-overlay__body">
          <ul className="mobile-overlay__list">
            {menuItems.map(({ text, href }, index) => (
              <li key={index} className="mobile-overlay__item">
                <a className="mobile-overlay__link" href={href}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
