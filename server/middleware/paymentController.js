import Razorpay from "razorpay";

const handlePayment = async (price, id) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: price * 100, // amount in smallest currency unit
      currency: "INR",
      receipt: id,
    };

    const order = await instance.orders.create(options);

    if (!order) return "Some error occured";

    return order;
  } catch (error) {
    return error;
  }
};

export const paymentController = async (req, res) => {
  try {
    console.log(req);
    const { price, id } = req.body;
    const payStatus = handlePayment(price, id);
    res.status(201).json(payStatus);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
