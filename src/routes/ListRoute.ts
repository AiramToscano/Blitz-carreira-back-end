import { Router } from 'express';
import ListController from '../controllers/ListControllers';
import ListService from '../services/ListService';
import ListModel from '../models/ListModel';
import connection from '../models/connection';

const ListRoute = Router();

const ListControllers = new ListController(new ListService(new ListModel(connection)));

ListRoute.get('/list', ListControllers.getTalks);

export default ListRoute;
