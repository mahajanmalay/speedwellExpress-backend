import Tracking from '../models/Tracking.js';

export const createTracking = async (req, res) => {
  const { trackingNumber, status, location, estimatedDelivery } = req.body;
  try {
    const newTracking = new Tracking({ trackingNumber, status, location, estimatedDelivery });
    const tracking = await newTracking.save();
    res.status(201).json(tracking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTracking = async (req, res) => {
  try {
    const tracking = await Tracking.findOne({ trackingNumber: req.params.trackingNumber });
    if (!tracking) {
      return res.status(404).json({ msg: 'Tracking not found' });
    }
    res.json(tracking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllTrackings = async (req, res) => {
  try {
    const trackings = await Tracking.find();
    res.json(trackings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTracking = async (req, res) => {
  const { trackingNumber } = req.params;
  const updates = req.body;
  try {
    const updatedTracking = await Tracking.findOneAndUpdate(
      { trackingNumber },
      updates,
      { new: true }
    );
    if (!updatedTracking) {
      return res.status(404).json({ msg: 'Tracking not found' });
    }
    res.json(updatedTracking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteTracking = async (req, res) => {
  const { trackingNumber } = req.params;
  try {
    const deletedTracking = await Tracking.findOneAndDelete({ trackingNumber });
    if (!deletedTracking) {
      return res.status(404).json({ msg: 'Tracking not found' });
    }
    res.json({ msg: 'Tracking deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
