import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Customer, CustomerRelations, CustomerStatus} from '../models';
import {MydbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CustomerStatusRepository} from './customer-status.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {

  public readonly customerStatus: HasOneRepositoryFactory<CustomerStatus, typeof Customer.prototype.id>;

  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource, @repository.getter('CustomerStatusRepository') protected customerStatusRepositoryGetter: Getter<CustomerStatusRepository>,
  ) {
    super(Customer, dataSource);
    this.customerStatus = this.createHasOneRepositoryFactoryFor('customerStatus', customerStatusRepositoryGetter);
  }
}
