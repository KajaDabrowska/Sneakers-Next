import { ItemType } from "../../src/types/types";
import { useDispatch } from "react-redux";
import Image from "next/image";

import { deleteItemFromCart } from "../../src/store/cart/cartSlice";

import "./delete-icon.styles.scss";

type Props = {
  itemToDelete: ItemType;
};

const DeleteIcon = ({ itemToDelete }: Props) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(deleteItemFromCart(itemToDelete));
  };

  return (
    <button className="delete-icon-btn" onClick={deleteItemHandler}>
      <Image
        src="../../public/assets/icon-delete.svg"
        className="delete-icon-btn__icon"
        alt="Delete item from cart"
      />
    </button>
  );
};

export default DeleteIcon;
