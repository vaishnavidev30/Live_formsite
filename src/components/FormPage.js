import React, { useState } from 'react';
import { Button ,Card,Toast} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import {
  EmailShareButton,
} from "react-share";
import axios from 'axios';


import {
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";


export default function FormPage (props) {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const url = "https://vaishnavidev30.github.io/Live_formsite/";

  const onSubmit = (data) => {
    var formdata ={
      Firstname: data.Firstname,
      Lastname: data.Lastname,
      Bio: data.Bio,
      Email: data.Email,
      Gender: data.Gender,
      Courses: data.Courses
    }
    setLoading(true);
    axios.post('http://localhost:4000/create-form', formdata)
      .then(res => {
        console.log("res",res);
        setShow(true);
        setTimeout(() => {
          history.push('/home');
          setLoading(false);
        }, 1500);
       
      })
      .catch((err) => console.log("err", err))
  }
    
        return (
           <>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{
      position: 'absolute',
      bottom: 0,
      marginBottom:'25px',
      right: 0,
      backgroundColor:'green',color:'white',
    }}>
        <Toast.Body>Form Successfully submited</Toast.Body>
      </Toast>
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
          <label>Bio</label>
          <textarea {...register("Bio", { required: true })} placeholder="Bio" rows={3} />
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
           </>
        )
}