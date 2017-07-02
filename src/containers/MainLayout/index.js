import PropTypes from 'prop-types';

const MainLayout = ({ children }) =>
 (<div>
   {children}
 </div>);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  // children: PropTypes.object,
};

export default MainLayout;
