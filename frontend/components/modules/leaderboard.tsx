
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

export const LeaderBoard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/leaderboard");
  };


  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <p className="text-gray-400">RECENT LEARNERS</p>
        <div onClick={handleNavigate} className="flex items-center space-x-2 cursor-pointer">
          <p className="text-yellow-300">LEADERBOARD</p>
          <img src="/public/icons/front.svg" className="bg-yellow-300 " />
        </div>
      </div>

      {/* Table  */}
      <div>
        <div className="flex justify-between items-center px-3 py-2">
          <div className="flex flex-col gap-1">
            <Avatar>
              <AvatarImage className="w-8 h-8 rounded-full" src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="text-gray-400 text-sm">
              User Level: <span className="text-gray-300">Drifter</span>{" "}
            </p>
          </div>

          <div className="flex space-x-2 items-center">
            {/* add turbo icon */}
            <img src="/public/icons/car.svg" className="h-8 w-8"/>
            <p className="text-sm font-semibold">10 Turbos</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col gap-1">
            <Avatar>
              <AvatarImage className="w-8 h-8 rounded-full" src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="text-gray-400 text-sm">
              User Level: <span className="text-gray-300">Drifter</span>{" "}
            </p>
          </div>

          <div className="flex space-x-2 items-center">
            {/* add turbo icon */}
            <img src="/public/icons/car.svg" className="h-8 w-8"/>
            <p className="text-sm font-semibold">75 Turbos</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col gap-1">
            <Avatar>
              <AvatarImage className="w-8 h-8 rounded-full" src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="text-gray-400 text-sm">
              User Level: <span className="text-gray-300">Drifter</span>{" "}
            </p>
          </div>

          <div className="flex space-x-2 items-center">
            {/* add turbo icon */}
            <img src="/public/icons/car.svg" className="h-8 w-8"/>
            <p className="text-sm font-semibold">120 Turbos</p>
          </div>
        </div>
      </div>
    </div>
  );
};
