import express, { IRouter, Request, Response } from "express";
import GifsService from "../services/gifs-service";
import axios from "axios";

class GifsRoute {
  private route: IRouter;
  constructor() {
    this.route = express.Router();
  }
  execute(): IRouter {
    /**
     * Endpoint for search gifs by keywords
     */
    this.route.get("/gifs", async (_req: Request, res: Response) => {
      try {
        //TODO: "as" is an assertion and is used to tell
        //the compiler that the variable has a specific type
        // even though the compiler doesn't know it.
        const keyword = _req.query.keyword as string;
        const limit = _req.query.limit as string;
        const offset = _req.query.offset as string;

        if (!keyword) throw new Error("Keyword parameter ir required");

        const service = new GifsService();
        const { results, pagination } = await service.getGifsByKeyword(
          keyword,
          limit,
          offset
        );

        res.status(axios.HttpStatusCode.Ok).json({ results, pagination });
      } catch (error) {
        console.log(error);
        res
          .status(axios.HttpStatusCode.InternalServerError)
          .send({ error: error.message });
      }
    });

    return this.route;
  }
}
export default GifsRoute;
