import { style } from "@vanilla-extract/css";
import { rem } from "@mantine/core";
import { vars } from "../../theme";

export const title = style({
  color: vars.colors.black,
  fontSize: rem(100),
  fontWeight: 900,
  letterSpacing: rem(-2),

  selectors: {
    [vars.darkSelector]: {
      color: vars.colors.white,
    },
  },

  "@media": {
    [vars.smallerThan("md")]: {
      fontSize: rem(50),
    },
  },
});
