import { NavLink, useNavigate } from "react-router-dom";
import FireIcon from "./assets/fire.svg";
import Button from "../../shared/UI/button/Button";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/");

  return (
    <header className="sticky top-0 z-10 mb-28 flex w-full justify-between bg-[#060607] px-10">
      <div className="flex cursor-pointer gap-2" onClick={handleNavigate}>
        <img src={FireIcon} alt="logo" />
        <h1 className="font-aubrey text-[48px] text-white">Animes Online</h1>
      </div>

      <div className="flex items-center gap-8">
        <ul className="flex list-none gap-8 text-2xl text-white">
          <li className="duration-500 hover:text-[#bd01fe] [&_.active]:text-[#bd01fe]">
            <NavLink to={"/"}>Главная</NavLink>
          </li>
          <li className="duration-500 hover:text-[#bd01fe] [&_.active]:text-[#bd01fe]">
            <NavLink to={"news"}>Новости</NavLink>
          </li>
          <li className="duration-500 hover:text-[#bd01fe] [&_.active]:text-[#bd01fe]">
            <NavLink to={"categories"}>Категории</NavLink>
          </li>
        </ul>

        <input
          type="text"
          className="rounded-md bg-[#312d2c] p-2 text-white"
          placeholder="Поиск"
        />

        <Button variant="contained">Регистрация</Button>
        <Button variant="outlined">Войти</Button>
      </div>
    </header>
  );
};

export default Header;
