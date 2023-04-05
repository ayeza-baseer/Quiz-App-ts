import axios from "axios";

interface UserProps{
    email: string,
    password: string
}

export const GetLoginUser = async (values: UserProps) => {
    console.log(values,"services")
  try {
    let users = await axios({
      method: "get",
      url: `http://localhost:3001/users?email=${values.email}&&password=${values.password}`,
      data: values,
    });

    return users;
  } catch (err: any) {
    console.log(err.response.data.message, "error");
  }
};
