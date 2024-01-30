import styles from "./App.module.scss";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="container">
      <section className={styles.section}>
        <h2>Wprowadź swoje dane:</h2>
        <Form />
      </section>
      <section className={styles.section}>
        <h2>Dodaj jeden:</h2>
        {/*<Form />*/}
      </section>
    </div>
  );
}

export default App;
