import faker from 'faker';

const startDate = new Date(2015, 0, 1);
const endDate = new Date();
const regions = [ 'North', 'South', 'East', 'West' ];
const statuses = ['Active', 'Suspended', 'Waiting', 'Unknown', 'Inactive'];
const currencies = ['USD', 'EUR', 'GBP'];

const productFieldCreators = {
    id: (index) => index,
    name: (index) => `Product Name ${index}`,
    price: () => (1000 + Math.random() * 1000).toFixed(2),
    priceDetailed: () => ({
        amount: (200 + Math.random() * 1000).toFixed(2),
        currency: currencies[Math.round(Math.random() * (currencies.length - 1))]
    }),
    quality_id: () => Math.round(Math.random() * 2),
    stockStatus_id: () => Math.round(Math.random()),
    satisfaction: () => Math.round(Math.random() * 6),
    inStockDate: () => new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())),
    regions: (index) => regions.slice(0, (index % regions.length) + 1),
    coupon: () => Math.round(Math.random()) ? 'yes' : 'no',
    status: () => Math.round(Math.random()) ? 'yes' : 'no',
    customer: (i) => 'Customer ' + i,
    order: (i) => i,
    expand: (i) => [
        {
            fieldA: 'test1',
            fieldB: (i + 1) * 99,
            fieldC: (i + 1) * Math.random() * 100,
            fieldD: '123eedd' + i
        },
        {
            fieldA: 'test2',
            fieldB: i * 99,
            fieldC: i * Math.random() * 100,
            fieldD: '123eedd' + i
        }
    ]
}

const jobFieldCreators = {
    id: (index) => index,
    name: (index) => `Application_Name_${index}`,
    active: () => !!Math.round(Math.random())
}

const peopleCreators = {
    id: (i) => i,
    photo: () => faker.image.avatar(),
    firstName: () => faker.name.firstName(),
    lastName: () => faker.name.lastName(),
    role: () => faker.name.jobType(),
    status: () => (statuses)[Math.round(Math.random() * 4)],
    region: () => [regions[Math.round(Math.random() * (regions.length - 1))]],
    earnings: () => ({
        amount: (200 + Math.random() * 1000).toFixed(2),
        currency: currencies[Math.round(Math.random() * (currencies.length - 1))]
    }),
    details: () => ({
        lastLogin: faker.date.recent(),
        ip: faker.internet.ip(),
        browser: 'Safari 9.1.1(11601.6.17)',
        os: 'OS X El Capitan',
        selectedPlan: 'Premium',
        planEnd: faker.date.recent()
    })
}

function itemsGen(fieldsCreators) {
    return function*(fieldsList = ['id', 'name'], count = 5) {
        for(let i = 0; i < count; i++) {
            const product = {};

            for(let fieldName of fieldsList) {
                product[fieldName] = fieldsCreators[fieldName] ?
                    fieldsCreators[fieldName](i) : '';
            }

            yield product;
        }
    }
}

const
    products = itemsGen(productFieldCreators),
    jobs = itemsGen(jobFieldCreators),
    people = itemsGen(peopleCreators);

export { products, jobs, people, regions, currencies, statuses }
