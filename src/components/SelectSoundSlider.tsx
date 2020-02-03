/** @jsx jsx */
import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jsx, css } from "@emotion/core";
import colors from "./Colors";

type SelectSoundSliderProps = {
  sound: HTMLAudioElement;
  setSound: React.Dispatch<React.SetStateAction<HTMLAudioElement>>;
  afterSet: boolean;
};

const SelectSoundSlider: React.FC<SelectSoundSliderProps> = memo(({
  sound,
  setSound,
  afterSet
}) => {
  const sounds = [
    "classic",
    "digital",
    "chicken",
    "cuckoo",
    "bell",
    "laughter"
  ];
  const settings = {
    afterChange: (currentIndexNum: number) => {
      sound.pause();
      sound.currentTime = 0;
      setSound(new Audio(sounds[currentIndexNum] + ".mp3"));
    },
    swipe: afterSet ? false : true,
    arrows: afterSet ? false : true
  };

  const soundPreview = () => {
    sound.pause();
    sound.currentTime = 0;
    sound.loop = false;
    sound.play();
  };

  const selectSound__slider = css`
  max-width: 240px;
  margin: auto;
  padding: 0 1rem;
  div p {
    overflow: visible;
    padding-bottom: 1rem;
  }
  opacity: ${afterSet ? 0.5 : 1};
  transition: .2s;
`;

  const soundIcons = ["Digital alarm clock", "Cockerel", "Cuckoo", "Bell", "Laughter"];
  const renderSoundIcons = soundIcons.map((soundIcons) =>
    <div key={soundIcons}>
      <img src={soundIcons + ".svg"} alt={soundIcons} css={selectSound__icon} />
      <p>{soundIcons}</p>
    </div>
  );

  return (
    <React.Fragment>
      <h2 css={selectSound__h2}>1. Select an alarm sound.</h2>
      <Slider {...settings} css={selectSound__slider}>
        <div>
          <svg width="480" viewBox="0 0 480 320" css={selectSound__icon}>
            <g fillRule="evenodd" clipRule="evenodd">
              <path
                fill="#E2001D"
                d="M131.983 198.824c1.158-13.755 4.287-27.165 10.292-39.486 6.575-13.49 15.54-25.531 27.136-35.364.822-.697 1.534-1.521 2.297-2.286 2.059-4.513 6.724-5.784 10.36-8.346 15.813-10.656 33.356-15.973 52.301-16.982 3.39-.14 6.778-.148 10.165-.042 18.416 1.567 36.236 5.077 51.763 16 3.603 3.126 8.827 4.108 11.421 8.582 6.063 6.236 12.554 11.988 18.041 18.872 6.528 8.192 10.951 17.32 14.889 26.819 3.909 9.433 6.635 19.151 6.72 29.464.01 1.104.19 2.155.988 3.001 1.211 4.946 1.851 9.875-.376 14.731-.806 4.965-1.432 9.968-2.448 14.887-3.639 17.606-11.641 33.105-23.198 46.779-4.057 4.8-8.215 9.544-13.276 13.366-2.376 5.347-7.293 7.193-12.294 8.92-14.188 8.549-29.473 13.485-45.998 15.331-18.901 2.112-36.741-1.702-54.146-8.291-5.072-1.92-9.572-5.347-14.335-8.085-5.237-1.349-9.386-4.226-12.343-8.779-10.389-9.095-19.322-19.636-25.491-31.818-6.309-12.459-11.062-25.787-11.835-40.083-.041-.758-.309-1.504-.471-2.255-2.539-4.953-1.689-9.939-.162-14.935zM167.183 115.053c-11.648 5.73-22.676 12.697-34.898 17.292-2.821 1.061-4.347-.615-5.407-2.317-5.85-9.395-9.626-19.33-9.14-30.79.383-9.028 3.18-17.056 7.21-24.917 1.496-2.919 4.572-4.486 5.782-7.538 2.507-5.161 7.434-7.49 12.1-9.938 4.904-2.574 10.192-4.313 15.576-5.686 8.693-1.741 17.479-3.134 26.146-.38 10.722 3.408 18.872 10.435 25.093 19.647 2.585 3.828 5.27 7.663 6.808 12.116 1.844 5.341.724 8.035-4.24 10.528-10.646 5.345-20.881 11.483-31.699 16.495-4.608 1.427-8.327 5.023-13.331 5.488zM348.543 66.669c8.157 9.061 12.614 19.564 12.989 31.864.329 10.766-1.927 20.602-7.984 29.709-2.604 3.916-4.487 5.07-9.187 3.015-11.364-4.966-22.129-11.037-33.124-16.686-2.896.428-4.929-1.469-7.14-2.764-1.474-.865-2.905-1.752-4.563-2.219-11.172-5.683-21.999-12.001-33.021-17.961-4.141-2.24-5.016-6.076-2.313-11.841 5.847-12.471 14.916-22.141 27.409-27.973 7.445-3.476 15.679-3.062 23.724-1.892 1.98.288 3.95.774 5.914 1.212 6.681 2.057 13.286 4.327 19.309 7.956 3.197 1.926 6.241 4.091 7.987 7.58z"
              />
              <path
                fill="#99A1AA"
                d="M348.543 66.669c-7.649-7.295-17.212-10.99-26.965-14.33-3.198-4.359-5.996-8.98-8.58-13.714-7.459-13.661-18.588-21.203-34.329-22.993-18.999-2.159-38.031-2.756-57.056-2.308-12.624.297-25.532.836-37.223 6.854-8.352 4.3-15.112 10.231-18.593 19.268-1.803 4.68-4.732 8.682-7.579 12.735-4.237 2.02-8.892 2.827-13.182 4.832-5.361 2.505-9.894 6.002-14.308 9.773-5.713-4.65-3.497-8.561 3.566-12.958 3.627-2.016 6.969-4.597 11.11-5.592 6.309-4.433 8.877-11.383 11.471-18.062 3.12-8.035 9.384-12.861 16.012-17.342 10.4-7.033 22.17-9.003 34.574-9.503 8.733-.352 17.522-1.663 26.234-1.384 12.42.397 24.865.767 37.279 1.209 13.721.489 26.232 3.504 37.449 11.167 6.769 4.624 12.92 9.975 15.271 18.564 1.002 3.658 3.183 7.019 5.014 10.415 1.224 2.273 3.048 3.875 5.957 3.314 1.605 2.014 3.549 3.53 5.797 4.87 2.405 1.434 3.37.284 4.41-1.474.705 2.915 2.152 5.124 4.543 7.201 3.562 3.09 2.059 6.532-.872 9.458z"
              />
              <path
                fill="#ACB6BE"
                d="M96.105 194.419c-.997-.455-1.926-.466-3.082-.3-3.844.551-7.419.151-8.778-4.441-.474-1.604-1.503-2.473-3.246-2.885-12.784-3.007-22.268-24.957-16.823-35.95 3.122-6.305 8.821-9.638 14.452-12.435 4.653-2.311 9.237-5.26 14.964-5.604 8.824-.528 15.539 2.891 18.049 11.37 1.338 4.519 3.723 8.405 5.552 12.607 2.985 6.855 1.477 12.784-3.189 18.241-.589.688-1.67 1.887-1.486 2.169 3.183 4.849-.824 8.042-2.558 11.742-5.067.697-9.278 3.554-13.855 5.486zM369.199 190.024c.288-1.842.48-3.653-1.098-5.11-.33-.306-.824-.835-.745-1.127 1.594-5.86-2.291-9.739-4.888-14.157-1.548-2.633-1.229-5.723-.79-8.652 1.047-6.95 4.8-13.027 7.802-19.032 4.998-10.003 13.12-11.548 23.615-7.646 6.262 2.328 12.372 5.447 17.575 10.03 5.8 5.11 7.632 11.132 6.315 18.707-1.554 8.932-4.873 16.838-12.87 21.438-4.141 2.383-8.127 4.395-10.981 8.433-2.474 3.501-6.017.588-9.068.755-3.25-.392-5.869-2.515-9.022-3.247-1.965-.456-3.852-.882-5.845-.392z"
              />
              <path
                fill="#464A4F"
                d="M369.199 190.024c3.135-3.296 6.127-.346 9.112.305 2.199.479 4.32 1.39 5.755 3.334-3.003 10.853-19.012 23.941-33.455 20.251-.903-.229-1.731-.583-2.634-.124.396-4.905-.571-9.844.379-14.734 3.16-.411 6.045 1.177 9.443.617 6.062-.994 8.222-5.734 11.4-9.649z"
              />
              <path
                fill="#44484C"
                d="M96.105 194.419c3.961-3.488 8.063-6.621 13.855-5.485 2.847 5.67 6.416 10.321 13.483 10.94 2.995.263 5.834.457 8.542-1.05l.161 14.935c-11.062 2.293-20.454-.687-28.705-8.403-3.387-3.168-5.035-7.204-7.336-10.937z"
              />
              <path
                fill="#9AA2AB"
                d="M169.941 287.915c4.117 2.93 8.235 5.859 12.348 8.784-2.972 2.147-4.491 5.452-6.292 8.422-2.858 4.717-6.771 8.261-11.002 11.597-1.822 1.438-3.554 1.593-5.473.227-1.918-1.362-2.317-2.986-1.59-5.244 2.437-7.56 7.343-13.82 10.764-20.854.464-.954.832-1.953 1.245-2.932z"
              />
              <path
                fill="#9BA3AB"
                d="M296.763 297.739c4.025-3.078 8.742-5.201 12.297-8.923 4.511 6.434 8.191 13.328 11.425 20.474 1.209 2.671 1.87 5.232-.645 7.576-2.653 2.473-4.865.695-6.927-.847-4.873-3.643-7.943-8.854-11.503-13.632-1.322-1.776-1.786-4.408-4.647-4.648z"
              />
              <path
                fill="#9CA0A8"
                d="M167.183 115.053c4.045-2.18 7.924-4.697 12.356-6.091 1.947 1.333 2.731 3.131 2.188 5.461l-10.021 7.268c-.828-2.677-2.226-4.965-4.523-6.638z"
              />
              <path
                fill="#9EA1AA"
                d="M300.212 108.963c4.28.681 7.258 3.923 11.027 5.609-1.176 2.109-2.35 4.218-3.523 6.327-3.778-2.389-7.558-4.781-11.339-7.171.334-2.349 2.029-3.601 3.835-4.765z"
              />
              <path
                fill="#494C51"
                d="M344.874 50.01c-.126 1.337-.253 2.672-.476 5-3.304-3.515-9.372-2.245-9.731-8.396 6.807-3.847 8.782-3.19 10.207 3.396z"
              />
              <path
                fill="#494D51"
                d="M145.405 48.236c-3.245 2.774-6.659 5.213-11.11 5.592-.002-.925-.066-1.855.004-2.774.201-2.631.264-5.735 3.397-6.372 3.088-.627 6.256-.039 7.709 3.554z"
              />
              <path
                fill="#FEFEFE"
                d="M240.517 302.221c-63.54-.536-97.602-52.573-97.209-95.424.586-63.988 51.319-97.484 94.691-98.088 30.674-.427 56.806 11.322 76.547 35.088 15.351 18.477 23.303 40.162 22.346 64.374-2.338 59.146-51.235 94.568-96.375 94.05z"
              />
              <path
                fill="#99A1A9"
                d="M234.172 97.578c.973-2.222.324-4.623.73-6.875.628-3.48-.956-4.612-4.095-5.107-6.371-1.007-8.458-4.363-6.754-10.592.677-2.474 2.022-4.921 4.775-5.101 4.909-.321 9.867-.284 14.778.021 2.137.131 4.146.749 6.371.105 2.594-.749 4.466.719 5.653 2.934 3.404 6.354-.219 13.277-7.285 13.134-3.065-.062-3.157.854-3.209 3.178-.06 2.741-.664 5.468-.099 8.219l-10.865.084z"
              />
              <path
                fill="#F392A0"
                d="M143.944 76.357c-1.914.019-3.904-.139-4.667-2.201-.818-2.209-.896-4.492.494-6.678 2.337-3.674 10.397-6.833 14.78-5.176 2.857 1.079 3.848 2.68 2.906 5.669-1.61 5.117-6.832 8.435-13.513 8.386z"
              />
              <path
                fill="#F28F9D"
                d="M317.204 64.804c-.002 3.948-3.414 6.615-7.558 6.577-3.131-.028-6.068-.528-9.015-1.437-2.566-.793-4.599-2.336-5.004-4.942-.447-2.868 2.021-4.832 4.062-5.604 4.483-1.699 9.308-2.188 13.956-.139 2.354 1.037 3.389 3.043 3.559 5.545z"
              />
              <path
                fill="#FEFEFE"
                d="M112.74 164.394c.199 5.393-3.912 6.849-6.811 9.138-1.257.994-3.42.965-3.46 3.199-.04 2.207 1.532 2.632 3.326 3.107 1.769.47 1.668 1.833.165 2.499-4.49 1.989-9.056 3.815-13.639 5.583-1.006.389-2.274.252-2.72-1.063-1.424-4.21-5.056-5.57-8.739-6.824-1.646-.561-3.049-1.412-4.35-2.542-2.084-1.81-2.741-3.185.428-4.71 3.681-1.771 5.301-6.665 10.56-6.486 1.691.058 2.471.001 3.603 1.322 3.735 4.363 9.472 4.814 13.968 1.28 1.209-.949 2.52-2.011 1.695-3.883-.803-1.819-2.244-1.67-3.903-1.374-2.328.414-5.53 2.617-6.673-.92-1.112-3.441 2.679-3.874 4.855-5.086.532-.296 1.181-.376 1.741-.63 7.307-3.317 7.647-3.137 9.289 4.845.217 1.047.54 2.071.665 2.545zM68.852 158.203c.014-3.582 1.131-6.762 4-8.986 5.882-4.564 12.332-8.173 19.515-10.222 6.179-1.761 12.117 1.209 14.421 6.915.648 1.608.122 2.758-1.629 3.094-1.808.346-3.77 3.509-5.403.255-1.214-2.417-2.947-2.842-4.889-2.009-2.482 1.065-1.352 3.16-.471 4.741 1.048 1.884-.328 2.383-1.385 3.255-1.203.995-2.028 1.137-2.893-.439-.791-1.44-2.268-1.627-3.663-1.039-1.752.737-1.771 2.35-1.611 3.961.098.994 1.001 2.147-.384 2.882-1.049.559-1.648-.381-2.397-.887-3.786-2.563-5.343-1.945-6.265 2.495-.185.894-.198 1.839-.171 2.758.042 1.424-.501 2.423-1.896 2.804-1.697.461-2.636-.612-3.27-1.913-1.172-2.404-1.583-4.998-1.609-7.665zM405.341 175.67c-1.231 2.081-3.554 4.248-6.649 4.79-3.706.647-6.296 2.303-7.837 5.688-.887 1.95-2.175 2.152-4.151 1.353-3.274-1.323-6.688-2.302-10.045-3.422-1.529-.511-3.145-1.356-3.281-2.925-.145-1.68 1.89-1.007 2.817-1.59 2.009-1.265 2.903-2.849.442-4.618-1.373-.989-2.724-2.033-4.193-2.861-5.365-3.03-6.493-12.249-2.012-16.646 1.038-1.018 2.445-1.311 3.388-.59 2.75 2.102 6.147 2.86 8.982 4.691 1.303.841 2.482 2.175 1.444 3.896-.942 1.563-2.492 1.658-4.081.931-.979-.448-1.889-1.162-2.91-1.377-1.506-.318-2.791.484-3.416 1.809-.525 1.11-.543 2.353.573 3.382 4.443 4.099 9.956 3.973 14.323-.386 1.787-1.785 7.795-1.747 9.677.301 1.932 2.101 3.066 5.042 6.501 5.354.523.049 1.004.707.428 2.22zM385.862 138.507c5.368.978 11.438 3.792 17.191 7.55 4.08 2.665 7.746 5.301 8.352 10.791.302 2.74-.505 5.202-.78 7.766-.202 1.893-1.982 3.036-4.184 2.853-2.673-.223-1.945-2.247-2.123-3.843-.19-1.733.911-3.849-1.312-5.022-2.119-1.12-3.454.208-4.813 1.584-.83.841-1.959 1.129-2.96.379-1.083-.81-.82-1.835-.111-2.856 1.053-1.519.919-2.931-.652-4.026-1.705-1.187-3.136-.814-4.442.763-.651.788-1.397 1.819-2.712.969-1.333-.863-1.889-1.972-1.242-3.558.692-1.691.993-3.566-.952-4.466-2.111-.978-3.888-.125-4.944 2.031-.993 2.03-2.415 1.466-3.857.583-1.612-.988-3.201-1.87-2.319-4.339 1.564-4.4 5.117-6.932 11.86-7.159z"
              />
              <path
                fill="#0E0C13"
                d="M240.407 261.748c-8.67-.213-16.243-2.748-21.712-10.052-1.076-1.437-1.603-2.946-1.991-4.601-.324-1.37-.855-2.758 1.044-3.475 1.936-.729 3.135-.067 4.193 1.679 6.106 10.07 17.516 13.877 27.878 8.562 3.328-1.706 7.6-3.755 8.114-8.655.265-2.525 2.204-1.611 3.566-1.664 1.971-.077 2.155 1.37 2.092 2.864-.211 4.989-3.296 8.079-7.186 10.509-4.86 3.037-10.087 5.022-15.998 4.833z"
              />
              <path
                fill="#0F0D14"
                d="M237.087 196.65c0-13.69.334-27.372-.222-41.077-.192-4.736.305-9.726.659-14.59.152-2.073 1.049-2.589 2.859-2.722 1.949-.143 2.521 1.063 2.566 2.52.135 4.418.161 8.842.135 13.262-.084 14.261-.209 28.521-.319 42.781-1.939 1.474-3.857 2.198-5.678-.174z"
              />
              <path
                fill="#0F0C14"
                d="M233.831 212.958c-8.178 5.146-16.35 10.302-24.537 15.434-3.088 1.938-6.352 3.626-9.268 5.79-2.086 1.547-3.444.88-4.706-.705-1.47-1.852.24-2.956 1.404-3.745 6.053-4.106 12.186-8.098 18.323-12.079 5.262-3.413 10.566-6.759 15.853-10.136 1.818 1.361 4.086 2.477 2.931 5.441z"
              />
              <path
                fill="#E2011E"
                d="M233.831 212.958c-.977-1.813-1.952-3.628-2.931-5.441.025-4.785 1.507-8.74 6.189-10.869 1.854 1.325 3.795-.26 5.677.175 7.653 4.465 8.642 12.34 2.034 16.565-3.711 2.373-7.343.557-10.969-.43z"
              />
              <path
                fill="#0F0D14"
                d="M274.368 160.917c5.7-.122 10.043 1.665 13.5 5.508 1.221 1.357 2.139 2.98.533 4.457-1.364 1.253-3.161 1.087-4.703-.049-5.187-3.818-10.499-5.529-16.462-1.513-1.892 1.273-3.72.332-4.711-1.453-.951-1.711-.284-3.325 1.514-4.186 3.434-1.645 6.696-4.056 10.329-2.764z"
              />
              <path
                fill="#0E0C13"
                d="M206.826 160.778c3.785-.921 7.075 1.315 10.165 3.981 1.122.969 1.697 2.241.763 3.68-.815 1.255-1.888 1.234-3.216.685-6.451-2.666-12.616-2.894-18.38 1.923-1.285 1.075-3.578 1.205-4.595-.405-1.032-1.639-.135-3.68 1.233-4.896 3.781-3.361 8.287-5.056 14.03-4.968zM209.003 200.393c-3.193.242-6.64-2.6-6.925-5.706-.305-3.328 3.223-7.336 6.728-7.641 3.663-.319 6.539 1.882 6.761 5.174.376 5.594-1.379 7.783-6.564 8.173z"
              />
              <path
                fill="#100E15"
                d="M271.196 200.718c-4.141.132-7.115-2.896-7.189-7.32-.053-3.118 3.208-6.17 6.679-6.253 3.663-.086 7.219 3.324 7.197 6.903-.018 2.894-3.708 6.574-6.687 6.67z"
              />
              <path
                fill="#0B0A0F"
                d="M237.478 287.446c0-.926-.028-1.854.007-2.776.052-1.423.106-3.073 2.032-2.994 1.88.076 3.136 1.076 2.996 3.288-.109 1.687-.01 3.387.029 5.082.046 1.911-.565 3.733-2.658 3.504-1.7-.188-2.928-1.637-2.416-3.786.176-.741.098-1.543.136-2.317l-.126-.001z"
              />
              <path
                fill="#111014"
                d="M158.649 208.502c-1.586-1.961-6.058 1.119-6.136-2.927-.088-4.549 3.866-1.829 6.013-2.396.15-.04.302-.105.452-.105 2.228.02 5.015.218 4.855 2.895-.133 2.26-3.294 1.539-5.184 2.533z"
              />
              <path
                fill="#131215"
                d="M321.402 207.818c-.074 0-.995-.015-1.914.002-1.512.031-3.036-.238-2.902-2.092.139-1.908 1.256-3.197 3.447-2.507 1.421.447 2.776.134 4.105-.174 1.798-.414 3.579-.79 3.837 1.717.245 2.4-1.019 3.329-3.431 2.791-.715-.159-1.527.11-3.142.263z"
              />
              <path
                fill="#141317"
                d="M242.399 123.551c0 .915-.009 1.83.003 2.746.019 1.328-.28 2.558-1.827 2.661-1.519.102-2.823-.627-2.914-2.269-.106-1.956-.681-3.985.234-5.887.541-1.125-.602-3.283 2.056-3.17 2.607.111 2.064 2.216 2.472 3.661.191.677-.112 1.496-.192 2.25l.168.008z"
              />
              <path
                fill="#353338"
                d="M284.357 277.33c-.56 1.464-1.099 2.987-2.224 2.365-1.651-.911-3.47-2.202-3.645-4.354-.11-1.352 1.135-2.509 2.393-2.126 2.047.624 2.184 3.03 3.476 4.115z"
              />
              <path
                fill="#2C2A2F"
                d="M172.182 164.897c-.443 1.271-1.151 2.313-2.606 2.077-2.098-.34-3.885-1.539-4.109-3.671-.135-1.292 1.636-1.921 2.781-1.676 1.755.377 3.566 1.066 3.934 3.27z"
              />
              <path
                fill="#1E1D22"
                d="M169.504 243.824c1.924-.127 2.914.779 2.781 1.803-.297 2.294-2.44 3.016-4.28 3.578-1.02.313-2.324-.536-2.16-1.815.302-2.337 2.375-2.93 3.659-3.566z"
              />
              <path
                fill="#151418"
                d="M198.316 131.209c1.707.814 2.755 2.518 3.135 4.478.205 1.056-.602 2.303-1.955 1.923-2.313-.65-2.495-2.936-3.032-4.803-.314-1.088.339-1.742 1.852-1.598z"
              />
              <path
                fill="#141317"
                d="M314.315 246.974c-.041 1.332-.667 2.288-1.639 1.956-1.898-.65-4.58-.471-5.154-2.996-.264-1.158.973-2.385 2.404-2.093 1.928.392 3.364 1.68 4.389 3.133z"
              />
              <path
                fill="#19181C"
                d="M199.892 273.482c1.156.457 2.593.873 1.867 2.507-.71 1.597-1.232 3.678-3.68 3.472-.97-.083-2.105-.829-1.535-1.71.964-1.487.419-4.302 3.348-4.269z"
              />
              <path
                fill="#0E0D10"
                d="M314.496 163.863c-.621 2.281-2.578 2.595-4.229 2.971-1.1.253-2.888-.285-2.397-1.81.612-1.909 2.637-2.74 4.543-3.04 1.142-.178 1.835.812 2.083 1.879z"
              />
              <path
                fill="#171618"
                d="M283.422 133.609c-.366 1.832-.797 3.678-3.125 3.823-1.061.066-1.93-.94-1.577-1.737.749-1.687.889-4.145 3.255-4.447 1.255-.161 1.516 1.211 1.447 2.361z"
              />
            </g>
          </svg>
          <p>Classic alarm clock</p>
        </div>
        {renderSoundIcons}
      </Slider>
      <button
        onClick={soundPreview}
        css={selectSound__preview}
        disabled={afterSet ? true : false}
      >
        &#x25b6; Preview
      </button>
    </React.Fragment>
  );
});

const selectSound__h2 = css`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const selectSound__icon = css`
  box-sizing: border-box;
  width: 100%;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0px 3px 1px rgba(255, 255, 255, 0.4));
`;

const selectSound__preview = css`
  background: transparent;
  border: none;
  color: ${colors.moreLightOrange};
  font-size: 1.25rem;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  text-decoration: underline;
  transition: 0.2s;
  &:hover {
    color: ${colors.mostLightOrange};
  }
  &:active {
    color: ${colors.orange};
    transform: translateY(2px);
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export default SelectSoundSlider;
