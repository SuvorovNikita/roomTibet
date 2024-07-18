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
          </div>
        </div>
      </section>

      <main></main>

      {/* <dialog
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
              <a className="mobile-overlay__link" href="/">
                Про гида
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a className="mobile-overlay__link" href="/">
                Программа тура
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a className="mobile-overlay__link" href="/">
                Стоимость
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a className="mobile-overlay__link" href="/">
                Блог
              </a>
            </li>
            <li className="mobile-overlay__item">
              <a className="mobile-overlay__link" href="/">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </dialog> */}

      <dialog
        class="mobile-overlay visible-mobile"
        id="mobileOverlay"
        open={isDialogOpen}
      >
        <form class="mobile-overlay__close-button-wrapper">
          <button
            class="mobile-overlay__close-button cross-button"
            onClick={() => setIsDialogOpen(false)}
            type="submit"
          >
            <span class="visually-hidden">Close navigation menu</span>
          </button>
        </form>
        <div class="mobile-overlay__body">
          <ul class="mobile-overlay__list">
            <li class="mobile-overlay__item">
              <a class="mobile-overlay__link" href="/">
                About us
              </a>
            </li>
            <li class="mobile-overlay__item">
              <a class="mobile-overlay__link" href="/">
                Services
              </a>
            </li>
            <li class="mobile-overlay__item">
              <a class="mobile-overlay__link" href="/">
                Use Cases
              </a>
            </li>
            <li class="mobile-overlay__item">
              <a class="mobile-overlay__link" href="/">
                Pricing
              </a>
            </li>
            <li class="mobile-overlay__item">
              <a class="mobile-overlay__link" href="/">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </dialog>
    </>
  );
}
