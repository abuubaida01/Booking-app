'use client';
import Modal from "./Modals";
import useLoginModal from "../hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const content = (
    <>
      <form className="flex flex-col space-y-4">
        <input placeholder="Your email address" type="email" className="w-full h-[54px] px-4 border border-gray-500 rounded-xl" />
        <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-500 rounded-xl mt-4" />

        <div className="p-5 bg-airbnb text-white font-bold rounded-xl opacity-80">
          the error message
        </div>
        <CustomButton label="Submit"  onClick={()=> console.log("clicked")}  />

      </form>
    </>
  )

  return (
    <Modal 
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Login"
      content={content}
    />
  )
}

export default LoginModal