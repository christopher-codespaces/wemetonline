import React from 'react'

const Stats = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Your Soulmate Now
          </h3>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Find matches that have the same interests as you with our powerful
            search tool
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Matches
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                10 000+
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Flirty Texts
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                5000+
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Singles 
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                8000+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Stats