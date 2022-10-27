export function debounce(callback) {
  let timeout;

  return (e) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.call(this, e);
    }, 1000);
  };
}
