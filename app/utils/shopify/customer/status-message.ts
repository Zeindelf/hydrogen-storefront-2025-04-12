/** Map Shopify order status (Fulfillment Status) to a human-readable string */
export function statusMessage(status: string) {
  /** Updated to v2024-10 */
  const translations: Record<string, string> = {
    /**
     * Fullfilment Event Status
     * https://shopify.dev/docs/api/customer/2024-10/enums/FulfillmentEventStatus
     */
    // A delivery was attempted.
    ATTEMPTED_DELIVERY: 'Attempted delivery',
    /**
     * Fullfilment Status
     * https://shopify.dev/docs/api/customer/2024-10/enums/FulfillmentStatus
     */
    // The fulfillment was canceled.
    CANCELLED: 'Canceled', // rgba(255, 214, 164, 1)
    // The fulfillment has been picked up by the carrier.
    CARRIER_PICKED_UP: 'Carrier picked up',
    // The fulfillment is confirmed.
    CONFIRMED: 'Confirmed',
    // The fulfillment is delayed.
    DELAYED: 'The fulfillment is delayed',
    // The fulfillment was successfully delivered.
    DELIVERED: 'Delivered',
    // There was an error with the fulfillment request.
    ERROR: 'Error',
    // The fulfillment request failed.
    FAILURE: 'Failure',
    // The fulfillment request failed.
    // FAILURE: 'Failure',
    // The fulfillment is in transit.
    IN_TRANSIT: 'In transit',
    // A purchased shipping label has been printed.
    LABEL_PRINTED: 'Label printed',
    // A shipping label has been purchased.
    LABEL_PURCHASED: 'Label purchased',

    // The third-party fulfillment service has acknowledged the fulfillment and is processing it.
    OPEN: 'Open', // Deprecated
    // The fulfillment is out for delivery.
    OUT_FOR_DELIVERY: 'Out for delivery',
    // ATTEMPTED_DELIVERY: 'Attempted delivery',
    // CANCELED: 'Canceled', // rgba(255, 214, 164, 1)  (Cancelado)
    // CONFIRMED: 'Confirmed',
    // DELIVERED: 'Delivered',
    // FAILURE: 'Failure',
    // FULFILLED: 'Fulfilled', // rgba(175, 254, 191, 1) (Processado)
    // SUCCESS: 'Success', // rgba(175, 254, 191, 1) (Processado)
    // IN_PROGRESS: 'In Progress',
    // IN_TRANSIT: 'In transit',
    // LABEL_PRINTED: 'Label printed',
    // LABEL_PURCHASED: 'Label purchased',
    // LABEL_VOIDED: 'Label voided',
    // MARKED_AS_FULFILLED: 'Marked as fulfilled',
    // NOT_DELIVERED: 'Not delivered',
    // ON_HOLD: 'On Hold',
    // OPEN: 'Open',
    // OUT_FOR_DELIVERY: 'Out for delivery',
    // PARTIALLY_FULFILLED: 'Partially Fulfilled', // rgba(255, 214, 164, 1) (Processado parcialmente)
    // PENDING_FULFILLMENT: 'Pending',
    // PICKED_UP: 'Displayed as Picked up',
    // READY_FOR_PICKUP: 'Ready for pickup',
    // RESTOCKED: 'Restocked',
    // SCHEDULED: 'Scheduled',
    // SUBMITTED: 'Submitted',
    // UNFULFILLED: 'Unfulfilled', // #f00 (Não processado)
    // Order already proccessed and paid
    PAID: 'Paid',
    // Shopify has created the fulfillment and is waiting for the third-party fulfillment service to transition it to open or success.
    PENDING: 'Pending', // Deprecated
    // The fulfillment was successfully picked up.
    PICKED_UP: 'Displayed as Picked up',
    // The fulfillment is ready to be picked up.
    READY_FOR_PICKUP: 'Ready for pickup',

    // The fulfillment was completed successfully.
    SUCCESS: 'Success', // rgba(175, 254, 191, 1)
  };
  try {
    return translations?.[status];
  } catch (error) {
    return status;
  }
}
