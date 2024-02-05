import { FaStar } from "react-icons/fa";

const BrowseBycategoryCard = ({ title, rating, skill }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 cursor-pointer">
      <h2 className="text-2xl font-medium mb-6"> {title} </h2>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <FaStar className="text-grn text-2xl" /> <span>{rating}/5</span>
        </div>
        <span> {skill} Skills</span>
      </div>
    </div>
  );
};

export default BrowseBycategoryCard;
