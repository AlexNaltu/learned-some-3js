"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r740fpu", "contact_form", form.current, {
        publicKey: "9kAgROYSfFf9EA5Ey",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="w-full bg-fourth py-2 sm:py-10 px-5 sm:px-24 rounded-md">
        <div className="font-bold text-lg sm:text-6xl">
          <h1>Contact Me</h1>
          <div className="flex gap-2 items-center sm:pl-10">
            <Image src={"/line2.png"} alt="line" width={100} height={30} />
            <h1>Have a project?</h1>
          </div>
        </div>

        <Form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <Input type="text" name="user_name"  />
          <Input type="email" name="user_email"  />

          <Textarea name="message"  />
          <ReCAPTCHA
            sitekey="6LdR8bYpAAAAAFymeN_0falnC4xB1UspbBvZB5NE"
            className=" mt-6"
          />
          <button type="submit" className=" w-full bg-primary mt-6">
            Send request
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
