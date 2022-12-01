/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { toast } from "react-toastify";
import { STRAPI_URL } from "../utils/strapi_url";
import axios from "axios";

export default function Email() {
  const [emails, setEmails] = useState([]);
  const [handelText, setHandelText] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  async function getEmails() {
    try {
      const response = await axios.get(STRAPI_URL + "/api/emails");
      const result = response.data.data;
      setEmails(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (emails.length == 0) {
      getEmails();
    }
  });

  const savePoints = () => {
    if (!handelText) {
      toast.error("Please enter your name!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      axios
        .post(STRAPI_URL + `/api/emails`, {
          data: {
            user_name: handelText,
            points: score,
          },
        })
        .then(
          (response) => {
            toast.success("Score saved successfully", {
              position: toast.POSITION.TOP_CENTER,
            });
            console.log(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < emails.length && setCurrentQuestion(nextQues);
  };

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < emails.length; i++) {
      emails[i].attributes.answer === selectedOptions[i]?.answerByUser &&
        (newScore += 1);
    }
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <section className="bg-white mt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl mt-10 ">
          Protect Yourself From Email Phishing.
        </h1>
        <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 ">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div className="flex gap-2 justify-center">
          <Sidebar />
          <section className="bg-white">
            <div className="py-1 px-0 mx-auto max-w-screen-xl text-center lg:py-1">
              <div className="flex gap-10 mx-2">
                <Link href="/email" passHref>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-left-short text-black cursor-pointer"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-archive text-black mt-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-exclamation-octagon text-black mt-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-trash text-black mt-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h1 className="text-gray-900 text-2xl ">
                  {emailData?.attributes?.subject}
                </h1>
              </div>
              <div className="flex mx-3 mt-5 justify-between ">
                <div className="flex">
                  <div>
                    <img
                      src="./user.png"
                      alt=""
                      className="w-[45px] h-[45px]"
                    />
                  </div>
                  <div className="flex gap-2 ml-5">
                    <h1 className="text-black font-bold">
                      {emailData?.attributes?.sender}
                    </h1>
                    <h1 className="text-gray-600 ">
                      {emailData?.attributes?.sender_email}
                    </h1>
                  </div>
                </div>
                <div className="mr-[70px]">
                  <h1 className="text-black">08:20pm</h1>
                </div>
              </div>
            </div>
            <div>
              <h6 className="text-black text-sm text-justify mx-20">
                {emailData?.attributes?.message}
              </h6>
            </div>
            <div className="mx-20 justify-start flex mt-10 ">
              <h1 className="text-black font-bold text-sm">
                One attachment •{" "}
                <span className="font-normal">Scanned by Gmail</span>
              </h1>
            </div>
            <div className="mx-20 mt-2">
              <img
                src={emailData?.attributes?.attachment}
                alt="attachment"
                className="w-[120px] h-[100px]"
              />
            </div>
            <div className="flex justify-start mx-20 mt-10 gap-4">
              <h1 className="text-black inline-block border border-gray-800 px-8 py-1 rounded-full">
                Reply
              </h1>
              <h1 className="text-black inline-block border border-gray-800 px-6 py-1 rounded-full">
                Forward
              </h1>
            </div>

            <div className="flex justify-start mx-20 mt-10 gap-4 ">
              <h1 className="text-white bg-green-500 inline-block border cursor-pointer  px-8 py-1 rounded-full">
                LIGIT
              </h1>
              <h1 className="text-white inline-block border cursor-pointer bg-red-500 px-6 py-1 rounded-full">
                PHISHING
              </h1>
              <h1 className="text-white bg-green-500 inline-block border cursor-pointer  px-8 py-1 rounded-full">
                Back
              </h1>
              <h1 className="text-white inline-block border cursor-pointer bg-red-500 px-6 py-1 rounded-full">
                Next
              </h1>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
