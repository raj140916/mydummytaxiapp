import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Driver,
  Driverstatus,
} from '../models';
import {DriverRepository} from '../repositories';

export class DriverDriverstatusController {
  constructor(
    @repository(DriverRepository) protected driverRepository: DriverRepository,
  ) { }

  @get('/drivers/{id}/driverstatus', {
    responses: {
      '200': {
        description: 'Driver has one Driverstatus',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Driverstatus),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Driverstatus>,
  ): Promise<Driverstatus> {
    return this.driverRepository.driverstatus(id).get(filter);
  }

  @post('/drivers/{id}/driverstatus', {
    responses: {
      '200': {
        description: 'Driver model instance',
        content: {'application/json': {schema: getModelSchemaRef(Driverstatus)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Driver.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Driverstatus, {
            title: 'NewDriverstatusInDriver',
            exclude: ['id'],
            optional: ['driverId']
          }),
        },
      },
    }) driverstatus: Omit<Driverstatus, 'id'>,
  ): Promise<Driverstatus> {
    return this.driverRepository.driverstatus(id).create(driverstatus);
  }

  @patch('/drivers/{id}/driverstatus', {
    responses: {
      '200': {
        description: 'Driver.Driverstatus PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Driverstatus, {partial: true}),
        },
      },
    })
    driverstatus: Partial<Driverstatus>,
    @param.query.object('where', getWhereSchemaFor(Driverstatus)) where?: Where<Driverstatus>,
  ): Promise<Count> {
    return this.driverRepository.driverstatus(id).patch(driverstatus, where);
  }

  @del('/drivers/{id}/driverstatus', {
    responses: {
      '200': {
        description: 'Driver.Driverstatus DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Driverstatus)) where?: Where<Driverstatus>,
  ): Promise<Count> {
    return this.driverRepository.driverstatus(id).delete(where);
  }
}
