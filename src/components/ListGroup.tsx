import React from 'react';
import IconArrowDown from '../assets/svg/arrow-down.svg?react';
import IconArrowUp from '../assets/svg/arrow-up.svg?react';
import IconArrowRight from '../assets/svg/arrow-right.svg?react';
import ListItem from './ListItem';
import type { DataItem } from '../hooks/interfaces';
import { useNavigate } from 'react-router-dom';
import type { ListGroupProps } from './interface';

export default function ListGroup({
  title,
  subTitle,
  source,
  to,
}: ListGroupProps) {
  let navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);
  const containerBg = to
    ? 'bg-blue-100 dark:bg-blue-200'
    : 'bg-gray-100 dark:bg-gray-600';
  const textColor = to ? 'dark:text-stone-700' : 'dark:text-stone-100';

  const handleToggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${containerBg} rounded-3xl p-4 mt-4${to ? ' cursor-pointer' : ''}`}
        onClick={() => {
          if (to) {
            navigate(to);
          }
        }}
      >
        <div className="flex items-center justify-between">
          <div className="leading-none">
            <h2 className={`${textColor} text-lg`}>{title}</h2>
            {subTitle && (
              <small className="text-[12px] text-gray-500">
                {subTitle} itens não lidos
              </small>
            )}
          </div>
          <button
            type="button"
            className={`p-2 rounded-full cursor-pointer${!to ? ' hover:bg-gray-200  hover:dark:bg-gray-400' : ''}`}
          >
            {to ? (
              <IconArrowRight className="dark:fill-stone-700" />
            ) : collapsed ? (
              <IconArrowUp
                onClick={handleToggleCollapse}
                className="dark:fill-stone-100"
              />
            ) : (
              <IconArrowDown
                onClick={handleToggleCollapse}
                className="dark:fill-stone-100"
              />
            )}
          </button>
        </div>

        <div className={`collapse-${title}` + (!collapsed ? ' hidden' : '')}>
          {source &&
            source.sources.map((item: DataItem) => (
              <ListItem
                key={item.id}
                title={item.name}
                to={`/${item.category}/${item.id}`}
              />
            ))}
        </div>
      </div>
    </>
  );
}
