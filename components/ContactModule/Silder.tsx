import { SliderFormData, SliderFormErrors } from "@/type/SliderInputType";
import BlackCustomButton from "@/utils/BlackCustomButton";
import React, { useState } from "react";

export default function Silder() {
  const [formData, setFormData] = useState<SliderFormData>({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState<SliderFormErrors>({});

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

  const validate = (): SliderFormErrors => {
    const newErrors: SliderFormErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Clear form after submission if needed
      setFormData({
        name: "",
        email: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex items-start gap-1 md:gap-[1px] text-[#363839] bg-cream w-full h-auto md:h-full flex-col md:flex-row">
      <div className=" md:flex flex-row gap-4 md:gap-[2px] w-full md:w-auto">
        {[...Array(7)].map((_, idx) => {
          return (
            <div
              key={idx}
              className="border border-dishoom w-full mb-[2px] md:mb-0 h-auto md:h-[700px]"
            ></div>
          );
        })}
      </div>
      <div className="border-y-[3px] w-full  border-black h-auto md:h-full">
        <div className="py-8 w-[90%] md:w-full mx-auto md:px-10">
          <p className="uppercase font-sans font-bold mb-3 text-base tracking-[3px]">
            Newsletter
          </p>
          <div className="uppercase tracking-[4px] mb-10 text-[5vw] font-medium sm:text-3xl">
            <p className="inline-block">Subscribe</p>
            <p className="inline-block mx-[2.5rem] lsm:mx-[2.8rem] esm:mx-[3.2rem] em:mx-[3.5rem] ew:mx-[5rem] vem:mx-[5rem] md:mx-0 md:ml-[8rem] ">
              to
            </p>
            <p className="inline-block">the</p>
            <p className="inline-block mr-2 md:mr-0 ml-0 md:ml-[8rem] ">
              Dishoom{" "}
            </p>
            Digest
          </div>
          <div className="w-full mb-8 ">
            <div className="h-20 md:h-24 w-0 ml-10 border-l border-black"></div>
          </div>
          <div className="mb-8 font-serif">
            <p>
              First-dibs on new launches,occasional recipes and other Dishoom
              goings-on --- straight to your inbox
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="relative border mb-8  w-full focus-within:border-[1px] focus-within:border-dishoom border-[#c4bfaf]">
              <input
                className={`py-3 px-3 w-full cursor-pointer outline-none bg-[#f0ece0] font-serif text-lg text-[#80807d] tracking-tight ${
                  errors.name ? "border-red-500" : ""
                }`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="..."
              />
              <div className="absolute top-[-0.5rem] left-4 bg-[#f0ece0] px-2 text-[9px] lsm:text-[10px] font-sans font-bold uppercase tracking-wide z-10">
                {errors.name ? (
                  <p className="text-[#800000]">{errors.name}</p> // Display error message in red
                ) : (
                  <p>Name</p> // Display label if no error
                )}
              </div>
            </div>

            <div className="relative border mb-8  w-full focus-within:border-[1px] focus-within:border-dishoom border-[#c4bfaf]">
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
                <p>Email Address</p> // Display label if no error
              )}
            </div>
            </div>

            <BlackCustomButton
              name="Send"
              className="p-[2px] w-full md:w-auto border-2 border-[#353839] bg-[#353839]"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
