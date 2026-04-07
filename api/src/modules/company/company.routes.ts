import { Router } from "express";
import { makeCompanyController } from "./utils/companyFactory";

const router = Router();
const companyController = makeCompanyController();

router.post("/companies", companyController.createCompany);


export default router;