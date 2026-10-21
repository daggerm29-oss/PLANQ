import { Router, type IRouter } from "express";
import healthRouter from "./health";
import proxyRouter from "./proxy";
import cctvRouter from "./cctv";
import configRouter from "./config";
import trafficRouter from "./traffic";
import infrastructureRouter from "./infrastructure";

const router: IRouter = Router();

router.use(configRouter);
router.use(healthRouter);
router.use(proxyRouter);
router.use(cctvRouter);
router.use(trafficRouter);
router.use(infrastructureRouter);

export default router;
