const Highlights = () => {
  return (
    <div className="bg-[#060607] mx-auto w-fit p-10 rounded-3xl">
      <h1 className="text-4xl mb-6" id="highlight">
        Рекомендуем
      </h1>

      <div className="flex justify-center gap-4">
        <div className="w-[600px] h-[718px] relative cursor-pointer overflow-hidden rounded-xl">
          <img
            src="https://www.kino-teatr.ru/news/23181/205114.jpg"
            alt=""
            className="w-full h-full rounded-xl object-cover hover:scale-105 duration-500 "
          />
          <p className="absolute bottom-0 w-full h-1/6 text-center shadow-[inset_0px_-43px_37px_-17px_#1a202c] flex justify-center items-end rounded-xl">
            Атака титанов
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-[375px] h-[368px] relative cursor-pointer overflow-hidden rounded-xl">
            <img
              src="https://animego.org/upload/anime/images/5ca8e16ebd092601180598.jpg"
              alt=""
              className="w-full h-full rounded-xl object-cover hover:scale-105 duration-500 "
            />
            <p className="absolute bottom-0 w-full h-1/6 text-center shadow-[inset_0px_-43px_37px_-17px_#1a202c] flex justify-center items-end rounded-xl">
              Клинок рассекающий демонов
            </p>
          </div>

          <div className="w-[375px] h-[332px] relative cursor-pointer overflow-hidden rounded-xl">
            <img
              src="https://animego.org/upload/anime/images/5bbd16801a7cd762823407.jpg"
              alt=""
              className="w-full h-full rounded-xl object-cover hover:scale-105 duration-500"
            />
            <p className="absolute bottom-0 w-full h-1/6 text-center shadow-[inset_0px_-43px_37px_-17px_#1a202c] flex justify-center items-end rounded-xl">
              Черный клевер
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-[230px] h-[243px] relative cursor-pointer overflow-hidden rounded-xl">
            <img
              src="https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5df735a5705a7588124703.jpg"
              alt=""
              className="w-full h-full rounded-xl object-cover hover:scale-105 duration-500"
            />
            <p className="absolute bottom-0 w-full h-1/6 text-center shadow-[inset_0px_-43px_37px_-17px_#1a202c] flex justify-center items-end rounded-xl">
              Ванпанчмен
            </p>
          </div>
          <div className="w-[223px] h-[455px] relative cursor-pointer overflow-hidden rounded-xl">
            <img
              src="https://img.yani.tv/posters/full/1636665612.jpg"
              alt=""
              className="w-full h-full rounded-xl object-cover hover:scale-105 duration-500"
            />
            <p className="absolute bottom-0 w-full h-1/6 text-center shadow-[inset_0px_-43px_37px_-17px_#1a202c] flex justify-center items-end rounded-xl">
              Хантер х хантер
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
