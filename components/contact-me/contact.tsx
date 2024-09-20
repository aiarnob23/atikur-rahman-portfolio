
export default function ContactMe() {
  return (
    <div
      id="contact-me"
      className="container  mx-auto px-6 mb-12 flex justify-center items-center flex-col md:px-12 lg:px-28 py-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-cyan-400">Contact Me</h2>
        <hr className="border-2 mt-2 border-cyan-400 w-[200px] mx-auto" />
        <p className="text-gray-400 mt-8 text-lg ">
          If you have any questions or would like to discuss a project,
          <br /> feel free to reach out. I look forward to hearing from you!
        </p>
      </div>

      <div className="flex  flex-col justify-center items-center lg:flex-row gap-12">
        {/* Contact Details */}
        <div className="w-full  flex flex-col gap-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="flex items-center -mt-4 gap-3">
              <a
                href="mailto:atikur.rahman.seo1@mail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-cyan-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="100"
                  viewBox="0,0,300,150"
                  style={{ fill: "#22C3E6" }}
                >
                  <g
                    fill="#22c3e6"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M5.5,7c-2.48047,0 -4.5,2.01953 -4.5,4.5v0.42578l24,17.07422l24,-17.07422v-0.42578c0,-2.48047 -2.01953,-4.5 -4.5,-4.5zM6.35156,9h37.29297l-18.64453,13zM1,14.02734v24.47266c0,2.48047 2.01953,4.5 4.5,4.5h39c2.48047,0 4.5,-2.01953 4.5,-4.5v-24.47266l-6,4.26953v22.70313h-36v-22.70312z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="flex items-center -mt-4 gap-3">
              <a
                href="https://www.fiverr.com/atikurr_seo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-cyan-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="70"
                  height="130"
                  viewBox="0,0,300,150"
                  style={{ fill: "#22C3E6" }}
                >
                  <g
                    fill="#22c3e6"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M41.86,21.321v-1.539h-2.919l-1.283,-0.022c-1.097,0 -1.847,0.722 -2.141,1.561v-1.539h-3.269v9.979h3.269v-2.14v-3.312c0,-0.995 0.806,-1.801 1.801,-1.801h1.274v7.253h3.269v-2.14v-3.312c0,-0.995 0.806,-1.801 1.801,-1.801h1.623v-2.726l-1.283,-0.022c-1.097,-0.001 -1.846,0.722 -2.142,1.561zM18.597,19.991l-1.754,5.767l-1.754,-5.767h-3.269l3.551,9.979h0.191h2.562h0.191l3.551,-9.979zM5.239,19.991v-0.665c0,-0.583 0.472,-1.055 1.055,-1.055h2.064v-2.737h-2.835c-1.962,0 -3.553,1.591 -3.553,3.553v0.905h-1.911v2.645h1.911v7.334h3.27v-7.334h3.118v7.334h3.269v-7.334v-2.645h-3.269h-3.119zM26.398,19.857h-0.398c-2.678,0 -4.849,2.171 -4.849,4.849v0.548c0,2.678 2.171,4.849 4.849,4.849h0.885c1.834,0 3.403,-1.132 4.048,-2.735l-2.884,-0.842c0,0 -0.345,0.988 -1.548,0.988c-1.358,0 -2.077,-0.744 -2.172,-1.586h-0.001v-0.005c-0.007,-0.061 -0.01,-0.123 -0.01,-0.185h3.688h3.242v-1.032c0,-2.678 -2.171,-4.849 -4.85,-4.849zM24.322,23.814c0.039,-0.897 0.777,-1.613 1.684,-1.613h0.312c0.907,0 1.645,0.716 1.684,1.613zM47.932,26.136c-1.123,0 -2.033,0.91 -2.033,2.033c0,1.123 0.91,2.033 2.033,2.033c1.123,0 2.033,-0.91 2.033,-2.033c-0.001,-1.123 -0.91,-2.033 -2.033,-2.033z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="flex items-center -mt-4 gap-3">
              <a
                href="https://www.linkedin.com/in/atikurr-seo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-cyan-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="100"
                  viewBox="0,0,300,150"
                  style={{ fill: "#22C3E6" }}
                >
                  <g
                    fill="#22c3e6"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="flex items-center -mt-4 gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61558588262030"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-cyan-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="100"
                  viewBox="0,0,300,150"
                  style={{ fill: "#22C3E6" }}
                >
                  <g
                    fill="#22c3e6"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M25,2c-12.682,0 -23,10.317 -23,23c0,12.683 10.318,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM32,16h-3.29c-1.938,0 -2.71,0.455 -2.71,1.806v3.194h6l-1,5h-5v13h-6v-13h-3v-5h3v-2.774c0,-4.225 1.686,-7.226 6.581,-7.226c2.622,0 5.419,1 5.419,1z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/atikurr_seo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-cyan-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="100"
                  viewBox="0 0 64 64"
                  style={{ fill: "#22C3E6" }}
                >
                  <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                </svg>
              </a>
            </div>
            <div className="flex -mt-4 items-center gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=+8801645632347"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-cyan-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="60"
                  viewBox="0,0,300,150"
                  style={{ fill: "#22C3E6" }}
                >
                  <g
                    fill="#22c3e6"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
