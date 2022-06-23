function TopBanner() {
  return (
    <div
      className="w-full  bg-fit h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80")`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-5xl font-semibold uppercase text-background ">
            Lofty services
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
