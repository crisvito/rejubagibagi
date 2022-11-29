import { Link } from "react-router-dom";
import { OutlineButton } from "../../components";

export function HomeList() {
  return (
    <div>
      <div className="flex justify-between">
        <h2>Trending</h2>
        <Link to="/movie">
          <OutlineButton className="border-red-700 px-5">
            view more
          </OutlineButton>
        </Link>
      </div>
    </div>
  );
}
