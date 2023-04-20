import express from 'express';
import {getAllPeople, createPerson, updatePerson, getPersonById, deletePerson} from "../controllers/personController";

const router = express.Router();

router.route("/").get(getAllPeople).post(createPerson);
router.route("/:id").patch(updatePerson).get(getPersonById).delete(deletePerson);

export default router;