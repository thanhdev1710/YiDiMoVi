/* eslint-disable @typescript-eslint/no-explicit-any */
import Highlight from "@/components/Highlight";
import Loading from "@/app/loading";
import { Suspense } from "react";
import { auth } from "@/libs/auth";
import { getMovieFavorite } from "@/libs/supabase-service";

type Props = {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function page({ params, searchParams }: Props) {
  const session = await auth();
  const { type, value } = await searchParams;
  let listFavorite: any[];
  if (session?.user?.userId) {
    listFavorite = await getMovieFavorite(session?.user?.userId);
  } else {
    listFavorite = [];
  }

  return (
    <Suspense
      fallback={<Loading />}
      key={`${type}-${value}-${session?.user?.userId}`}
    >
      <Highlight
        searchParams={searchParams}
        params={params}
        listFavorite={listFavorite}
        session={session}
      />
    </Suspense>
  );
}
