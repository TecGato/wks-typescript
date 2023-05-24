import { Response, Request, Router, NextFunction } from "express";
import { User } from "../models/User";
const router = Router();

router.get('/', (req:Request, res:Response, next: NextFunction) => {
    User.findAll().then((users) => {
        res.send(users);
    }).catch((err) => {
        next(err);
    });
});


router.post('/', (req:Request, res:Response, next:NextFunction) => {
    const user = req.body;
    User.create(user).then((userCreated) => {
        res.send(userCreated);
    })
    .catch((err) => next(err));
});

export default router;