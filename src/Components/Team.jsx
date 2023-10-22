import React from "react";
import { NavBar, Navbar } from "./NavBar";
import { Footer } from "./Footer";
import shree from "../assets/img/SHREE.jpeg";
import prajak from "../assets/img/prajak.jpeg";
import prasad from "../assets/img/prasad.jpeg";
import harry from "../assets/img/HARRY.jpeg";
import "./Team.css";

class Team extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="wrapper">
          {/* Team section */}
          <div className="container-fluid">
            <div className="team-wrapper card">
              <div
                className="row-me justify-content-center"
                style={{ marginBottom: "2%" }}
              >
                <h1 className="heading">Core Team</h1>
              </div>
              <div className="row-me">
                {/* Team members - You can repeat this structure for each team member */}
                <div className="col-md">
                  <div className="container-fluid">
                    <div className="dp">
                      <img
                        src={shree}
                        style={{ objectFit: "cover" }}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div id="brief">
                      <p id="name">Prof. Doctor Strange</p>
                      <p id="designation">Community Head (Faculty)</p>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="container-fluid">
                    <div className="dp">
                      <img
                        src={shree}
                        style={{ objectFit: "cover" }}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div id="brief">
                      <p id="name">Shreeniwas Chaudhari</p>
                      <p id="designation">Community Leader</p>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="container-fluid">
                    <div className="dp">
                      <img
                        src={prajak}
                        style={{ objectFit: "cover" }}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div id="brief">
                      <p id="name">Prajakta Patil</p>
                      <p id="designation">Community Leader</p>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="container-fluid">
                    <div className="dp">
                      <img
                        src={prasad}
                        style={{ objectFit: "cover" }}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div id="brief">
                      <p id="name">Prasad Chavan</p>
                      <p id="designation">Community Manager</p>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="container-fluid">
                    <div className="dp">
                      <img
                        src={harry}
                        style={{ objectFit: "cover" }}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div id="brief">
                      <p id="name">Harsh Patil</p>
                      <p id="designation">Community Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Moderators */}
          <div className="team-wrapper card">
            <div
              className="row-me justify-content-center"
              style={{ marginBottom: "2%" }}
            >
              <p className="heading">Moderators</p>
            </div>
            <div className="row-me">
              {/* Team members - You can repeat this structure for each team member */}
              <div className="col-md">
                <div className="container-fluid">
                  <div className="dp">
                    <img
                      src={shree}
                      style={{ objectFit: "cover" }}
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div id="brief">
                    <p id="name">Prof. Doctor Strange</p>
                    <p id="designation">Community Head (Faculty)</p>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="container-fluid">
                  <div className="dp">
                    <img
                      src={shree}
                      style={{ objectFit: "cover" }}
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div id="brief">
                    <p id="name">Shreeniwas Chaudhari</p>
                    <p id="designation">Community Leader</p>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="container-fluid">
                  <div className="dp">
                    <img
                      src={prajak}
                      style={{ objectFit: "cover" }}
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div id="brief">
                    <p id="name">Prajakta Patil</p>
                    <p id="designation">Community Leader</p>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="container-fluid">
                  <div className="dp">
                    <img
                      src={prasad}
                      style={{ objectFit: "cover" }}
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div id="brief">
                    <p id="name">Prasad Chavan</p>
                    <p id="designation">Community Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="container-fluid">
                  <div className="dp">
                    <img
                      src={harry}
                      style={{ objectFit: "cover" }}
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div id="brief">
                    <p id="name">Harsh Patil</p>
                    <p id="designation">Community Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="container-fluid" id="space">
          {/* Footer content */}
        </div>

        <Footer />
      </>
    );
  }
}

export default Team;
