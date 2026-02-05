//Caso de uso de obtener todas las companies
export class GeteContracts {
  constructor(eContractsRepositoryFindAll) {
    this.eContractsRepositoryFindAll = eContractsRepositoryFindAll;
  }
  async execute() {
    return await this.eContractsRepositoryFindAll.findAll();
  }
}