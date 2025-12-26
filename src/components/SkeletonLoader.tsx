export default function SkeletonLoader({ type = 'card' }: { type?: 'card' | 'course' | 'article' }) {
  if (type === 'course') {
    return (
      <div className="bg-[#2c3e50] rounded-lg overflow-hidden animate-pulse">
        <div className="h-48 bg-[#34495e]" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-[#34495e] rounded w-1/3" />
          <div className="h-6 bg-[#34495e] rounded w-3/4" />
          <div className="flex gap-4 pt-2">
            <div className="h-4 bg-[#34495e] rounded w-20" />
            <div className="h-4 bg-[#34495e] rounded w-20" />
          </div>
          <div className="h-10 bg-[#34495e] rounded mt-4" />
        </div>
      </div>
    );
  }

  if (type === 'article') {
    return (
      <div className="bg-[#2c3e50] rounded-lg overflow-hidden animate-pulse">
        <div className="h-48 bg-[#34495e]" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-[#34495e] rounded w-1/3" />
          <div className="h-6 bg-[#34495e] rounded w-full" />
          <div className="h-4 bg-[#34495e] rounded w-full" />
          <div className="h-4 bg-[#34495e] rounded w-4/5" />
          <div className="flex justify-between items-center pt-2">
            <div className="h-4 bg-[#34495e] rounded w-16" />
            <div className="h-6 bg-[#34495e] rounded-full w-6" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#2c3e50] rounded-lg p-6 animate-pulse">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-[#34495e] rounded-lg" />
      </div>
      <div className="space-y-3">
        <div className="h-6 bg-[#34495e] rounded w-3/4 mx-auto" />
        <div className="h-4 bg-[#34495e] rounded w-full" />
        <div className="h-4 bg-[#34495e] rounded w-2/3 mx-auto" />
        <div className="h-4 bg-[#34495e] rounded w-1/4 mx-auto mt-4" />
      </div>
    </div>
  );
}
