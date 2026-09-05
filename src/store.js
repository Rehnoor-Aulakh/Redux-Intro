import { combineReducers, createStore } from "redux";
import accountReducer, {
  withdraw,
  deposit,
  payLoan,
  requestLoan,
} from "./features/accounts/accountSlice";

import customerReducer, {
  updateName,
  createCustomer,
} from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
