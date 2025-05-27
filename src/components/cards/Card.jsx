const Card = ({ img, name, ...props }) => {
  return (
    <div className="flex h-full w-55 cursor-pointer flex-col" {...props}>
      <img
        className="block aspect-square w-55 flex-shrink-0 overflow-hidden rounded-2xl object-cover"
        src={img}
        alt={name}
      />
      <p className="line-clamp-1 overflow-hidden pt-2 pb-1 text-lg">{name}</p>
    </div>
  );
};

export default Card;
