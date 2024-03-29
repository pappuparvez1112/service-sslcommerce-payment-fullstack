import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();

  console.log(location.search);
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionId");
  console.log(transactionId);

  const [order, setOrder] = useState({});
  //   useEffect(() => {
  //     fetch(`https://genius-car-bkash-sslcommerz-payment.vercel.app/orders/by-transaction-id/${transactionId}`)
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => setOrder(data))
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //         // Handle the error appropriately, e.g., show an error message to the user.
  //       });
  //   }, [transactionId]);

  useEffect(() => {
    fetch(
      `https://genius-car-bkash-sslcommerz-payment.vercel.app//orders/by-transaction-id/${transactionId}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [transactionId]);
  console.log(order);
  if (!order?._id) {
    return <div>No order Found</div>;
  }
  return (
    <div>
      <h2>Congrats! Successfully Paid.</h2>

      <h2>Your Order Summary</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Shipping Address</th>
              <th>transactionId</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>{order.serviceName}</td>
              <td>{order.price}</td>
              <td>{order.address}</td>
              <td>{transactionId}</td>
            </tr>
          </tbody>
        </table>

        <button
          className="btn btn-primary ml-auto mt-5 block print:hidden"
          onClick={() => window.print()}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
