import {DefaultCrudRepository} from '@loopback/repository';
import {Taxiride, TaxirideRelations} from '../models';
import {MydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TaxirideRepository extends DefaultCrudRepository<
  Taxiride,
  typeof Taxiride.prototype.id,
  TaxirideRelations
> {
  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
  ) {
    super(Taxiride, dataSource);
  }
}
