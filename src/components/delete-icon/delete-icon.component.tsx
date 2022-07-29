import { ItemType } from "../../types/types";
import { useDispatch } from "react-redux";
import Image from "next/image";

import { deleteItemFromCart } from "../../store/cart/cartSlice";

import deleteIcon from "../../public/assets/icon-delete.svg";

import styles from "./delete-icon.module.scss";

type Props = {
  itemToDelete: ItemType;
};

const DeleteIcon = ({ itemToDelete }: Props) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(deleteItemFromCart(itemToDelete));
  };

  return (
    <button className={styles.btn} onClick={deleteItemHandler}>
      <Image
        src={deleteIcon}
        className={styles.icon}
        alt="Delete item from cart"
      />
    </button>
  );
};

export default DeleteIcon;
