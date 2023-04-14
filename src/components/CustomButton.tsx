import { useSnapshot } from "valtio";
import state from "../store";

interface CustomButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: "filled" | "outlined";
  title: string;
  customClass?: string;
}

const CustomButton = (props: CustomButtonProps) => {
  const snap = useSnapshot(state);

  const { type = "filled", title, customClass, ...rest } = props;

  const generateStyle = (type: "filled" | "outlined") => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    } else {
      return {
        backgroundColor: "#fff",
        color: snap.color,
        border: `2px solid ${snap.color}`,
      };
    }
  };

  return (
    <button
      className={`w-fit px-4 py-2.5 font-bold text-sm rounded-md ${
        customClass || ""
      }`}
      style={generateStyle(type)}
      {...rest}
    >
      {title}
    </button>
  );
};

export default CustomButton;
