"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { AiOutlineKey, AiOutlineMail } from "react-icons/ai";

const schema = z.object({
  email: z.string().email("must be a valid email").nonempty("required"),
  password: z.string().nonempty("required"),
});

type FormValues = z.infer<typeof schema>;

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const { email, password } = data;

    console.log({ email, password });
  };

  return (
    <Flex
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      h="100vh"
      w="100vw"
      align="center"
      justify="center"
    >
      <Flex gap={4} direction="column" w="40%" h="auto">
        <FormControl isInvalid={!!errors.email}>
          <FormLabel color={!!errors.email ? "red.500" : "white"}>
            {!!errors.email ? errors.email.message : "Email"}
          </FormLabel>
          <InputGroup>
            <InputLeftElement>
              <Icon as={AiOutlineMail} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Type your mail"
              {...register("email")}
            />
          </InputGroup>
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel color={!!errors.email ? "red.500" : "white"}>
            {!!errors.email ? errors.email.message : "Email"}
          </FormLabel>
          <InputGroup>
            <InputLeftElement>
              <Icon as={AiOutlineKey} />
            </InputLeftElement>
            <Input
              type="password"
              placeholder="Type your password"
              {...register("password")}
            />
          </InputGroup>
        </FormControl>
        <Button _hover={{ opacity: 0.6 }} bg="red" color="white" type="submit">
          Submit
        </Button>
      </Flex>
    </Flex>

    // <form onSubmit={handleSubmit(formSent)} className={styles.form}>
    //   <div className={styles.description1}>
    //     <h1>Email</h1>
    //     <input
    //       id="input1"
    //       type="text"
    //       placeholder="Digite seu Email"
    //       {...register("input1", { required: "Este campo é obrigatório" })}
    //     />
    //   </div>

    //   <div className={styles.description2}>
    //     <h1>Senha</h1>
    //     <input
    //       id="input2"
    //       type="text"
    //       placeholder="Mínimo 6 caracteres"
    //       {...register("input2", { required: "Este campo é obrigatório" })}
    //     />
    //   </div>
    //   {errors.input2 && <p>{errors.input2.message}</p>}
    //   <input type="text" placeholder="Senha" />
    //   <button type="submit">Enviar</button>
    // </form>
  );
};

export default Home;
