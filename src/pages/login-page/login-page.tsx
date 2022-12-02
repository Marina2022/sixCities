import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {FormEventHandler, useRef} from "react";
import {sendLogin} from "../../store/api-actions";
import {selectActiveCity} from "../../store/reducers/dataReducer";

function LoginPage(): JSX.Element {

  const activeCity = useAppSelector(selectActiveCity)

  const emailRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (emailRef.current && passRef.current) {
      const formData = {
        email: emailRef.current.value,
        password: passRef.current.value
      }
      dispatch(sendLogin(formData))
    }
  }


  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" action="#" method="post" onSubmit={onFormSubmit}>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input ref={emailRef} className="login__input form__input" type="email" name="email" placeholder="Email"
                   required/>
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input ref={passRef} className="login__input form__input" type="password" name="password"
                   placeholder="Password"
                   required/>
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{activeCity}</span>
          </a>
        </div>
      </section>
    </div>

  )
}

export default LoginPage
