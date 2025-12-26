import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface EpisodeMenuProps {
  episodes: Number[];
  slug: string;
}

export function EpisodeMenu({ episodes, slug }: EpisodeMenuProps) {
  const sortedEpisodes = episodes.sort((a, b) => Number(b) - Number(a));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full bg-transparent cursor-pointer"
        >
          Chọn tập <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto">
        {sortedEpisodes.map((ep) => (
          <DropdownMenuItem key={ep.toString()} asChild>
            <Link
              href={`/xemPhim/${slug}?tap=${ep}`}
              className="cursor-pointer"
            >
              Tập {ep.toString()}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
