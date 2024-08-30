import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormLabel,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { IconType } from "react-icons";

export interface InputProps extends ChakraInputProps {
  msgError?: string;
  icon: IconType;
}

export const BaseInput = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, msgError = "", type, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!msgError}>
        <FormLabel color={!!msgError ? "red.500" : "gray"}>
          {!!msgError ? msgError : type}
        </FormLabel>
        <InputGroup>
          <InputLeftElement>
            <Icon as={icon} />
          </InputLeftElement>
          <ChakraInput
            type="text"
            placeholder="Type your mail"
            {...rest}
            ref={ref}
          />
        </InputGroup>
      </FormControl>
    );
  }
);
