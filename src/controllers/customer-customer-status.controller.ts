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
  Customer,
  CustomerStatus,
} from '../models';
import {CustomerRepository} from '../repositories';

export class CustomerCustomerStatusController {
  constructor(
    @repository(CustomerRepository) protected customerRepository: CustomerRepository,
  ) { }

  @get('/customers/{id}/customer-status', {
    responses: {
      '200': {
        description: 'Customer has one CustomerStatus',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CustomerStatus),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<CustomerStatus>,
  ): Promise<CustomerStatus> {
    return this.customerRepository.customerStatus(id).get(filter);
  }

  @post('/customers/{id}/customer-status', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: {'application/json': {schema: getModelSchemaRef(CustomerStatus)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerStatus, {
            title: 'NewCustomerStatusInCustomer',
            exclude: ['id'],
            optional: ['customerId']
          }),
        },
      },
    }) customerStatus: Omit<CustomerStatus, 'id'>,
  ): Promise<CustomerStatus> {
    return this.customerRepository.customerStatus(id).create(customerStatus);
  }

  @patch('/customers/{id}/customer-status', {
    responses: {
      '200': {
        description: 'Customer.CustomerStatus PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerStatus, {partial: true}),
        },
      },
    })
    customerStatus: Partial<CustomerStatus>,
    @param.query.object('where', getWhereSchemaFor(CustomerStatus)) where?: Where<CustomerStatus>,
  ): Promise<Count> {
    return this.customerRepository.customerStatus(id).patch(customerStatus, where);
  }

  @del('/customers/{id}/customer-status', {
    responses: {
      '200': {
        description: 'Customer.CustomerStatus DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(CustomerStatus)) where?: Where<CustomerStatus>,
  ): Promise<Count> {
    return this.customerRepository.customerStatus(id).delete(where);
  }
}
