import { TickMarkSvg } from "@/svg/svgs";
import { FormData, FormErrors } from "@/type/InputFormType";
import BlackCustomButton from "@/utils/BlackCustomButton";
import React, { useMemo, useState } from "react";



export default function InputContactDetails() {
  const [formData, setFormData] = useState<FormData>({
    contactReason: "",
    location: "",
    firstName: "",
    lastName: "",
    email: "",
    recommendation: "",
    message: "",
  });


  const locationOptions = useMemo(() => ["Battersea", "Other Location"], []);
  const recommendationOptions = useMemo(() => ["Yes", "No"], []);

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error if the field is updated
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined, // Clear the specific error
    }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.recommendation) {
      newErrors.recommendation = "Please select an option.";
    }
    if (!formData.location) {
      newErrors.location = "Please select a location.";
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Clear form after submission if needed
      setFormData({
        contactReason: "",
        location: "",
        firstName: "",
        lastName: "",
        email: "",
        recommendation: "",
        message: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="w-full mmd:w-[80%] emd:w-[78%] mb-10">
      <form onSubmit={handleSubmit}>
        {/* WHAT ARE YOU CONTACTING US ABOUT? */}
        <div className="relative border mb-8 focus-within:border-dishoom border-[#c4bfaf]">
          <select
            className="py-3 px-2 w-full cursor-pointer outline-none appearance-none  select-with-arrow bg-[#f0ece0] font-serif text-lg text-[#80807d] tracking-tight"
            name="cars"
            id="cars"
          >
            <option value="#">Select an Option</option>
          </select>
          <div className="absolute top-[-0.5rem] left-4 bg-[#f0ece0] px-2 text-[9px] lsm:text-[10px] font-sans font-bold uppercase tracking-wide z-10">
            <p>WHAT ARE YOU CONTACTING US ABOUT?</p>
          </div>
        </div>
        <div>
          {/* WHICH LOCATION DID YOU VISIT */}
          <div className="relative border mb-8 focus-within:border-dishoom border-[#c4bfaf]">
            <select
              className="py-3 px-2 w-full cursor-pointer outline-none appearance-none  select-with-arrow bg-[#f0ece0] font-serif text-lg text-[#80807d] tracking-tight"
              name="location"
              value={formData.location}
              onChange={handleChange}
            >
              <option value="">Select a location</option>
              {locationOptions.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
            </select>
            <div className="absolute top-[-0.5rem] left-4 bg-[#f0ece0] px-2 text-[9px] lsm:text-[10px] font-sans font-bold uppercase tracking-wide z-10">
            {errors.location ? (
                <p className="text-[#800000]">{errors.location}</p> // Display error message in red
              ) : (
                <p>What Location do you wanna visit?</p> // Display label if no error
              )}
            </div>
          </div>
          {/* Name And Last */}
          <div className="flex flex-col md:flex-row gap-4 mb-8  justify-between">
            <div className="relative border w-full focus-within:border-dishoom border-[#c4bfaf]">
              <input
                className={`py-3 px-3 w-full cursor-pointer outline-none bg-[#f0ece0] font-serif text-lg text-[#80807d] tracking-tight ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="..."
              />
              <div className="absolute top-[-0.5rem] left-4 bg-[#f0ece0] px-2 text-[9px] lsm:text-[10px] font-sans font-bold uppercase tracking-wide z-10">
                {errors.firstName ? (
                  <p className="text-[#800000]">{errors.firstName}</p> // Display error message in red
                ) : (
                  <p>First Name*</p> // Display label if no error
                )}
              </div>
            </div>
            <div className="relative border w-full focus-within:border-dishoom border-[#c4bfaf]">
              <input
                className={`py-3 px-3 w-full cursor-pointer outline-none bg-[#f0ece0] font-serif text-lg text-[#80807d] tracking-tight ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="..."
              />
              <div className="absolute top-[-0.5rem] left-4 bg-[#f0ece0] px-2 text-[9px] lsm:text-[10px] font-sans font-bold uppercase tracking-wide z-10">
                {errors.lastName ? (
                  <p className="text-[#800000]">{errors.lastName}</p> // Display error message in red
                ) : (
                  <p>Last Name*</p> // Display label if no error
                )}
              </div>
            </div>
          </div>
          {/* EMAIL */}
          <div className="relative border mb-8  w-full focus-within:border-dishoom border-[#c4bfaf]">
            <input
              className={`py-3 px-3 w-full cursor-pointer outline-none bg-[#f0ece0] font-serif text-lg text-[#80807d] tracking-tight ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="..."
            />
            <div className="absolute top-[-0.5rem] left-4 bg-[#f0ece0] px-2 text-[9px] lsm:text-[10px] font-sans font-bold uppercase tracking-wide z-10">
              {errors.email ? (
                <p className="text-[#800000]">{errors.email}</p> // Display error message in red
              ) : (
                <p>Email Address*</p> // Display label if no error
              )}
            </div>
          </div>

          {/* would you recommend us to a friend? */}
          <div className="relative border mb-8 focus-within:border-dishoom border-[#c4bfaf]">
            <select
              className={`py-3 px-2 w-full appearance-none select-with-arrow cursor-pointer outline-none bg-[#f0ece0] font-serif text-lg text-[#80807d] tracking-tight ${
                errors.recommendation ? "border-red-500" : ""
              }`}
              name="recommendation"
              value={formData.recommendation}
              onChange={handleChange}
            >
              <option value="">...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <div className="absolute top-[-0.5rem] left-4 bg-[#f0ece0] px-2 text-[9px] lsm:text-[10px] font-sans font-bold uppercase tracking-wide z-10">
              {errors.recommendation ? (
                <p className="text-[#800000]">{errors.recommendation}</p> // Display error message in red
              ) : (
                <p>would you recommend us to a friend?</p> // Display label if no error
              )}
            </div>
          </div>
          {/* Message */}
          <div className="relative border mb-8  w-full focus-within:border-dishoom border-[#c4bfaf]">
            <textarea
              className={`py-3 px-3 w-full cursor-pointer resize-none outline-none bg-[#f0ece0] font-serif text-lg text-[#80807d] tracking-tight ${
                errors.message ? "border-red-500" : ""
              }`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="..."
            ></textarea>
            <div className="absolute top-[-0.5rem] left-4 bg-[#f0ece0] px-2 text-[9px] lsm:text-[10px] font-sans font-bold uppercase tracking-wide z-10">
              {errors.message ? (
                <p className="text-[#800000]">{errors.message}</p> // Display error message in red
              ) : (
                <p>Message</p> // Display label if no error
              )}
            </div>
          </div>

          <div className="flex justify-between items-start mb-8 w-full md:w-[80%] gap-2">
            <div className="pt-1">
              <TickMarkSvg />
            </div>
            <p className="text-base">
              Tick here to receive occasional emails from Dishoom with news,
              events and suchlike.
            </p>
          </div>
          <BlackCustomButton
            name="Send"
            className="p-[2px] w-full md:w-auto border-2 border-[#353839] bg-[#353839]"
          />
        </div>
      </form>
    </div>
  );
}
