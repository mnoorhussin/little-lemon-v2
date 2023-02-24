import React from 'react';
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const schema = yup.object({
    name: yup.string().required("Full name is a required field!"),
    email: yup.string().required("Email is a required field!").email("Email is not valid!"),
    telephone: yup.string().required("Telephone is a required field!").matches(/^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{2}[\s.-]\d{2}$/, "Phone number must match the form 076 000 00 00"),
    guests: yup.number().min(1, "There must be at least 1 guest!").required("Please specify number of guests per table!"),
    date: yup.string().required("Please select date and time!"),
})

function Form() {


    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    console.log(errors)

    const formSubmit = (data) => {
        console.table(data)
    }

    return (
        <Container>
            <Row>
                <form onSubmit={handleSubmit(formSubmit)} className="p-3">
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                {...register("name")}
                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            />
                            <div className="invalid-feedback">{errors.name?.message}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                placeholder="example@email.com"
                                name="email"
                                {...register("email")}
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                type="tel"
                                placeholder="076 000 00 00"
                                name="telephone"
                                className={`form-control ${errors.telephone ? "is-invalid" : ""}`}
                                {...register("telephone")}
                            />
                            {errors.telephone && (
                                <div className="invalid-feedback">
                                    {errors.telephone.message}
                                </div>
                            )}
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="occasion">Occasion (optional)</label>
                                <select
                                    name="occasion"
                                    {...register("occasion")}
                                    className={`form-control ${errors.occasion ? "is-invalid" : ""}`}
                                >
                                    <option value="select">Select occasion</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="engagement">Engagement</option>
                                    <option value="anniversary">Anniversary</option>
                                </select>
                                <div className="invalid-feedback">{errors.occasion?.message}</div>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="guests">Guests</label>
                                <input
                                    type="number"
                                    placeholder="2"
                                    name="guests"
                                    {...register("guests")}
                                    className={`form-control ${errors.guests ? "is-invalid" : ""}`}
                                />
                                <div className="invalid-feedback">{errors.guests?.message}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date &amp; Time</label>
                            <input
                                type="datetime-local"
                                name="date"
                                {...register("date")}
                                className={`form-control ${errors.date ? "is-invalid" : ""}`}
                            />
                            <div className="invalid-feedback">{errors.date?.message}</div>
                        </div>
                        <button className="btn btn-warning" type="submit">Reserve</button>
                    </fieldset>
                </form>
            </Row>
        </Container>


    )
}

export default Form