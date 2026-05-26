export const createBooking = async(req,res)=> {
 return res.status(201).json({
  success:true,
  message:'Booking Created Successfully'
 });
};

export const getBookings = async(req,res)=> {
 return res.json({
  success:true,
  data:[]
 });
};
