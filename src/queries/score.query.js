import { useQuery } from "@tanstack/react-query";
import WordService from "../services/word.service";
import { QUERY_KEYS } from "../utils/static";
export const useGetScoreQuery = (word) => {
  return useQuery(
    [QUERY_KEYS.SCORE],
    async () => {
      return await WordService.getScore(word);
    },
    {
      enabled: !!word,
      retry: false,
    }
  );
};
