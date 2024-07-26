import { NavLink } from "react-router-dom";
import FireIcon from "./assets/fire.svg";
import Instagram from "./assets/instagram.svg?react";
import Twitter from "./assets/twitter.svg?react";
import Facebook from "./assets/facebook.svg?react";

const Footer = () => {
  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#060607] p-10">
      <div className="flex justify-around mb-14">
        <div className="font-aubrey">
          <div className="flex gap-2 w-[320px] flex-wrap mb-10">
            <img src={FireIcon} alt="logo" />
            <h1 className="text-[48px] text-white">Animes Online</h1>
            <p className="m-0">Добро пожаловать на лучший аниме-сайт</p>
          </div>
          <p className="w-[370px]">
            Аниме онлайн все права защищены Внимание: Этот сайт не размещает на
            своем сервере никаких видео. Весь контент предоставлен третьими
            лицами и не является аффилированным.
          </p>
        </div>
        <div>
          <ul className="flex list-none gap-8 text-2xl text-white mb-16">
            <li className="[&_.active]:text-[#bd01fe] hover:text-[#bd01fe] duration-500">
              <NavLink to={"/"}>Главная</NavLink>
            </li>
            <li className="[&_.active]:text-[#bd01fe] hover:text-[#bd01fe] duration-500">
              <NavLink to={"news"}>Новости</NavLink>
            </li>
            <li className="[&_.active]:text-[#bd01fe] hover:text-[#bd01fe] duration-500">
              <NavLink to={"categories"}>Категории</NavLink>
            </li>
          </ul>

          <ul className="flex list-none gap-8 text-2xl text-white">
            <li className="hover:text-[#bd01fe] duration-500">
              <a href="#popular" onClick={(e) => smoothScroll(e, "popular")}>
                Популярное
              </a>
            </li>
            <li className="hover:text-[#bd01fe] duration-500">
              <a
                href="#highlight"
                onClick={(e) => smoothScroll(e, "highlight")}
              >
                Рекомендуем
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Социальные сети</h3>

          <ul>
            <li className="flex gap-4 items-center cursor-pointer hover:text-[#bd01fe] duration-500 my-4">
              <Instagram className="" />
              <p>Instagram</p>
            </li>
            <li className="flex gap-4 items-center cursor-pointer hover:text-[#bd01fe] duration-500 mb-4">
              <Twitter className="" />
              <p>X (Twitter)</p>
            </li>
            <li className="flex gap-4 items-center cursor-pointer hover:text-[#bd01fe] duration-500 ">
              <Facebook className="" />
              <p>Facebook</p>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-[#fcfcfc] text-[12px] px-4">
        Copyright DMCA (English) Terms of Use Privacy Policy All rights reserved
        2021 - Смотреть аниме онлайн бесплатно. Лучшие аниме, мультфильмы и
        фильмы, Смотрите лучшие аниме с дубляжом и субтитрами в Hd , любимые тв
        шоу, дублированные аниме, сериалы, аниме, аниме стрим, фанаты аниме,
        смотреть аниме бесплатно, аниме планета, аниме сайты, аниме фильм, аниме
        эпизоды, смотреть тысячи
      </p>
    </footer>
  );
};

export default Footer;
