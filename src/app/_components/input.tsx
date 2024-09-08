import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";
import { IconType } from "react-icons";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export interface InputProps extends ChakraInputProps {
  msgError?: string;
  icon: IconType;
}

export const BaseInput = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, msgError = "", type, ...rest }, ref) => {
    const [seePassword, setSeePasssword] = useState(false);

    const toggleSeePassword = () => {
      setSeePasssword(!seePassword);
    };

    const inputType =
      type === "password" ? (seePassword ? "text" : "password") : type;

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
            placeholder={`Type your ${type}`}
            {...rest}
            ref={ref}
            type={inputType}
          />
          {type === "password" && (
            <InputRightElement>
              <IconButton
                aria-label={seePassword ? "Hide password" : "Show password"}
                icon={seePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                onClick={toggleSeePassword}
                bg="none"
              />
            </InputRightElement>
          )}
        </InputGroup>
      </FormControl>
    );
  }
);
