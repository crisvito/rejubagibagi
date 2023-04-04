import { Play } from "phosphor-react";
import { Link } from "react-router-dom";

export function Card({ src, alt, id }) {
  return (
    <div className="bg-cover overflow-hidden group flex justify-center">
      <span className="fixed z-10 invisible group-hover:visible self-center">
        <Play
          size={55}
          color="#ffffff"
          weight="fill"
          className="hover:scale-120 cursor-pointer shadow-2xl"
        />
      </span>
      <Link to={`/${id}`}>
        <img
          src={src}
          alt={alt}
          className="transition h-80 duration-300 ease-in-out hover:scale-110 hover:blur-xs cursor-pointer"
        />
      </Link>
    </div>
  );
}
