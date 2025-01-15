import Highlight from "@/_components/Highlight";
import Loading from "@/app/loading";
import { Suspense } from "react";

type Props = {
  params: { type: string };
  searchParams: { [key: string]: string };
};

export default async function page({ searchParams, params }: Props) {
  const { type, value } = searchParams;
  return (
    <Suspense fallback={<Loading />} key={`${type}-${value}`}>
      <Highlight searchParams={searchParams} params={params} />
    </Suspense>
  );
}
