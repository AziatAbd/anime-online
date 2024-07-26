import { NavLink, useNavigate } from "react-router-dom";
import FireIcon from "./assets/fire.svg";
import Button from "../../shared/UI/button/Button";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/");

  return (
    <header className="sticky top-0 z-10 w-full flex justify-between px-10 mb-28 bg-[#060607]">
      <div className="flex gap-2 cursor-pointer" onClick={handleNavigate}>
        <img src={FireIcon} alt="logo" />
        <h1 className="font-aubrey text-[48px] text-white">Animes Online</h1>
      </div>

      <div className="flex gap-8 items-center">
        <ul className="flex list-none gap-8 text-2xl text-white">
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

        <input
          type="text"
          className="bg-[#312d2c] text-white p-2 rounded-md"
          placeholder="Поиск"
        />

        <Button variant="contained">Регистрация</Button>
        <Button variant="outlined">Войти</Button>
      </div>
    </header>
  );
};

export default Header;
