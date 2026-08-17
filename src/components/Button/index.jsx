import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import classNames from "classnames";
import "./styles.css";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      outline: "btn-outline",
    },
    size: {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const Button = ({
  children,
  onClick,
  className,
  type = "button",
  variant,
  size,
  asChild = false,
  ...props
}) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      type={asChild ? undefined : type}
      onClick={onClick}
      className={classNames(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
