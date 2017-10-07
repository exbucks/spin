import { Colors } from './../../consts';

const styleToColorMap = {
    ['primary']: Colors.brandPrimary,
    ['success']: Colors.brandSuccess,
    ['info']: Colors.brandInfo,
    ['warning']: Colors.brandWarning,
    ['danger']: Colors.brandDanger
};

export function isCustomColor(colorDefinition) {
    return /(#[\d\w]+|\w+\((?:\d+%?(?:,\s)*){3}(?:\d*\.?\d+)?\))/i.test(colorDefinition);
};

export default function bsStyleToColor(props) {
    if(props.bsStyle && styleToColorMap[props.bsStyle]) {
        return styleToColorMap[props.bsStyle];
    }

    if(props.bsStyle === 'custom' && props.customColor) {
        return props.customColor;
    }

    return false;
};
