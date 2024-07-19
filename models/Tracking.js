import mongoose from 'mongoose';

const TrackingSchema = new mongoose.Schema({
  trackingNumber: { type: String, required: true },
  status: { type: String, required: true },
  location: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
  estimatedDelivery: { type: Date } // Add estimatedDelivery field
});

const Tracking = mongoose.model('Tracking', TrackingSchema);

export default Tracking;