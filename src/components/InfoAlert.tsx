import IconBookmark from '../assets/svg/bookmark.svg?react';
import type { ErrorAlertProps } from './interface';

export default function InfoAlert({ message }: ErrorAlertProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-3xl p-6 mt-4">
        <IconBookmark
          className="mb-4 dark:fill-stone-100"
          height="54"
          width="54"
        />
        <span className="text-xl font-semibold text-center">{message}</span>
      </div>
    </>
  );
}
