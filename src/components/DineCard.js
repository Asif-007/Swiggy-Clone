export default function DineCard({RestData}) {
    return (
      <div className="max-w-sm flex-none">
        <div className="relative">
          <a href={RestData?.cta?.link}>
            <img
              className="w-80 h-50 object-cover rounded-2xl"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                RestData?.info?.mediaFiles[0].url
              }
            ></img>
          </a>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent">
            <p className="absolute bottom-2 left-2 text-xl text-white z-10">
              {RestData?.info?.name}
            </p>
            <p className="absolute bottom-2 right-2 text-xl text-white z-10">
              {RestData?.info?.rating?.value}
            </p>
          </div>
        </div>
      </div>
    );
}