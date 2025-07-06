import type { ArticleItem } from '../hooks/interfaces';

export function saveToLocalStorage(article: ArticleItem) {
  const savedArticles = localStorage.getItem('savedArticles') || '[]';
  const savedArticlesParsed = JSON.parse(savedArticles);
  const isArticleSaved = savedArticlesParsed.some(
    (item: ArticleItem) => item.url === article.url
  );

  if (!isArticleSaved) {
    savedArticlesParsed.push(article);
    localStorage.setItem('savedArticles', JSON.stringify(savedArticlesParsed));
  }

  return true;
}

export function removeFromLocalStorage(article: ArticleItem) {
  const savedArticles = localStorage.getItem('savedArticles') || '[]';
  const savedArticlesParsed = JSON.parse(savedArticles);
  const updatedArticles = savedArticlesParsed.filter(
    (item: ArticleItem) => item.url !== article.url
  );
  localStorage.setItem('savedArticles', JSON.stringify(updatedArticles));
  return updatedArticles.length < savedArticlesParsed.length;
}

export function isArticleSaved(article: ArticleItem): boolean {
  const savedArticles = localStorage.getItem('savedArticles') || '[]';
  const savedArticlesParsed = JSON.parse(savedArticles);
  return savedArticlesParsed.some(
    (item: ArticleItem) => item.url === article.url
  );
}

export function getSavedArticles(): [] {
  const savedArticles = localStorage.getItem('savedArticles') || '[]';
  return JSON.parse(savedArticles);
}
