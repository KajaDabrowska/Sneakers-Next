import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useMemo } from "react";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import LoadingSpinner from "../../components/loadingSpinner/loading-spinner.component";

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

  // I do this because an external dependency( Leaflet) relies on a browser API (window).
  // otherwise on page reload we will get an error even if i put a guard in this component
  // (like this:) typeof window !== "undefined"
  const Map = useMemo(
    () =>
      dynamic(() => import("../../components/map/map.component"), {
        loading: () => <LoadingSpinner />,
        ssr: false,
      }),
    []
  );

  return (
    <main id="main" className="container">
      <div className={styles.contact}>
        <div className={styles.titleAndText}>
          <h1 className={styles.title}>
            {/* Contact Us! */}
            Get in touch!
          </h1>
          <p>
            Fill up the form and our Team will get back to you withing 24 hours.
          </p>
        </div>

        <div className={styles.mainBox}>
          <form
            className={styles.form}
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
            <div className={styles.textareaAndLabel}>
              <textarea
                className={styles.message}
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
                className={`${styles.messageLabel} ${
                  message?.length ? styles.shrink : ""
                } `}
                htmlFor="contact-message"
              >
                Your message
              </label>
            </div>

            <Button type="submit">Send Message</Button>
          </form>

          <div className={styles.infoBox}>
            <h2>Contact Information</h2>

            <div className={styles.contact}>
              <div className={styles.iconAndInfo}>
                <div className={styles.icon}>
                  <Image
                    src={phoneIcon}
                    className={styles.icon}
                    alt="phone number"
                  />
                </div>

                <p>925-839-2605</p>
              </div>
              <div className={styles.iconAndInfo}>
                <div className={styles.icon}>
                  <Image src={mailIcon} alt="email" />
                </div>
                <p>contact@sneakers.com</p>
              </div>
              <div className={styles.iconAndInfo}>
                <div className={styles.icon}>
                  <Image src={mapIcon} className={styles.icon} alt="address" />
                </div>

                <p>4001 Pacheco Blvd, Martinez, CA 94553</p>
              </div>
              <div className={styles.map} id="map">
                <Map />
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
