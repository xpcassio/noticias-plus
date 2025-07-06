import { useNavigate } from 'react-router-dom';
import type { ListItemProps } from './interface';

export default function ListItem({ title, quantity, to }: ListItemProps) {
  let navigate = useNavigate();

  return (
    <>
      <div
        className="flex items-center justify-between mt-2 cursor-pointer"
        onClick={() => {
          if (to) {
            navigate(to);
          }
        }}
      >
        <h3 className="text-base">{title}</h3>
        {quantity && (
          <div className="p-2 rounded-full text-[12px] bg-gray-200">
            {quantity}
          </div>
        )}
      </div>
    </>
  );
}
