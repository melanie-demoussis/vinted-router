const CustomInput = ({ title, textarea, state, setState }) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      {textarea ? (
        <textarea
          id={title}
          cols="30"
          rows="10"
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
        ></textarea>
      ) : (
        <input
          value={state}
          type="text"
          id={title}
          onChange={(event) => {
            setState(event.target.value);
          }}
        />
      )}
    </div>
  );
};
console.log("bonjour");
export default CustomInput;
