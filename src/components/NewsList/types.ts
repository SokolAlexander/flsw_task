import { NewsItem } from '../../store/news/types';

export type NewsListProps = {
  items: NewsItem[];
  onRefresh: () => void;
  onOpenLink: (link: string) => void;
  isLoading: boolean;
  error: string | null;
};
