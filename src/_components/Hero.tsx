"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import RootApiFilmNewUpdate from "@/_interfaces/DataFilmNewUpdateProps";
import Image from "next/image";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRef } from "react";
import { time } from "console";
import { DescriptionMovie } from "./DescriptionMovie";
import { FavoriteAndShare } from "./FavoriteAndShare";

export function Hero({ slideList }: { slideList: RootApiFilmNewUpdate }) {
  const swiperRef = useRef<SwiperType>();
  return (
    <section className="relative text-white">
      <Swiper
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        grabCursor
        loop
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper rounded-lg overflow-hidden"
      >
        {slideList.items.map((item) => (
          <SwiperSlide className="relative aspect-video" key={item.name}>
            <Image
              sizes="1000px"
              alt={`Ảnh phim ${item.name}`}
              src={item.poster_url}
              fill
              quality={100}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-black to-transparent">
              <div className="absolute bottom-[8%] left-[8%]">
                <h3 className="text-3xl font-bold mb-6 tracking-wide">
                  {item.name}
                </h3>
                <DescriptionMovie
                  language={item.language}
                  quality={item.quality}
                  time={item.time}
                  total_episodes={item.total_episodes}
                />
                <div className="flex items-center gap-4">
                  <Link
                    href={`/xemPhim/${item.slug}`}
                    className="flex gap-2 items-center justify-center w-48 py-4 rounded-xl bg-blue-default"
                  >
                    <PlayCircle />
                    <span className="font-bold">Xem ngay</span>
                  </Link>
                  <FavoriteAndShare />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        variant="secondary"
        className="prev absolute top-1/2 left-[5%] z-20 -translate-y-1/2 !bg-black/40 sm:block hidden"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft className="text-blue-default" />
      </Button>
      <Button
        variant="secondary"
        className="next absolute top-1/2 right-[5%] z-20 -translate-y-1/2 !bg-black/40 sm:block hidden"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight className="text-blue-default" />
      </Button>
    </section>
  );
}
