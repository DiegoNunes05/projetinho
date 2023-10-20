import Link from "next/link";
import FullButton from "@aio/components/FullButton";
import Input from "@aio/components/Input";
import Logo from "@aio/components/Logo";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <section className={styles["login-container"]}>
        <div className={styles["brand-container"]}>
          <Logo />
          <div className={styles['logo-explain']}>CalenDial Dashboard</div>
        </div>

        {/* login form */}
        <div className={styles["form-container"]}>
          <div className="t-center" style={{ margin: "15px 0" }}>
            <div className={styles["sm-brand-container"]}>
              <Logo />
            </div>
            <h1>Login</h1>
            <p>Por favor coloque seu email e senha para entrar</p>
          </div>
          <div>
            <Input
              inputContainerStyle={{ padding: "15px 30px" }}
              type="text"
              placeholder="Email"
              onChange={(e) => console.log(e)}
              name="email"
              label={"Email"}
            />
            <Input
              inputContainerStyle={{ padding: "15px 30px" }}
              type="password"
              placeholder="Senha"
              onChange={(e) => console.log(e)}
              name="email"
              label={"Email"}
            />
            <FullButton label={"Login"} />

            <p className="tc-grey t-center">
              Não tem cadastro?{" "}
              <Link className="link" href={`/signup`}>Cadastre-se de forma gratuita</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
