import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';

const StyledButton = styled(Button)`
  max-width: 250px;
  max-height: 60px;
  min-width: 30px;
  min-height: 30px;
  margin-top: 15px;
  @media only screen and (max-width: 480px) {
    max-width: 200px;
    max-height: 40px;
    min-width: 30px;
    min-height: 30px;
    font-size: 0.8em;
    margin-top: 0px;
  }
`;

class QuoteButton extends Component {
  render() {
    return (
      <Link to="request-a-quote" style={{ textDecoration: 'none' }}>
        <StyledButton variant="contained" color="secondary" size="large">
          Request a quote!
        </StyledButton>
      </Link>
    );
  }
}

export default QuoteButton;
