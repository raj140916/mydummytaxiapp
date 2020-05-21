import {Entity, model, property} from '@loopback/repository';
import {Location} from './location.model';

@model()
export class Driverstatus extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'object',
    required: true,
  })
  currentLocation: Location;

  @property({
    type: 'number',
  })
  driverId?: number;

  constructor(data?: Partial<Driverstatus>) {
    super(data);
  }
}

export interface DriverstatusRelations {
  // describe navigational properties here
}

export type DriverstatusWithRelations = Driverstatus & DriverstatusRelations;
