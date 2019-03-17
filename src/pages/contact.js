import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import SubjectIcon from '@material-ui/icons/Subject';
import MessageIcon from '@material-ui/icons/Message';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;

  border-radius: 8px;
  input: focus, textarea: focus {
    outline: none;
  }

  textarea {
    height: 200px;
    margin-bottom: 20px;
    width: 100%;
  }
`;

const styles = {
  root: {
    background: '#ffffff',
    borderRadius: 3,
    border: 0,
    color: '#ffffff',
    marginBottom: '10px',
  },
  label: {
    textTransform: 'capitalize',
    color: '#ffffff',
  },
};

const TextFieldWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const IconWrapper = styled.div`
  color: #222222;
  margin-right: 10px;
`;

class Contact extends React.Component {
  state = {
    emailSent: false,
  };

  onSubmit = () => {
    e.preventDefault();
    fetch({
      url: 'localhost/email.php',
    }).then(response => {
      this.setState({
        emailSent: true,
      });
    });
  };

  render() {
    const { emailSent } = this.state;
    const { classes } = this.props;
    return (
      <Layout page="contact" headerTitle="Contact us">
        <SEO title="Contact Us" />

        <LayoutContainer>
          <h1>Get in touch</h1>
          <p>Please contact us using the form provided or call us.</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '-35px',
              marginTop: '45px',
            }}
          >
            <section style={{ width: '100%', paddingRight: '20px' }}>
              {!emailSent ? (
                <StyledForm autoComplete="off">
                  <TextFieldWrapper>
                    <IconWrapper>
                      <AccountCircle />
                    </IconWrapper>
                    <TextField
                      id="input-with-icon-grid"
                      label="Your full name"
                      fullWidth
                      className={classes.root}
                      variant="filled"
                    />
                  </TextFieldWrapper>
                  <TextFieldWrapper>
                    <IconWrapper>
                      <EmailIcon />
                    </IconWrapper>
                    <TextField
                      id="input-with-icon-grid"
                      label="Your email"
                      fullWidth
                      className={classes.root}
                      variant="filled"
                    />
                  </TextFieldWrapper>

                  <TextFieldWrapper>
                    <IconWrapper>
                      <SubjectIcon />
                    </IconWrapper>
                    <TextField
                      id="input-with-icon-grid"
                      label="Subject"
                      fullWidth
                      className={classes.root}
                      variant="filled"
                    />
                  </TextFieldWrapper>
                  <TextFieldWrapper>
                    <IconWrapper>
                      <MessageIcon />
                    </IconWrapper>
                    <TextField
                      id="input-with-icon-grid"
                      label="Message"
                      multiline
                      rows={1}
                      rowsMax={2}
                      fullWidth
                      className={classes.root}
                      variant="filled"
                    />
                  </TextFieldWrapper>

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
                    Send
                    <SendIcon style={{ marginLeft: '10px' }} />
                  </Button>
                </StyledForm>
              ) : (
                <div>Email sent!</div>
              )}
            </section>

            <section>
              <iframe
                title="map"
                width="560"
                height="460"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=272%20Kensington%20High%20street&key=AIzaSyDpPrgjnMTnNrTTO8xX9_XOiPPBpmn7fF0"
                allowFullScreen
              />
            </section>
          </div>
        </LayoutContainer>
      </Layout>
    );
  }
}

export default withStyles(styles)(Contact);
