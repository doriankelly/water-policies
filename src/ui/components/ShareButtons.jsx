import { LinkedinShareButton, TwitterShareButton, FacebookShareButton, WhatsappShareButton, EmailShareButton,} from 'react-share';
import { LinkedinIcon, TwitterIcon, FacebookIcon, WhatsappIcon, EmailIcon } from 'react-share';

export const ShareButtons = ({ url, title }) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  }

  return (
    <div >
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
  );
};

