import type { FormEvent } from "react";
import { CONTACT } from "../data";
import ModelView from "./ModelView";
import SectionHeading from "./SectionHeading";

function openEmailDraft(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const fields = new FormData(event.currentTarget);
  const name = String(fields.get("name")).trim();
  const email = String(fields.get("email")).trim();
  const message = String(fields.get("message")).trim();
  const subject = encodeURIComponent("Portfolio inquiry from " + name);
  const body = encodeURIComponent(message + "\n\n" + name + "\n" + email);

  window.location.href = "mailto:" + CONTACT.email + "?subject=" + subject + "&body=" + body;
}

export default function Contact() {
  return (
    <div className="contact-area">
      <section id="contact" className="page-section" aria-labelledby="contact-title">
        <div className="contact-layout">
          <div className="contact-panel">
            <SectionHeading id="contact-title" label="Get in touch" title="Contact." />
            <address className="mt-4 space-y-1 break-words not-italic leading-relaxed text-secondary">
              <p>{CONTACT.location}</p>
              <p><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
              <p><a href={"mailto:" + CONTACT.email}>{CONTACT.email}</a></p>
            </address>

            <form className="mt-9 flex flex-col gap-6" onSubmit={openEmailDraft}>
              <label className="contact-field">
                Your name
                <input name="name" autoComplete="name" placeholder="Name" required maxLength={120} />
              </label>
              <label className="contact-field">
                Your email
                <input name="email" type="email" autoComplete="email" placeholder="Email address" required maxLength={254} />
              </label>
              <label className="contact-field">
                Your message
                <textarea name="message" rows={5} placeholder="What would you like to discuss?" required maxLength={2000} />
              </label>
              <button className="contact-submit" type="submit">Open email draft</button>
            </form>
          </div>

          <div className="contact-art">
            <ModelView kind="planet" />
          </div>
        </div>
      </section>
    </div>
  );
}
