import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';

// window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
const StyledForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;

  border-radius: 8px;
  input: focus, textarea: focus {
    outline: none;
  }
  width: 100%;
  margin-right: 20px;
  textarea {
    height: 200px;
    margin-bottom: 20px;
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-right: 0px;
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
  width: 100%;
`;

const IconWrapper = styled.div`
  color: #222222;
  margin-right: 10px;
`;

const FormWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
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
  }
`;
class RequestAQuote extends React.Component {
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
      <Layout page="request-a-quote" headerTitle="Request a quote">
        <SEO title="Request a quote" />

        <LayoutContainer>
          <h1>Send us your job request details</h1>
          <p>Please fill out this form, and we will get back to you.</p>
          <FlexboxWrapper>
            <ContentWrapper>
              {!emailSent ? (
                [
                  <FormWrapper key={0}>
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
                        />
                      </TextFieldWrapper>

                      <TextFieldWrapper>
                        <IconWrapper>
                          <PhoneIcon />
                        </IconWrapper>
                        <TextField
                          id="input-with-icon-grid"
                          label="Phone"
                          fullWidth
                          className={classes.root}
                          variant="filled"
                        />
                      </TextFieldWrapper>
                    </StyledForm>
                    <TextFieldWrapper>
                      <IconWrapper>
                        <MessageIcon />
                      </IconWrapper>
                      <TextField
                        id="input-with-icon-grid"
                        label="Job details"
                        multiline
                        rows={8}
                        rowsMax={10}
                        fullWidth
                        className={classes.root}
                        variant="filled"
                      />
                    </TextFieldWrapper>
                  </FormWrapper>,
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
                    key={1}
                  >
                    Send request
                    <SendIcon style={{ marginLeft: '10px' }} />
                  </Button>,
                ]
              ) : (
                <div>Request sent!</div>
              )}
            </ContentWrapper>
          </FlexboxWrapper>
        </LayoutContainer>
      </Layout>
    );
  }
}

export default withStyles(styles)(RequestAQuote);
