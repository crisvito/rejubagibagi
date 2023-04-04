import { DataList, DataSlider } from "../contents";
import { Layout } from "../layouts";
import { category as cate, tvType } from "../config";

export function TvSeries() {
  return (
    <Layout>
      <div className="overflow-hidden">
        <DataSlider
          cate={cate.tv}
          type={tvType.top_rated}
          params={{ page: 3 }}
        />
        <div className="bg-slate-800 flex flex-col items-center py-5">
          <DataList cate={cate.tv} type={tvType.popular} title="Popular Tv" />
          <DataList
            cate={cate.tv}
            type={tvType.on_the_air}
            title="on the air Tv"
          />
          <DataList
            cate={cate.tv}
            type={tvType.top_rated}
            title="top rated Tv"
          />
        </div>
      </div>
    </Layout>
  );
}
