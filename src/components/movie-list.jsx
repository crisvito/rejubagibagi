import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { category as cate } from "../config";
import { apiConfig, tmdbApi } from "../api";
import { useEffect, useState } from "react";

export function MovieList(props) {
  let response = null;
  const [items, setItems] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    async function getList() {
      if (props.type !== "similar") {
        if (props.cate === cate.movie) {
          response = await tmdbApi.getList(props.cate, props.type);
        } else {
          response = await tmdbApi.getList(props.cate, props.type);
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
              <img
                src={apiConfig.w500Image(item.poster_path)}
                alt={item.title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
