import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { category } from "../../config";
import { ListFetch } from "../../hooks";
import { Button, OutlineButton, Modal } from "../../components";
import { apiConfig, tmdbApi } from "../../api";

export function DataSlider({ cate, type, params = { page: 1 } }) {
  const { data, error, isPending } = ListFetch(cate, type, params);
  return (
    <div className="bg-slate-800">
      {error && <span>{error}</span>}
      {isPending && <span className="text-white uppercase">Masih Loading</span>}
      <div className="relative h-screen overflow-hidden">
        <Swiper
          navigation={true}
          slidesPerView={1}
          loop={true}
          speed={1000}
          modules={[Navigation]}
          className="h-full bg-black"
          style={{ "--swiper-navigation-color": "red" }}
        >
          {data.slice(0, 5).map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <HomeSliderContent item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
function HomeSliderContent({ item }) {
  const [showModal, setShowModal] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const setModalActive = async () => {
    setShowModal(true);
    const video = await tmdbApi.getVideos(category.movie, item.id);
    try {
      const trailer =
        "https:/www.youtube.com/embed/" + video.data.results[1].key;
      setTrailer(trailer);
    } catch (error) {
      setError("no Video");
    }
  };
  return (
    <div className="h-full bg-black">
      <img
        src={apiConfig.originalImage(
          item.backdrop_path ? item.backdrop_path : item.poster_path
        )}
        alt={item.title}
        className="bg-cover absolute opacity-30 w-full h-full "
      />
      <div className="flex items-center h-full justify-center relative text-white lg:px-32 px-3">
        <div className="flex lg:flex-row flex-col items-center gap-5">
          <img
            src={apiConfig.w500Image(item.poster_path)}
            alt={item.title}
            className="lg:w-1/4 w-1/2 brightness-110 rounded-lg"
          />
          <div className="flex flex-col gap-10 lg:items-start items-center">
            <h1 className="lg:text-5xl md:text-3xl lg:text-left text-center font-semibold">
              {item.title}
            </h1>
            <p className="leading-loose tracking-widest lg:inline-flex hidden">
              {item.overview}
            </p>
            <span className="flex gap-5">
              <Button
                onClick={() => navigate("/movie/" + item.id)}
                className=" px-5 py-2 "
              >
                Watch Movie
              </Button>
              <OutlineButton onClick={setModalActive} className="px-5 py-2">
                Watch Trailer
              </OutlineButton>
              <Modal onClose={() => setShowModal(false)} show={showModal}>
                {error ? (
                  <span className="text-red-600 text-center uppercase text-lg">
                    {error}
                  </span>
                ) : (
                  <iframe src={trailer} className="w-full h-full"></iframe>
                )}
              </Modal>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
