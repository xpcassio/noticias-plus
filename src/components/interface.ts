import type { ArticleItem } from '../hooks/interfaces';

export interface ListGroupProps {
  title: string;
  subTitle?: string;
  to?: string;
  source?: DataType;
}

export interface ErrorAlertProps {
  message: string;
}

export interface HeadingProps {
  title: string;
  type?: 'sub' | 'article';
  className?: string;
}

export interface ListItemProps {
  title: string;
  quantity?: number;
  to?: string;
}

export interface ListCardProps {
  article: ArticleItem;
  onAction?: () => void;
}
