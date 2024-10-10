import { useState } from "react"; // تأكد من استيراد useState
import "./contact.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import contactme from "../../../public/animation/contact3.json";
import Done from "../../../public/animation/done.json"; // استيراد الرسوم المتحركة للإيموجن

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // حالة لتتبع ما إذا تم إرسال النموذج
  const [email, setEmail] = useState(""); // حالة لتتبع قيمة البريد الإلكتروني
  const [message, setMessage] = useState(""); // حالة لتتبع قيمة الرسالة

  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    // هنا يمكنك إضافة أي منطق إضافي للإرسال (مثل API)
    setIsSubmitted(true); // تعيين حالة الإرسال إلى true
    setEmail(""); // إعادة تعيين البريد الإلكتروني
    setMessage(""); // إعادة تعيين الرسالة
  };

  return (
    <section className="contactme">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact me
      </h1>

      <div className="flex">
        <form onSubmit={handleSubmit}> {/* إضافة onSubmit إلى النموذج */}
          <motion.div
            className="flex"
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(0.9)" }}
            transition={{ damping: 5, type: "spring", stiffness: 50 }}
          >
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              value={email} // ربط القيمة بحالة البريد الإلكتروني
              onChange={(e) => setEmail(e.target.value)} // تحديث الحالة عند تغيير المدخل
            />
          </motion.div>

          <motion.div
            className="flex"
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(0.9)" }}
            transition={{ damping: 5, type: "spring", stiffness: 50 }}
          >
            <label htmlFor="message">Your message</label>
            <textarea
              required
              id="message"
              value={message} // ربط القيمة بحالة الرسالة
              onChange={(e) => setMessage(e.target.value)} // تحديث الحالة عند تغيير المدخل
            ></textarea>
          </motion.div>

          <motion.button
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(0.9)" }}
            transition={{ damping: 5, type: "spring", stiffness: 50 }}
            className="submit"
          >
            Submit
          </motion.button>

          {/* إظهار الإيموجن والكلمة "Done" بجانب الزر */}
          {isSubmitted && (
            <motion.div
              className="done-animation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: "flex", alignItems: "center"}} // تنسيق للمحاذاة
            >
              <Lottie animationData={Done} loop={true} style={{ width: 100, height: 100 }} />
              <span className="donemessage">Your message has been sent successfully</span>  
            </motion.div>
          )}
        </form>

        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(0.9)" }}
          transition={{ damping: 5, type: "spring", stiffness: 50 }}
          className="rsection animation "
        >
          <Lottie animationData={contactme} />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
