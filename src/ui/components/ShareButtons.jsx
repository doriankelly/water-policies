import { LinkedinShareButton, TwitterShareButton, FacebookShareButton, WhatsappShareButton, EmailShareButton,} from 'react-share';
import { LinkedinIcon, TwitterIcon, FacebookIcon, WhatsappIcon, EmailIcon } from 'react-share';

export const ShareButtons = ({ url, title, handleClick }) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  }

  return (
    <div onClick={handleClick} className="fixed z-10 inset-0 flex items-center justify-center">
      <div onClick={e => e.stopPropagation()} className="bg-white p-5 rounded shadow-lg">
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon round />
        </LinkedinShareButton>

        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round />
        </TwitterShareButton>

        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon round />
        </FacebookShareButton>

        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon round />
        </WhatsappShareButton>

        <EmailShareButton url={url} subject={title} body="¡Entra a este enlace!">
          <EmailIcon round />
        </EmailShareButton>

        <button onClick={copyToClipboard}>
          Copiar URL
        </button>
      </div>
    </div>
  );
};


