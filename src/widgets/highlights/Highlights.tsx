const Highlights = () => {
  return (
    <div className="mx-auto w-fit rounded-3xl bg-[#060607] p-10">
      <h1 className="mb-6 text-4xl" id="highlight">
        Рекомендуем
      </h1>

      <div className="flex justify-center gap-4">
        <div className="relative h-[718px] w-[600px] cursor-pointer overflow-hidden rounded-xl">
          <img
            src="https://www.kino-teatr.ru/news/23181/205114.jpg"
            alt=""
            className="h-full w-full rounded-xl object-cover duration-500 hover:scale-105"
          />
          <p className="absolute bottom-0 flex h-1/6 w-full items-end justify-center rounded-xl text-center shadow-[inset_0px_-43px_37px_-17px_#1a202c]">
            Атака титанов
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative h-[368px] w-[375px] cursor-pointer overflow-hidden rounded-xl">
            <img
              src="https://animego.org/upload/anime/images/5ca8e16ebd092601180598.jpg"
              alt=""
              className="h-full w-full rounded-xl object-cover duration-500 hover:scale-105"
            />
            <p className="absolute bottom-0 flex h-1/6 w-full items-end justify-center rounded-xl text-center shadow-[inset_0px_-43px_37px_-17px_#1a202c]">
              Клинок рассекающий демонов
            </p>
          </div>

          <div className="relative h-[332px] w-[375px] cursor-pointer overflow-hidden rounded-xl">
            <img
              src="https://animego.org/upload/anime/images/5bbd16801a7cd762823407.jpg"
              alt=""
              className="h-full w-full rounded-xl object-cover duration-500 hover:scale-105"
            />
            <p className="absolute bottom-0 flex h-1/6 w-full items-end justify-center rounded-xl text-center shadow-[inset_0px_-43px_37px_-17px_#1a202c]">
              Черный клевер
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative h-[243px] w-[230px] cursor-pointer overflow-hidden rounded-xl">
            <img
              src="https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5df735a5705a7588124703.jpg"
              alt=""
              className="h-full w-full rounded-xl object-cover duration-500 hover:scale-105"
            />
            <p className="absolute bottom-0 flex h-1/6 w-full items-end justify-center rounded-xl text-center shadow-[inset_0px_-43px_37px_-17px_#1a202c]">
              Ванпанчмен
            </p>
          </div>
          <div className="relative h-[455px] w-[223px] cursor-pointer overflow-hidden rounded-xl">
            <img
              src="https://img.yani.tv/posters/full/1636665612.jpg"
              alt=""
              className="h-full w-full rounded-xl object-cover duration-500 hover:scale-105"
            />
            <p className="absolute bottom-0 flex h-1/6 w-full items-end justify-center rounded-xl text-center shadow-[inset_0px_-43px_37px_-17px_#1a202c]">
              Хантер х хантер
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
