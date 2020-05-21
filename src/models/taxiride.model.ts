import {Entity, model, property} from '@loopback/repository';
import {Location} from './location.model';

@model()
export class Taxiride extends Entity {
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
  startingLocation: Location;

  @property({
    type: 'object',
    required: true,
  })
  destination: Location;

  @property({
    type: 'number',
    required: true,
  })
  priceperKM: number;

  @property({
    type: 'number',
    required: false,
  })
  assignedDriverId: number;

  @property({
    type: 'boolean',
    required: true,
    default: false
  })
  acceptedByDriver: boolean;


  constructor(data?: Partial<Taxiride>) {
    super(data);
  }
}

export interface TaxirideRelations {
  // describe navigational properties here
}

export type TaxirideWithRelations = Taxiride & TaxirideRelations;
