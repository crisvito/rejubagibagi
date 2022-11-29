import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ListFetch } from "../../hooks";
import { category as cate } from "../config";
import { apiConfig } from "../data";

export function MovieList(props) {
  const { data, isPending, error } = ListFetch(cate[props.cate], props.type);
  return <div>MovieList</div>;
}
