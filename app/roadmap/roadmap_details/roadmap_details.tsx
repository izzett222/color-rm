import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import CourseRoadmap from "./course_roadmap";

function RoadMapDetailsScreen() {
  return (
    <div className="flex flex-col items-center w-full p-5 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div>
        <div className="flex items-center justify-center mb-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-3 flex">
            <h2 className="text-sm font-light">created by </h2>
            <h2 className="text-sm font-semibold ml-1">Thomas Gasangwa</h2>
          </div>
        </div>
        <p className="text-gray-500 mt-2 mb-3">
          Geomatics is the science of collecting, analyzing, and managing
          spatial data.
        </p>
        <div className="flex justify-center space-x-3 mb-4 hover:opacity-80">
          <Button className="bg-gray-400 px-6 flex">
            <IoIosArrowRoundBack />
            Discover
          </Button>
          <Button className="bg-orange-400 px-6 flex">
            Share
            <IoMdShare />
          </Button>
        </div>
      </div>
      <CourseRoadmap />
    </div>
  );
}
export default RoadMapDetailsScreen;
