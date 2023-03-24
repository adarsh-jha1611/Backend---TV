import Booking from '../models/Booking.js'

//create new booking
export const createBooking = async(req, res)=>{
    const newBooking = new Booking(req.body)
    try {
        const savedbooking = await newBooking.save()
        res.status(200).json({success:true, message:"Your tour has been booked", data:savedbooking})
        
    } catch (err) {
        res.status(200).json({success:false, message:"Error 404"})

    }
}
//get single booking
export const getBooking = async(req, res)=>{
    const id= req.params.id
    try {
        const book = await Booking.findById(id)
        
        res.status(200).json({success:true, message:"Successsful", data:book})

    } catch (err) {
        res.status(404).json({success:false, message:"not found"})
    }
}

export const getAllBooking = async(req, res)=>{
    try {
        const books = await Booking.find()
        res.status(200).json({success:true, message:"Successsful", data:books})

    } catch (err) {
        res.status(500).json({success:false, message:"Error"})

        
    }
}