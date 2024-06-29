"use client";
import { RootApiFilmBySearch } from "@/_interfaces/DataFilmBySearch";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieItem } from "./MovieItem";
import RootApiFilmBySlug from "@/_interfaces/DataFilmBySlug";

export function SwiperMovie({
  dataList,
}: {
  dataList: RootApiFilmBySearch | RootApiFilmBySlug;
}) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {dataList.items.map((item) => (
        <SwiperSlide key={item.name}>
          <MovieItem className="w-full" item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
