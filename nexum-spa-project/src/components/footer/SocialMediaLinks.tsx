import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

type Props = {
  readonly facebook: string;
  readonly linkedIn: string;
  readonly youtube: string;
  readonly instagram: string;
  readonly twitter: string;
};

function SocialMediaLinks({
  facebook,
  linkedIn,
  youtube,
  instagram,
  twitter,
}: Props) {
  return (
    <div className="">
      <div className="mb-4 font-bold uppercase underline underline-offset-8">
        Connect with us
      </div>
      <div className="flex flex-row">
        {facebook && (
          <div className="basis-full">
            <a target="_blank" href={facebook}>
              <FontAwesomeIcon fontSize={40} icon={faFacebook} />
            </a>
          </div>
        )}

        {instagram && (
          <div className="basis-full">
            <a target="_blank" href={instagram}>
              <FontAwesomeIcon fontSize={40} icon={faInstagram} />
            </a>
          </div>
        )}

        {twitter && (
          <div className="basis-full">
            <a target="_blank" href={twitter}>
              <FontAwesomeIcon fontSize={40} icon={faTwitter} />
            </a>
          </div>
        )}
        {youtube && (
          <div className="basis-full">
            <a target="_blank" href={twitter}>
              <FontAwesomeIcon fontSize={40} icon={faYoutube} />
            </a>
          </div>
        )}
        {linkedIn && (
          <div className="basis-full">
            <a target="_blank" href={twitter}>
              <FontAwesomeIcon fontSize={40} icon={faLinkedin} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default SocialMediaLinks;
