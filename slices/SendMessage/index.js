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
        <div className="container text-gray-600">
          <div className="flex flex-col gap-4 width-full max-w-3xl">
            <Input
              className="input-contact"
              name="name"
              placeholder="Jane Doe"
              label="Name"
              required
            />
            <Input
              className="input-contact"
              name="email"
              placeholder="jane.doe@example.com"
              label="Email Address"
              required
            />
            <TextArea
              className="resize-none input-contact"
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
