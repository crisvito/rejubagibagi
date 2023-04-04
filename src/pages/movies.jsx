import { DataList, DataSlider } from "../contents";
import { Layout } from "../layouts";
import { category as cate, movieType } from "../config";

export function Movies() {
  return (
    <Layout>
      <div className="overflow-hidden">
        <DataSlider
          cate={cate.movie}
          type={movieType.top_rated}
          params={{ page: 4 }}
        />
        <div className="bg-slate-800 flex flex-col items-center py-5">
          <DataList
            cate={cate.movie}
            type={movieType.popular}
            title="Popular Movie"
          />
          <DataList
            cate={cate.movie}
            type={movieType.upcoming}
            title="upcoming movie"
          />
          <DataList
            cate={cate.movie}
            type={movieType.top_rated}
            title="top rated movie"
          />
        </div>
      </div>
    </Layout>
  );
}
