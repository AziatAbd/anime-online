type Props = {
  title: string;
  description: string;
  image: string;
};

const Card = ({ title, description, image }: Props) => {
  return (
    <div className="relative h-[380px] w-[600px] cursor-pointer overflow-hidden rounded-3xl">
      <img
        src={image}
        alt={title}
        className="h-full w-full rounded-3xl object-cover duration-500 hover:scale-105"
      />
      <div className="absolute bottom-0 h-1/6 w-full rounded-b-3xl px-4 text-start shadow-[inset_0px_-43px_37px_-17px_#1a202c]">
        <p>{title}</p>
        <p className="w-[550px] overflow-hidden text-ellipsis text-nowrap text-[#c4c4c4]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
