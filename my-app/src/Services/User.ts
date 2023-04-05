import axios from "axios";

interface UserProps{
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
export const CreateUsers = async (values: UserProps) => {
    console.log(values,"services")
  try {
    let users = await axios({
      method: "post",
      url: `http://localhost:3001/users`,
      data: values,
    });

    return users;
  } catch (err: any) {
    console.log(err.response.data.message, "error");
  }
};

export const GetOneUser = async (values: UserProps) => {
    console.log(values,"services")
  try {
    let users = await axios({
      method: "get",
      url: `http://localhost:3001/users?email=${values.email}`,
      data: values,
    });

    return users;
  } catch (err: any) {
    console.log(err.response.data.message, "error");
  }
};

