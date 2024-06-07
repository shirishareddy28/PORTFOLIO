import { useMemo } from "react";
import PropTypes from "prop-types";

const FormGroupInput = ({ className = "", label, propWidth, propPadding }) => {
  const labelStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-font-high-emphasis font-nunito ${className}`}
    >
      <div
        className="w-11 flex flex-row items-start justify-start"
        style={labelStyle}
      >
        <b className="relative font-semibold inline-block min-w-[43px]">
          {label}
        </b>
      </div>
      <input
        className="[outline:none] bg-bg-white self-stretch h-10 relative rounded-lg box-border overflow-hidden shrink-0 min-w-[240px] border-[1px] border-solid border-aliceblue"
        type="text"
      />
    </div>
  );
};

FormGroupInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FormGroupInput;
