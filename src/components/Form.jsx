import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Div from "./Div";

const Form = () => {
    const [userInput, setUserInput] = useState({});

    const formSubmitHandler = (e) => {
        e.preventDefault();

        // Below credentials are required to link your email id with contact form you can create your credentials in emailjs.com
        toast.promise(
            async () => {
                await send(
                    "service_72vhcsr", // Service ID
                    "template_w11ktya", // Template ID
                    userInput,
                    "ROc9ugRqxe7aQJa95" // Public Key - https://dashboard.emailjs.com/admin/account
                )
            },
            {
                pending: 'Email is sending....',
                success: 'Email is send successfully👌',
                error: 'Email error occurred 🤯'
            },
            {
                autoClose: 3000,
                position: 'bottom-left',
                pauseOnHover: false
            }
        )

        setLoading(false);
        setUserInput({})
    };
    const onChange = (e) => {
        let obj = { ...userInput, [e.target.name]: e.target.value };
        setUserInput(obj);
    };

    return (
        <Div className="max-w-[1200px] mx-auto">
            <ToastContainer />

            <form
                id="queryForm"
                className="flex flex-col gap-8"
                onSubmit={formSubmitHandler}
            >
                {/* ROW START */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {/* NAME - FORM FIELD START */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="from_name"
                            className="text-[16px] text-black uppercase"
                        >
                            Your name<sup>*</sup>
                        </label>
                        <input
                            name="from_name"
                            type="text"
                            className="h-[64px] bg-white outline-none border-none text-black px-4"
                            required
                            autoComplete="off"
                            onChange={onChange}
                        />
                    </div>
                    {/* NAME - FORM FIELD END */}

                    {/* EMAIL - FORM FIELD START */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="from_email"
                            className="text-[16px] text-black uppercase"
                        >
                            Your email<sup>*</sup>
                        </label>
                        <input
                            name="from_email"
                            type="email"
                            className="h-[64px] bg-white outline-none border-none text-black px-4"
                            required
                            autoComplete="off"
                            onChange={onChange}
                        />
                    </div>
                    {/* EMAIL - FORM FIELD END */}
                </div>
                {/* ROW END */}

                {/* MESSAGE - FORM FIELD START */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="message"
                        className="text-[16px] text-black uppercase"
                    >
                        Please tell a bit about yourself & your project
                        <sup>*</sup>
                    </label>
                    <textarea
                        name="message"
                        className="h-[162px] bg-white outline-none border-none text-black p-4 resize-none"
                        required
                        onChange={onChange}
                    />
                </div>
                {/* MESSAGE - FORM FIELD END */}

                {/* SUBMIT BUTTON */}
                <button className="bg-[#111111] h-[64px] max-w-[585px] text-[16px] transition-transform active:scale-[0.95]">
                    Send Contact Request Now
                </button>
                {/* SUBMIT BUTTON */}
            </form>
        </Div>
    );
};

export default Form;
