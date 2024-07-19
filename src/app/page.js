"use client";

import Image from "next/image";
import logo from "@/app/assets/img/logo.svg";
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
                      <option value="" selected hidden>
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
                      <option value="" selected hidden>
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

      <main></main>

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
