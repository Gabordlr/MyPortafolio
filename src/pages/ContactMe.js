import React, { useState } from "react";
import { motion } from "framer-motion";
import { socialMedia } from "../media/SocialMedia";
import { contactInfo } from "../media/ContactInfo";
import LogoInfo from "../components/logosInfo";
import Logo from "../components/logos";

export default function ContactMe() {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = () => {
    setMessageSent(true);
  };

  if (isMessageSent) {
    setTimeout(() => {
        setMessageSent(false);
    }, 5000);
    }


  return (
    <div className="bg-neutral-300 h-screen">
    <div className="flex items-center justify-start ">
      <div className="mx-auto w-full max-w-lg mt-24 mb-48">
        <h1 className="text-4xl font-medium">Get in contact</h1>
        <p className="mt-3">
          Email me at <span className="font-bold">gabrielrodriguezdelosreyes@gmail.com</span>:
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={handleSubmit}
          className="mt-10"
        >
          <input type="hidden" name="access_key" value="0131103a-7dfe-4f78-8cb5-23b1d85f1690" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                required
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-violet-800 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-800 peer-focus:dark:text-violet-700">
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="email"
                name="email"
                required
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-violet-800 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-800 peer-focus:dark:text-violet-700">
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="5"
                required
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-violet-800 focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-800 peer-focus:dark:text-violet-700">
                Your message
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <input type="hidden" name="redirect" value="https://gabrielrodriguez.vercel.app/" />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-5 rounded-md bg-black px-10 py-2 text-white hover:bg-violet-900 focus:bg-violet-800"
            >
              Send Message
            </motion.button>
          </div>
        </form>

        {isMessageSent && (
        <div className="flex flex-col justify-center items-center">
            <svg viewBox="11.5 13 30 28" className="h-[30%] w-[30%] mt-5">
                <g>
                <motion.circle
                    stroke="#1d9921"
                    strokeWidth={2}
                    fill="transparent"
                    cx={26.59}
                    cy={26.59}
                    r={12} // Updated smaller radius
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                />
                <motion.path
                    stroke="#1d9921"
                    strokeWidth={2}
                    strokeLineCap="round"
                    fill="transparent"
                    d="M18.5 26.5 l5 6 11.49 -10.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                />
                </g>
            </svg>
        <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
        >
            Your mail has been sent successfully!
        </motion.h1>
        </div>
        )}
      </div>
      <div>
      </div>
    </div>
    <div className="flex">
        <div className="flex">
        {socialMedia.map((social) => (
            <Logo
                key={social.name}
                name={social.user}
                img = {social.iconImg}
                link = {social.url}
            />
        ))}
        </div>
        <div className="flex w-full justify-end">
            {contactInfo.map((logo) => (
                <LogoInfo
                    key={logo.name}
                    description={logo.description}
                    img = {logo.infoImg}
                />
            ))}

        </div>
    </div>
    </div>
  );
}