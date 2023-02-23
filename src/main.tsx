import ReactDOM from "react-dom/client";
import { TypeRouter } from "./typerouter/TypeRouter";
import { routes } from "./routing";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<TypeRouter routes={routes} />);
