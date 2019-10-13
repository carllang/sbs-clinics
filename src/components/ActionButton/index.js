import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import SendIcon from '@material-ui/icons/Send';
import AssignmentIcon from '@material-ui/icons/Assignment';

const StyledButton = styled(Button)`
  max-width: 250px;
  max-height: 60px;
  min-width: 30px;
  min-height: 30px;
  margin-top: 15px;
  padding-right: 60px;
  position: relative;
  color: white;

  .arrow {
    transition: right 0.2s linear;
    position: absolute;
    top: 10px;
    right: 25px;
  }

  &:hover {
    .arrow {
      right: 20px;
    }
  }

  @media only screen and (max-width: 480px) {
    max-width: 200px;
    max-height: 40px;
    min-width: 30px;
    min-height: 30px;
    font-size: 0.8em;
    margin-top: 10px;
  }
`;

const ActionButton = ({ label, icon }) => {
  return (
    <Link to="request-a-quote" style={{ textDecoration: 'none' }}>
      <StyledButton variant="contained" color="primary" size="large">
        {label}
        <div className="arrow">
          {icon === 'assignment' ? (
            <AssignmentIcon style={{ color: 'white' }} />
          ) : (
            <SendIcon style={{ color: 'white' }} />
          )}
        </div>
      </StyledButton>
    </Link>
  );
};

export default ActionButton;
