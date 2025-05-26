export const ChipItem: React.FC<{
  title: string;
  onClick?: () => void;
}> = ({ title, onClick }) => {
  return (
    <div
      className="bg-gray-200 rounded-full px-4 py-2 me-2 text-sm cursor-pointer hover:bg-gray-300 transition-colors"
      onClick={onClick}
    >
      {title}
    </div>
  );
};
