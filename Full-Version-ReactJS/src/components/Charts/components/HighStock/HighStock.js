import HighchartBase, { connect } from './../HighchartBase'

class HighStock extends HighchartBase {
  constructor(props, context) {
    super(props, context)
  }

  isHighstock() {
    return true
  }
}

export default connect(HighStock)
