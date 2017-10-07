import React from 'react';
import _ from 'underscore';

export default function updateChildElementOfType(children, typesToPassthrough, _config) {
    const configs = Array.isArray(_config) ? _config : [_config];

    const mapper = child => {
        const targetConfig = _.findWhere(configs, { targetType: child.type });
        if(targetConfig && child.type === targetConfig.targetType) {
            if(_.isFunction(targetConfig.props)) {
                return React.cloneElement(child, targetConfig.props(child.props));
            }
            return React.cloneElement(child, targetConfig.props);
        } else if(_.contains(typesToPassthrough, child.type)) {
            return React.cloneElement(child, {
                children: updateChildElementOfType(child.props.children, typesToPassthrough, configs)
            })
        }
        return child;
    };

    return Array.isArray(children) ? React.Children.map(children, mapper)
        : mapper(children);
}
