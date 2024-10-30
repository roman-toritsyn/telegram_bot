"use client";

import {useState} from "react";
import axios from "axios";

export default function Home() {

    const [userInput, setUserInput] = useState({
      name: '',
      email: '',
      message: ''
    });
// eslint-disable-next-line
    const handleChange = (e: any) => {
      const { name, value } = e.target;
      setUserInput({ ...userInput, [name]: value });
    };
// eslint-disable-next-line
    const handleSubmit = async (e: any) => {
      e.preventDefault();

      try {
        const response = await axios.post('/api/contact', userInput);

        if (response.status === 200) {
          setUserInput({ name: '', email: '', message: '' });
        } else {
        }
        // eslint-disable-next-line
      } catch (error) {
      }
    };

  return (
    <main className="w-screen h-screen overflow-auto bg-blue-400 flex items-center flex-col">
      {/*<div className="h-[20rem] w-full flex justify-center overflow-hidden rounded-md">*/}
      {/*  <div className="w-[80rem] h-40 relative">*/}
      {/*    <div*/}
      {/*      className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"/>*/}
      {/*    <div*/}
      {/*      className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"/>*/}
      {/*    <div*/}
      {/*      className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"/>*/}
      {/*    <div*/}
      {/*      className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"/>*/}

      {/*    <SparklesCore*/}
      {/*      background="transparent"*/}
      {/*      minSize={0.4}*/}
      {/*      maxSize={1}*/}
      {/*      particleDensity={1200}*/}
      {/*      className="w-full h-full"*/}
      {/*      particleColor="#FFFFFF"*/}
      {/*    />*/}

      {/*    <div*/}
      {/*      className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="flex flex-col justify-center  items-center px-4 w-full">*/}
      {/*  <h2 className="mb-10 text-xl text-center sm:text-2xl dark:text-white text-black">*/}
      {/*    Залиште свій запит*/}
      {/*  </h2>*/}
      {/*  <PlaceholdersAndVanishInput*/}
      {/*  />*/}
      {/*</div>*/}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name:</label>
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Your Email:</label>
          <input
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Your Message:</label>
          <textarea
            name="message"
            value={userInput.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>

    </main>
  );
  }
