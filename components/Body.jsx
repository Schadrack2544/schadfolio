import React from "react";
import { PortfolioItem, StackItem } from "../components";
import Typical from "react-typical";
import * as Fa from "react-icons/fa";
import Image from "next/image";
import Router from "next/router";
import emailjs from "emailjs-com";

const Body = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kp9r854",
        "template_f0tjx8m",
        e.target,
        "V3VkP4Uq1YBtesK1T"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className=" bg-[#111] flex flex-col gap-2.5  sm:px-5 px-2 w-full sm:mx-auto sm:inset-0">
      <div className="intro flex items-center   sm:h-auto  w-full sm:mx-auto">
        <div className="flex-1 intro-back sm:h-[100vh] relative hidden lg:flex  self-center">
          <div className="relative inset-0 bg-[#111] text-white opacity-40 h-screen w-full self-center">
            <Image
              src={"/images/Schad.png"}
              alt={"title"}
              placeholder="blur"
              layout="responsive"
              blurDataURL={"/images/Schad.jpg"}
              height={250}
              width={300}
              className="w-full h-full object-cover object-center absolute inset-0 hidden xl:flex"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col sm:pr-[60px] w-full h-screen items-center justify-center">
          <h1 className="text-[24px] sm:text-[36px] font-[600] pb-5 text-center sm:text-left">
            Hello my name is
            <br /> Schadrack{" "}
            <span className="text-red-600 text-[24px] sm:text-[36px]">
              Nzayinambaho
            </span>
          </h1>
          <h3 className="text-[22px]">
            <div className="flex  gap-2 text-left ">
              I'm{" "}
              <Typical
                steps={["Software", 3000, "Web", 3000, "Mobile app", 3000]}
                loop={Infinity}
                wrapper="b"
              />{" "}
              developer.
            </div>
          </h3>
        </div>
      </div>
      <div
        id="about"
        className="flex justify-between items-center bg-[#000] sm:h-auto"
      >
        <div className="aboutme flex flex-col  flex-1 w-screen sm:w-auto">
          <h1 className=" text-[28px] sm:text-[32px] text-center ">About me</h1>
          <p className="p-5">
            I am a tremendous person who is self-motivated, disciplined,
            creative and innovative. I am able to take and implement wonderful
            initiatives. I am skilled in computer related activities. I like
            programming and keeping all my things sorted. Furthermore, I am
            sociable, flexible as well as team work spirit, Hence I am a good
            asset to everyone.
          </p>
          <div className="flex justify-center flex-col  sm:justify-start">
            <h3 className="text-[22px] sm:text-[30px] pl-5">My qualities</h3>
            <ul className="p-5 sm:text-[20px]">
              <li>Teamwork spirit</li>
              <li>Eager to learn</li>
              <li>Proactive</li>
              <li>Time Oriented</li>
              <li>Self Adaptable</li>
            </ul>
            <div className="flex justify-start gap-5">
              <button
                className="bg-red-600 p-2 ml-5 w-[80px] rounded-[8px]"
                onClick={() => {
                  Router.push("https://schadfolio.vercel.app/#contact");
                }}
              >
                Hire me
              </button>
              <button
                className="bg-red-600 p-2 ml-5 w-[auto] rounded-[8px]"
                onClick={() => {
                  Router.push("/documents/Schadrack_CV.pdf");
                }}
              >
                Get my CV
              </button>
            </div>
          </div>
        </div>
        <div className="another-profile h-[100vh] hidden sm:flex flex-1  relative">
          <div className="absolute  top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
        </div>
      </div>

      <div
        id="portfolio"
        className="portfolio flex  sm:h-auto bg-[#111]  flex-col gap-5 "
      >
        <h3 className="text-center text-[30px]"> My portfolio</h3>
        <div className="portfolio-items flex flex-col xl:flex-row">
          <PortfolioItem
            imgUrl="/images/ibirori.png"
            title="ibirori.rw"
            projectLink="https://ibirori.vercel.app"
            description={
              "This is the system which helps to organize  different parties people might have. Those parties can be wedding ,meetings, anniversaries,baby and bridal shower"
            }
          />

          <PortfolioItem
            imgUrl="/images/schadtv.png"
            title="Schadtv"
            projectLink={"https://schadtv.vercel.app"}
            description={
              "schadtv is the online video streaming service which uses the video api similar to that of Youtube to give whatever video you want on the globe."
            }
          />
            <PortfolioItem
            imgUrl="/images/schadmusic.PNG"
            title="SchadMusic"
            projectLink={"https://schadmusic.vercel.app"}
            description={
              "This is a website to explore music all around the world using shazam core api and many more technology"
            }
          />
        </div>
      </div>

      <div
        id="mystacks"
        className="mystacks flex flex-col gap-5 h-auto  sm:h-auto  flex-wrap w-full sm:flex-row"
      >
        <h1 className="text-[30px] text-center  bg-[#111] w-full">My Stacks</h1>
        <div className="stack-items flex-col sm:flex-row flex gap-2 flex-wrap bg-[#fff] pt-5">
          <StackItem stackUrl={"/images/htmllogo.png"} title="html" />
          <StackItem stackUrl={"/images/csslogo.png"} title="css" />
          <StackItem
            stackUrl={"/images/javascriptlogo.png"}
            title="Javascript"
          />
          <StackItem stackUrl={"/images/nodejslogo.png"} title="nodejs" />
          <StackItem stackUrl={"/images/reactlogo.png"} title="React" />

          {/* <StackItem stackUrl={"/images/angular.png"} title="AngularJS" /> */}
          <StackItem stackUrl={"/images/nextjslogo.png"} title="NextJS" />
          <StackItem stackUrl={"/images/htmllogo.png"} title="html" />

          <StackItem stackUrl={"/images/djangologo.png"} title="Django" />
          <StackItem
            stackUrl={"/images/react-nativelogo.png"}
            title="React-Native"
          />
          <StackItem stackUrl={"/images/flutterlogo.png"} title="Flutter" />
          <StackItem stackUrl={"/images/wordpress.png"} title="Wordpress" />
        </div>
      </div>
      <div
        id="contact"
        className="contact flex flex-col sm:h-auto bg-[#000] sm:w-full"
      >
        <h3 className="text-[36px] text-center uppercase">Contact me</h3>
        <div className="contact  flex flex-col items-center xl:flex-row gap-5 p-5">
          <div className="flex flex-col gap-2.5 flex-1 items-center self-center">
            <div className="h-[200px] w-[200px] flex justify-center self-center relative">
              <img
                src="/images/Schad.png"
                alt="Schadrack"
                layout="cover"
                className="object-cover rounded-[50%] border-[3px] border-[#123] absolute"
              />
            </div>
            <div>
              <h3 className="sm:text-[32px]">
                You may find me through the socials
              </h3>
              <span className="flex gap-2 items-center sm:text-[32px]">
                <Fa.FaEnvelope />
                nzayinaschad250@gmail.com
              </span>
              <span className="flex gap-2 items-center sm:text-[32px]">
                <Fa.FaPhone />
                +250780491982
              </span>
              <div className="social-media flex gap-5 text-[32px] justify-center items-center pt-5">
                <Fa.FaLinkedin
                  className="hover:text-red-600"
                  onClick={() => {
                    Router.push(
                      "https://www.linkedin.com/in/schadrack-nzayinambaho-349a11134/"
                    );
                  }}
                />
                <Fa.FaGithub
                  className="hover:text-red-600"
                  onClick={() => {
                    Router.push("https://www.github.com/Schadrack2544");
                  }}
                />
                <Fa.FaFacebook
                  className="hover:text-red-600"
                  onClick={() => {
                    Router.push(
                      "https://www.facebook.com/nzayinambaho.schadrack"
                    );
                  }}
                />
                <Fa.FaTwitter
                  className="hover:text-red-600"
                  onClick={() => {
                    Router.push("https://www.twitter.com/schadrackgodso1");
                  }}
                />
                <Fa.FaInstagram
                  className="hover:text-red-600"
                  onClick={() => {
                    Router.push("https://www.instagram.com/schadrack_rw");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="contact-form flex-1">
            <h3 className="sm:text-[28px]">Send me message here</h3>
            <form
              action=""
              method="post"
              className="flex flex-col gap-5 w-full sm:w-[600px]"
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="fullname"
                placeholder="Fullname"
                id="fullname"
                className="text-black"
              />
              <input type="email" name="email" placeholder="email" id="email"  className="text-black"/>
              <input type="phone" name="phone" placeholder="Phone" id="phone"  className="text-black"/>

              <textarea
                name="message"
                id="message"
                cols="30"
                rows="8"
                placeholder="Ask me"
                className="text-black"
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 text-white w-[200px] p-2 rounded-[12px]"
              >
                Send Your message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
