import type { ListCardProps } from './interface';
import Heading from './Heading';
import IconBookmarkAdd from '../assets/svg/bookmark-add.svg?react';
import IconBookmarkRemove from '../assets/svg/bookmark-remove.svg?react';
import {
  isArticleSaved,
  removeFromLocalStorage,
  saveToLocalStorage,
} from '../functions/localStorageFunctions';

export default function ListCard({ article, onAction }: ListCardProps) {
  return (
    <div className="mt-6 px-2  flex items-center justify-between">
      <div
        className="cursor-pointer"
        onClick={() => (window.location.href = `${article.url}`)}
      >
        <Heading title={article.source.name} type="article" className=" mb-1" />
        <div className="font-bold dark:text-stone-200">{article.title}</div>
        <div className="">{article.description}</div>
      </div>
      {isArticleSaved(article) ? (
        <button
          type="button"
          className={`p-2 cursor-pointer h-full`}
          onClick={() => removeFromLocalStorage(article) && onAction?.()}
        >
          <IconBookmarkRemove
            className="dark:fill-stone-100"
            height="34"
            width="34"
          />
        </button>
      ) : (
        <button
          type="button"
          className={`p-2 cursor-pointer h-full`}
          onClick={() => saveToLocalStorage(article) && onAction?.()}
        >
          <IconBookmarkAdd
            className="dark:fill-stone-100"
            height="34"
            width="34"
          />
        </button>
      )}
    </div>
  );
}
