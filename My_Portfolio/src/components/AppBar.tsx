import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
const AppBar = () => {
  return (
    <div className="p-3 flex justify-between">
      <h1 className="text-zinc-400 text-4xl">KH</h1>
      <div className="text-3xl text-gray-200 flex p-2">
        <Link
          to={"https://github.com/hrushi-2003"}
          target="_blank"
          className="pl-4 cursor-pointer"
        >
          <FaGithub />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/hrushikesh-reddy-9b6871214/"}
          target="_blank"
          className="pl-4 pr-4"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
