import express, { IRouter, Request, Response } from "express";

class ExampleRoute {
    private route: IRouter;
    constructor() {
      this.route = express.Router();
  }
  execute(): IRouter {
    this.route.get('/', (_req: Request, res: Response) => {
      const contract_example = {

          data: [{
              url: 'https://hello.world.com/cat.gif',
              name: 'cat 1'
          },
          {
              url: 'https://hello.world.com/cat2.gif',
              name: 'cat 2'
          },
      ],
          pagination: {
              total_count: 2,
              count: 2,
              offset: 0,
          }
      };

      res.status(200).json(contract_example);
    });

    return this.route
  }
}
export default ExampleRoute;