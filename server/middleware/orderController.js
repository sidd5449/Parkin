import order from "../schemas/order.js";
export const orderController = async (req, res) => {
  try {
    console.log(req.body);
    const { data } = req.body;
    const newOrder = new order(data);
    await newOrder.save();
    res.status(201).json({ message: "Order created" });
  } catch (err) {
    res.status(401).json({ message: "Couldn't create order" });
  }
};
