# SPIN - React Version 1.3.1
Full Documentation: http://spin.webkom.co/docs/docs-react.html 

## Installation
1. Make sure you have NodeJS >= 7.0.0 installed on your machine.
2. Run `npm install` to install nescessary NPM dependecies

## Usage
* `npm start` - start development mode with Hot Reloading enabled
* `npm run deploy:prod` - compile source to the `dist` directory

### Non-modular SCSS
Attach SCSS files which shouldn't be modularized by Webpack (plugin style overrides for example) to `/styles/core.scss`.

## Used libraries
### General
* [React ^15.0.0](https://github.com/facebook/react) - Cornerstone rendering engine for the application
* [React Bootstrap ^0.30.7](https://github.com/react-bootstrap/react-bootstrap) - Port of Bootstrap 3 for React
* [Font Awesome ^4.6.3](https://github.com/FortAwesome/Font-Awesome) - Large set of various icons
* [React Router ^2.2.0](https://github.com/ReactTraining/react-router) - Provides routing within the application
* [Redux ^3.0.0](https://github.com/reactjs/redux) - Used for application state management
* [Velocity Animate ^1.2.3](https://github.com/julianshapiro/velocity) - Provides a solid animation system for some components
* [React Image Holder ^2.0.1](https://github.com/hiddentao/react-image-holder) - Adds placeholder support for the Image component
* [IsMobile ^0.4.0](https://github.com/kaimallea/isMobile) - Detects the device on which the application is running, so some components can adjust to the environment
* [Moment ^2.13.0](http://momentjs.com/) - Used for time modification and parsing
* [Numeral ^1.5.3](http://numeraljs.com/) - Provides formatting for number types
* [PerfectScrollbar ^0.6.13](https://github.com/noraesae/perfect-scrollbar) - Wrapped in a component, which adds styled scrollbars when nescessary
* [Pace 1.0.2](http://github.hubspot.com/pace/docs/welcome/) - Page loading indicator used mainly when a Webpack Code Split needs to be loaded 
* [TinyColor ^1.4.1](https://github.com/bgrins/TinyColor) - Fast color mixing library used in some components
* [Underscore ^1.8.3](http://underscorejs.org/) - Flexible functional data manegement library
* [React Draft Wysiwyg](https://jpuri.github.io/react-draft-wysiwyg/#/) - A Wysiwyg Built on ReactJS and DraftJS
* [react-treebeard](https://github.com/alexcurtis/react-treebeard) - React Tree View Component. Data-Driven, Fast, Efficient and Customisable.
* [react-bootstrap-table](http://allenfang.github.io/react-bootstrap-table/index.html) - react-bootstrap-table is a React component for Bootstrap table.
* [React Bootstrap Typeahead](http://ericgio.github.io/react-bootstrap-typeahead/) - React-based typeahead component that uses Bootstrap as a base for styles and behaviors.
* [react-toggle](http://aaronshaf.github.io/react-toggle/) - An elegant, accessible toggle component for React. Also a glorified checkbox.
* [rc-slider](http://react-component.github.io/slider/) - Slider UI component for React.
* [react-dates](http://airbnb.io/react-dates) - An easily internationalizable, mobile-friendly datepicker library for the web.
* [React Notification System](http://igorprado.com/react-notification-system/) - A complete and totally customizable component for notifications in React.
* [text-mask](https://text-mask.github.io/text-mask/) - Input mask for React, Angular, Ember, Vue, & plain JavaScript
* [react-grid-layout](https://strml.github.io/react-grid-layout/examples/0-showcase.html) - A draggable and resizable grid layout with responsive breakpoints, for React.
* [React Dual Listbox](https://jakezatecky.github.io/react-dual-listbox/) - A feature-rich dual listbox for React
* [React Select](http://jedwatson.github.io/react-select/) - A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete and ajax support.



### Charts
* [React Highcharts ^8.3.3](https://github.com/kirjs/react-highcharts) - Provides [Highcharts](http://www.highcharts.com/) support.
* [React Sparklines ^1.5.2](https://github.com/borisyankov/react-sparklines) - Adds small charts called Sparklines. It is extended by a custom component for additional features.
* [React Chartist ^0.10.2](https://github.com/fraserxu/react-chartist) - Adds [Chartist](https://gionkunz.github.io/chartist-js/) support.
* [reCharts](http://recharts.org/#/en-US) - Redefined chart library built with React and D3

### Build
* [Koa ^2.0.0-alpha.3](http://koajs.com/) - Web Server used for serving the application.
* [Webpack ^1.12.14](https://webpack.github.io/) - Advanced system used for modules management. It is backed by a multitude of smaller loaders which add nescessary functionalities.
* [Sass Loader ^3.0.0](https://github.com/jtangelder/sass-loader) - Webpack loader which allows the usage of SCSS modules.
* [Babel ^6.3.19](https://babeljs.io/) - Provides support for ES2015+ and JSX

### Demo
These libraries are used to generate random data state trees to use in Containers for demonstration purposes.
* [Faker ^3.1.0](https://github.com/marak/Faker.js/) - Generate fake demo data
* [deep-assign ^2.0.0](https://github.com/sindresorhus/deep-assign) - Recursive `Object.assign()` - helps building complex data trees
