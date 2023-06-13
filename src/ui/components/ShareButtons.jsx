import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import icmail from "../../assets/icemail.svg";
import icfacebook from "../../assets/icfacebook.svg";
import iclinkedin from "../../assets/iclinkedin.svg";
import ictwitter from "../../assets/ictwitter.svg";
import icwhatsapp from "../../assets/icwhatsapp.svg";
import clipboard from "../../assets/clipboard.png";
import cerrar from "../../assets/cerrar.png";
export const ShareButtons = ({ handleClick }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed z-10 inset-0 flex items-center justify-center bg-terciary bg-opacity-50 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-5 h-36 w-screen rounded-xxl shadow-lg"
      >
        <div className="mb-4 flex justify-between items-center">
          <p className="text-xs font-bold text-darkBlue">Compartir en RRSS</p>

          <p onClick={handleClick}>
            {" "}
            <img
              src={cerrar}
              alt=""
              srcSet=""
              style={{ width: "20px", height: "20px" }}
            />
          </p>
        </div>
        <div className="flex justify-between items-center">
          <FacebookShareButton
            url="https://h20h.netlify.app/"
            quote="H20h - Aprende sobre las políticas azules"
          >
            <img
              src={icfacebook}
              alt=""
              srcSet=""
              style={{ width: "50px", height: "50px" }}
            />
          </FacebookShareButton>

          <TwitterShareButton
            url="https://h20h.netlify.app/"
            title="H20h - Aprende sobre las políticas azules"
          >
            <img
              src={ictwitter}
              alt=""
              srcSet=""
              style={{ width: "50px", height: "50px" }}
            />
          </TwitterShareButton>

          <WhatsappShareButton
            url="https://h20h.netlify.app/"
            title="H20h - Aprende sobre las políticas azules"
          >
            <img
              src={icwhatsapp}
              alt=""
              srcSet=""
              style={{ width: "50px", height: "50px" }}
            />
          </WhatsappShareButton>

          <LinkedinShareButton
            url="https://h20h.netlify.app/"
            title="H20h - Aprende sobre las políticas azules"
          >
            <img
              src={iclinkedin}
              alt=""
              srcSet=""
              style={{ width: "50px", height: "50px" }}
            />
          </LinkedinShareButton>

          <EmailShareButton
            url="https://h20h.netlify.app/"
            subject="H20h"
            body="¡Aprende sobre las políticas azules!"
          >
            <img
              src={icmail}
              alt=""
              srcSet=""
              style={{ width: "50px", height: "50px" }}
            />
          </EmailShareButton>

          <button onClick={copyToClipboard}>
            <img
              src={clipboard}
              alt=""
              srcSet=""
              style={{ width: "50px", height: "50px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
