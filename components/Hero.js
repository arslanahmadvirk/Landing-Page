/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <div>
      <section className=" max-w-7xl text-gray-600 body-font mx-auto">
        <div className="w-11/12 my-8 bg-white mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Simplifying the initial connection between academia and industry
            </h1>
            <p className="mb-8 leading-relaxed">Do you work in...</p>
            <div className="md:flex justify-center gap-4">
              <div className="h-[222px] w-[250px] rounded-2xl bg-[#A4D0DB] space-y-20 space-x-8 shadow-xl">
                <img
                  src="/factory.png"
                  alt="factory"
                  className="mt-12 ml-8   "
                />
                <p className="font-bold text-lg">{`Industry >`}</p>
              </div>
              <div className="h-[222px] w-[250px] rounded-2xl bg-[#C8DA88] space-y-20 space-x-8 shadow-xl">
                <img
                  src="/graduation.png"
                  alt="factory"
                  className="mt-12 ml-8"
                />
                <p className="font-bold text-lg">{`Academia research >`}</p>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] mx-auto vector-bg">
              <img
                className="object-cover object-center "
                alt="hero"
                src="/banner_img.png"
              />
            </div>
          </div>
        </div>
        {/* COMPANIES */}

        <div className="w-11/12 mx-auto">
          <button
            type="button"
            className="text-white bg-dark-blue font-medium ml-10 rounded-xl text-sm px-12 py-3 text-center rotate-button"
            disabled
          >
            In us at
          </button>
          <div class=" py-16 mx-auto rounded-2xl border border-gray-100">
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 w-1/5">
                <img src="/company_1.png" alt="company" className="mx-auto" />
              </div>
              <div class="p-4 w-1/5">
                <img src="/company_2.png" alt="company" className="mx-auto" />
              </div>
              <div class="p-4 w-1/5">
                <img src="/company_3.png" alt="company" className="mx-auto" />
              </div>
              <div class="p-4 w-1/5">
                <img src="/company_4.png" alt="company" className="mx-auto" />
              </div>
              <div class="p-4 w-1/5">
                <img src="/company_5.png" alt="company" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
