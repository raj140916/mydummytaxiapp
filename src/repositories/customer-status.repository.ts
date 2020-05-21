import {DefaultCrudRepository} from '@loopback/repository';
import {CustomerStatus, CustomerStatusRelations} from '../models';
import {MydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerStatusRepository extends DefaultCrudRepository<
  CustomerStatus,
  typeof CustomerStatus.prototype.id,
  CustomerStatusRelations
> {
  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
  ) {
    super(CustomerStatus, dataSource);
  }
}
