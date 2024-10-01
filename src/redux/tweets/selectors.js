export const selectTweetsItems = (state) => state.tweets.items;

export const selectTweetsIsLoading = (state) => state.tweets.isLoading;

export const selectTweetsError = (state) => state.tweets.error;

export const selectTweetsHasMore = (state) => state.tweets.hasMore;

export const selectTweetsPage = (state) => state.tweets.page;
