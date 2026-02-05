var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
import { Entity, Column, PrimaryColumn } from 'typeorm';

// Se especifica la tabla con la que se va a trabajar (EmployeeContracts) del schema dbo
export let eContractEntity = (_dec = Entity({
  name: 'EmployeeContracts',
  schema: 'dbo'
}), _dec2 = PrimaryColumn({
  type: 'int'
}), _dec3 = Column({
  type: 'int'
}), _dec4 = Column({
  type: 'date',
  nullable: true
}), _dec5 = Column({
  type: 'date',
  nullable: true
}), _dec6 = Column({
  type: 'int'
}), _dec7 = Column({
  type: 'int'
}), _dec8 = Column({
  type: 'datetime'
}), _dec9 = Column({
  type: 'int'
}), _dec0 = Column({
  type: 'datetime'
}), _dec1 = Column({
  type: 'int'
}), _dec(_class = (_class2 = class eContractEntity {
  constructor() {
    _initializerDefineProperty(this, "Id", _descriptor, this);
    _initializerDefineProperty(this, "IdEmployee", _descriptor2, this);
    _initializerDefineProperty(this, "ContractStartDate", _descriptor3, this);
    _initializerDefineProperty(this, "ContractEndDate", _descriptor4, this);
    _initializerDefineProperty(this, "IdCecoName", _descriptor5, this);
    _initializerDefineProperty(this, "TypeOfContract", _descriptor6, this);
    _initializerDefineProperty(this, "CreatedAt", _descriptor7, this);
    _initializerDefineProperty(this, "CreatedBy", _descriptor8, this);
    _initializerDefineProperty(this, "UpdatedAt", _descriptor9, this);
    _initializerDefineProperty(this, "UpdatedBy", _descriptor0, this);
  }
}, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "IdEmployee", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ContractStartDate", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ContractEndDate", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "IdCecoName", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "TypeOfContract", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "CreatedAt", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "CreatedBy", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "UpdatedAt", [_dec0], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor0 = _applyDecoratedDescriptor(_class2.prototype, "UpdatedBy", [_dec1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class2)) || _class);