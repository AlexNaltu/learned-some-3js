"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RxDiscordLogo } from "react-icons/rx";
import { IoLogoFacebook } from "react-icons/io";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";

const ContactForm = () => {
  const form = useRef();
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r740fpu", "contact_form", form.current, {
        publicKey: "9kAgROYSfFf9EA5Ey",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          router.push("/");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-fourth w-full py-2 sm:py-10 px-5 sm:px-24 xl:px-28 rounded-md flex flex-col xl:flex-row xl:gap-8">
      <div className="">
        <div className="font-bold text-lg sm:text-3xl xl:text-5xl xl:mb-4">
          <h1>Contact Me</h1>
          <div className="flex gap-2 items-center sm:pl-10">
            <Image src={"/line2.png"} alt="line" width={100} height={30} />
            <h1>Have a project?</h1>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            className="contact-form"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            className="contact-form"
          />

          <textarea
            name="message"
            placeholder="Project ideea"
            className="contact-form"
            rows={4}
          />

          <button
            type="submit"
            className=" w-full bg-primary mt-6 text-base py-2 rounded-xl hover:bg-third"
          >
            Send request
          </button>
        </form>
      </div>
      <div className="max-w-[280px] flex flex-col gap-1 mt-6 xl:self-end">
        <h1 className="text-sm">
          For a deeper look at my work, explore my social media profiles below.
          Hope to connect with you soon!
        </h1>
        <div className="flex justify-center gap-4 bg-black py-1 rounded-xl">
          <FaInstagram size={30} className="social-icon" />
          <FaXTwitter size={30} className="social-icon" />
          <RxDiscordLogo size={32} className="social-icon" />
          <IoLogoFacebook size={32} className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
