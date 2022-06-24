function TopBanner({ urlVideo }) {
  return (
    <div className="w-full h-[100vh] ">
      <video
        autoPlay={true}
        loop
        muted
        id="video"
        className="object-cover w-full h-[100vh] absolute"
      >
        <source src={urlVideo} type="video/mp4" />
      </video>
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 relative">
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
