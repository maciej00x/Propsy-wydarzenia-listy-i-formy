import styles from "./Form.module.scss";

const Form = () => {
  const handleNameChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input onChange={handleNameChange} type="text" name="name" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="lastName">Last name:</label>
        <input type="text" name="lastName" />
      </div>
    </form>
  );
};

export default Form;
