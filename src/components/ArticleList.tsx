import ArticleCard, { type Article } from "./ArticleCard";
import { Divider } from "./SectionHeader";

interface ArticleListProps {
  articles: Article[];
  variant?: "feed" | "numbered" | "mywork";
}

export default function ArticleList({ articles, variant = "feed" }: ArticleListProps) {
  return (
    <div>
      {articles.map((article, i) => (
        <div key={article.id}>
          <ArticleCard article={article} variant={variant} index={i + 1} />
          {i < articles.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
}
