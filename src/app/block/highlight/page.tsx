import Highlight from "@/components/Highlight";
import Loading from "@/app/loading";
import { Suspense } from "react";

type Props = {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function page({ params, searchParams }: Props) {
  const { type, value } = await searchParams;

  return (
    <Suspense fallback={<Loading />} key={`${type}-${value}`}>
      <Highlight searchParams={searchParams} params={params} />
    </Suspense>
  );
}
