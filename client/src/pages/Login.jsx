import { FormRow, Logo } from "../components";

import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import { Form, redirect, useNavigation } from "react-router-dom";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  if (data.password.length < 3) {
    errors.msg = "password too short";
    return errors;
  }
  try {
    await customFetch.post("/auth/login", { ...data });
    toast.success("login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
function Login() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form" method={"POST"}>
        <Logo />
        <h4>Login</h4>
        <FormRow
          type="email"
          name="email"
          labelText="Email"
          defaultValue={"anna@test.com"}
        />
        <FormRow
          type="password"
          name="password"
          labelText="password"
          defaultValue={"123123123"}
        />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "log in"}
        </button>
        <button type="button" className="btn btn-block">
          explore the app
        </button>
      </Form>
    </Wrapper>
  );
}

export default Login;
