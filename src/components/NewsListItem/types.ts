import { NewsItem } from '../../store/news/types';

export type NewsListItemProps = {
  item: NewsItem;
  onOpenLink: (link: string) => void;
};
