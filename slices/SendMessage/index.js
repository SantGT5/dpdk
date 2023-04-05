import React from "react";
import { Input, TextArea } from "../../components";

import { HiOutlineArrowRight } from "react-icons/hi";

/**
 * @typedef {import("@prismicio/client").Content.SendMessageSlice} SendMessageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SendMessageSlice>} SendMessageProps
 * @param { SendMessageProps }
 */
const SendMessage = ({ slice }) => {

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      <form onSubmit={submitHandler}>
        <div className="px-4 py-8 md:py-10 md:px-6 lg:py-12 text-gray-600">
          <div className="flex flex-col gap-4 mx-auto w-full max-w-3xl">
            <Input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-3"
              name="name"
              placeholder="Jane Doe"
              label="Name"
              required
            />
            <Input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-3"
              name="email"
              placeholder="jane.doe@example.com"
              label="Email Address"
              required
            />
            <TextArea
              className="resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-3"
              name="message"
              placeholder="Write your message here…"
              label="Message"
              rows={8}
              required
            />
            <div className="flex justify-end">
              <button className="flex items-center gap-2">
                {slice.primary.text} <HiOutlineArrowRight size={25} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SendMessage;
