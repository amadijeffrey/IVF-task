export const getStatusBadge = (status) => {
  switch (status) {
    case "Ongoing":
    case "In progress":
      return (
        <div className="flex items-center border p-2 rounded-[16px] w-[80px] text-[#5925dc] border-[#d9d6fe] bg-[#f4f3ff]">
          <p className="text-sm font-medium">{status}</p>
        </div>
      );
    case "Completed":
    case "Ready for transfer":
      return (
        <div className="flex items-center border p-2 rounded-[16px] w-[140px] text-[#067647] border-[#abefc6] bg-[#ecfdf3]">
          <p className="text-sm font-medium">{status}</p>
        </div>
      );
    case "Cancelled":
    case "Failed":
      return (
        <div className="flex items-center border p-2 rounded-[16px] w-[90px] text-[#b42318] border-[#fecdca] bg-[#fef3f2]">
          <p className="text-sm font-medium">{status}</p>
        </div>
      );
    default:
      return <span>{status}</span>;
  }
};
