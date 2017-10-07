import HighchartBase from './HighchartBase';
import { connect as reduxConnect } from 'react-redux';

export default HighchartBase;

const mapStateToProps = (state) => ({
    contentView: state.layout.contentView,
    sidebarStyle: state.layout.sidebarStyle,
    sidebarEnabled: state.layout.sidebarEnabled
});
export const connect = (Chart) => (reduxConnect(mapStateToProps)(Chart));
