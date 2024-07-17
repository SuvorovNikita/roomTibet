import Image from "next/image";
import logo from "@/app/assets/img/logo.svg";

export default function Home() {
  return (
    <>
      <section className="section section--bg">
        <div className="container">
          <header className="header">
            <div className="header__inner">
              <a className="header__logo logo" href="">
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
            </div>
          </header>
          <div className="hero">
            <h1 className="hero__title">
              Насладись прогулкой в горах с командой единомышленников
            </h1>
          </div>
        </div>
      </section>

      <main></main>
    </>
  );
}
