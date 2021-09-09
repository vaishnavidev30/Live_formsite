import React, { useState } from 'react';
import { Button ,Card} from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
import {
  EmailShareButton,
} from "react-share";

import {
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";


export default function FormPage (props) {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [result, setResult] = useState("");

  const url = "https://www.facebook.com";


  const onSubmit = (data) => {
    alert("form submitted");
    setResult(data)
  console.log("result",result);
  }
        return (
           
               <Card >
               
               <form onSubmit={handleSubmit(onSubmit)}>
        
          <label >FirstName</label>
          <input {...register("Firstname", { required: true })} placeholder="First name" />
           {errors.Firstname?.type === 'required' && <p style={{ marginBottom: '3px' }}> required</p>}
         <label >Lastname</label>
          <input {...register("Lastname", { required: true })} placeholder="Last name" />
           {errors.Lastname?.type === 'required' && <p style={{ marginBottom: '3px' }}> required</p>}
  <label >Email</label>
  <input type="email" {...register("Email", { required: true })} placeholder="Email" />
          {errors.Email?.type === 'required' && <p style={{ marginBottom: '3px' }}> required</p>}
         
          <div>
            <label>Gender</label>
            <Controller
              control={control}
              render={({ field }) => (
                <RadioGroup aria-label="Gender"{...register("Gender", { required: true })} style={{ display: 'inline-block', width: '100%' }}>
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                    style={{ float: 'left', margin: 0 }}
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                    style={{ float: 'left', margin: 0 }}
                  />
                </RadioGroup>
              )
              }
            />
          </div>
         
          <div> 
          <label>Courses</label>
          <select {...register("Courses", { required: true })}  style={{ width: '100%' }} >
            <option value="BBA">BBA</option>
            <option value="B.Sc">B.Sc</option>
            <option value="BCA">BCA</option>
          </select>
          </div>
          {errors.Courses?.type === 'required' && <p style={{ marginBottom: '3px' }}> required</p>}
          <label>Bio</label>
          <textarea {...register("Bio", { required: true })} placeholder="Bio" rows={3} />
          {errors.Bio?.type === 'required' && <p style={{ marginBottom: '3px' }}>Bio name is required</p>}
          <Button type="submit" style={{ marginBottom: '20px',marginTop:'20px' ,marginRight:'15px'}}>
            Submit
          </Button>
          <Button>
          < EmailShareButton url={url}>
  Share via Email
</ EmailShareButton>
</Button>
        </form>
      </Card>
           
        )
}