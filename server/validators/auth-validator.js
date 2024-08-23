const {z}=require("zod");
// creating a object schema using zod for validation 
const RegisterSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters long').max(50, 'Username cannot be more than 50 characters long'),
    email: z.string().email('Invalid email address'),
    phone: z.string().length(10, 'Phone number must be exactly 10 digits long'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});
const SigninSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});
module.exports = {RegisterSchema, SigninSchema};