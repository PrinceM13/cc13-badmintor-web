import VerticalSpace from "../../components/VerticalSpace";
import LabelInput from "./LabelInput";

export default function RegisterForm() {
    return (
        <form className="space-y-4 md:space-y-6">
            <LabelInput name='firstName' placeholder='first name' >First Name</LabelInput>
            <LabelInput name='lastName' placeholder='last name' >Last Name</LabelInput>
            <LabelInput name='phone' placeholder='phone' >Phone</LabelInput>
            <LabelInput name='email' placeholder='email' >Email</LabelInput>
            <LabelInput name='lineId' placeholder='line id' required={false} >Line ID</LabelInput>
            <LabelInput name='address' placeholder='your address' >Address</LabelInput>
            <LabelInput name='birthdate' type='date' >Birthdate</LabelInput>
            <LabelInput name='password' placeholder='••••••••' type='password' >Password</LabelInput>
            <LabelInput name='confirmPassword' placeholder='••••••••' type='password' >Confirm Password</LabelInput>
            <VerticalSpace />
            <button type="submit" className="w-full border border-my-mint text-my-mint hover:bg-my-mint hover:text-my-gray-3 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
        </form>
    );
};