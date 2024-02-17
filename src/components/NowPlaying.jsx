// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./NowPlaying.module.css";

import { useEffect } from "react";
import { useMovies } from "../contexts/MoviesContext";

import NowPlayingCard from "./NowPlayingCard";

export default () => {
  const { nowPlayingMovies, getNowPlayingMovies } = useMovies();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <section className={styles.container}>
      <h2>Now Playing</h2>
      <Swiper
        modules={[Scrollbar, Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        navigation={true}
        pagination={{
          clickable: true,
          enabled: false,
          bulletClass: `${styles.myPaginationBullet}`,
          bulletActiveClass: `${styles.myPaginationBulletActive}`,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            pagination: {
              enabled: true,
            },
          },
          768: {
            slidesPerView: 3,
            pagination: {
              enabled: true,
            },
          },
          1024: {
            slidesPerView: 4,
            pagination: {
              enabled: true,
            },
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {nowPlayingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <NowPlayingCard media={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
