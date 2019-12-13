/** @jsx jsx */
import { jsx, css, SerializedStyles } from "@emotion/core";
import SelectSoundSlider from "./SelectSoundSlider";

// interface AppProps {
//   clock: number;
//   reset: () => void;
// }

const Clock = () => (
  <div css={clock}>
    <input type="time" id="inputTime" css={clock__inputTime} />
    <SelectSoundSlider />
    <input type="button" value="Alarm Set" id="setTime" css={clock__setTime} />
    <div id="clearButon" />
  </div>
);

const clock:SerializedStyles = css`
  box-sizing: border-box;
  max-width: 760px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 5%;
`;

const clock__inputTime: SerializedStyles = css`
  margin-bottom: 2em;
`;

const clock__setTime: SerializedStyles = css`
  margin: 0;
`;

export default Clock;
