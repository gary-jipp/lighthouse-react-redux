
const logger = (store) => (next) => (action) => {
  console.log("Dispatching:", JSON.stringify(action)) ;
  let result = next(action); // Pass the action to the next middleware/reducer
  console.log("Next State:", JSON.stringify(store.getState()));
  return result;
};

export default logger;