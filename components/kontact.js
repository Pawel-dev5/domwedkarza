import { useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Link from "next/link";

// COMPONENTS
import { KontaktItems } from "./items";

// STYLES
import {
  StyledFormWrapper,
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledOtherResWrapper,
} from "./Styles";
import { StyledButton, StyledText } from "../components/StylesGeneral";

const Kontakt = ({
  userId,
  serviceId,
  tamplateId,
  adres,
  telefon,
  sprawdzTez,
}) => {
  const initialState = {
    state: "IDLE",
    name: "Imię i nazwisko (wymagane)",
    email: "Email",
    phone: "Telefon (wymagane)",
    message: "Wiadomość (wymagane)",
  };

  const [formData, setFormData] = useState(initialState);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const onSubmit = handleSubmit(() => {
    emailjs.sendForm(serviceId, tamplateId, form.current, userId).then(
      () => {
        setFormData({ ...formData, state: "SUCCESS" });
        reset({
          name: formData?.name,
          email: formData?.email,
          tel: formData?.phone,
          message: formData?.message,
        });
      },
      () => {
        setFormData({ ...formData, state: "ERROR" });
        reset({
          name: formData?.name,
          email: formData?.email,
          tel: formData?.phone,
          message: formData?.message,
        });
      }
    );
  });

  return (
    <>
      <StyledFormContainer>
        <KontaktItems.KontaktPage
          adres={adres}
          telefon={telefon}
          color="black"
        />

        <StyledFormWrapper>
          <StyledText form black>
            Formularz kontaktowy
          </StyledText>
          <StyledForm ref={form} onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              type="text"
              placeholder={formData?.name}
              name="name"
              aria-invalid={errors?.name ? "true" : "false"}
              {...register("name", {
                required: true,
                maxLength: 30,
              })}
            />
            {errors.name && <p>Imię i nazwisko jest wymagane</p>}

            <StyledInput
              type="text"
              aria-invalid={errors?.email ? "true" : "false"}
              placeholder={formData?.email}
              name="email"
              {...register("email", { pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <p>Email jest wymagany.</p>}

            <StyledInput
              type="text"
              placeholder={formData?.phone}
              name="tel"
              aria-invalid={errors.tel ? "true" : "false"}
              {...register("tel", {
                required: true,
              })}
            />
            {errors.tel && <p>Telefon jest wymagany</p>}

            <StyledTextarea
              placeholder={formData?.message}
              name="message"
              {...register("message", {
                required: true,
                maxLength: 200,
              })}
            />
            {errors.message && <p>Wiadomość jest wymagana.</p>}

            <StyledButton customMargin="1rem 0" type="submit">
              Wyślij
            </StyledButton>

            {formData.state === "SUCCESS" && (
              <p>Wiadomość pomyślnie wysłana, dziękujemy!</p>
            )}
            {formData.state === "ERROR" && (
              <p>Wystąpił błąd, spróbuj ponownie.</p>
            )}
          </StyledForm>
        </StyledFormWrapper>
      </StyledFormContainer>

      <StyledOtherResWrapper>
        <Link
          href="http://podwawelem.net/"
          target="_blank"
          passHref
          rel="noreferrer"
        >
          <Image
            alt={sprawdzTez?.altText}
            src={sprawdzTez?.sourceUrl}
            layout="responsive"
            width={1200}
            height={400}
          />
        </Link>
      </StyledOtherResWrapper>
    </>
  );
};

export default Kontakt;
