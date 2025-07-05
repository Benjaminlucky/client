"use client";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="container w-full mx-auto items-center justify-center px-4">
      <div className="wrapper w-full max-w-7xl items-center justify-center mx-auto ">
        <div className="content w-full justify-center">
          <div className="title pb-12">
            <h3 className="text-3xl md:text-5xl text-center font-bold text-golden-500">
              Let’s Connect — We’re Here to Help
            </h3>
            <p className="text-lg md:text-xl text-gray-700 text-center mt-4">
              Whether you have questions, need property advice, or want to
              schedule a visit, our team is just a message away.
            </p>
          </div>
          <div className="contact-container grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
            <div className="left">
              <div className="contact-form bg-white p-8 rounded-lg shadow-md">
                <div className="touch py-6">
                  <h3 className="text-3xl font-semibold text-gray-500">
                    Get in Touch
                  </h3>
                  <p className="text-gray-400 font-semibold">
                    You can reach us anytime
                  </p>
                </div>
                <form className="w-full flex flex-col gap-6">
                  <div className="form-group w-full flex flex-col md:flex-row gap-4">
                    <div className="first-name border border-2 font-semibold text-lg border-gray-200 rounded-md flex  px-3 py-2 items-center gap-2 flex-1">
                      <FaUserCircle className="icon text-gray-400" />
                      <input
                        className="outline-0"
                        type="text"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="last-name border font-semibold border-2 text-lg border-gray-200 rounded-md flex  px-3 py-2 items-center gap-2 flex-1">
                      <FaUserCircle className="icon text-gray-400" />
                      <input
                        className="outline-0"
                        type="text"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="email border font-semibold border-2 text-lg border-gray-200 rounded-md flex  px-3 py-2 items-center gap-2 flex-1">
                      <MdEmail className="icon text-gray-400" />
                      <input
                        className="w-full outline-0"
                        type="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="Phone border font-semibold border-2 text-lg border-gray-200 rounded-md flex  px-3 py-2 items-center gap-2 flex-1">
                      <MdPhone className="text-gray-400" />
                      <input
                        className="w-full outline-0"
                        type="tel"
                        placeholder="Your Mobile Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="message border font-semibold border-2 text-lg border-gray-200 rounded-md flex  px-3 py-2 items-center gap-2 flex-1">
                      <textarea
                        className="w-full outline-0"
                        placeholder="Your Message"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-golden-500 text-white px-3 py-3 hover:bg-golden-700 rounded-md font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
            <div className="right">
              <div className="contact-info">
                <div className="office">
                  <h3 className="text-gray-700 text-2xl font-semibold">
                    Our Office Location
                  </h3>
                  <p className="text-gray-500">
                    Gabvichomes & Properties Limited <br /> Hilltop Castle
                    Estate Imokun Shiraye Road, <br /> Eredo, Epe L.G.A, Lagos
                    State, Nigeria.
                  </p>
                </div>
                <div className="call py-6 ">
                  <h3 className="text-gray-700 text-2xl font-semibold">
                    Call or Email us Directly
                  </h3>
                  <p className="text-gray-500">Phone Numbers:</p>
                  <p className="text-gray-500 mb-1 flex items-center gap-2">
                    <MdPhone className="inline-block" /> Nigeria:
                    <a href="tel:+2348031234567">+234 8155 021 654</a>{" "}
                  </p>
                  <p className="text-gray-500 mb-1 flex items-center gap-2">
                    <MdPhone className="inline-block" /> USA:
                    <a href="tel:+2348031234567">+1 773-816-6624</a>{" "}
                  </p>
                </div>
                <div className="email">
                  <p className="py-1 text-gray-700 font-semibold">Email:</p>
                  <p className="text-gray-500 mb-1 flex items-center gap-2">
                    <MdEmail className="inline-block" />
                    General:
                    <a href="mailto:info@gabvichomes.com">
                      info@gabvichomes.com
                    </a>{" "}
                  </p>
                  <p className="text-gray-500 mb-1 flex items-center gap-2">
                    <MdEmail className="inline-block" />
                    Sales:
                    <a href="mailto:sales@gabvichomes.com">
                      sales@gabvichomes.com
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="social py-6">
                <h3 className="text-gray-700 text-2xl font-semibold">
                  Follow us on Social Media{" "}
                </h3>
                <p className="text-gray-500 mb-3">
                  Stay updated with Projects, Promos, and industry news.
                </p>
                <p className="text-gray-500 mb-1 flex items-center gap-2">
                  <FaFacebook />
                  <a href="https://www.facebook.com/gabvichomes">
                    facebook.com/gabvichomes
                  </a>
                </p>
                <p className="text-gray-500 mb-1 flex items-center gap-2">
                  <AiFillInstagram />

                  <a href="https://www.instagram.com/gabvichomes">
                    @gabvichomes
                  </a>
                </p>
                <p className="text-gray-500 mb-1 flex items-center gap-2">
                  <GrLinkedin />

                  <a href="https://www.linkedin.com/gabvichomes">
                    Gabvic Homes Ltd
                  </a>
                </p>
                <p className="text-gray-500 mb-1 flex items-center gap-2">
                  <FaXTwitter />

                  <a href="https://www.x.com/gabvichomes">@gabvichomes</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
