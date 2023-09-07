import React from 'react';
import { faker } from '@faker-js/faker';

import { Table, Media, Dropdown, DropdownButton, AvatarImage } from 'components';

const renderActionsDropdown = (index) => (
  <DropdownButton title="Action" id={`dropdown-basic-${index}`}>
    <Dropdown.Item eventKey="1">
      <i className="fa fa-envelope fa-fw text-gray-lighter m-r-1"></i>
      Send Email
    </Dropdown.Item>
    <Dropdown.Item eventKey="2">
      <i className="fa fa-phone fa-fw text-gray-lighter m-r-1"></i>
      Call
    </Dropdown.Item>
    <Dropdown.Item eventKey="3">
      <i className="fa fa-user fa-fw text-gray-lighter m-r-1"></i>
      Show Profile
    </Dropdown.Item>
  </DropdownButton>
);

const BasicExampleTable = () => (
  <Table>
    <thead>
      <tr>
        <th>Project</th>
        <th>Deadline</th>
        <th>Leader + Team</th>
        <th>Budget</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <span className="text-white">{faker.commerce.productName()}</span>
          <br />
          <span>{faker.company.companyName()}</span>
        </td>
        <td>
          <span>{faker.date.weekday()}</span>
          <br />
          <span className="text-danger">Overdue</span>
        </td>
        <td>
          <Media>
            <Media.Left align="middle">
              <AvatarImage src={faker.image.avatar()} />
            </Media.Left>
            <Media.Body>
              <span className="text-white">
                {`${faker.person.firstName()} ${faker.person.lastName()}`}
              </span>
              <br />
              <span>{faker.company.companyName()}</span>
            </Media.Body>
          </Media>
        </td>
        <td>
          <span className="text-white">$851.00</span>
          <br />
          <span>Paid</span>
        </td>
        <td>
          <i className="fa fa-circle-o text-danger m-r-1"></i>
          withdrawal
        </td>
        <td>{renderActionsDropdown(0)}</td>
      </tr>

      <tr>
        <td>
          <span className="text-white">{faker.commerce.productName()}</span>
          <br />
          <span>{faker.company.companyName()}</span>
        </td>
        <td>
          <span>{faker.date.weekday()}</span>
          <br />
          <span>In 6 Days</span>
        </td>
        <td>
          <Media>
            <Media.Left align="middle">
              <AvatarImage src={faker.image.avatar()} />
            </Media.Left>
            <Media.Body>
              <span className="text-white">
                {`${faker.person.firstName()} ${faker.person.lastName()}`}
              </span>
              <br />
              <span>{faker.company.companyName()}</span>
            </Media.Body>
          </Media>
        </td>
        <td>
          <span className="text-white">$940.00</span>
          <br />
          <span>Paid</span>
        </td>
        <td>
          <i className="fa fa-circle-o text-success m-r-1"></i>
          withdrawal
        </td>
        <td>{renderActionsDropdown(0)}</td>
      </tr>

      <tr>
        <td>
          <span className="text-white">{faker.commerce.productName()}</span>
          <br />
          <span>{faker.company.companyName()}</span>
        </td>
        <td>
          <span>{faker.date.weekday()}</span>
          <br />
          <span>In 6 Days</span>
        </td>
        <td>
          <Media>
            <Media.Left align="middle">
              <AvatarImage src={faker.image.avatar()} />
            </Media.Left>
            <Media.Body>
              <span className="text-white">
                {`${faker.person.firstName()} ${faker.person.lastName()}`}
              </span>
              <br />
              <span>{faker.company.companyName()}</span>
            </Media.Body>
          </Media>
        </td>
        <td>
          <span className="text-white">$680.00</span>
          <br />
          <span>Paid</span>
        </td>
        <td>
          <i className="fa fa-circle-o text-gray-lighter m-r-1"></i>
          payment
        </td>
        <td>{renderActionsDropdown(0)}</td>
      </tr>

      <tr>
        <td>
          <span className="text-white">{faker.commerce.productName()}</span>
          <br />
          <span>{faker.company.companyName()}</span>
        </td>
        <td>
          <span>{faker.date.weekday()}</span>
          <br />
          <span>In 6 Days</span>
        </td>
        <td>
          <Media>
            <Media.Left align="middle">
              <AvatarImage src={faker.image.avatar()} />
            </Media.Left>
            <Media.Body>
              <span className="text-white">
                {`${faker.person.firstName()} ${faker.person.lastName()}`}
              </span>
              <br />
              <span>{faker.company.companyName()}</span>
            </Media.Body>
          </Media>
        </td>
        <td>
          <span className="text-white">$824.00</span>
          <br />
          <span>Paid</span>
        </td>
        <td>
          <i className="fa fa-circle-o text-primary m-r-1"></i>
          payment
        </td>
        <td>{renderActionsDropdown(0)}</td>
      </tr>
    </tbody>
  </Table>
);

export default BasicExampleTable;
