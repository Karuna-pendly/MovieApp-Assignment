/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const HeroNavLogo = () => <h2 css={styles}>MovieHub</h2>;

const styles = css`
  font-size: 22px;
  color: #f01d1d;
  font-weight: 900;
  user-select: none;
`;

export default HeroNavLogo;