import SingCard from "./singCard";
  
function SmallBlog() {
    return (
      <div className="bg-white divide-y divide-sky-200 py-5 sm:py-5">
         <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Technical EXPERIENCE & TRAINING COURSES   
         </h2>
        <div className="mx-auto border-b border-gray-900/5 max-w-7xl px-6 lg:px-8">
       
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
             <SingCard/>
            </div>
          </div>
        </div>
    )
  }
  export default SmallBlog;