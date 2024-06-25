import { TextProps } from "@chakra-ui/react";

export const styles: Record<string, TextProps> = {
  h1: {
    as: "h1",
    fontSize: {
      lg: "88px",
      md: "64px",
      base: "40px"
    },
    lineHeight: {
      lg: "100px",
      md: "72px",
      base: "48px"
    }
  },
  h2: {
    as: "h2",
    fontSize: {
      lg: "64px",
      md: "48px",
      base: "32px"
    },
    lineHeight: {
      base: "36px",
      md: "56px",
      lg: "80px"
    }
  },
  h3: {
    as: "h3",
    fontSize: {
      base: "24px",
      md: "32px",
      lg: "40px"
    },
    lineHeight: {
      base: "28px",
      md: "40px",
      lg: "56px"
    }
  },
  h4: {
    as: "h4",
    fontSize: {
      base: "20px",
      md: "22px",
      lg: "28px"
    },
    lineHeight: {
      base: "24px",
      md: "28px",
      lg: "36px"
    }
  },
  h5: {
    fontSize: {
      base: "16px",
      md: "18px"
    },
    lineHeight: {
      base: "20px",
      md: "24px"
    }
  }
};
