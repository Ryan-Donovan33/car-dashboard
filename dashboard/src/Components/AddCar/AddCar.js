import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './AddCar.scss';
import {useHistory} from 'react-router-dom';
import {server} from '../../axios';
import Axios from 'axios';

export default function SignIn(props) {
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory();
  
  const onSubmit = data => {
      const car = data
      console.log(car)
    server
        .post('/cars', car)
        .then(res => console.log(res))
        .then(history.push('/dashboard'))
        .catch(err => console.log(err))
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Year" type="number" name="year" ref={ register({ required:true, pattern: /[0-9]{4}/})}/>
      {errors.year && "Year Must A 4 Digit Number"}
      <input placeholder="Make" name="make" ref={ register({ required:true})} />
      {errors.make && "Make is Required"}
       <input placeholder="Model" name="model" ref={ register({ required:true})} />
      {errors.model && "Model is Required"}
       <input placeholder="Miles" type="number" name="miles" ref={ register({ required:true})} />
      {errors.miles && "Accurate Miles Are Required"}
       <input placeholder="Price" type="number" name="price" ref={ register({ required:true})} />
      {errors.price && "Enter Selling Price"}
      <input placeholder="vin" name="vin" ref={ register({ required:true})} />
      {errors.vin && "Enter The Vin Number"}
      <input placeholder="Color"  name="color" ref={ register({ required:true})} />
      {errors.color && "Enter The Color Please"}
      <input type="submit" />
    </form>
  );
}