import React from 'react'
import { faker } from '@faker-js/faker'

import { AvatarImage, Timeline, Label } from 'components'

import { Colors } from 'consts'
// ------------------------------------
// Horizontal Timeline Example
// ------------------------------------
const HorizontalTimeline = () => (
  <Timeline itemAlignment="horizontal">
    <Timeline.Date>Today</Timeline.Date>

    <Timeline.Item
      date={faker.date.recent()}
      color={Colors.brandDanger}
      icon={<i className="fa fa-pause-circle"></i>}
    >
      <Timeline.ItemHeader
        avatar={<AvatarImage src={faker.image.avatar()} />}
        primaryText={`${faker.person.firstName()} ${faker.person.lastName()}`}
        secondaryText={`Assigned to: ${faker.person.firstName()} ${faker.person.lastName()}`}
      />
      <Timeline.ItemBody>
        <a href="javascript:void(0)">{faker.hacker.phrase()}</a>
        <br />
        <p className="text-nowrap">
          {`${faker.person.firstName()} ${faker.person.lastName()} `}
          <Label className="label-gray-lighter label-outline">{`#${faker.number.random()}`}</Label>
        </p>
      </Timeline.ItemBody>
    </Timeline.Item>

    <Timeline.Item
      date={faker.date.recent()}
      color={Colors.brandWarning}
      icon={<i className="fa fa-question-circle"></i>}
    >
      <Timeline.ItemHeader
        avatar={<AvatarImage src={faker.image.avatar()} />}
        primaryText={`${faker.person.firstName()} ${faker.person.lastName()}`}
        secondaryText={`Assigned to: ${faker.person.firstName()} ${faker.person.lastName()}`}
      />
      <Timeline.ItemBody>
        <a href="javascript:void(0)">{faker.hacker.phrase()}</a>
        <br />
        <p className="text-nowrap">
          {`${faker.person.firstName()} ${faker.person.lastName()} `}
          <Label className="label-gray-lighter label-outline">{`#${faker.number.random()}`}</Label>
        </p>
      </Timeline.ItemBody>
    </Timeline.Item>

    <Timeline.Item
      date={faker.date.recent()}
      color={Colors.brandPrimary}
      icon={<i className="fa fa-plus-circle"></i>}
    >
      <Timeline.ItemHeader
        avatar={<AvatarImage src={faker.image.avatar()} />}
        primaryText={`${faker.person.firstName()} ${faker.person.lastName()}`}
        secondaryText={`Assigned to: ${faker.person.firstName()} ${faker.person.lastName()}`}
      />
      <Timeline.ItemBody>
        <a href="javascript:void(0)">{faker.hacker.phrase()}</a>
        <br />
        <p className="text-nowrap">
          {`${faker.person.firstName()} ${faker.person.lastName()} `}
          <Label className="label-gray-lighter label-outline">{`#${faker.number.random()}`}</Label>
        </p>
      </Timeline.ItemBody>
    </Timeline.Item>

    <Timeline.Item
      date={faker.date.recent()}
      color={Colors.brandSuccess}
      icon={<i className="fa fa-check-circle"></i>}
    >
      <Timeline.ItemHeader
        avatar={<AvatarImage src={faker.image.avatar()} />}
        primaryText={`${faker.person.firstName()} ${faker.person.lastName()}`}
        secondaryText={`Assigned to: ${faker.person.firstName()} ${faker.person.lastName()}`}
      />
      <Timeline.ItemBody>
        <a href="javascript:void(0)">{faker.hacker.phrase()}</a>
        <br />
        <p className="text-nowrap">
          {`${faker.person.firstName()} ${faker.person.lastName()} `}
          <Label className="label-gray-lighter label-outline">{`#${faker.number.random()}`}</Label>
        </p>
      </Timeline.ItemBody>
    </Timeline.Item>

    <Timeline.Item
      date={faker.date.recent()}
      color={Colors.brandInfo}
      icon={<i className="fa fa-info-circle"></i>}
    >
      <Timeline.ItemHeader
        avatar={<AvatarImage src={faker.image.avatar()} />}
        primaryText={`${faker.person.firstName()} ${faker.person.lastName()}`}
        secondaryText={`Assigned to: ${faker.person.firstName()} ${faker.person.lastName()}`}
      />
      <Timeline.ItemBody>
        <a href="javascript:void(0)">{faker.hacker.phrase()}</a>
        <br />
        <p className="text-nowrap">
          {`${faker.person.firstName()} ${faker.person.lastName()} `}
          <Label className="label-gray-lighter label-outline">{`#${faker.number.random()}`}</Label>
        </p>
      </Timeline.ItemBody>
    </Timeline.Item>

    <Timeline.Date>Yesterday</Timeline.Date>

    <Timeline.Item
      date={faker.date.recent()}
      color={Colors.brandDanger}
      icon={<i className="fa fa-gratipay"></i>}
    >
      <Timeline.ItemHeader
        avatar={<AvatarImage src={faker.image.avatar()} />}
        primaryText={`${faker.person.firstName()} ${faker.person.lastName()}`}
        secondaryText={`Assigned to: ${faker.person.firstName()} ${faker.person.lastName()}`}
      />
      <Timeline.ItemBody>
        <a href="javascript:void(0)">{faker.hacker.phrase()}</a>
        <br />
        <p className="text-nowrap">
          {`${faker.person.firstName()} ${faker.person.lastName()} `}
          <Label className="label-gray-lighter label-outline">{`#${faker.number.random()}`}</Label>
        </p>
      </Timeline.ItemBody>
    </Timeline.Item>

    <Timeline.Item
      date={faker.date.recent()}
      color={Colors.brandWarning}
      icon={<i className="fa fa-question-circle"></i>}
    >
      <Timeline.ItemHeader
        avatar={<AvatarImage src={faker.image.avatar()} />}
        primaryText={`${faker.person.firstName()} ${faker.person.lastName()}`}
        secondaryText={`Assigned to: ${faker.person.firstName()} ${faker.person.lastName()}`}
      />
      <Timeline.ItemBody>
        <a href="javascript:void(0)">{faker.hacker.phrase()}</a>
        <br />
        <p className="text-nowrap">
          {`${faker.person.firstName()} ${faker.person.lastName()} `}
          <Label className="label-gray-lighter label-outline">{`#${faker.number.random()}`}</Label>
        </p>
      </Timeline.ItemBody>
    </Timeline.Item>

    <Timeline.Item
      date={faker.date.recent()}
      color={Colors.brandPrimary}
      icon={<i className="fa fa-plus-circle"></i>}
    >
      <Timeline.ItemHeader
        avatar={<AvatarImage src={faker.image.avatar()} />}
        primaryText={`${faker.person.firstName()} ${faker.person.lastName()}`}
        secondaryText={`Assigned to: ${faker.person.firstName()} ${faker.person.lastName()}`}
      />
      <Timeline.ItemBody>
        <a href="javascript:void(0)">{faker.hacker.phrase()}</a>
        <br />
        <p className="text-nowrap">
          {`${faker.person.firstName()} ${faker.person.lastName()} `}
          <Label className="label-gray-lighter label-outline">{`#${faker.number.random()}`}</Label>
        </p>
      </Timeline.ItemBody>
    </Timeline.Item>

    <Timeline.Item
      date={faker.date.recent()}
      color={Colors.brandSuccess}
      icon={<i className="fa fa-check-circle"></i>}
    >
      <Timeline.ItemHeader
        avatar={<AvatarImage src={faker.image.avatar()} />}
        primaryText={`${faker.person.firstName()} ${faker.person.lastName()}`}
        secondaryText={`Assigned to: ${faker.person.firstName()} ${faker.person.lastName()}`}
      />
      <Timeline.ItemBody>
        <a href="javascript:void(0)">{faker.hacker.phrase()}</a>
        <br />
        <p className="text-nowrap">
          {`${faker.person.firstName()} ${faker.person.lastName()} `}
          <Label className="label-gray-lighter label-outline">{`#${faker.number.random()}`}</Label>
        </p>
      </Timeline.ItemBody>
    </Timeline.Item>

    <Timeline.Item
      date={faker.date.recent()}
      color={Colors.brandInfo}
      icon={<i className="fa fa-info-circle"></i>}
    >
      <Timeline.ItemHeader
        avatar={<AvatarImage src={faker.image.avatar()} />}
        primaryText={`${faker.person.firstName()} ${faker.person.lastName()}`}
        secondaryText={`Assigned to: ${faker.person.firstName()} ${faker.person.lastName()}`}
      />
      <Timeline.ItemBody>
        <a href="javascript:void(0)">{faker.hacker.phrase()}</a>
        <br />
        <p className="text-nowrap">
          {`${faker.person.firstName()} ${faker.person.lastName()} `}
          <Label className="label-gray-lighter label-outline">{`#${faker.number.random()}`}</Label>
        </p>
      </Timeline.ItemBody>
    </Timeline.Item>
  </Timeline>
)

// Force Static Output
const staticResult = HorizontalTimeline()

export default () => staticResult
