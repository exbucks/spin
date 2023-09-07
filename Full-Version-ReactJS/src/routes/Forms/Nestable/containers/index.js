import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'

import SingleContainer from './Single'
import NestedContainer from './Nested'

export function* people(count = 5) {
  for (let i = 0; i < count; i++) {
    yield {
      id: uuidv4(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatarUrl: faker.image.avatar(),
      job: faker.person.jobTitle(),
      people: []
    }
  }
}

export { SingleContainer, NestedContainer }
