'use client'; 
import {useState} from "react";
import MenuLink from "./menuLink";
import useLoginModal from "../hooks/useLoginModal";
import useSignupModal from "../hooks/useSignupModal";

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();

  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center"
      >
      
      <svg  fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"> 
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>

      {isOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md  flex flex-col cursor-pointer">
          <MenuLink 
            label="Login" 
            onClick={() => {
              loginModal.open()
              setIsOpen(false)
            } } 
          />  
          <MenuLink 
            label="sign up" 
            onClick={() => {
              signupModal.open()
              setIsOpen(false)
            }}
          />  
        </div>
      )}


      </button>      
    </div>
  )
};

export default UserNav