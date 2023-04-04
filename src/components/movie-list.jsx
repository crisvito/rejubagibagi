import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { apiConfig, tmdbApi } from "../api";
import { useEffect, useState } from "react";
import { Card } from ".";
import { category } from "../config";

export function MovieList(props) {
  let response = null;
  const [items, setItems] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    async function getList() {
      if (props.type !== "similar") {
        if (props.cate === category.movie) {
          response = await tmdbApi.getMovie(props.cate, props.type);
        }
        if (props.cate === category.tv) {
          response = await tmdbApi.getTv(props.cate, props.type);
        }
      } else {
        response = await tmdbApi.similar(props.cate, props.id);
      }
      setIsPending(false);
      setItems(response.data.results);
    }
    getList();
  }, []);

  return (
    <div>
      {isPending && <span className="text-white uppercase">Masih Loading</span>}
      <Swiper slidesPerView="auto" spaceBetween={10} grabCursor={true}>
        {items.map((item) => {
          return (
            <SwiperSlide
              className="lg:w-[15%] md:w-[30%] w-[40%]"
              key={item.id}
            >
              <Card
                src={apiConfig.w500Image(item.poster_path)}
                alt={item.title}
                id={item.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
