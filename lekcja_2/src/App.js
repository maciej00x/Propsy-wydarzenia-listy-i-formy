import styles from "./App.module.scss";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import { FaSmileWink } from "react-icons/fa";

function App() {
  const getFormData = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <section className={styles.section}>
        <h2>Wprowadź swoje dane:</h2>
        {/*<Form user = "lol" />*/}
        <Form getFormData={getFormData} />
      </section>
      <section className={styles.section}>
        <h2>
          Dodaj jeden
          <FaSmileWink />:
        </h2>
        <Counter />
        {/*<Form />*/}
      </section>
    </div>
  );
}

export default App;
