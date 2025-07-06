export function extractErrorMessage(errors: any[]) {
  const errorWithMessage = errors.find(
    (err) => typeof err === 'object' && err !== null && 'message' in err
  ) as { message?: string } | undefined;
  return errorWithMessage?.message;
}

export function extractSourceName(data: any): string {
  if (data && data.articles && data.articles.length > 0) {
    const firstArticle = data.articles[0];
    if (firstArticle && firstArticle.source && firstArticle.source.name) {
      return firstArticle.source.name;
    }
  }

  return 'Unknown Source';
}
