// eslint-disable-next-line no-unused-vars
import React, { memo } from "react";
import cx from "classnames";

// eslint-disable-next-line react-refresh/only-export-components
const Loader = () => {
  //   const { classNames, classNames2, children } = Props;

  return (
    <>
      <div
        className={cx(
          "flex flex-col justify-center items-center h-10 w-10 text-gray-800 ml-96 font-medium mt-64"
        )}
      >
        <div
          className={cx(
            "inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] h-96   w-full px-[17px] py-[7px]  text-gray-800"
            // eslint-disable-next-line no-undef
          )}
          role="status"
        ></div>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Loader);
