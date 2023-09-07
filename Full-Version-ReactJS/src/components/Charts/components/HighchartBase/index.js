import HighchartBase from './HighchartBase';
import { connect as reduxConnect } from 'react-redux';

export default HighchartBase;

const mapStateToProps = (state) => ({
  contentView: state.app.contentView,
  sidebarStyle: state.app.sidebarStyle,
  sidebarEnabled: state.app.sidebarEnabled
});
export const connect = (Chart) => reduxConnect(mapStateToProps)(Chart);
