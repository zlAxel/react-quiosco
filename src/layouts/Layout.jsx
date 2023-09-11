
// ! ----------------------------------------------------
// ! Libraries

import { Outlet } from "react-router-dom"
import Modal from "react-modal"

import { Sidebar } from "../components/Sidebar"
import { Summary } from "../components/Summary"

import { useQuiosco } from "../hooks/useQuiosco";
import { ModalProduct } from "../components/ModalProduct";

// ! ----------------------------------------------------
// ! Code

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

// ! ----------------------------------------------------
// ! Component: Layout

export const  Layout = () => {

    const { modal, setModal, product, setProduct } = useQuiosco();

    return (
        <>
            <div className="md:flex gap-10">
                <Sidebar />

                <main className="flex-1 h-screen overflow-y-scroll p-3">
                    <Outlet />
                </main>

                <Summary />
            </div>
            {/* 
            // ! |-------| !
            */}
            <Modal
                isOpen={ modal }
                style={ customStyles }
                shouldCloseOnOverlayClick={true}
            >
                <ModalProduct />
            </Modal>
        </>
    )
}

