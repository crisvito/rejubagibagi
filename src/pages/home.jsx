import { HomeList, HomeSlider } from "../contents";
import { Layout } from "../layouts";
import { category as cate, movieType } from "../config";

export function Home() {
  return (
    <Layout>
      <div className="overflow-hidden">
        <HomeSlider />
        <div className="bg-slate-800 flex flex-col items-center py-5">
          <HomeList
            cate={cate.movie}
            type={movieType.popular}
            title="Popular Movie"
          />
          <HomeList
            cate={cate.movie}
            type={movieType.upcoming}
            title="upcoming movie"
          />
          <HomeList
            cate={cate.movie}
            type={movieType.top_rated}
            title="top rated movie"
          />
        </div>
      </div>
    </Layout>
  );
}
