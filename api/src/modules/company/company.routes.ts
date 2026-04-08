import { Router } from "express";
import { makeCompanyController } from "./utils/companyFactory";

const router = Router();
const companyController = makeCompanyController();

router.post("/companies", companyController.createCompany);
router.get("/companies", companyController.findAllCompanies);
router.get("/companies/:id", companyController.findCompanyById);
router.put("/companies/:id", companyController.updateCompany);
router.delete("/companies/:id", companyController.deleteCompany);


export default router;