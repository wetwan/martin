import { useNavigate } from "react-router";

type Props = {
  image: string[];
  type: string;
  shape: string;
  id: string;
};

const Card = ({ image, type, id, shape }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/product/${id}`);
        scrollTo(0, 0);
      }}
      className="max-w-[300px] w-full block mx-auto h-[355px] shadow hover:shadow-lg hover:p-3 p-1 border-black"
    >
      <img src={image[0]} alt={id} className="mb-1 w-full h-[88%]" />
      <div className="flex capitalize px-4 items-center justify-between border-black  mx-auto w- h-[10%]">
        <p className="font-bold">{type}</p>
        <p className="font-bold">{shape}</p>
      </div>
    </div>
  );
};

export default Card;
