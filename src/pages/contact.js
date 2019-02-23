import React from "react";
import styled from "styled-components";
import Layout from "src/components/Layout";
import SEO from "src/components/seo";
import { LayoutContainer } from "src/components/Layout/LayoutContainer";
import { Button } from "src/components/Atomic/Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input {
    margin-bottom: 20px;
    border: 1px solid #999999;
    padding-left: 10px;
  }

  input: focus, textarea: focus {
    outline: none;
  }

  textarea {
    height: 200px;
    margin-bottom: 20px;
  }
`;

class Contact extends React.Component {
  state = {
    emailSent: false
  };

  onSubmit = () => {
    e.preventDefault();
    fetch({
      url: "localhost/email.php"
    }).then(response => {
      this.setState({
        emailSent: true
      });
    });
  };

  render() {
    const { emailSent } = this.state;
    return (
      <Layout page="contact" headerTitle="Contact us">
        <SEO title="Contact Us" />

        <LayoutContainer>
          <h1>Contact Us</h1>
          <p>Please contact us using the form provided or call us.</p>
          {!emailSent ? (
            <StyledForm autoComplete="off">
              <label htmlFor="">Name</label>
              <input type="text" name="name" autocomplete="off" />
              <label htmlFor="">Email</label>
              <input type="text" name="email" autocomplete="off" />
              <label htmlFor="">Subject</label>
              <input type="text" name="subject" autocomplete="off" />
              <label htmlFor="">Message</label>
              <textarea
                type="textarea"
                name="message"
                style={{ resize: "none" }}
              />

              <Button>Submit</Button>
            </StyledForm>
          ) : (
            <div>Email sent!</div>
          )}
        </LayoutContainer>
      </Layout>
    );
  }
}

export default Contact;
