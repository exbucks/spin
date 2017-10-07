import React, { PropTypes } from 'react';
import MaskedInput from 'react-text-mask';
import { FormControl } from 'components';

const MaskedTextInput = props => {
    return (
        <FormControl
            { ...props }
            componentClass={ MaskedInput }
        />
    );
}

// PropTypes copied from 'react-text-mask'
MaskedTextInput.propTypes = {
    mask: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.func,
      PropTypes.shape({
        mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
        pipe: PropTypes.func
      })
    ]).isRequired,
    guide: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pipe: PropTypes.func,
    placeholderChar: PropTypes.string,
    keepCharPositions: PropTypes.bool
};

export default MaskedTextInput;
