import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  Label,
  Box,
  Button,
  Heading,
  Stack,
  Paragraph
} from "@twilio-paste/core";
import { Submit } from "./Submit";

const PizzaForm = (props) => {
  const { pristine, reset, submitting } = props;
  return (
    <Box margin="space80" width="60%">
      <Heading as="h1" variant="heading10">
        Pizza Form!
      </Heading>
      <Paragraph>
        Please fill out your contact information and pizza preferences. We will
        email you when your pizza is ready for pickup!
      </Paragraph>
      <form>
        <div>
          <Label>First Name:</Label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            style={inputStyle}
          />
        </div>

        <div>
          <Label>Last Name:</Label>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            style={inputStyle}
          />
        </div>

        <div>
          <Label>Email:</Label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            style={inputStyle}
          />
        </div>

        <div>
          <Label>Size:</Label>
          <label>
            <Field
              name="size"
              component="input"
              type="radio"
              value="12"
              style={sStyle}
            />{" "}
            12 in.{" "}
          </label>
          <label>
            <Field
              name="size"
              component="input"
              type="radio"
              value="16"
              style={sStyle}
            />{" "}
            16 in.
          </label>
        </div>

        <div>
          <Label>Crust:</Label>
          <label>
            <Field
              name="crust"
              component="input"
              type="radio"
              value="thick"
              style={sStyle}
            />{" "}
            Thick{" "}
          </label>
          <label>
            <Field
              name="crust"
              component="input"
              type="radio"
              value="thin"
              style={sStyle}
            />{" "}
            Thin
          </label>
        </div>

        <div>
          <Label>Type:</Label>
          <Field name="type" component="select" style={inputStyle}>
            <option />
            <option value="cheese">Cheese</option>
            <option value="pepp">Pepperoni</option>
            <option value="veg">Veggie Delight</option>
            <option value="meat">Meat Lover's</option>
          </Field>
        </div>

        <div>
          <Label>Dietary Preferences:</Label>
          <Field name="instructions" component="textarea" style={boxStyle} />
        </div>

        <Box display="flex" marginTop="space60">
          <Stack orientation="horizontal" spacing="space30">
            <Submit {...props}></Submit>
            <Button
              variant="primary"
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </Button>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

const inputStyle = {
  padding: 8,
  width: "100%",
  marginBottom: 15
};
const sStyle = {
  padding: 8,
  marginBottom: 15
};
const boxStyle = {
  fontFamily: "arial",
  padding: 8,
  width: "100%",
  height: 150
};

export default reduxForm({
  form: "pizza"
})(PizzaForm);
