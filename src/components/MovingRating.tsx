import { StarFilledIcon } from "@radix-ui/react-icons";
import { StarRate } from "./StarRate";
import { Session } from "next-auth";
import { getMovieRating } from "@/libs/supabase-service";

export default async function MovingRating({
  slug,
  session,
}: {
  slug: string;
  session: Session | null;
}) {
  const { avg, length, ratingUser } = await getMovieRating(
    slug,
    session?.user?.userId
  );
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center py-2 px-3 bg-gray-800 rounded-lg">
        <StarFilledIcon className="text-[#38B6FF] h-6 w-6 mr-2" />
        <span className="text-lg font-bold mr-1 text-white">{avg || "0"}</span>
        <span className="text-xs text-gray-400">({length})</span>
      </div>
      <StarRate
        slug={slug}
        ratingUser={ratingUser}
        userId={session?.user?.userId}
      />
    </div>
  );
}
