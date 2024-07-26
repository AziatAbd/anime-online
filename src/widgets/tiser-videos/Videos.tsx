import { videos } from "../../shared/utils/videos";

const Videos = () => {
  return (
    <div className="mx-auto mb-28 w-fit rounded-3xl bg-[#060607] p-10">
      <h1 className="mb-6 text-4xl" id="highlight">
        Тизер
      </h1>
      <div className="flex gap-4">
        {videos.map((videos) => (
          <div>
            <object>
              <video
                controls
                poster={videos.poster}
                src={videos.videoUrl}
                className="h-[220px] w-[420px]"
              ></video>
            </object>
            <p>{videos.animeName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
