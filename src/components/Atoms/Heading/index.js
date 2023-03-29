import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../../../model/app";

const Heading = () => {
  const { isModalOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <div>
      <header class="font-serif text-6xl text-center mx-56 mt-12">
        We create digital product and solve your problem - {isModalOpen}
      </header>
      <button className="border-2" onClick={()=>dispatch(changeModal('open'))}>Increase counter</button>
      <button className="border-2" onClick={()=>dispatch(changeModal('close'))}>Decrease counter</button>
    </div>
  );
};

export default Heading;
