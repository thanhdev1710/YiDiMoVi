"use client";
import { useEffect, useRef } from "react";
import Artplayer from "artplayer";
import Hls from "hls.js";

export default function MoviePlayer({
  m3u8Url,
  movieId,
}: {
  m3u8Url: string;
  movieId: string;
}) {
  const artRef = useRef<HTMLDivElement>(null);
  const storageKey = `watch_history_${movieId}`;

  useEffect(() => {
    if (!artRef.current) return;

    const lastTime = parseFloat(localStorage.getItem(storageKey) || "0");

    const art = new Artplayer({
      container: artRef.current,
      url: m3u8Url,
      type: "m3u8",
      fullscreen: true,
      fullscreenWeb: true,
      setting: true,
      autoplay: true, // Thử bật autoplay
      customType: {
        m3u8: function (video, url) {
          if (Hls.isSupported()) {
            const hls = new Hls({
              maxBufferLength: 30,
              enableWorker: true,
              // FIX: Ép Hls.js không gửi referrer trong các request mảnh video (.ts)
              xhrSetup: function (xhr) {
                xhr.withCredentials = false;
              },
            });
            hls.loadSource(url);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
              if (lastTime > 0) video.currentTime = lastTime;
              video.play().catch(() => {
                console.log("Cần tương tác người dùng để phát");
              });
            });
          } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = url;
          }
        },
      },
    });

    // Ép trình phát video không gửi referrer
    art.video.setAttribute("referrerpolicy", "no-referrer");

    art.on("video:timeupdate", () => {
      if (art.video.currentTime > 5 && !art.video.ended) {
        localStorage.setItem(storageKey, art.video.currentTime.toString());
      }
    });

    return () => {
      if (art && art.destroy) art.destroy(false);
    };
  }, [m3u8Url, movieId]);

  return (
    <div
      ref={artRef}
      className="w-full aspect-video rounded-lg overflow-hidden bg-black shadow-2xl"
    ></div>
  );
}
