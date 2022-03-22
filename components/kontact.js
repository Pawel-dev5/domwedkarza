import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

// COMPONENTS
import { KontaktItems } from "./items";

// STYLES
import {
  StyledFormWrapper,
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledTextarea,
} from "./Styles";
import { StyledButton, StyledText } from "../components/StylesGeneral";

const Kontakt = ({
  footerItems,
  subMenuItems,
  userId,
  serviceId,
  tamplateId,
}) => {
  const initialState = {
    state: "IDLE",
    name: "Imię i nazwisko (wymagane)",
    email: "Email (wymagane)",
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
          name: formData.name,
          email: formData.email,
          tel: formData.phone,
          message: formData.message,
        });
      },
      () => {
        setFormData({ ...formData, state: "ERROR" });
        reset({
          name: formData.name,
          email: formData.email,
          tel: formData.phone,
          message: formData.message,
        });
      }
    );
  });

  return (
    <StyledFormContainer>
      <KontaktItems
        footerItems={footerItems}
        subMenuItems={subMenuItems}
        color="black"
      />

      <StyledFormWrapper>
        <StyledText form black>
          Formularz kontaktowy
        </StyledText>
        <StyledForm ref={form} onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type="text"
            placeholder={formData.name}
            name="name"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", {
              required: true,
              maxLength: 30,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.name && <p>Imię i nazwisko jest wymagane</p>}

          <StyledInput
            type="text"
            aria-invalid={errors.email ? "true" : "false"}
            placeholder={formData.email}
            name="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p>Email jest wymagany.</p>}

          <StyledInput
            type="text"
            placeholder={formData.phone}
            name="tel"
            aria-invalid={errors.tel ? "true" : "false"}
            {...register("tel", {
              required: false,
              maxLength: 12,
            })}
          />
          {errors.tel && <p>Telefon jest wymagany</p>}

          <StyledTextarea
            placeholder={formData.message}
            name="message"
            {...register("message", {
              required: true,
              maxLength: 200,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.message && <p>Wiadomość jest wymagana.</p>}

          <StyledButton customMargin="1rem 0" type="submit">
            Wyślij
          </StyledButton>

          {formData.state === "SUCCESS" && (
            <p>Wiadomość pomyślnie wyłana, dziękujemy!</p>
          )}
          {formData.state === "ERROR" && (
            <p>Wystąpił błąd, spróbuj ponownie.</p>
          )}
        </StyledForm>
      </StyledFormWrapper>
    </StyledFormContainer>
  );
};

export default Kontakt;
