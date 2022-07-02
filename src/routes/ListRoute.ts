import { Router } from 'express';
import ListController from '../controllers/ListControllers';
import ListService from '../services/ListService';
import ListModel from '../models/ListModel';
import connection from '../models/connection';
import validator from '../utils/Validators';

const ListRoute = Router();

const ListControllers = new ListController(new ListService(new ListModel(connection)));

ListRoute.get('/', ListControllers.getTalks);
ListRoute.post('/', validator.validatename, validator.validatestatus, ListControllers.postTalks);
ListRoute.put('/', validator.validatename, validator.validatestatus, ListControllers.putTalks);
ListRoute.delete('/', validator.validatename, ListControllers.deleteTalks);

export default ListRoute;
