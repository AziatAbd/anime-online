import Button from "../../shared/UI/button/Button";
import Card from "../../shared/UI/card/Card";
import { animeList } from "../../shared/utils/animeList";

const Popular = () => {
  return (
    <div className="mx-auto mb-28 w-fit rounded-3xl bg-[#060607] p-10">
      <h1 className="mb-6 text-4xl" id="popular">
        Популярное
      </h1>

      <div className="mb-10 grid w-fit grid-cols-2 gap-10">
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
