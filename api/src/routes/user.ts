import { Response, Request, Router } from "express";
const router = Router();

router.get('/', (req:Request, res:Response) => {
    res.send("Soy get")
});

router.post('/', (req:Request, res:Response) => {
    res.send("Soy post")
});

export default router;