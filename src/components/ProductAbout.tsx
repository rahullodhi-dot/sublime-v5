import Vector4 from "../assets/images/brewImg.jpg";
import bottomTree from "../assets/images/bottomTree.png";
import brewvideo from "../assets/video/brewVideo.mp4";

interface ProductAboutProps {
  description: string;
  image?: string;
}

const ProductAbout = ({ description = "", image }: ProductAboutProps) => {
  const displayImage = image || Vector4;

  return (
    <section className="relative max-w-[1280px] mx-auto rounded-lg overflow-hidden bg-[#f1e4b0] py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">

      {/* BACKGROUND TREE */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={bottomTree}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* ================= TOP CONTENT ================= */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* TEXT */}
          <div>
            <h2
              className="mb-6 text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#9a7523]"
              style={{
                fontFamily: "'gotham2', serif",
                fontWeight: 500,
              }}
            >
              About Product
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {description.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-[15px] leading-6 sm:leading-[23px] text-black"
                  style={{
                    fontFamily: "'gotham-light', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 sm:mt-12">
              <p className="text-sm">
                <span className="text-base font-medium">
                  Name & Address of Packer:
                </span>{" "}
                Sublime | Prestige Falcon Towers, 9th Floor, 19, Brunton Road,
                Bengaluru-560025
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative overflow-hidden border rounded-lg w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto">
            <img
              src={displayImage}
              alt="Product"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = Vector4;
              }}
            />
          </div>
        </div>
      </div>

      {/* ================= VIDEO SECTION ================= */}
      <div className="relative mt-14 sm:mt-20">
        <div className="w-full max-w-6xl mx-auto">

          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[540px] overflow-hidden rounded-lg border">
            <video
              src={brewvideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default ProductAbout;
