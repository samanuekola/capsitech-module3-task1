import React from 'react';
import { useFormik } from 'formik';

const App = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.age) {
      errors.age = 'Age is required';
    } else if (values.age < 10 || values.age > 100) {
      errors.age = 'Age must be between 10 and 100';
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
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      course: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      alert('Form submitted!');
    },
  });

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Student Registration</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="invalid-feedback">{formik.errors.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Age:</label>
            <input
              type="number"
              className={`form-control ${formik.touched.age && formik.errors.age ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('age')}
            />
            {formik.touched.age && formik.errors.age && (
              <div className="invalid-feedback">{formik.errors.age}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="form-label">Course:</label>
            <select
              className={`form-select ${formik.touched.course && formik.errors.course ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('course')}
            >
              <option value="">Select a course</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Python">Python</option>
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
