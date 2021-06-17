import './_app-footer.scss';
import { useTranslation } from 'react-i18next';



function AppFooter() {
  const {t} = useTranslation()

    return (
    <footer >
      {/* <div className="container">
        <div className="row">
        <div className="col-1"></div>
          <div className="col-4">
            <h2>{t('footer.title')}</h2>
            <p className="footer__title">lorem fhdgjrghkd hgfghjfhgjkhftkg jkffhjkghkf ghkhgkjfhghjfgjhlkjg fjghkghkhjkgljhlgjkl</p>
          </div>
          <div className="col-4">
            контакты
          </div>
          <div className="col-4"></div>
        </div>

      </div> */}
    </footer>
    );
  }
  
  export default AppFooter;

  