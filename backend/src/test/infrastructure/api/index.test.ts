import ExampleRoute from "@/infrastructure/api/routes/ExampleRoute";
import server from "@/infrastructure/api/server";
import request from "supertest";
describe('Server', ()=> {
    beforeAll(() => {
        const example = new ExampleRoute();
        server.use(example.execute())
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })
    it('should return example contract', async ()=> {
        const response = await request(server).get("/");
        expect(response.statusCode).toBe(200);
    })

});