"use client";

import Image from "next/image";
import logo from "@/app/assets/img/logo.svg";
import Img1 from "@/app/assets/img/media/1.png";
import Img2 from "@/app/assets/img/media/2.png";

import { useState } from "react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="section section--bg">
        <div className="container">
          <header className="header">
            <div className="header__inner">
              <a className="header__logo logo" href="#">
                <Image
                  src={logo}
                  alt="Румтибет"
                  width={137}
                  height={72}
                  priority
                />
              </a>
              <nav className="header__menu hidden-mobile">
                <ul className="header__menu-list">
                  <li className="header__menu-item">
                    <a href="" className="header__menu-link">
                      Главная
                    </a>
                  </li>
                  <li className="header__menu-item">
                    <a href="" className="header__menu-link">
                      Про гида
                    </a>
                  </li>
                  <li className="header__menu-item">
                    <a href="" className="header__menu-link">
                      Программа тура
                    </a>
                  </li>
                  <li className="header__menu-item">
                    <a href="" className="header__menu-link">
                      Стоимость
                    </a>
                  </li>
                  <li className="header__menu-item">
                    <a href="" className="header__menu-link">
                      Блог
                    </a>
                  </li>
                  <li className="header__menu-item">
                    <a href="" className="header__menu-link">
                      Контакты
                    </a>
                  </li>
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
        <section className="section section--padding section--light">
          <div className="container">
            <div className="section__body">
              <div className="media">
                <div className="media__pic">
                  <Image src={Img1} width={350} height={400} alt="Горы" />
                </div>
                <div className="media__body">
                  <Image src={Img2} width={350} height={400} alt="Горы" />
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
            <li className="mobile-overlay__item">
              <a className="mobile-overlay__link" href=".#">
                Про гида
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a className="mobile-overlay__link" href=".#">
                Программа тура
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a className="mobile-overlay__link" href=".#">
                Стоимость
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a className="mobile-overlay__link" href=".#">
                Блог
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a className="mobile-overlay__link" href=".#">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </dialog>
    </>
  );
}
