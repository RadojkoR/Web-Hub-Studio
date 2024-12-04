import video from "../../assets/videos/3129671-hd_1920_1080_30fps.mp4"

function Header() {
  return (
    <header className="header h-screen overflow-hidden">
      <video src={video} className="w-full h-auto" loop autoPlay></video>
      <h1 className="text-sky-800 text-7xl">This is Header</h1>
    </header>
  );
}

export default Header