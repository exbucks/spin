import faker from 'faker';
import uid from 'node-uuid';

import SingleContainer from './Single';
import NestedContainer from './Nested';

export function* people(count = 5) {
    for(let i = 0; i < count; i++) {
        yield {
            id: uid.v4(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatarUrl: faker.image.avatar(),
            job: faker.name.jobTitle(),
            people: []
        }
    }
}

export {
    SingleContainer,
    NestedContainer
};
