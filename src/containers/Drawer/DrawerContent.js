import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setResponsive, setDrawerOpen } from 'material-ui-responsive-drawer';
import { updateTheme } from '../../actions/theme';
import { updateLocale } from '../../actions/locale';
import { push } from 'react-router-redux';
import { DrawerContent } from '../../components/Drawer';

DrawerContent.propTypes = {
  responsiveDrawer: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  setResponsive: PropTypes.func.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
  updateTheme: PropTypes.func.isRequired,
  updateLocale: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { responsiveDrawer, theme, locale, router } = state;

  return {
    responsiveDrawer,
    theme,
    locale,
    router
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    push: (path)=>{
      dispatch(push(path))
    },
    setResponsive: (responsive) => {
      dispatch(setResponsive(responsive));
    },
    setDrawerOpen: (open) => {
      dispatch(setDrawerOpen(open));
    },
    updateTheme: (theme) => {
      dispatch(updateTheme(theme));
    },
    updateLocale: (locale) => {
      dispatch(updateLocale(locale));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerContent);
