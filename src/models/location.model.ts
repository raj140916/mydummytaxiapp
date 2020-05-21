import {Model, model, property} from '@loopback/repository';


@model()
export class Location extends Model {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {
      minimum: -90,
      maximum: 90,
      errorMessage: 'Wrong value for latitude',
    }
  })
  latitude: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {
      minimum: -180,
      maximum: 180,
      errorMessage: 'Wrong value for longitude',
    }
  })
  longitude: number;


  constructor(data?: Partial<Location>) {
    super(data);
  }
}

export interface LocationRelations {
  // describe navigational properties here
}

export type LocationWithRelations = Location & LocationRelations;
