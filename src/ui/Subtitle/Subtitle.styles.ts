import { TextProps } from "@chakra-ui/react";

export const styles: Record<string, TextProps> = {
  extraLarge: {
    fontSize: {
      lg: "20px",
      md: "18px",
      sm: "16px"
    },
    lineHeight: {
      sm: "24px",
      md: "28px",
      lg: "32px"
    }
  },
  large: {
    fontSize: {
      base: "16px",
      md: "18px"
    },
    lineHeight: {
      base: "24px",
      md: "28px"
    }
  },
  medium: {
    fontSize: "16px",
    lineHeight: "24px"
  },
  small: {
    fontSize: "14px",
    lineHeight: "20px"
  }
};
