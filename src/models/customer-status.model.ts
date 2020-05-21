import {Entity, model, property} from '@loopback/repository';
import {Location} from './location.model';

@model()
export class CustomerStatus extends Entity {
  @property({
    type: 'object',
    required: true,
  })
  currentLocation: Location;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  customerId?: number;

  constructor(data?: Partial<CustomerStatus>) {
    super(data);
  }
}

export interface CustomerStatusRelations {
  // describe navigational properties here
}

export type CustomerStatusWithRelations = CustomerStatus & CustomerStatusRelations;
