import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';

class QuoteButton extends Component {
  render() {
    return (
      <Link to="request-a-quote" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{
            maxWidth: '250px',
            maxHeight: '60px',
            minWidth: '30px',
            minHeight: '30px',
            margin: '20px 0 0 34px',
          }}
        >
          Request a quote!
        </Button>
      </Link>
    );
  }
}

export default QuoteButton;
