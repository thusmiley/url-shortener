"use client";

require("dotenv").config();
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UrlCard from "./UrlCard";

const ShortenerForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [urlList, setUrlList] = useState([]);

  useEffect(() => {
    if (urlList.length !== 0) return localStorage.setItem("savedUrls", JSON.stringify(urlList));
  }, [urlList]);

  useEffect(() => {
    const savedInStorage = localStorage.getItem("savedUrls");

    const parsedUrlList = savedInStorage !== null ? JSON.parse(savedInStorage) : [];

    setUrlList(parsedUrlList.reverse());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
        setUrlList([...urlList, response]);
      })
      .catch((error) => {
        console.log(error);
      });
    setInputValue("");
  };

  return (
    <section className="bg-gradient-to-b from-white from-[91px] to-lightGrey to-[91px] flex flex-col items-center justify-center lg:from-[84px] lg:to-[84px]">
      <div className="px-6 lg:px-10 w-full xl:px-[165px] xl:max-w-[1536px]">
        <form action="" className="relative form-bg p-6 rounded-[10px] lg:flex lg:items-center lg:px-[64px] lg:py-[52px]" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            value={inputValue}
            {...register("urlInput", {
              required: "Please enter a link",
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
            onChange={(e) => setInputValue(e.target.value)}
          />
          {errors.urlInput && (
            <p className="mt-1 text-[12px] leading-[18px] tracking-[.08px] lg:text-[16px] lg:tracking-[.11px] text-red left-6 italic lg:absolute lg:bottom-[26px] lg:left-[64px]">
              {errors.urlInput.message}
            </p>
          )}

          <input type="submit" value="Shorten It!" className="cta rounded-[5px] w-full mt-4 text-[18px] lg:mt-0 lg:w-[20%] xl:py-[14px] xl:text-[20px] xl:leading-[36px]" />
        </form>
      </div>

      <div className="mt-6 space-y-6 px-6 mx-auto lg:px-10 lg:space-y-4 w-full xl:px-[165px] xl:max-w-[1536px]">
        {urlList?.map((obj, index) => (
          <UrlCard key={index} longUrl={obj.data.url} tinyUrl={obj.data.tiny_url} />
        ))}
      </div>
    </section>
  );
};

export default ShortenerForm;
