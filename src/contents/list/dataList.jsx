import { Link } from "react-router-dom";
import { OutlineButton } from "../../components";
import { MovieList } from "../../components";

export function DataList(props) {
  return (
    <div className="w-11/12">
      <div className="flex justify-between py-5 mt-2">
        <h2 className="text-white font-bold text-xl uppercase">
          {props.title}
        </h2>
        <Link to="/movie">
          <OutlineButton className="border-white text-white px-5">
            view more
          </OutlineButton>
        </Link>
      </div>
      <MovieList cate={props.cate} type={props.type} />
    </div>
  );
}
