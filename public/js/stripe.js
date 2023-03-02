/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
// const Stripe = require('stripe');

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51MMasPSCsJEQ30wMbhYclup0G34VJKcv365tYlpqE68FBSxYf5bRCADDaG2QBHrU1taFK46M2YWErsusPw0nnCm900W6Dn0Hg1'
    );
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chance credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
    // window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};