import { Colors } from 'consts';

export function isMacintosh() {
  return navigator.platform.indexOf('Mac') > -1
}

export function statusToColor(status) {
    switch(status) {
        case 'Online':
            return Colors.brandSuccess;
        case 'Busy':
            return Colors.brandDanger;
        case 'Away':
            return Colors.brandWarning;
        default:
        case 'Offline':
            return Colors.grayLighter;
    }
};
