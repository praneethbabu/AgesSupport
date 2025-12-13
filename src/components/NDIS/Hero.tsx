const Hero = () => {
  return (
    <section className="relative text-white py-24 md:py-32 overflow-hidden min-h-[60vh]">

      {/* Correct Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://wexted-bucket.s3.ap-southeast-2.amazonaws.com/Delivering_NDIS_v2_0e9216e0c6.jpg')",
        }}
      ></div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/80 to-[#002b55]/85"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{
            fontFamily: "Georgia, serif",
            textShadow: "0px 3px 12px rgba(0,0,0,0.6)",
          }}
        >
          NDIS Information
        </h1>

        <p
          className="text-2xl text-gray-200"
          style={{ fontFamily: "Cambria, Georgia, serif" }}
        >
          Learn about the National Disability Insurance Scheme
        </p>
      </div>
    </section>
  );
};

export default Hero;
