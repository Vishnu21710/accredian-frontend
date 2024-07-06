import React from "react";
import HeroBar from "./hero-bar/hero-bar";
import Button from "../../../../components/button/button";
import { ArrowRight, StarHalf, StarIcon } from "lucide-react";
import { Forbes, GoogleSvg } from "../../../../components/svgs/svg";
import { useReferalModal } from "../../../../hooks/useReferalModal";
import { Link } from "react-router-dom";

const Hero = () => {
  const { onOpen, isOpen, onClose } = useReferalModal();
  return (
    // <section className="max-w-[73rem] mx-auto">
    //   <HeroBar />
    //   <div className="flex justify-between items-center py-5 mt-20 ">
    //     <div className="relative flex flex-col gap-y-5">

    //       <div className="relative">
    //         <p className="text-6xl font-extrabold tracking-wider leading-tight text-blue-600">
    //           Learn, Earn and{" "}
    //         </p>
    //         <p className="tracking-wider text-6xl font-extrabold text-blue-600">
    //           Win!
    //         </p>
    //         <p className="mt-10 text-2xl font-normal leading-[50px] max-w-xl">
    //           Take courses and stand a chance to win upto{" "}
    //           <span className="text-blue-600 text-5xl font-bold">15,000</span>
    //         </p>
    //       </div>
    //       <Button variant="primary" size="lg" className={"w-36 relative"}>
    //         Refer Now
    //       </Button>
    //     </div>
    //     <div></div>
    //   </div>
    // </section>
    <>
      <div className="md:max-w-[85rem] w-full mt-10 md:bg-gradient-to-l bg-transparent md:shadow-sm rounded-2xl from-blue-50/40 via-blue-50/30 to-white py-10  mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center ">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              Learn, Earn & <span className="text-blue-600">Win !</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800">
              Enroll in the course and earn rewards by referring your friends.
              You can win up to ₹15,000 through our referral program!
            </p>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link>
                <Button
                  onClick={onOpen}
                  variant="primary"
                  className={"flex items-center gap-3"}
                >
                  Refer Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button variant="ghost" className={"border"}>
                Contact Expert
              </Button>
            </div>
            <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
              <div className="py-5">
                <div className="flex space-x-1">
                  {Array.from(Array(5)).map((_, index) => (
                    <StarIcon key={index} className="w-5 h-5" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-gray-800">
                  <span className="font-bold">5</span> /5 - from 12k reviews
                </p>
                <div className="mt-5">
                  <GoogleSvg />
                </div>
              </div>
              <div className="py-5">
                <div className="flex space-x-1">
                  {Array.from(Array(5)).map((_, index) => {
                    if (index < 4) {
                      return <StarIcon key={index} className="w-5 h-5" />;
                    }
                    return <StarHalf key={index} className="w-5 h-5" />;
                  })}
                </div>
                <p className="mt-3 text-sm text-gray-800">
                  <span className="font-bold">4.8</span> /5 - from 5k reviews
                </p>
                <div className="mt-5">
                  <Forbes />
                </div>
              </div>
            </div>
          </div>
          <div className="relative ms-4 border-none">
            <div className="bg-purple-300  lg:h-96  lg:w-96 h-32 w-32  rounded-full absolute top-24 -left-4  filter blur-xl opacity-70 animate-blob"></div>
            <div className="bg-pink-300  lg:h-96  lg:w-96 h-32 w-32  rounded-full absolute top-24 -right-4  filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="bg-rose-300  lg:h-96  lg:w-96 h-32 w-32  rounded-full absolute -bottom-4 left-24  filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <img
              className="w-full  rounded-md relative "
              src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMFcRlpwXRit2txvUmeNO3IXQ1Ut0i6JJiv-X4fx03kHq6~U9MBQeJHPu9LTsjMmUHB0SfN50tqW2rrEIxrxd2g7Nix-Ouj6br98~nqzo8NWTocxEmm9nJHz6P1VjnJNtT-yVlkzuL936Qs4vjLiIsT0J65E8QMNg68~KYmTAiWluaK9wzFnnNNKfyjutvf~N4I9fSublwB3nZyw4KtODCcvEG9U2P76twuAyN-ROQM-BwWqVVHxsuBE7W~Hhfwn1JhpscUqZRuIFALlVzWoZu2jyc~nWjPPzxTe~cwVpHRVRn0nBx8EvGZ2MkPVsdZhQ~X5mrK1CQ2lc1SyOk8OSg__"
              alt="Image Description"
            />

            {/*           
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-blue-200 to-pink-50 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 overflow-hidden"  /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
