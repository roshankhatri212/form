import { useForm } from "react-hook-form"; 
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


export const Form = () => {
  

  const schema=yup.object().shape({
    fullname :yup.string().required("Your Full Name Is Required"),
    email:yup.string().email().required(),
    age:yup.number().positive().integer().min(18).required(),
    password:yup.string().min(4).max(20).required(),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null]).required("Password doesn't match!"),

  });
  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver:yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullname")} />
      <p>{errors.fullname?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="text" placeholder="Age..." {...register("age")} />
      <p>{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmpassword")}
      />
      <p>{errors.confirmpassword?.message}</p>
      <input type="submit" />
    </Form>
  );
};
