import Button from "../../shared/UI/button/Button";
import Card from "../../shared/UI/card/Card";
import { animeList } from "../../shared/utils/animeList";

const Popular = () => {
  return (
    <div className="bg-[#060607] mx-auto w-fit p-10 rounded-3xl mb-28">
      <h1 className="text-4xl mb-6" id="popular">
        Популярное
      </h1>

      <div className="grid grid-cols-2 gap-10 w-fit mb-10">
        {animeList.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
      <div className="w-full text-center">
        <Button variant="outlined">Посмотреть ещё</Button>
      </div>
    </div>
  );
};

export default Popular;
