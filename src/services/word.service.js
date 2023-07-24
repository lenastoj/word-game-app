import { ROUTES } from "../utils/static";
import httpService from "./http.service";

export default class WordService {
  static client = httpService;

  static getScore = async (word) => {
    return await this.client.request({
      url: `${ROUTES.GAME}/${word}`,
      method: "GET",
    });
  };
}
