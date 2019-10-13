import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';
import { withStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import SubjectIcon from '@material-ui/icons/Subject';
import MessageIcon from '@material-ui/icons/Message';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import ActionButton from 'src/components/ActionButton';

// window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
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
  @media only screen and (max-width: 768px) {
    button {
      float: right;
      width: 250px;
      margin-bottom: 20px;
    }
    display: block;
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

const ContentWrapper = styled.div`
  width: 100%;
  padding-right: 20px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-right: 0px;
    button {
      float: right;
      margin-bottom: 20px;
    }
  }
  button {
    margin: 10px 0 20px 34px;
  }
`;
const FlexboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -35px;
  margin-top: 45px.;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-right: 0px;
    margin-left: 0px;
    flex-direction: column;
  }
`;

class Contact extends React.Component {
  state = {
    emailSent: false,
  };

  onSubmit = e => {
    const { fullName, email, subject, message } = this.state;
    e.preventDefault();
    const payload = {
      fullName,
      email,
      subject,
      message,
    };
    axios
      .post('http://localhost:8000/email.php', {
        method: 'POST',

        data: payload,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        this.setState({
          emailSent: true,
        });
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          <FlexboxWrapper>
            <ContentWrapper>
              {!emailSent ? (
                <StyledForm autoComplete="off">
                  <TextFieldWrapper>
                    <IconWrapper>
                      <AccountCircle />
                    </IconWrapper>
                    <TextField
                      id="input-with-icon-grid"
                      label="Name"
                      fullWidth
                      className={classes.root}
                      variant="filled"
                      onChange={this.onChange}
                      name="fullName"
                    />
                  </TextFieldWrapper>
                  <TextFieldWrapper>
                    <IconWrapper>
                      <EmailIcon />
                    </IconWrapper>
                    <TextField
                      id="input-with-icon-grid"
                      label="Email"
                      fullWidth
                      className={classes.root}
                      variant="filled"
                      onChange={this.onChange}
                      name="email"
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
                      onChange={this.onChange}
                      name="subject"
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
                      onChange={this.onChange}
                      name="message"
                    />
                  </TextFieldWrapper>
                  <ActionButton label="Send" />,
                </StyledForm>
              ) : (
                <div>Email sent!</div>
              )}
            </ContentWrapper>

            <section style={{ width: '100%' }}>
              <iframe
                title="map"
                width="100%"
                height="460"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=272%20Kensington%20High%20street&key=AIzaSyDpPrgjnMTnNrTTO8xX9_XOiPPBpmn7fF0"
                allowFullScreen
              />
            </section>
          </FlexboxWrapper>
        </LayoutContainer>
      </Layout>
    );
  }
}

export default withStyles(styles)(Contact);
