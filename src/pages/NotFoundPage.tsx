import { Link } from "react-router-dom";
import { Container } from "../components/common";

function NotFoundPage() {
  return (
    <Container>
      <div className="mt-14 flex min-h-[70vh] flex-col items-center justify-center text-center">
        <svg
          className="mb-8 h-auto w-full max-w-[600px] text-gray-900 transition-colors duration-300 dark:text-white"
          viewBox="0 0 774 342"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M558.052 26.8485C558.052 26.8485 559.213 23.3641 565.018 22.2026C570.823 21.0412 577.789 27.4292 577.789 27.4292C577.789 27.4292 582.433 18.1375 587.077 17.5568C591.721 16.9761 596.945 21.0412 596.945 21.0412"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M542.947 48.9161C542.947 48.9161 544.108 45.4317 549.913 44.2703C555.718 43.1088 562.684 49.4968 562.684 49.4968C562.684 49.4968 567.328 40.2051 571.972 39.6244C576.616 39.0437 581.841 43.1088 581.841 43.1088"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M598.117 49.0643C598.117 49.0643 599.005 46.4111 603.422 45.523C607.838 44.6348 613.142 49.5084 613.142 49.5084C613.142 49.5084 616.682 42.4371 620.211 41.993C623.75 41.5489 627.723 44.6462 627.723 44.6462"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M662.655 72.4528C662.655 72.4528 663.236 70.7106 666.138 70.1299C669.041 69.5491 672.512 72.7375 672.512 72.7375C672.512 72.7375 674.834 68.0916 677.145 67.8069C679.467 67.5223 682.073 69.5491 682.073 69.5491"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M399.046 61.3486C393.047 34.3731 361.962 14.2753 334.884 18.1241C328.134 19.0806 321.566 21.6085 316.49 26.2771C309.569 32.6423 311.208 39.873 307.794 47.7641C306.838 49.9504 304.994 51.8975 302.637 52.3074C295.899 53.4575 290.47 46.7393 283.652 46.6937C278.552 46.6596 272.03 49.4721 269.185 53.8788C266.533 57.9781 268.377 65.1404 263.619 67.8619C258.292 70.9136 251.804 65.1177 246.033 67.2128C238.874 69.8204 242.129 75.0242 239.522 78.2922C236.916 81.5489 231.714 80.2508 224.543 79.5904C217.384 78.9413 211.522 87.4017 211.522 87.4017H437.472C437.472 87.4017 439.43 84.1451 430.962 71.1185C422.493 58.092 410.781 67.2128 405.568 67.2128C400.355 67.2128 399.057 61.36 399.057 61.3486H399.046Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M471.608 298.981L403.36 222.427L388.403 234.383L313.576 121.676L248.435 136.194L228.96 99.7906L210.019 98.7999L174.142 28.0078L120.486 76.9941L94.6027 67.748L0.357056 163.887"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M484.413 313.329L477.254 305.301"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M213.457 145.554L207.811 147.092"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M248.298 136.115L219.808 143.835"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M140.804 103.343L156.762 79.7838L155.68 71.6991L173.994 34.521"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M134.145 113.193L138.14 107.283"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M109.377 127.13L83.5049 162.225"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M95.9003 71.6992L102.365 86.2516L116.901 98.1054L115.284 119.125L111.767 123.908"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M228.96 99.7905L215.472 112.658L210.623 104.573"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M751.455 254.412L646.715 180.5L614.924 225.41L575.644 212.315L514.862 297.443L475.582 289.028L455.947 305.858"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M646.715 180.5L634.263 235.259L619.579 228.837"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M575.985 215.526L545.23 305.049L524.127 301.371"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
          />

          <path
            d="M252.726 341.009V295.826H193.947V266.903L244.36 147.387H287.373V267.621H306.006V295.826H287.373V341.009H252.726ZM223.097 267.621H252.726V185.396L223.097 267.621Z"
            fill="currentColor"
          />

          <path
            d="M375.302 341.112C363.669 341.112 354.04 338.72 346.391 333.938C338.742 329.155 333.005 322.585 329.192 314.216C325.368 305.847 323.455 296.168 323.455 285.168V198.4C323.455 187.082 325.288 177.164 328.953 168.635C332.618 160.106 338.275 153.456 345.913 148.674C353.562 143.891 363.35 141.5 375.302 141.5C387.253 141.5 396.769 143.891 404.338 148.674C411.907 153.456 417.519 160.106 421.184 168.635C424.849 177.164 426.682 187.082 426.682 198.4V285.168C426.682 296.168 424.769 305.847 420.945 314.216C417.121 322.585 411.384 329.155 403.735 333.938C396.086 338.72 386.605 341.112 375.302 341.112ZM375.302 308.602C379.604 308.602 382.712 307.247 384.624 304.537C386.536 301.827 387.811 298.605 388.448 294.858C389.086 291.112 389.405 287.65 389.405 284.462V199.129C389.405 195.622 389.12 191.955 388.574 188.129C388.016 184.303 386.787 181.001 384.874 178.211C382.962 175.421 379.775 174.032 375.313 174.032C370.851 174.032 367.63 175.433 365.638 178.211C363.646 181.001 362.372 184.303 361.814 188.129C361.256 191.955 360.983 195.622 360.983 199.129V284.462C360.983 287.65 361.302 291.123 361.939 294.858C362.576 298.605 363.931 301.827 366.003 304.537C368.074 307.247 371.181 308.602 375.325 308.602H375.302Z"
            fill="currentColor"
          />

          <path
            d="M505.527 341.009V295.826H446.749V266.903L497.161 147.387H540.175V267.621H558.808V295.826H540.175V341.009H505.527ZM475.899 267.621H505.527V185.396L475.899 267.621Z"
            fill="currentColor"
          />
        </svg>

        <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="group flex items-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-medium text-gray-900 shadow-md transition-all duration-300 hover:bg-gray-50 hover:shadow-lg dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        >
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Go Back to Home
        </Link>
      </div>
    </Container>
  );
}

export default NotFoundPage;
