import { formSchema } from "@/lib/schema";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Text,
  Tailwind,
} from "jsx-email";
import React from "react";
import { z } from "zod";

type Inputs = z.infer<typeof formSchema>;

const Confirmation: React.FC<Readonly<Inputs>> = ({
  email,
  message,
}: Inputs) => {
  return (
    <Html>
      <Head />
      <Tailwind production>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] border-separate rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Hello{" "}
              <strong> {email?.substring(0, email.indexOf("@"))} 👋</strong>{" "}
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Thank you for contacting me. I am glad to inform you that your
              message has been received and I will get back to you as soon as
              possible.
            </Text>
            <Text>Your message:</Text>
            <Text
              disableDefaultStyle
              className="rounded-lg bg-gray-200 p-6 text-[14px] leading-[24px] text-black"
            >
              {message}
            </Text>

            <Text className="!text-[14px] leading-[24px] text-black">
              Nikodem Domaracki
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text
              disableDefaultStyle
              className="!text-[12px] leading-[24px] !text-[#666666]"
            >
              If you were not expecting this email, please ignore it.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Confirmation;
