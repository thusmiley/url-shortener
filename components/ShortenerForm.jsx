"use client";

require("dotenv").config();
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ShortenerForm = () => {
  const [longUrl, setLongUrl] = useState("");
  const [tinyurl, setTinyurl] = useState("");
  const [copySuccess, setCopySuccess] = useState("Copy");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLongUrl(data.urlInput);
    setCopySuccess("Copy");

    fetch(`https://api.tinyurl.com/create`, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.NEXT_PUBLIC_TINY_URL_API}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        url: data.urlInput,
        domain: "tinyurl.com",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setTinyurl(response.data.tiny_url);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="bg-gradient-to-b from-white from-[91px] to-lightGrey to-[91px] flex flex-col items-center justify-center lg:from-[84px] lg:to-[84px]">
      <form action="" className="px-6 lg:px-10 w-full xl:px-[165px] xl:max-w-[1536px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative form-bg p-6 rounded-[10px] lg:flex lg:items-center lg:px-[64px] lg:py-[52px]">
          <input
            type="text"
            {...register("urlInput", {
              required: "Please add a link",
              pattern: {
                value:
                  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
                message: "Wrong format",
              },
            })}
            placeholder="Shorten a link here..."
            className={`py-[6px] px-4 bg-white w-full text-[16px] font-medium leading-[36px] tracking-[.12px] text-almostBlack outline-[1px] outline-darkViolet caret-almostBlack placeholder:text-almostBlack/50 rounded-[5px] lg:w-[80%] lg:mr-6 xl:text-[20px] xl:tracking-[.15px] xl:py-[14px] xl:px-8 ${
              errors.urlInput ? "outline-red placeholder:text-red/50" : ""
            }`}
          />
          {errors.urlInput && (
            <p className="mt-1 text-[12px] leading-[18px] tracking-[.08px] lg:text-[16px] lg:tracking-[.11px] text-red left-6 italic lg:absolute lg:bottom-[26px] lg:left-[64px]">
              {errors.urlInput.message}
            </p>
          )}

          <input type="submit" value="Shorten It!" className="cta rounded-[5px] w-full mt-4 text-[18px] lg:mt-0 lg:w-[20%] xl:py-[14px] xl:text-[20px] xl:leading-[36px]" />
        </div>
      </form>

      {longUrl !== "" && (
        <div className="mt-6 space-y-6 px-6 mx-auto lg:px-10 lg:space-y-4 w-full xl:px-[165px] xl:max-w-[1536px]">
          <div className="bg-white rounded-[5px] pt-[6px] pb-4 px-4 text-[16px] leading-[36px] tracking-[.12px] font-medium relative overflow-hidden lg:py-[18px] lg:px-8 lg:flex lg:items-center xl:text-[20px] xl:tracking-[.15px]">
            <p className="text-almostBlack pb-[6px] lg:pb-0 lg:w-[60%] truncate lg:mr-6">{longUrl}</p>
            <div className="h-[1px] w-[110%] bg-grey/25 mx-auto absolute left-0 right-0 lg:hidden lg:w-[25%]" />
            <p className="text-cyan pt-[6px] mb-2 truncate lg:mb-0 lg:pt-0 lg:mr-6">{tinyurl} </p>
            <button
              className={`pt-[9px] pb-[7px] bg-cyan text-white w-full rounded-[5px] leading-auto tracking-normal font-bold lg:w-[15%] ${copySuccess === 'Copied!' ? 'bg-darkViolet' : ''}`}
              onClick={() => {
                setCopySuccess("Copied!");
                navigator.clipboard.writeText(tinyurl);
              }}
            >
              {copySuccess}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShortenerForm;
