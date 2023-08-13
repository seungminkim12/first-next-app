import Image from "next/image";
import Config from "./config/config.export";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB! {Config().mode}
    </>
  );
}
