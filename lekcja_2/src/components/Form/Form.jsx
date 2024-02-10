import styles from "./Form.module.scss";
import { nanoid } from "nanoid";

{
  /*import FormInput from "./FormInput/FormInput";*/
}

const Form = ({ addUser }) => {
  //const handleNameChange = (e) => {
  //  console.log(e.target.value);
  // };

  {
    /* const Form = ({ user }) => {
   };console.log("form", user);*/
  }

  const validateForm = (formData) => {
    if (!formData.name) {
      return false;
    }

    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //console.log(e.currentTarget.elements);

    const { name, lastName, gender } = e.currentTarget.elements;

    //console.log(name.value);

    const formData = {
      id: nanoid(),
      name: name.value,
      lastName: lastName.value,
      gender: gender.value,
    };

    if (validateForm(formData)) {
      addUser(formData);

      //console.log("mamy nasze dane!");
      //fetch("API", { method: "POST", body: formData });
    } else {
      alert("Proszę wypełnic wszystkie pola!");
    }

    console.log(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        {/*<input onChange={handleNameChange} type="text" name="name" />*/}
        <input type="text" id="name" name="name" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" name="lastName" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="gender">Your Gender:</label>
        <select name="gender" id="gender">
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>
      </div>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default Form;
