import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Label,
  Error,
  Container,
  IconContainer
} from './style';

const TextInput = ({
  label,
  error,
  containerStyle,
  Icon,
  size,
  placeholder,
  onChange,
  onBlur,
  value,
  ...props
}) => {
  return (
    <Container style={containerStyle}>
      {label && <Label $hasError={!!error}>{label}</Label>}
      <div style={{ position: 'relative' }}>
        {Icon
          &&
          <IconContainer size={size}>
            {Icon}
          </IconContainer>
        }
        <TextField
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          size={size}
          {...props}
          hasIcon={!!Icon}
          $hasError={!!error}
        />
      </div>
      {error && <Error>{error}</Error>}
    </Container>
  )
};

TextInput.propTypes = {
  label: PropTypes.string,
  containerStyle: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  rounded: PropTypes.bool,
};

TextInput.defaultProps = {
  label: '',
  containerStyle: {},
  onChange: () => { },
  onBlur: () => { },
  value: '',
  error: '',
  ml: '0',
  mr: '0',
  mt: '5px',
  mb: '5px',
  placeholder: '',
  size: 'md',
  rounded: true,
};

export default TextInput;
