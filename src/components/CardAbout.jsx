import Image from "next/image";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function CardAbout() {
  return (
    <div className="profile-page">
      <div className="card profile-header">
        <div className="body">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="profile-image float-md-start">
                <Image
                  src="https://avatars.githubusercontent.com/u/20652209?v=4"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "50%",
                    border: "3px solid #fff",
                    boxShadow:
                      "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
                  }}
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
              <h4 className="m-t-0 m-b-0">
                <strong>Michael</strong> Deo
              </h4>
              <span className="job_post">Ui UX Designer</span>
              <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
              <div>
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-primary btn-round"
                >
                  Follow
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-primary btn-round mx-2"
                >
                  Message
                </a>
              </div>
              <p className="social-icon mt-3 m-b-0">
                <a href="#" target="_blank" title="Twitter">
                  <FaTwitter className="fs-4" />
                </a>
                <a href="#" target="_blank" title="Facebook">
                  <FaFacebook className="fs-4" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
