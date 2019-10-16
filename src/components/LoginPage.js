import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <header className="header">
      <div className="header__anchor-box">
        <a href="#!" className="header__anchor" onClick={startLogin}>Log in</a>
        <a href="#!" className="header__anchor" onClick={startLogin}>Sign up</a>
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Virtual Therapy</span>
          <span className="heading-primary--sub">It's free to be happy</span>
        </h1>

        <a href="#section-about" className="btn btn--white btn--animated">Learn more</a>
      </div>
    </header>

    <main>
      <section className="section-about" id="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            How we can help
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Guide you to a better lifestyle</h3>
            <p className="paragraph">
              First we get you back on a consistent sleep schedule, healthy diet, and an active lifestyle. These three areas are very important for your general health and overall mood.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">Help you set goals and do your favorite things</h3>
            <p className="paragraph">
              Setting goals are important because the more goals you hit, the more natural serotonin builds up in your brain. We also help you keep track of how you feel and what things trigger certain emotions so that we can give you suggestions on how to a healthier and happier you!
            </p>

            <a href="#section-features" className="btn-text">Learn more &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img src="/images/diet.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
              <img src="/images/exercise.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
              <img src="/images/sleep.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-features" id="section-features">

        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-todolist-pencil"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Set goals</h3>
              <p className="feature-box__text">
                We help you set the right goals so that you can accomplish them one by one.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-laptop"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Access therapy anywhere</h3>
              <p className="feature-box__text">
                You have access to therapy anywhere in the world. No need to travel to an office.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-key"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Key to happiness</h3>
              <p className="feature-box__text">
                We have done enough research to discover the key to happiness to help you live a better life.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-heart"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Happy healthy life</h3>
              <p className="feature-box__text">
                Get started now so that you can experience what it's like to be happy and healthy again.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer__logo-box">
        <h2 className="heading-secondary">
          Virtual Therapy
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by <a href="#" className="footer__link">Douglas Dunn</a> Copyright &copy; Click my name and feel free to connect if you like my work.
          </p>
        </div>
      </div>
    </footer>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
