import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Driver, DriverRelations, Driverstatus} from '../models';
import {MydbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {DriverstatusRepository} from './driverstatus.repository';

export class DriverRepository extends DefaultCrudRepository<
  Driver,
  typeof Driver.prototype.id,
  DriverRelations
> {

  public readonly driverstatus: HasOneRepositoryFactory<Driverstatus, typeof Driver.prototype.id>;

  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource, @repository.getter('DriverstatusRepository') protected driverstatusRepositoryGetter: Getter<DriverstatusRepository>,
  ) {
    super(Driver, dataSource);
    this.driverstatus = this.createHasOneRepositoryFactoryFor('driverstatus', driverstatusRepositoryGetter);
  }
}
