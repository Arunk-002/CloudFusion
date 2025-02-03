import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First name is required";
    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    setLoading(true);
  
    try {
      // Create a new FormData object
      const form = new FormData();
      form.append("firstName", formData.firstName);
      form.append("lastName", formData.lastName);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("message", formData.message);
  
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbwBcBDs9dFpiRTafUYMDTM5Lr88xkgTokSsHvdHpsa6l2G3tfnlpGK06k_47CYNSkAdPw/exec",
        form
      );
  
      const result = response.data;
      if (result.result === 'success') {
        setSuccess(true);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error("Submission failed", error);
    }
  
    setLoading(false);
  };
  
  return (
    <div  className="my-10 px-4">
      <h1 className="text-4xl text-center font-bold">Contact Us</h1>
      <div className="max-w-[600px] mx-auto px-6 py-10 bg-white rounded-xl ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 mt-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-3 bg-[#F7F7FA] rounded-lg w-full"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="w-full">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 bg-[#F7F7FA] rounded-lg w-full"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 bg-[#F7F7FA] rounded-lg w-full"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="w-full">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 bg-[#F7F7FA] rounded-lg w-full"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 bg-[#F7F7FA] rounded-lg w-full min-h-[100px]"
            rows="4"
            minLength="4"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 via-violet-800 to-violet-800 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {success && <p className="text-green-500 text-center">Form submitted successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
