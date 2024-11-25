import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const ErrorMessage = ({ errors, touched }) => (
    <div className="alert alert-danger mt-3 text-center">
        <ul>
            {Object.entries(errors).map(([field, message]) =>
                touched[field] ? <li key={field}>{message}</li> : null
            )}
        </ul>
    </div>
);

const Form = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required("First name is required")
            .matches(/^[A-Za-z]+$/, "First name must contain only letters")
            .max(20, "First name must be 20 characters or less"),
        lastName: Yup.string()
            .required("Last name is required")
            .matches(/^[A-Za-z]+$/, "Last name must contain only letters")
            .max(20, "Last name must be 20 characters or less"),
        email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
        phone: Yup.number()
            .required("Phone number is required")
            .integer("Phone number must be an integer")
            .min(1000000000, "Phone number must be at least 10 digits")
            .max(9999999999, "Phone number must be at most 10 digits"),
        address: Yup.string()
            .required("Address is required")
            .max(100, "Address must be 100 characters or less"),
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
        },
        validationSchema,
        onSubmit: (values) => {
            navigate("/success");
        },
    });

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center">
            <div className="w-50">
                <h1 className="text-center mb-4">Checkout Form</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                className={`form-control ${
                                    formik.touched.firstName && formik.errors.firstName ? "is-invalid" : ""
                                }`}
                                {...formik.getFieldProps("firstName")}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                className={`form-control ${
                                    formik.touched.lastName && formik.errors.lastName ? "is-invalid" : ""
                                }`}
                                {...formik.getFieldProps("lastName")}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={`form-control ${
                                    formik.touched.email && formik.errors.email ? "is-invalid" : ""
                                }`}
                                {...formik.getFieldProps("email")}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input
                                id="phone"
                                name="phone"
                                type="number"
                                className={`form-control ${
                                    formik.touched.phone && formik.errors.phone ? "is-invalid" : ""
                                }`}
                                {...formik.getFieldProps("phone")}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            className={`form-control ${
                                formik.touched.address && formik.errors.address ? "is-invalid" : ""
                            }`}
                            {...formik.getFieldProps("address")}
                        />
                    </div>

                    {Object.keys(formik.errors).length > 0 && (
                        <ErrorMessage errors={formik.errors} touched={formik.touched} />
                    )}

                    <div className="d-flex justify-content-between mt-4">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate("/products")}
                        >
                            Back to Catalogue
                        </button>
                        <button type="submit" className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;