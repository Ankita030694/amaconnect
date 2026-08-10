export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-[#FAF8F3] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 animate-pulse">
        {/* Top Stats Bar Skeleton */}
        <div className="w-full h-16 sm:h-20 bg-gray-200/60 rounded-2xl"></div>

        {/* Hero Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Hero Card Skeleton */}
          <div className="lg:col-span-7 h-[300px] sm:h-[400px] lg:h-[500px] bg-gray-200/60 rounded-3xl"></div>
          
          {/* Side Cards Skeleton */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex justify-between items-center mb-2">
               <div className="h-6 w-48 bg-gray-200/60 rounded-md"></div>
               <div className="h-4 w-24 bg-gray-200/60 rounded-md"></div>
            </div>
            <div className="h-[100px] sm:h-[120px] bg-gray-200/60 rounded-2xl"></div>
            <div className="h-[100px] sm:h-[120px] bg-gray-200/60 rounded-2xl"></div>
            <div className="h-[100px] sm:h-[120px] bg-gray-200/60 rounded-2xl"></div>
          </div>
        </div>

        {/* Content Row Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="h-48 bg-gray-200/60 rounded-2xl"></div>
              <div className="h-6 w-3/4 bg-gray-200/60 rounded-md"></div>
              <div className="h-4 w-1/2 bg-gray-200/60 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
