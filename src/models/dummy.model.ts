import {Model, model, property} from '@loopback/repository';

@model()
export class Dummy extends Model {
  @property({
    type: 'geopoint',
    required: true,
  })
  locat: string;


  constructor(data?: Partial<Dummy>) {
    super(data);
  }
}

export interface DummyRelations {
  // describe navigational properties here
}

export type DummyWithRelations = Dummy & DummyRelations;
