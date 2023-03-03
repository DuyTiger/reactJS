const FormUser = (props) => {
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    props.setformData({
      ...props.formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div>
        <input
          name="name"
          placeholder="Name"
          value={props.formData.name}
          onChange={onChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={props.formData.email}
          onChange={onChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={props.formData.phone}
          onChange={onChange}
        />
        <button onClick={props.onClick}>{props.formData.id ? "Edit" : "Add"}</button>
      </div>
    </div>
  );
};

export default FormUser;
