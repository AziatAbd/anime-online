type Props = {
  title: string;
  description: string;
  image: string;
};

const Card = ({ title, description, image }: Props) => {
  return (
    <div className="w-[600px] h-[380px] relative cursor-pointer overflow-hidden rounded-3xl">
      <img
        src={image}
        alt={title}
        className="w-full h-full rounded-3xl object-cover hover:scale-105 duration-500"
      />
      <div className="absolute bottom-0 w-full h-1/6 shadow-[inset_0px_-43px_37px_-17px_#1a202c] rounded-b-3xl text-start px-4">
        <p>{title}</p>
        <p className="text-[#c4c4c4] w-[550px] overflow-hidden text-nowrap text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
