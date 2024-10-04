import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function PaymentForm() {
  const [paymentError, setPaymentError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!elements) {
      return;
    }

    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (error) {
      setPaymentError(error.message);
      setProcessing(false);
    } else {
      // Send paymentMethod to backend
      try {
        const response = await axios.post('/api/payments', {
          amount: 100, // Adjust amount as needed
          token: paymentMethod
        });

        // Handle payment response
        if (response.data.success) {
          // Payment successful
        } else {
          // Payment failed
        }
      } catch (error) {
        console.error(error);
        setPaymentError('Payment failed');
        setProcessing(false);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={processing}>
          {processing ? 'Processing...' : 'Submit Payment'}
        </button>
        {paymentError && <p>{paymentError}</p>}
      </form>
    </div>
  );
}

export default PaymentForm;