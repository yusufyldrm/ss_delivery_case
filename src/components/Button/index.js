import React from 'react'
import PropTypes from 'prop-types';
import { ButtonUI } from './style';
import Loader from '../Loader';

const Button = ({
  isLoading,
  children,
  onClick,
  backgroundColor,
  ...props
}) => {
  return (
    <>
      <ButtonUI
        disabled={isLoading}
        onClick={onClick}
        $backgroundColor={backgroundColor}
        {...props}
      >
        {isLoading || children}
        {isLoading &&
          <Loader color={'#fff'} />
        }

      </ButtonUI>
    </>
  )
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  ml: PropTypes.string,
  mr: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  pd: PropTypes.string,
  radius: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
};

Button.defaultProps = {
  backgroundColor: '#007CFF',
  onClick: () => { },
  ml: '0',
  mr: '0',
  mt: '5px',
  mb: '5px',
  size: 'md',
  width: '100%',
  pd: '20px',
  radius: '5px',
  children: ''
};

export default Button
