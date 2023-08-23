import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-5">
      <div className=" w-full">
        <h2>You can contact us directly at:</h2>
        <p>contact_next@user.com</p>
        <p>
          Or you write us via the connect from. We answer as quick as possible
        </p>
        <ul className="flex gap-3">
          <li>
            <Link href="www.facebook.com" target="_blank">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="www.facebook.com" target="_blank">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="www.facebook.com" target="_blank">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="www.facebook.com" target="_blank">
              Facebook
            </Link>
          </li>
        </ul>
      </div>
      <div className=" w-full p-6">
        <h2>Contact Us</h2>
        <form action="">
          <div>
            <input
              className=" w-full py-3 px-5 rounded placeholder:text-lime-600 my-3"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              className=" w-full py-3 px-5 rounded placeholder:text-lime-600 my-3"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className=" w-full py-3 px-5 rounded placeholder:text-lime-600 my-3"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div>
            <textarea type="text" placeholder="Massage" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
