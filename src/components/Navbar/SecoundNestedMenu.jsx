const SecoundNestedMenu = () => {

  return (
    <div className="w-screen hidden group-hover:block absolute top-[60px] left-0 bg-white text-gray-800 shadow-md">
                <div className="container mx-auto py-12 flex justify-between gap-10">
                {/* Menubar container */}
                <div className="title mr-6 p-4 rounded-lg hover:bg-grn/10 flex-1">
                      <h5 className="font-medium">Ways to earn</h5>
                      <span className="text-sm"> Learn why we have the right oportunity for you </span>
                </div>
                <div className="title mr-6 p-4 rounded-lg hover:bg-grn/10 flex-1">
                      <h5 className="font-medium">Find work for your skill</h5>
                      <span className="text-sm"> Explore the kind of work available in your field </span>
                </div>
                <div className="title mr-6 p-4 rounded-lg hover:bg-grn/10 flex-1">
                      <h5 className="font-medium">Win work with ads</h5>
                      <span className="text-sm"> Get noticed by the right client </span>
                </div>
               
                              
                </div>
              </div>
  )
}

export default SecoundNestedMenu