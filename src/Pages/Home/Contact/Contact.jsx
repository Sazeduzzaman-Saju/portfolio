import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { sender_name, sender_email, sender_phone, sender_message } = data;
    const contactsItems = {
      sender_name,
      sender_email,
      sender_phone,
      sender_message,
    };
    axios.post("https://portfolio-server-osbt6h8tz-sazeduzzzaman.vercel.app/contacts", contactsItems).then((data) => {
      toast.success("Project Added Successfully");
      console.log("After Posting 1 Project", data);
      // reset the form
      reset();
    });
  };

  return (
    <div>
      <section id="section-contact" className="jarallax">
        <div className="de-gradient-edge-top" />
        <img src="images/background/l11.jpg" className="jarallax-img" alt="" />
        <div className="container z-index-1000">
          <div className="row">
            <div className="col-md-12 text-center wow fadeInUp">
              <h2>Contact Me</h2>
              <div className="space-border" />
            </div>
            <div className="col-lg-8 offset-lg-2 wow fadeInUp">
              <div className="contact_form_wrapper">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  name="contactForm"
                  id="contact_form"
                  className="form-border"
                  method="post"
                  action="#"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="field-set">
                        <input
                          type="text"
                          {...register("sender_name", { required: true })}
                          className="form-control"
                          placeholder="Your Name"
                        />
                        {errors.sender_name && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="field-set">
                        <input
                          type="email"
                          {...register("sender_email", { required: true })}
                          className="form-control"
                          placeholder="Your Email"
                        />
                        {errors.sender_email && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="field-set">
                      <textarea
                        {...register("sender_message", { required: true })}
                        className="form-control"
                        placeholder="Your Messages"
                      />
                      {errors.sender_message && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div
                      className="g-recaptcha"
                      data-sitekey="copy-your-site-key-here"
                    />
                    <div id="submit" className="mt10">
                      <input
                        type="submit"
                        id="send_message"
                        defaultValue="Send Message"
                        className="btn-main"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="spacer-double" />
              <div className="row text-center wow fadeInUp">
                <div className="col-md-4">
                  <div className="wm-1" />
                  <h6>Email Me</h6>
                  <p>szamansaju@gmail.com</p>
                </div>
                <div className="col-md-4">
                  <div className="wm-1" />
                  <h6>Call Me</h6>
                  <p>(+88) 015 7661 4451</p>
                </div>
                <div className="col-md-4">
                  <div className="wm-1" />
                  <h6>Address</h6>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="de-gradient-edge-bottom" />
      </section>
    </div>
  );
};

export default Contact;
