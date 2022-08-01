import Image from "next/image";
import { useState } from "react";

// import { ReactComponent as MailIcon } from "../../assets/icon-mail.svg";
// import { ReactComponent as MapPointerIcon } from "../../assets/icon-map.svg";
// import { ReactComponent as PhoneIcon } from "../../assets/icon-phone.svg";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import MapComponent from "../../components/map/map.component";

import phoneIcon from "../../public/assets/icon-phone.svg";
import mailIcon from "../../public/assets/icon-mail.svg";
import mapIcon from "../../public/assets/icon-map.svg";

import styles from "./contact.module.scss";

type FormFields = {
  email: string;
  name: string;
  message: string;
  phone: number | string;
};
const defaultformFields = {
  email: "",
  name: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultformFields);
  const { email, name, phone, message } = formFields;

  const handleChange = (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    console.log("I handle contact data input!");

    const { name, value } = e.currentTarget;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = () => {
    // I do nothing :/
    // console.log("I handle submit");
  };

  return (
    <main id="main" className="container">
      <div className="contact--container contact ">
        <div className="contact__title-and-text">
          <h1 className="contact__title">
            {/* Contact Us! */}
            Get in touch!
          </h1>
          <p className="contact__p">
            Fill up the form and our Team will get back to you withing 24 hours.
          </p>
        </div>

        <div className="contact__main-box">
          <form
            className="contact__form"
            onSubmit={handleSubmit}
            id="contact-form"
          >
            <FormInput
              label="Name"
              type="text"
              required
              name="name"
              onChange={handleChange}
              value={name}
              id="contact"
            />

            <FormInput
              label="Email"
              type="email"
              required
              name="email"
              onChange={handleChange}
              value={email}
              id="contact"
            />

            <FormInput
              label="Phone"
              type="tel"
              required
              name="phone"
              onChange={handleChange}
              value={phone}
              id="contact"
            />
            <div className="contact__textarea-and-label">
              <textarea
                className="contact__message"
                name="message"
                id="contact-message"
                onChange={handleChange}
                required
                maxLength={300}
                cols={30}
                rows={10}
                form="contact-form"
                value={message}
              ></textarea>
              <label
                className={`contact__message-label ${
                  message?.length ? "shrink" : ""
                } `}
                htmlFor="contact-message"
              >
                Your message
              </label>
            </div>

            <Button type="submit">Send Message</Button>
          </form>

          <div className="contact__info-box info-box">
            <h2 className="info-box__title">Contact Information</h2>

            <div className="info-box__contact">
              <div className="contact__tel contact__icon-and-info">
                <Image
                  src={phoneIcon}
                  className="contact__icon"
                  alt="phone number"
                />

                <p>925-839-2605</p>
              </div>
              <div className="contact__email contact__icon-and-info">
                <Image src={mailIcon} className="contact__icon" alt="email" />
                <p>contact@sneakers.com</p>
              </div>
              <div className="contact__street contact__icon-and-info">
                <Image src={mapIcon} className="contact__icon" alt="address" />

                <p>4001 Pacheco Blvd, Martinez, CA 94553</p>
              </div>
              <div className="contact__map" id="map">
                {/* FIXME map does not work cuz it uses window */}
                {typeof window !== "undefined" && <MapComponent />}
                {/* <MapComponent /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;

//phone
//  Icon by <a href="https://freeicons.io/profile/714">mithun</a> on <a href="https://freeicons.io">freeicons.io</a>

// mail
//  Icon by <a href="https://freeicons.io/profile/714">mithun</a> on <a href="https://freeicons.io">freeicons.io</a>

//map
//   Icon by <a href="https://freeicons.io/profile/714">Raj Dev</a> on <a href="https://freeicons.io">freeicons.io</a>
