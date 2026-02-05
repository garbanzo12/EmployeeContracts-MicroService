import 'reflect-metadata';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();

import express from 'express';
import { poolPromise } from './infrastructure/database/typeorm/mssql-pool.js';
import { eContractRepositoryImpl } from './infrastructure/database/typeorm/repositories/eContractRepositoryImpl.js';
import { GeteContracts } from './application/use-cases/GeteContracts.js';
import { GeteContractsById } from './application/use-cases/GeteContractById.js';
import {eContractController} from './infrastructure/http/controllers/eContractController.js'
const app = express();
app.use(express.json());
// app.use(morgan('dev')); <-- Usar morgan en caso de necesitar observar los tiempos de respuesta, en controllers ya se imprimen respuestas de petición
const pool = await poolPromise; // Conexion a la pool mssql  

const repo = new eContractRepositoryImpl(pool);
const geteContractsUseCase = new GeteContracts(repo);
const geteContractsByIdUseCase = new GeteContractsById(repo);
const econtractController = new eContractController(geteContractsUseCase, geteContractsByIdUseCase);

//Endpoints de companies 
app.get('/eContract', (req, res) => econtractController.getAll(req, res));
app.get('/eContract/:id', (req, res) => econtractController.getById(req, res));

app.listen(3003, () => {
    console.log('🚀 Microservicio de Compañías (ODBC Nativo) en puerto 3003');
});