import { HomeList, HomeSlider } from "../contents";
import { Layout } from "../layouts";

export function Home() {
  return (
    <Layout>
      <div className="overflow-hidden">
        <HomeSlider />
        <HomeList />
      </div>
    </Layout>
  );
}
