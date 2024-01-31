import React from "react";

const FindWordNestedMenu = ({showWork}) => {
  return (
    <ul
      style={{ height: showWork ? "auto" : "0" }}
      className="overflow-hidden duration-200 pl-3"
    >
      <li>
        <div className=" flex items-center justify-between px-3 py-4">
          <div className=" ">
            <h5 className="font-medium mb-1">Ways to earn</h5>
            <p className="text-sm leading-tight">
              Learn why we have the right oportunity for you
            </p>
          </div>
        </div>
      </li>

      <li>
        <div className=" flex items-center justify-between px-3 py-4">
          <div className=" ">
            <h5 className="font-medium mb-1">Find work for your skill</h5>
            <p className="text-sm leading-tight">
              Explore the kind of work available in your field{" "}
            </p>
          </div>
        </div>
      </li>

      <li>
        <div className=" flex items-center justify-between px-3 py-4">
          <div className=" ">
            <h5 className="font-medium mb-1">Win work with ads</h5>
            <p className="text-sm leading-tight">
              Get noticed by the right client
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default FindWordNestedMenu;
