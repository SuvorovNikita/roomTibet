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
import cardImage1 from "@/app/assets/img/card/1.png";
import cardImage2 from "@/app/assets/img/card/2.png";
import cardImage3 from "@/app/assets/img/card/3.png";
import cardImage4 from "@/app/assets/img/card/4.png";
import cardMobile1 from "@/app/assets/img/card/mobile/1.png";
import cardMobile2 from "@/app/assets/img/card/mobile/2.png";
import cardMobile3 from "@/app/assets/img/card/mobile/3.png";
import cardMobile4 from "@/app/assets/img/card/mobile/4.png";
import galleryImage1 from "@/app/assets/img/photo/1.png";
import galleryImage2 from "@/app/assets/img/photo/2.png";
import galleryImage3 from "@/app/assets/img/photo/3.png";
import galleryImage4 from "@/app/assets/img/photo/4.png";
import galleryImage5 from "@/app/assets/img/photo/5.png";
import galleryImage6 from "@/app/assets/img/photo/6.png";
import galleryMobileImage1 from "@/app/assets/img/photo/mobile/1.png";
import galleryMobileImage2 from "@/app/assets/img/photo/mobile/2.png";
import galleryMobileImage3 from "@/app/assets/img/photo/mobile/3.png";
import galleryMobileImage4 from "@/app/assets/img/photo/mobile/4.png";
import galleryMobileImage5 from "@/app/assets/img/photo/mobile/5.png";
import galleryMobileImage6 from "@/app/assets/img/photo/mobile/6.png";
import Link from "next/link";

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

  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 1211);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 1211);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  if (windowWidth === null) {
    return null;
  }

  return (
    <>
      <section className="section section--bg ">
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
            <button className="section__button button" type="button">
              Рейтинг направлений
            </button>
          </div>
        </section>

        <section className="section section--p80 section--dark-ligtht">
          <div className="container">
            <div className="section__inner">
              <h3 className="content__subtitle">делимся впечатлениями</h3>
              <h2 className="content__title">Блог о путешествиях</h2>
            </div>
            <div className="card">
              {isMobile ? (
                <Swiper
                  breakpoints={{
                    320: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
                    767: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: "auto",
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                >
                  <SwiperSlide>
                    <article className="card__body">
                      <div className="card__image">
                        <Image src={cardMobile1} alt="" priority />
                      </div>
                      <div className="card__content">
                        <h3 className="card__title">
                          Красивая Италя, какая она в реальности?
                        </h3>
                        <div className="card__description">
                          <p>
                            Для современного мира базовый вектор развития
                            предполагает независимые способы реализации
                            соответствующих условий активизации.
                          </p>
                        </div>
                        <div className="card__info">
                          <time
                            dateTime="2023-04-01"
                            className="card__info-date"
                          >
                            01/04/2023
                          </time>
                          <a href="#" className="card__info-link">
                            читать статью
                          </a>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="card__body">
                      <div className="card__image">
                        <Image src={cardMobile2} alt="" priority />
                      </div>
                      <div className="card__content">
                        <h3 className="card__title">
                          Долой сомнения! Весь мир открыт для вас!
                        </h3>
                        <div className="card__description">
                          <p>
                            Для современного мира базовый вектор развития
                            предполагает независимые способы реализации
                            соответствующих условий активизации.
                          </p>
                        </div>
                        <div className="card__info">
                          <time
                            dateTime="2023-04-01"
                            className="card__info-date"
                          >
                            01/04/2023
                          </time>
                          <a href="#" className="card__info-link">
                            читать статью
                          </a>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="card__body">
                      <div className="card__image">
                        <Image src={cardMobile3} alt="" priority />
                      </div>
                      <div className="card__content">
                        <h3 className="card__title">
                          Как подготовиться к путешествию в одиночку?
                        </h3>
                        <div className="card__description">
                          <p>
                            Для современного мира базовый вектор развития
                            предполагает.
                          </p>
                        </div>
                        <div className="card__info">
                          <time
                            dateTime="2023-04-01"
                            className="card__info-date"
                          >
                            01/04/2023
                          </time>
                          <a href="#" className="card__info-link">
                            читать статью
                          </a>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="card__body">
                      <div className="card__image">
                        <Image src={cardMobile4} alt="" priority />
                      </div>
                      <div className="card__content">
                        <h3 className="card__title">Индия ... летим?</h3>
                        <div className="card__description card__description">
                          <p>Для современного мира базовый.</p>
                        </div>
                        <div className="card__info">
                          <time
                            dateTime="2023-04-01"
                            className="card__info-date"
                          >
                            01/04/2023
                          </time>
                          <a href="#" className="card__info-link">
                            читать статью
                          </a>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                </Swiper>
              ) : (
                <>
                  <article className="card__body">
                    <div className="card__image">
                      <Image src={cardImage1} alt="" priority />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Красивая Италя, какая она в реальности?
                      </h3>
                      <div className="card__description">
                        <p>
                          Для современного мира базовый вектор развития
                          предполагает независимые способы реализации
                          соответствующих условий активизации.
                        </p>
                      </div>
                      <div className="card__info">
                        <time dateTime="2023-04-01" className="card__info-date">
                          01/04/2023
                        </time>
                        <a href="#" className="card__info-link">
                          читать статью
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="card__body">
                    <div className="card__image">
                      <Image src={cardImage2} alt="" priority />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Долой сомнения! Весь мир открыт для вас!
                      </h3>
                      <div className="card__description">
                        <p>
                          Для современного мира базовый вектор развития
                          предполагает независимые способы реализации
                          соответствующих условий активизации.
                        </p>
                      </div>
                      <div className="card__info">
                        <time dateTime="2023-04-01" className="card__info-date">
                          01/04/2023
                        </time>
                        <a href="#" className="card__info-link">
                          читать статью
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="card__body">
                    <div className="card__image">
                      <Image src={cardImage3} alt="" priority />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Как подготовиться к путешествию в одиночку?
                      </h3>
                      <div className="card__description">
                        <p>
                          Для современного мира базовый вектор развития
                          предполагает.
                        </p>
                      </div>
                      <div className="card__info">
                        <time dateTime="2023-04-01" className="card__info-date">
                          01/04/2023
                        </time>
                        <a href="#" className="card__info-link">
                          читать статью
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="card__body">
                    <div className="card__image">
                      <Image src={cardImage4} alt="" priority />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">Индия ... летим?</h3>
                      <div className="card__description card__description">
                        <p>Для современного мира базовый.</p>
                      </div>
                      <div className="card__info">
                        <time dateTime="2023-04-01" className="card__info-date">
                          01/04/2023
                        </time>
                        <a href="#" className="card__info-link">
                          читать статью
                        </a>
                      </div>
                    </div>
                  </article>
                </>
              )}
            </div>
            <button className="section__button button" type="button">
              Другие материалы
            </button>
          </div>
        </section>

        <section className="section section--p80">
          <div className="container">
            <div className="section__inner">
              <h3 className="content__subtitle">фото-отчет</h3>
              <h2 className="content__title">Делимся впечатлениями</h2>
            </div>
            <div className="gallery">
              <div className="gallery__content">
                {isMobile ? (
                  <Swiper
                    breakpoints={{
                      320: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                      },
                      767: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      1200: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="gallery__image">
                        <Image src={galleryMobileImage1} alt="" priority />
                        <span className="gallery__zoom"></span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="gallery__image">
                        <Image src={galleryMobileImage2} alt="" priority />
                        <span className="gallery__zoom"></span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="gallery__image">
                        <Image src={galleryMobileImage3} alt="" priority />
                        <span className="gallery__zoom"></span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="gallery__image">
                        <Image src={galleryMobileImage4} alt="" priority />
                        <span className="gallery__zoom"></span>
                      </div>
                    </SwiperSlide>{" "}
                    <SwiperSlide>
                      <div className="gallery__image">
                        <Image src={galleryMobileImage5} alt="" priority />
                        <span className="gallery__zoom"></span>
                      </div>
                    </SwiperSlide>{" "}
                    <SwiperSlide>
                      <div className="gallery__image">
                        <Image src={galleryMobileImage6} alt="" priority />
                        <span className="gallery__zoom"></span>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                ) : (
                  <>
                    <div className="gallery__image">
                      <Image src={galleryImage1} alt="" priority />
                      <span className="gallery__zoom"></span>
                    </div>
                    <div className="gallery__image">
                      <Image src={galleryImage2} alt="" priority />
                      <span className="gallery__zoom"></span>
                    </div>
                    <div className="gallery__image">
                      <Image src={galleryImage3} alt="" priority />
                      <span className="gallery__zoom"></span>
                    </div>
                    <div className="gallery__image">
                      <Image src={galleryImage4} alt="" priority />
                      <span className="gallery__zoom"></span>
                    </div>
                    <div className="gallery__image">
                      <Image src={galleryImage5} alt="" priority />
                      <span className="gallery__zoom"></span>
                    </div>
                    <div className="gallery__image">
                      <Image src={galleryImage6} alt="" priority />
                      <span className="gallery__zoom"></span>
                    </div>
                  </>
                )}
              </div>
              <button className="section__button button" type="button">
                Наш pinterest
              </button>
            </div>
          </div>
        </section>

        <section className="section section--pb50 ">
          <div className="container">
            <div className="subscribe">
              <div className="content">
                <h3 className="content__subtitle content__subtitle--form">
                  актуально
                </h3>
                <h2 className="content__title content__title--form">
                  Получайте полезные рассылки о путешествиях
                </h2>
              </div>
              <form className="subscribe__form field" action="">
                <label className="subscribe__label">Введите e-mail адрес</label>
                <div className="subscribe__body">
                  <input
                    className="field__input field__input--email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Введите e-mail адрес"
                  />

                  <button className="subscribe__button button" type="submit">
                    Подписаться на новости
                  </button>
                </div>
                <div className="subscribe__description">
                  <p>
                    подписываясь на новости, вы автоматически соглашаетесь с
                    <a href="" className="subscribe__description-link">
                      условиями обработки персональных данных
                    </a>
                    &nbsp;и&nbsp;
                    <a href="" className="subscribe__description-link">
                      правилами рекламных рассылок
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__body">
            <div className="footer__items">
              <h3 className="footer__title">Компания «РумТибет»</h3>
              <div className="footer__text">
                <p>
                  Его корни уходят в один фрагмент классической латыни 45 года
                  н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                  профессор латыни из колледжа Hampden-Sydney.
                </p>
              </div>
              <div className="footer__contacs">
                <a
                  className="footer__contacs-email"
                  href="mailto:info@domain.com"
                >
                  info@domain.com
                </a>
                <a className="footer__contacs-phone" href="tel:+71234567890">
                  +7 (123) 456-78-90
                </a>
              </div>
              <ul className="footer__soc1als">
                <li className="footer__soc1als-item">
                  <a className="footer__soc1als-link" href="">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0.666748C6.63999 0.666748 0.666656 6.64008 0.666656 14.0001C0.666656 21.3601 6.63999 27.3334 14 27.3334C21.36 27.3334 27.3333 21.3601 27.3333 14.0001C27.3333 6.64008 21.36 0.666748 14 0.666748ZM20.1867 9.73342C19.9867 11.8401 19.12 16.9601 18.68 19.3201C18.4933 20.3201 18.12 20.6534 17.7733 20.6934C17 20.7601 16.4133 20.1868 15.6667 19.6934C14.4933 18.9201 13.8267 18.4401 12.6933 17.6934C11.3733 16.8268 12.2267 16.3468 12.9867 15.5734C13.1867 15.3734 16.6 12.2668 16.6667 11.9867C16.6759 11.9443 16.6747 11.9003 16.6631 11.8585C16.6515 11.8167 16.6298 11.7783 16.6 11.7468C16.52 11.6801 16.4133 11.7067 16.32 11.7201C16.2 11.7467 14.3333 12.9868 10.6933 15.4401C10.16 15.8001 9.67999 15.9868 9.25332 15.9734C8.77332 15.9601 7.86666 15.7068 7.18666 15.4801C6.34666 15.2134 5.69332 15.0668 5.74666 14.6001C5.77332 14.3601 6.10666 14.1201 6.73332 13.8668C10.6267 12.1734 13.2133 11.0534 14.5067 10.5201C18.2133 8.97342 18.9733 8.70675 19.48 8.70675C19.5867 8.70675 19.84 8.73342 20 8.86675C20.1333 8.97342 20.1733 9.12008 20.1867 9.22675C20.1733 9.30675 20.2 9.54675 20.1867 9.73342Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="footer__soc1als-item">
                  <a className="footer__soc1als-link" href="">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.36 -0.000244141C5.98138 -0.000244141 0 5.98114 0 13.3598C0 20.7384 5.98138 26.7198 13.36 26.7198C20.7386 26.7198 26.72 20.7384 26.72 13.3598C26.72 5.98114 20.7386 -0.000244141 13.36 -0.000244141ZM18.498 15.0729C18.498 15.0729 19.6796 16.2391 19.9704 16.7805C19.9788 16.7916 19.9829 16.8027 19.9857 16.8083C20.104 17.0073 20.1318 17.1618 20.0734 17.2773C19.976 17.4693 19.642 17.564 19.5279 17.5723H17.4404C17.2956 17.5723 16.9922 17.5348 16.6248 17.2815C16.3423 17.0839 16.064 16.7596 15.7926 16.4437C15.3877 15.9733 15.037 15.5669 14.6835 15.5669C14.6386 15.5669 14.594 15.5739 14.5513 15.5878C14.2841 15.6741 13.9417 16.0554 13.9417 17.0713C13.9417 17.3886 13.6912 17.5709 13.5145 17.5709H12.5584C12.2327 17.5709 10.5363 17.4568 9.03331 15.8717C7.19352 13.9303 5.53744 10.0365 5.52352 10.0003C5.41915 9.74838 5.63486 9.61339 5.87005 9.61339H7.97842C8.25954 9.61339 8.35139 9.78456 8.41541 9.93625C8.49056 10.113 8.76611 10.8158 9.2184 11.6063C9.95181 12.8949 10.4013 13.4182 10.7618 13.4182C10.8293 13.4174 10.8957 13.4002 10.9552 13.3681C11.4256 13.1065 11.3379 11.4295 11.317 11.0816C11.317 11.0162 11.3156 10.3315 11.0749 10.0031C10.9023 9.76508 10.6087 9.67462 10.4305 9.64122C10.5026 9.54173 10.5976 9.46106 10.7075 9.40603C11.0303 9.2446 11.6121 9.22094 12.1896 9.22094H12.5111C13.1373 9.22929 13.2988 9.26965 13.5256 9.3267C13.9849 9.43665 13.9946 9.73307 13.9542 10.7476C13.9417 11.0357 13.9292 11.3613 13.9292 11.7454C13.9292 11.8289 13.925 11.918 13.925 12.0126C13.9111 12.5289 13.8944 13.1148 14.259 13.3556C14.3066 13.3854 14.3615 13.4013 14.4177 13.4015C14.5443 13.4015 14.9256 13.4015 15.9582 11.6299C16.2767 11.0597 16.5534 10.4671 16.7863 9.85693C16.8072 9.82075 16.8684 9.70941 16.9408 9.66627C16.9942 9.63904 17.0534 9.62519 17.1133 9.62591H19.5919C19.8619 9.62591 20.047 9.66627 20.0817 9.77065C20.143 9.93625 20.0706 10.4414 18.9392 11.9737L18.434 12.6403C17.4084 13.9846 17.4084 14.0528 18.498 15.0729Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="footer__soc1als-item">
                  <a className="footer__soc1als-link" href="">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0533 26.7201C11.3333 27.1068 12.6267 27.3334 14 27.3334C17.5362 27.3334 20.9276 25.9287 23.4281 23.4282C25.9286 20.9277 27.3333 17.5363 27.3333 14.0001C27.3333 12.2491 26.9885 10.5153 26.3184 8.89764C25.6483 7.27996 24.6662 5.81011 23.4281 4.57199C22.19 3.33388 20.7201 2.35175 19.1025 1.68169C17.4848 1.01163 15.751 0.666748 14 0.666748C12.249 0.666748 10.5152 1.01163 8.89756 1.68169C7.27989 2.35175 5.81003 3.33388 4.57192 4.57199C2.07143 7.07248 0.666672 10.4639 0.666672 14.0001C0.666672 19.6668 4.22667 24.5334 9.25334 26.4534C9.13334 25.4134 9.01334 23.6934 9.25334 22.5068L10.7867 15.9201C10.7867 15.9201 10.4 15.1468 10.4 13.9201C10.4 12.0801 11.5467 10.7067 12.8533 10.7067C14 10.7067 14.5333 11.5468 14.5333 12.6268C14.5333 13.7734 13.7733 15.4134 13.3867 16.9868C13.16 18.2934 14.08 19.4401 15.4133 19.4401C17.7867 19.4401 19.6267 16.9068 19.6267 13.3334C19.6267 10.1334 17.3333 7.94675 14.04 7.94675C10.28 7.94675 8.06667 10.7468 8.06667 13.6934C8.06667 14.8401 8.44001 16.0001 9.05334 16.7601C9.17334 16.8401 9.17334 16.9468 9.13334 17.1468L8.74667 18.6001C8.74667 18.8268 8.60001 18.9068 8.37334 18.7468C6.66667 18.0001 5.68001 15.5734 5.68001 13.6134C5.68001 9.40008 8.66667 5.57342 14.4267 5.57342C19.0133 5.57342 22.5867 8.86675 22.5867 13.2401C22.5867 17.8268 19.7467 21.5068 15.68 21.5068C14.3867 21.5068 13.12 20.8134 12.6667 20.0001L11.7733 23.1601C11.4667 24.3068 10.6267 25.8401 10.0533 26.7601V26.7201Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="footer__soc1als-item">
                  <a className="footer__soc1als-link" href="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 4C22.76 6.72 23.8 10.52 23.1467 14.0667C23.6933 15.0267 24 16.1467 24 17.3333C24 19.1014 23.2976 20.7971 22.0474 22.0474C20.7971 23.2976 19.1014 24 17.3333 24C16.1467 24 15.0267 23.6933 14.0667 23.1467C10.52 23.8 6.72 22.76 4 20C1.24 17.28 0.2 13.48 0.853333 9.93333C0.306667 8.97333 0 7.85333 0 6.66667C0 4.89856 0.702379 3.20286 1.95262 1.95262C3.20286 0.702379 4.89856 0 6.66667 0C7.85333 0 8.97333 0.306667 9.93333 0.853333C13.48 0.2 17.28 1.24 20 4ZM12.0533 18.88C15.88 18.88 17.7867 17.04 17.7867 14.56C17.7867 12.9733 17.04 11.28 14.1467 10.6267L11.4933 10.04C10.48 9.81333 9.33333 9.50667 9.33333 8.56C9.33333 7.6 10.1333 6.93333 11.6 6.93333C14.5733 6.93333 14.2933 8.97333 15.7733 8.97333C16.5467 8.97333 17.2133 8.52 17.2133 7.73333C17.2133 5.90667 14.2933 4.53333 11.8133 4.53333C9.13333 4.53333 6.26667 5.68 6.26667 8.72C6.26667 10.1867 6.78667 11.7467 9.66667 12.4667L13.2533 13.3733C14.3333 13.64 14.6 14.24 14.6 14.8C14.6 15.7067 13.6933 16.6 12.0533 16.6C8.84 16.6 9.28 14.1333 7.56 14.1333C6.78667 14.1333 6.22667 14.6667 6.22667 15.4267C6.22667 16.9067 8 18.88 12.0533 18.88Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__items">
              <h3 className="footer__title">Наши услуги</h3>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84024C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84024L5.7154 5.38613C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                    Прогулки в горы летом
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84024C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84024L5.7154 5.38613C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                    Зимние походы в горы
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84024C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84024L5.7154 5.38613C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                    Посещение храмов в горах
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84024C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84024L5.7154 5.38613C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                    Экстремальные виды туризма
                  </a>
                </li>
                <li className="footer__list-item">
                  <a
                    href=""
                    className="footer__list-link footer__list-link--new"
                  >
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84024C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84024L5.7154 5.38613C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                    Походы в джунглях Амазонии
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84024C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84024L5.7154 5.38613C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                    Поездка в Африку
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__items">
              <h3 className="footer__title">Важно для путешествий</h3>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84024C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84024L5.7154 5.38613C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                    Как собрать в долгий поход?
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84024C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84024L5.7154 5.38613C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                    Жизненно важные предметы для похода
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84024C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84024L5.7154 5.38613C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                    Медицинская страховка, гарантии безопасности
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84024C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84024L5.7154 5.38613C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                    Если вы врач - загляните сюда
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__extra">
          <div className="container">
            <div className="footer__extra-body">
              <p className="footer__copyright">
                ИП Константинопольский К.К., <time dateTime="2023">2023</time>
              </p>
              <a className="footer__privacy-policy-link" href="#">
                Политика обработки персональных данных
              </a>
            </div>
          </div>
        </div>
      </footer>

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
