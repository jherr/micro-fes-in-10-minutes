import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="bg-blue-900 text-white p-5">
      <div>Count = {count()}</div>
      <button onClick={() => setCount(count() + 1)}>Add One</button>
    </div>
  );
};
