import React from "react";
import { useDispatch } from "react-redux";
import { removeFromList } from "./../actions/favoritesActions";
export default function FavMovie({ title, id }) {
  const dispatch = useDispatch();

  const removeFromListHandler = () => {
    dispatch(removeFromList(id));
  };
  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
        onClick={removeFromListHandler}
        Çıkar
      </button>
    </div>
  );
}
