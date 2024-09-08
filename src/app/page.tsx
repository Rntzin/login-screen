"use client";

import { setCookie } from "nookies";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { loginUser } from "./api";
import { AiOutlineEye, AiOutlineKey, AiOutlineMail } from "react-icons/ai";
import { BaseInput } from "./_components/input";
import { useState } from "react";
import { useUser } from "./authenticate/usecontext";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("must be a valid email").nonempty("required"),
  password: z.string().nonempty("required"),
});

type FormValues = z.infer<typeof schema>;

const Home = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const { setUser, user } = useUser();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await loginUser(data.email, data.password);

      setUser({
        email: response.user.email,
        name: response.user.name,
        _id: response.user._id,
      });

      console.log({ user, token: response.token });
      setCookie(null, "token", response.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Erro desconhecido");
      }
    }
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
        <BaseInput
          type="email"
          icon={AiOutlineMail}
          msgError={errors.email?.message}
          {...register("email")}
        />
        <BaseInput
          type="password"
          icon={AiOutlineKey}
          msgError={errors.password?.message}
          {...register("password")}
        />

        <Button _hover={{ opacity: 0.6 }} bg="red" color="white" type="submit">
          Submit
        </Button>
        {error && <Text color="red.500">{error}</Text>}
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
