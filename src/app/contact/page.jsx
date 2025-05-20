'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCart } from '@/component/CartContext';

export default function ContactPage() {
  const { color } = useCart();
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    alert("Message sent!");
    resetForm();
  };

  return (
    <div className={`max-w-lg mx-auto my-10 p-6 ${color} shadow-lg rounded-lg`}>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-700">Name</label>
            <Field
              name="name"
              type="text"
              className="w-full border border-white p-2 rounded"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full border border-white p-2 rounded"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold text-gray-700">Message</label>
            <Field
              name="message"
              as="textarea"
              rows="4"
              className="w-full border border-white p-2 rounded"
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#15803c] p-2 rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </Form>
      </Formik>
    </div>
  );
}
