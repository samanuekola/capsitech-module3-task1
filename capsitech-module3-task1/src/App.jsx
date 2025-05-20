import React from 'react';
import { useFormik } from 'formik';

const App = () => {
  function validates(values) {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.age) {
      errors.age = 'Age is required';
    }else if(values.age<16 || values.age>60){
      errors.age='Age must be between 16 andd 60'
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.course) {
      errors.course = 'Please select a course';
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      course: ''
    },
    validates,
    onSubmit: (values) => {
      alert('Form submitted!');
      console.log(values);
    }
  });

  const ageOptions = [];
  for (let i = 1; i <= 100; i++) {
    ageOptions.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Student Registration</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="invalid-feedback">{formik.errors.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Age:</label>
            <select
              name="age"
              className={`form-select ${formik.touched.age && formik.errors.age ? 'is-invalid' : ''}`}
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select age</option>
              {ageOptions}
            </select>
            {formik.touched.age && formik.errors.age && (
              <div className="invalid-feedback">{formik.errors.age}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="form-label">Course:</label>
            <select
              name="course"
              className={`form-select ${formik.touched.course && formik.errors.course ? 'is-invalid' : ''}`}
              value={formik.values.course}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select a course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="Diploma">Diploma</option>
              <option value="MBA">MBA</option>
            </select>
            {formik.touched.course && formik.errors.course && (
              <div className="invalid-feedback">{formik.errors.course}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
