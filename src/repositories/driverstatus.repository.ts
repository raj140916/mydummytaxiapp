import {DefaultCrudRepository} from '@loopback/repository';
import {Driverstatus, DriverstatusRelations} from '../models';
import {MydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DriverstatusRepository extends DefaultCrudRepository<
  Driverstatus,
  typeof Driverstatus.prototype.id,
  DriverstatusRelations
> {
  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
  ) {
    super(Driverstatus, dataSource);
  }
}
