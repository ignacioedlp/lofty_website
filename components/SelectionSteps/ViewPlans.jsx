import React from "react";

const plans = [
  {
    title: "Floor plan 1",
    price: 200,
  },
  {
    title: "Floor plan 2",
    price: 300,
  },
  {
    title: "Floor plan 3",
    price: 400,
  },
];

function ViewPlans() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          View Floor Plan
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
          magni libero consequuntur voluptatum velit amet id repudiandae ea,
          deleniti laborum in neque eveniet.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="w-full p-8 flex-col shadow-body1 shadow-md space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700 "
            >
              <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
                {plan.title}
              </p>

              <h2 className="text-5xl font-bold text-gray-800 uppercase dark:text-gray-100">
                ${plan.price}
              </h2>

              <p className="font-medium text-gray-500 dark:text-gray-300">
                Life time
              </p>

              <p className="font-medium text-gray-500 dark:text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                cum velit molestiae rerum consequatur sit repellendus
                praesentium voluptas nobis amet, quidem delectus eaque
                perferendis voluptates, enim dolores corrupti. Corporis, neque!
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewPlans;
